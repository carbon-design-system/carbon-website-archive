---
label: Motion can bring your work to life, guide users through complex experiences, and help move forward—from here to there, now to next, start to finish—and make progress.
title: Motion
tabs: ['Basics', 'Choreography', 'Resources']
---

<anchor-links>
<ul>
    <li><a data-scroll href="#paths">Paths</a></li>
    <li><a data-scroll href="#composition">Composition</a></li>
</ul>
</anchor-links>

## Paths

Elements of our interface dance on the Grid. Motion paths trace lines along the grid which never run diagonal.


<grid-wrapper col_lg="12" flex="true">
<do-dont-example correct="true" full_width="true" label="When expanding or moving elements across the screen, stagger the timing of horizontal and vertical animations to create a path with a rounded corner.">

`vimeo: https://vimeo.com/310582887`

</do-dont-example>
</grid-wrapper>

<grid-wrapper col_lg="12" flex="true">
<do-dont-example correct="false" full_width="true" label="Not staggering horizontal and vertical animations create a straight diagonal path. It breaks the grid and is harsh to the eye.">

`vimeo: https://vimeo.com/310582699`

</do-dont-example>
</grid-wrapper>

<grid-wrapper col_lg="8" flex="true">
<do-dont-example correct=true label="When removing an item from the grid, thumbnails on the edge existing and re-entering container create a smooth transition.">

`vimeo: https://vimeo.com/310582738`

</do-dont-example>
<do-dont-example correct="false" label="Thumbnails moving on diagonal paths feels sporadic and harsh.">

`vimeo: https://vimeo.com/310582775`

</do-dont-example>
</grid-wrapper>

<grid-wrapper col_lg="8" flex="true">
<do-dont-example correct="true" label="When sorting or shuffling items on the grid, always using rounded corner paths to visually organize the movements.">

`vimeo: https://vimeo.com/310582816`

</do-dont-example>
<do-dont-example correct="false" label="Criss cross sorting appears disorganized. Avoid this motion path.">

`vimeo: https://vimeo.com/310582851`

</do-dont-example>
</grid-wrapper>

## Composition

When multiple animated elements coexist or interact with each other within the same view, it is vital to make the many moving elements work together and form coherent experience, to better provide way-finding and focus to guide the user experience.

### Consistency

When elements convey the same meaning, or perform the same functions, use the same motion for them. Similarly, actions with dramatically different meaning and intent should carry different motions. This helps to reinforce the meaning behind a motion, and improves user’s proficiency with the interface.

In below example, both expanding a row of a data table and opening a dropdown uses a chevron and share similar intent—to reveal content hidden in a seam. Therefore, they should have the same motion style (Productive) and easing (entrance, standard), albeit different durations due to their difference in size.

<grid-wrapper col_lg="12" flex="true">
<do-dont-example correct="true" full_width="true" label="Comparing data table expansion and dropdown">

`vimeo: https://vimeo.com/310581970`

</do-dont-example>
</grid-wrapper>

Pay attention to the spatial relationships between elements and screens, and information hierarchy. Visually similar elements may need the different motions to respect their respective spatial location.

<grid-wrapper col_lg="12" flex="true">
<do-dont-example correct="true" full_width="true" label="When the new content panel is on a higher layer, motion is “sliding”, moving content within with the panel.  Also always dim the content below when new layer is introduced above.">

`vimeo: https://vimeo.com/310581999`

</do-dont-example>
</grid-wrapper>

<grid-wrapper col_lg="12" flex="true">
<do-dont-example correct="true" full_width="true" label="When the new content panel is on the same layer, motion is “pushing”, revealing content within with a mask.">

`vimeo: https://vimeo.com/310582064`

</do-dont-example>
</grid-wrapper>

Effective use of inconsistency in motion highlights a difference in meaning or intent behind actions with similar visual appearance.

<grid-wrapper col_lg="8" flex="true">
<do-dont-example correct=true label="Use motion to reinforce meaning. Affirmative action here triggers a different exit motion for the modal than negation.">

`vimeo: https://vimeo.com/310582134`

</do-dont-example>
<do-dont-example correct="false" label="">

`vimeo: https://vimeo.com/310582167`

</do-dont-example>
</grid-wrapper>

### Continuity

Motion can help establishing a sense of continuity between screens and experiences. Pay attention to shared elements across screens, such as the title panels, or buttons, to create a graceful transition.

<grid-wrapper col_lg="12" flex="true">
<do-dont-example correct="true" full_width="true" label="Shared elements can effectively guide users through a multi-layered information architecture.">

`vimeo: https://vimeo.com/310582206`

</do-dont-example>
</grid-wrapper>

<grid-wrapper col_lg="8" flex="true">
<do-dont-example correct="false" label="Continuous elements are for guidance and should not distract. Always finish a sequence with the important content on page.">

`vimeo: https://vimeo.com/310582279`

</do-dont-example>
</grid-wrapper>

### Sequence & stagger

When multiple elements need to animate, distribute their entrances over time in stead of introducing everything at the user at once. This will help user to understand the content and orient themselves.

For example, staggering the entrance of table content by 20ms significantly reduces the cognitive load. Depending on the number of staggered elements, the delay should be adjusted to ensure total time is still within 500 ms.

<grid-wrapper col_lg="12" flex="true">
<do-dont-example correct="true" full_width="true" label="Table with rows loading in at staggered timing.">

`vimeo: https://vimeo.com/310582972`

</do-dont-example>
</grid-wrapper>

Sequence the loading of page content when possible. Start with the most orienting content, such as the static content* and header, and end with the most important information, such as the _call to action_ button or a calculation result, to focus user’s attention to them.

<grid-wrapper col_lg="12" flex="true">
<do-dont-example correct="true" full_width="true" label="Sequencing of this interface prioritizes the primary button, and reserves data visualization for later when users begin to scroll, indicating intention to dive deeper.">

`vimeo: https://vimeo.com/310582919`

</do-dont-example>
</grid-wrapper>

Follow this recommended sequence of different types of content when choreographing content entrance. Not all categories might be present in every experience. [Learn to categorize content in Motion Strategy ](#)

| Seq | Category              | Examples                                                |
|-----|-----------------------|---------------------------------------------------------|
| 1   | Static content        | UI shell, top and side navigation                       |
| 2   | Static content (body) | Header, written content, images                         |
| 3   | Dynamic content       | Content of a data table, query results from data base   |
| 4   | Primary action        | Primary action button                                   |
| 5   | Animated content      | Data visualizations                                     |
