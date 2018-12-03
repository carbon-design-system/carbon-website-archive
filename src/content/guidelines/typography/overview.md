---
label: Guidelines
title: Typography
tabs: ['Overview', 'Product', 'Editorial']
---

<page-intro>When used properly, typography can help create clear hierarchies, organize information, and guide users through the product or experience.</page-intro>

## Typeface: IBM Plex

Carbon uses the new open-sourced typeface, IBM Plex. It has been carefully designed to meet IBM's needs as a global technology company and reflect IBM's spirit, beliefs and design principles. IBM Plex can be accessed and downloaded from the [Plex GitHub Repo](https://github.com/ibm/plex).

<type-weight type="types"></type-weight>

### Sans-serif font stack

```scss
font-family: 'IBM Plex Sans', 'Helvetica Neue', Arial, sans-serif;
```

### Serif font stack

```scss
font-family: 'IBM Plex Serif', 'Georgia', Times, serif;
```

### Mono font stack

```scss
font-family: 'IBM Plex Mono', 'Menlo', 'DejaVu Sans Mono', 'Bitstream Vera Sans Mono', Courier, monospace;
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

Font weight is an important typographic variable that can add emphasis and differentiate content hierarchy. Font weight and size pairings must be carefully balanced. A bold weight will always have more emphasis than a lighter weight font of the same size. However, a lighter weight font can rank hierarchically higher than a bold font if the lighter weight type size is significantly larger than the bold one.
 
We suggest using IBM Plex Light, Regular, and SemiBold for digital experiences. The semibold weight is ideal for section headers, but should not be used for long text.

<type-weight></type-weight>


### Italic
Each weight has an italic style, which should only be used when you need to emphasize certain words in a sentence (titles of works, technical terms, names of devices, captions, etc.).

<type-weight type="italic"></type-weight>

## Type Color
Type color should be carefully considered. Legibility and accessibility are two keys. Keep type color neutral in running text. Use primary blue for primary actions. 

<do-dont-group>
    <do-dont-example correct=true>
        <img src="images/typography_1.svg" alt="Neutral color for text">    
    </do-dont-example>
    <do-dont-example>
        <img src="images/typography_2.svg" alt="I'm a magenta sentence for no reason">    
    </do-dont-example>
</do-dont-group>
<do-dont-group>
    <do-dont-example correct=true dark="true">
        <img src="images/typography_3.svg" alt="Neutral color for text">    
    </do-dont-example>
    <do-dont-example dark="true">
        <img src="images/typography_4.svg" alt="Color is not for decoration">
    </do-dont-example>
</do-dont-group>
<do-dont-group>
    <do-dont-example correct=true" label="Core blue colors are used for text links and primary actions">
        <img src="images/typography_5.svg" alt="Link with icon">
    </do-dont-example>
    <do-dont-example correct=true" label="Secondary actions use Gray 100 and icons">
        <img src="images/typography_6.svg" alt="Download with icon">
    </do-dont-example>
</do-dont-group>
<do-dont-group>
    <do-dont-example correct=true label="Other use cases for colored type are code snippets, warnings, alerts, etc.">
        <img src="images/typography_7.svg" alt="Oops something went wrong! colored text">
    </do-dont-example>
    <do-dont-example correct=true>
        <img src="images/typography_8.svg" alt="Code sinppet with colored highlight type">
    </do-dont-example>
</do-dont-group>
