---
label: Guidelines
title: Accessibility
tabs: ['Color', 'Keyboard']
---

<page-intro>Carbon is committed to following and complying with best practices when it comes to accessibility. Each component and element was built following the Web Content Accessibility Guidelines (WCAG) and met the AA standard. Our patterns are perceivable, operable, and understandable to users, even when using a screen reader or other assistive technology.</page-intro>

## Keyboard accessibility

Keyboard accessibility is important for users who rely on or prefer using a keyboard. Encourage accessibility by providing keyboard functionality to all available content. Common keyboard interactions include using the `Tab` key to select different interactive elements on a page and using the `Enter` key or the Spacebar to activate an in-focus element.

### Focus indicators

The `tab` key navigates through various interactive elements on a page. A default visual indicator is provided by the web browser in use. The display is an outlined border around the focused element. When an element is in focus, it can be further activated using the keyboard.

### Navigation order

The order in which interactive elements receive focus is logical and predictable. Create the tab flow hierarchy by using the source code to arrange the keyboard navigation. Begin with the header, followed by the main navigation, then page navigation (from left to right, top to bottom), and end with the footer.

Use natively-accessible elements in navigation to activate links, buttons, and form controls with a keyboard. Reinforce semantic HTML to convey intent and meaning instead of simply defining the look and feel of an element. Enhance with ARIA (Accessible Rich Internet Application) labels when necessary. For additional customization, use `tabindex=“0”` to ensure a navigable element receives a focus indicator.

Provide a “Skip to content” option when there is lengthy navigation so a user may access main content faster. This option is a link that is visually hidden by default and appears when it receives keyboard focus via the `tab` key.

<a href="http://webaim.org/techniques/skipnav/" target=blank>WebAIM</a> recommends the following to enable a “Skip to content” link.

```html
<body>
    <a href="#maincontent">Skip to main content</a>
    ...
    <main id="maincontent>
        <h1>Heading</h1>
        <p>This is the first paragraph</p>
    </main>
</body>
```

## Color accessibility

Please refer to our [usage](/style/colors/usage) section on the Colors page to learn more about color contrast ratios. You can also use this [color contrast](https://marijohannessen.github.io/color-contrast-checker/) tool to ensure your ratios pass WCAG AA standards.
