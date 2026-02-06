---
description: AEM unit and integration testing best practices
---

# AEM Testing Best Practices

## Testing Stack Overview

| Layer | Tool | Purpose |
|-------|------|---------|
| Unit Tests | JUnit 5 + Mockito | Sling Models, Services |
| AEM Mocks | wcm.io AEM Mocks | AEM context simulation |
| Integration | AEM Testing Clients | Server-side integration |
| UI Tests | Selenium/Playwright | End-to-end browser tests |

## Maven Dependencies

```xml
<dependencies>
    <!-- JUnit 5 -->
    <dependency>
        <groupId>org.junit.jupiter</groupId>
        <artifactId>junit-jupiter</artifactId>
        <version>5.10.0</version>
        <scope>test</scope>
    </dependency>

    <!-- AEM Mocks -->
    <dependency>
        <groupId>io.wcm</groupId>
        <artifactId>io.wcm.testing.aem-mock.junit5</artifactId>
        <version>5.3.0</version>
        <scope>test</scope>
    </dependency>

    <!-- Mockito -->
    <dependency>
        <groupId>org.mockito</groupId>
        <artifactId>mockito-junit-jupiter</artifactId>
        <version>5.5.0</version>
        <scope>test</scope>
    </dependency>
</dependencies>
```

## Unit Testing Sling Models

### Basic Model Test
```java
@ExtendWith(AemContextExtension.class)
class HeroModelTest {

    private final AemContext ctx = new AemContext();

    @BeforeEach
    void setUp() {
        ctx.addModelsForClasses(HeroModel.class);
    }

    @Test
    void testGetTitle() {
        ctx.build()
            .resource("/content/test",
                "sling:resourceType", "myproject/components/hero",
                "title", "Hello World",
                "description", "Test description")
            .commit();

        ctx.currentResource("/content/test");
        HeroModel model = ctx.request().adaptTo(HeroModel.class);

        assertNotNull(model);
        assertEquals("Hello World", model.getTitle());
        assertEquals("Test description", model.getDescription());
    }

    @Test
    void testIsEmpty_whenNoContent() {
        ctx.build()
            .resource("/content/empty",
                "sling:resourceType", "myproject/components/hero")
            .commit();

        ctx.currentResource("/content/empty");
        HeroModel model = ctx.request().adaptTo(HeroModel.class);

        assertTrue(model.isEmpty());
    }
}
```

### Loading Test Content from JSON
```java
@ExtendWith(AemContextExtension.class)
class CardListModelTest {

    private final AemContext ctx = new AemContext();

    @BeforeEach
    void setUp() {
        ctx.addModelsForClasses(CardListModel.class);
        // Load test content from JSON file
        ctx.load().json("/cardlist.json", "/content/cardlist");
    }

    @Test
    void testGetCards() {
        ctx.currentResource("/content/cardlist");
        CardListModel model = ctx.request().adaptTo(CardListModel.class);

        assertNotNull(model.getCards());
        assertEquals(3, model.getCards().size());
    }
}
```

Test JSON (`src/test/resources/cardlist.json`):
```json
{
  "jcr:primaryType": "nt:unstructured",
  "sling:resourceType": "myproject/components/cardlist",
  "cards": {
    "jcr:primaryType": "nt:unstructured",
    "card1": {
      "title": "Card 1",
      "link": "/content/page1"
    },
    "card2": {
      "title": "Card 2",
      "link": "/content/page2"
    },
    "card3": {
      "title": "Card 3",
      "link": "/content/page3"
    }
  }
}
```

## Testing OSGi Services

### Service with Dependencies
```java
@ExtendWith({AemContextExtension.class, MockitoExtension.class})
class EmailServiceTest {

    private final AemContext ctx = new AemContext();

    @Mock
    private MessageGatewayService messageGatewayService;

    @Mock
    private MessageGateway<Email> messageGateway;

    @InjectMocks
    private EmailServiceImpl emailService;

    @BeforeEach
    void setUp() {
        when(messageGatewayService.getGateway(Email.class)).thenReturn(messageGateway);
        ctx.registerService(MessageGatewayService.class, messageGatewayService);
        ctx.registerInjectActivateService(emailService);
    }

    @Test
    void testSendEmail() {
        emailService.sendEmail("test@example.com", "Subject", "Body");

        verify(messageGateway).send(any(Email.class));
    }
}
```

### Testing Configurable Services
```java
@ExtendWith(AemContextExtension.class)
class ApiServiceTest {

    private final AemContext ctx = new AemContext();

    @Test
    void testServiceWithConfiguration() {
        // Register service with config
        Map<String, Object> config = new HashMap<>();
        config.put("api.endpoint", "https://test.api.com");
        config.put("api.key", "test-key");
        config.put("timeout", 10);
        config.put("enabled", true);

        ApiServiceImpl service = ctx.registerInjectActivateService(
            new ApiServiceImpl(), config);

        assertNotNull(service);
        // Test service behavior
    }
}
```

## Testing Servlets

```java
@ExtendWith(AemContextExtension.class)
class DataServletTest {

    private final AemContext ctx = new AemContext();

    @Mock
    private DataService dataService;

    private DataServlet servlet;

    @BeforeEach
    void setUp() {
        ctx.registerService(DataService.class, dataService);
        servlet = ctx.registerInjectActivateService(new DataServlet());
    }

    @Test
    void testDoGet() throws Exception {
        when(dataService.getJson()).thenReturn("{\"data\":\"test\"}");

        ctx.requestPathInfo().setExtension("json");
        ctx.requestPathInfo().setSelectorString("data");

        servlet.doGet(ctx.request(), ctx.response());

        assertEquals("application/json", ctx.response().getContentType());
        assertEquals("{\"data\":\"test\"}", ctx.response().getOutputAsString());
    }

    @Test
    void testDoGet_notFound() throws Exception {
        when(dataService.getJson()).thenThrow(new NotFoundException());

        servlet.doGet(ctx.request(), ctx.response());

        assertEquals(HttpServletResponse.SC_NOT_FOUND, ctx.response().getStatus());
    }
}
```

## Testing with Page Context

```java
@ExtendWith(AemContextExtension.class)
class NavigationModelTest {

    private final AemContext ctx = new AemContext(ResourceResolverType.JCR_MOCK);

    @BeforeEach
    void setUp() {
        ctx.addModelsForClasses(NavigationModel.class);

        // Create page structure
        ctx.create().page("/content/site", "site-template");
        ctx.create().page("/content/site/en", "page-template", "title", "English");
        ctx.create().page("/content/site/en/about", "page-template", "title", "About");
        ctx.create().page("/content/site/en/products", "page-template", "title", "Products");
    }

    @Test
    void testGetNavigationItems() {
        ctx.currentPage("/content/site/en");

        NavigationModel nav = ctx.request().adaptTo(NavigationModel.class);

        assertNotNull(nav);
        assertEquals(2, nav.getItems().size());
    }
}
```

## Integration Testing

### AEM Testing Clients
```java
public class ContentFragmentIT extends CQClient {

    @Test
    public void testCreateContentFragment() throws Exception {
        // Create content fragment via API
        ContentFragmentClient cfClient = new ContentFragmentClient(client);

        String fragmentPath = cfClient.createFragment(
            "/content/dam/myproject/fragments",
            "test-fragment",
            "/conf/myproject/settings/dam/cfm/models/article"
        );

        assertTrue(fragmentPath.startsWith("/content/dam"));

        // Cleanup
        cfClient.deleteFragment(fragmentPath);
    }
}
```

## UI Testing with Playwright

```java
@ExtendWith(PlaywrightExtension.class)
class AuthorUITest {

    @Test
    void testPageCreation(Page page) {
        // Login to AEM
        page.navigate("http://localhost:4502/libs/granite/core/content/login.html");
        page.fill("#username", "admin");
        page.fill("#password", "admin");
        page.click("#submit-button");

        // Navigate to Sites console
        page.navigate("http://localhost:4502/sites.html/content/myproject");

        // Create new page
        page.click("[data-action='create']");
        page.click("[data-template='myproject/components/page']");

        // Verify page created
        assertThat(page.locator(".page-created-success")).isVisible();
    }
}
```

## Test Coverage Configuration

```xml
<!-- pom.xml -->
<plugin>
    <groupId>org.jacoco</groupId>
    <artifactId>jacoco-maven-plugin</artifactId>
    <version>0.8.10</version>
    <executions>
        <execution>
            <goals>
                <goal>prepare-agent</goal>
            </goals>
        </execution>
        <execution>
            <id>report</id>
            <phase>test</phase>
            <goals>
                <goal>report</goal>
            </goals>
        </execution>
    </executions>
</plugin>
```

## Best Practices

1. **Use AEM Mocks** - Avoid spinning up real AEM for unit tests
2. **Test isolation** - Each test should be independent
3. **Meaningful assertions** - Test behavior, not implementation
4. **Load test content from JSON** - Keep tests readable
5. **Mock external services** - Don't depend on external systems
6. **Test edge cases** - Empty content, null values, permissions

## Test File Structure

```
core/
├── src/
│   ├── main/java/
│   │   └── com/example/core/
│   │       ├── models/
│   │       └── services/
│   └── test/
│       ├── java/
│       │   └── com/example/core/
│       │       ├── models/
│       │       │   └── HeroModelTest.java
│       │       └── services/
│       │           └── EmailServiceTest.java
│       └── resources/
│           ├── hero.json
│           └── cardlist.json
```

## Running Tests

```bash
# Run all tests
mvn test

# Run specific test class
mvn test -Dtest=HeroModelTest

# Run with coverage
mvn test jacoco:report

# Skip tests
mvn install -DskipTests
```

## References

- [AEM Mocks](https://wcm.io/testing/aem-mock/)
- [JUnit 5 User Guide](https://junit.org/junit5/docs/current/user-guide/)
- [AEM Testing Best Practices](https://experienceleague.adobe.com/docs/experience-manager-cloud-service/content/implementing/developing/aem-as-a-cloud-service-testing.html)
