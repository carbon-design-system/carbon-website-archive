---
label: Guidelines
title: Typography
tabs: ['Overview', 'Product', 'Editorial']
---

<page-intro>Typography is used to create clear hierarchies, useful organizations, and purposeful alignments that guide users through the product and experience.</page-intro>

## Typeface: IBM Plex

Carbon uses the new IBM open-sourced typeface, IBM Plex. It has been carefully designed to meet IBM's needs as a global technology company and reflect IBM's spirit, beliefs and design principles. IBM Plex can be accessed and downloaded from the [Plex GitHub Repo](https://github.com/ibm/plex).

<type-weight type="types"></type-weight>

```html
<p class="ibm-type">IBM Plex Sans</p>
<p class="ibm-type-serif">IBM Plex Serif</p>
<p class="ibm-type-mono">IBM Plex Mono</p>
```

### Sans-serif font stack

```scss
font-family: 'ibm-plex-sans', 'Helvetica Neue', Arial, sans-serif;
```

### Serif font stack

```scss
font-family: 'IBM Plex Serif', serif;
```

### Mono font stack

```scss
font-family: 'ibm-plex-mono', 'Menlo', 'DejaVu Sans Mono',
  'Bitstream Vera Sans Mono', Courier;
```

## Scale

The IBM type scale is built on a single equation. The formula for our scale was created to provide hierarchy for all types of experiences. The formula assumes that y₀=12px:

<type-scale-table></type-scale-table>

```
Xn = Xn-1 + {INT[(n-2)/4] + 1} * 2
Xn: step n type size Xn-1: step n-1 type size
```

## Style

Typography creates purposeful texture. It guides users to read and understand the hierarchy of information. The right typographic treatment and the controlled usage of type styles helps manage the display of content, keeping it useful, simple and effective.

### Weights

Font weight is an important typographic style that can add emphasis and is used to differentiate content hierarchy. Font weight and size pairings must be carefully balanced. A bold weight will always have more emphasis than a lighter weight font of the same size. However, a lighter weight font can rank hierarchically higher than a bold font if the lighter weight type size is significantly larger than the bold.
 
We suggest to use IBM Plex Light, Regular, and SemiBold for digital experiences. The semibold weight is ideal for section headers, but should not be used for long text..

<type-weight></type-weight>

```html
<p class="ibm-type-semibold">Semibold</p>
<p class="ibm-type-regular">Regular</p>
<p class="ibm-type-light">Light</p>
```

### Italic
Each weight has an Italic style, which should only be used when you need to emphasize certain words in a sentence (titles of works, technical terms, names of devices, captions).

<type-weight type="italic"></type-weight>

```html
<p class="ibm-type-semibold ibm-type-italic">Semibold Italic</p>
<p class="ibm-type-regular ibm-type-italic">Regular</p>
<p class="ibm-type-light ibm-type-italic">Light</p>
```

## Type Color
Careful consideration of color maintains quality and recognition for users. Legibility and accessibility are two keys. Keep colored type neutral when in paragraphs. Use primary blue for primary actions. 

