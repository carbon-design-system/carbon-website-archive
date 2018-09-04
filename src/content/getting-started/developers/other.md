**The Carbon team currently supports vanilla js, React and Angular. Developers wanting to use another framework can can follow the instructions for the [Vanilla](/getting-started/developers/vanilla) library to access the styles and build out their own components.**

## Development

**Wrapping a component with a JavaScript framework of your choice**

Many JavaScript frameworks have a mechanism to dynamically create/destroy DOM elements, for example, upon change in array.
This often makes it unclear when the DOM element to instantiate a Carbon component is available, which often depends on the JavaScript framework you use.

Also when DOM elements that Carbon components have been instantiated on are being destroyed, the Carbon component instances should be released so that e.g. there are no zombie event handlers.

The easiest way to hook on the creation/destruction of DOM elements is by defining a "wrapping component", with the JavaScript framework of your choice. Here's an example using Web Components' [Custom Elements v1 spec](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Custom_Elements), but the notion of components, along with the lifecycle callbacks, are commonly found in many other JavaScript frameworks.

```javascript
class BXLoading extends HTMLElement {
  // Called when this custom element gets into render tree
  connectedCallback() {
    // "this" here is "<bx-loading>" element
    this.innerHTML = '(e.g. snippet from http://carbondesignsystem.com/components/loading/code)';
    this.loading = CarbonComponents.Loading.create(this.querySelector('[data-loading]'));
  }
  // Called when this custom element gets out of render tree
  disconnectedCallback() {
    this.loading.release();
  }
}
customElements.define('bx-loading', BXLoading);
```

## Examples

[Angular 4 wrapper for Carbon](https://codepen.io/asudoh/pen/VryJBO?editors=1010)

## Troubleshooting

If you experience any issues while getting set up with Carbon Components, please head over to the [Carbon Components GitHub repo](https://github.com/ibm/carbon-components) for more guidelines and support. Please [create an issue](https://github.com/ibm/carbon-components/issues) if your issue does not already exist.