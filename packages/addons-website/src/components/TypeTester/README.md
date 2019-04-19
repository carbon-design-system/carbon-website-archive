# TypeTester

## To add a new language

* Add a new object to the `languageDropdownContent` array:

```javascript
const languageDropdownContent = [ 
  ..., 
  ,
  {
    label: 'IBM Plex Sans Arabic',
    language: 'arabic', 
    className: 'bx--type-arabic',
    weights: commonFontWeights,
  }
].map(...)
```

* Add a new display text object to `languageSample` array:

```javascript
const languageSample = [
  ...,
  {
    language: 'arabic',
    content:
      'ऋषियों को सताने वाले दुष्ट राक्षसों के राजा रावण का सर्वनाश',
  }
]
```