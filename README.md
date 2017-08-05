# Shoeniversal

An Angular Universal and Firebase Hosting demo.

### Design

```html
<shu-root>

  <router-outlet>
    <!-- 
      path: /, /2
    -->
    <shu-storefront>
      <shoe-storefront-item></shoe-storefront-item>
    </shu-storefront>

    <shu-detail>
      
    </shu-detail>
  </router-outlet>

</shu-root>
``` 