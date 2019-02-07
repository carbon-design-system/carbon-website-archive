## Adding/updating navigation

Add page to navigation.json file.

```
src
├── data
   ├── navigation
      ├── navigation.json
```

If page is internal only make sure to add `"internal": true` to the navigation.json file for that item.

```
 "your-product-on-ibm-cloud": {
    "title": "Your product on IBM Cloud",
    "internal": true,
    "sub-nav": {
      "catalog-entry": {
        "title": "Catalog entry"
      },
```
