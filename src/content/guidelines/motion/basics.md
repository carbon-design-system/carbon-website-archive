---
label: Motion can bring your work to life, guide users through complex experiences, and help move forward—from here to there, now to next, start to finish—and make progress.
title: Motion
tabs: ['Basics', 'Choreography', 'Resources']
---

<anchor-links>
<ul>
    <li><a href="#get-started">Get started</a></li>
    <li><a href="#style">Style</a></li>
    <li><a href="#easing">Easing</a></li>
    <li><a href="#duration">Duration</a></li>
</ul>
</anchor-links>

## Get started

<grid-wrapper col_lg="8" flex="true" bleed="true">
  <clickable-tile title="Motion Generator" href="https://ibm.github.io/motion/" type="resource"></clickable-tile>
</grid-wrapper>

## Style

Duo motion recognizes different moments in user's experience, and offers two modes - the Productive motion, and the Expressive motion. The motion curves are designed to reflect the philosophical duality of Man and Machine.

<website-tabs>
<tab label="Curves"><div>

<grid-wrapper col_lg="8" flex="true">
<div>
<p>Productive</p>
<img src="images/Motion_overview_Curves_productive.svg" alt="Curve graphs representing differences between Productive and Expressive animation curves" />
</div>
<div>
<p>Expressive</p>
<img src="images/Motion_overview_Curves_expressive.svg" alt="Curve graphs representing differences between Productive and Expressive animation curves" />
</div>
</grid-wrapper>

</div></tab>
<tab label="Abstract">
<div>

`vimeo: https://vimeo.com/310583009`

</div></tab>
<tab label="In-situ"><div>

`vimeo: https://vimeo.com/310583036`

</div></tab>
</website-tabs>


### Productive

Productive motion create a sense of efficiency and responsiveness, while being subtle. Use productive motion for moments when user needs to focus on tasks — micro-interactions such as button interaction and dropdown menus, revealing additional information upon user's request, or rendering data tables and visualizations.

### Expressive

Expressive motion delivers enthusiastic and vibrant, thus more visible movement. Use expressive motion for significant moments such as user opening a new page or clicking the primary action button, or when the movement itself conveys a meaning or needs to be noticed by the user such as system alert or notification box appearing.

Productive and Expression are both essential to an interface. Reserve Expressive motion for occational, important moments to better capture user’s attention, and offer rhymic break to the productive experience.

Our [Components](#) have Duo motion build in. Use this guidance to customize motion, combine and coordinate motion through out experiences.

`vimeo: https://vimeo.com/310583077`

_Productive moments are labeled blue, and expressive moments are labeled magenta._

## Easing

Strictly linear movement appears unnatural to the human eye. Elements on the screen speed up quickly and slow down smoothly, obeying the physics of a light-weight material. "Easing curves" describe the precise amount of accelerations in motion. We commonly use one of these three types of easing.

`vimeo: https://vimeo.com/310582370`

Avoid easing curves that are unnatural, distracting, or decorative should be avoided. Duo motion is essential and efficient. We guide the users to value as quickly as possible.

`vimeo: https://vimeo.com/310582418`

### Standard easing

Use `standard-easing` when an element is visible from the beginning to  end of a motion. Tiles expanding and table rows sorting are good examples.

<website-tabs>
<tab label="Curves">
<div>

`vimeo: https://vimeo.com/310582611`

</div>
</tab>
<tab label="Examples">
<div>

`vimeo: https://vimeo.com/310582667`

</div>
</tab>
</website-tabs>

| Curves        | Productive                      | Expressive                      |
|---------------|---------------------------------|---------------------------------|
| CSS           | cubic-bezier(0.2, 0, 0.38, 0.9) | cubic-bezier(0.4, 0.14, 0.3, 1) |
| After Effects | Outgoing 20%, incoming 62%      | Outgoing 40%, incoming 70%      |

### Entrance easing

Use `entrance-ease` when adding elements to the view such as a modal or toaster appearing, or moving in response to users' input, such as dropdown opening or toggle. An element quickly appears and slows down to a stop.

<website-tabs>
<tab label="Curves">
<div>

`vimeo: https://vimeo.com/310582467`

</div>
</tab>
<tab label="Examples">
<div>

`vimeo: https://vimeo.com/310582503`

</div>
</tab>
</website-tabs>

| Curves        | Productive                      | Expressive                      |
|---------------|---------------------------------|---------------------------------|
| CSS           | cubic-bezier(0, 0, 0.38, 0.9)   | cubic-bezier(0, 0, 0.3, 1)      |
| After Effects | Outgoing 0%, incoming 62%       | Outgoing 0%, incoming 70%       |

### Exit easing

Use `exit-easing` when removing elements from view, such as closing a modal or toaster. The element speeds up as it exits from view, implying that its departure from the screen is permanent.

<website-tabs>
<tab label="Curves">
<div>

`vimeo: https://vimeo.com/310582530`

</div>
</tab>
<tab label="Examples">
<div>

`vimeo: https://vimeo.com/310582574`

</div>
</tab>
</website-tabs>

| Curves        | Productive                      | Expressive                      |
|---------------|---------------------------------|---------------------------------|
| CSS           | cubic-bezier(0.2, 0, 1, 0.9)    | cubic-bezier(0.4, 0.14, 1, 1)   |
| After Effects | Outgoing 20%, incoming 0%       | Outgoing 40%, incoming 0%       |

An exception to exits: if an element leaves the view but stays nearby, ready to reappear upon user action, use Standard easing instead. A good example of this is a side panel. The panel would leave the view, but slows down as it exits, implying that it would come to rest just outside the view, and ready to be recalled. Learn more about our [Space and Light](#) modal.

[ VIDEO ]

### Duo Easing Curves

Cubic-bezier curve notation is the standard way to express easing curves. [Duo Motion Package](#) has the easing curves stored as tokens for fast access. Reference [Code](#) tab for details on how to use motion curve tokens.

| Easing          | Productive                      | Expressive                      |
|-----------------|---------------------------------|---------------------------------|
| Standard easing | cubic-bezier(0.2, 0, 0.38, 0.9) | cubic-bezier(0.4, 0.14, 0.3, 1) |
| Entrance easing | cubic-bezier(0, 0, 0.38, 0.9)   | cubic-bezier(0, 0, 0.3, 1)      |
| Exit easing     | cubic-bezier(0.2, 0, 1, 0.9)    | cubic-bezier(0.4, 0.14, 1, 1)   |

## Duration

Duo motion’s duration is dynamically calculated based on the size of the animation - the larger the change in distance (traveled) or size (scaling) of the element, the longer the animation takes. Duo uses a non-linear duration scale to achieve better perceived consistency across all distances. [More about non-linear duration scale](#)

`vimeo: https://vimeo.com/310582312`

Duo Components has dynamic motion build in. When creating custome motion, use the [Motion Generator](#) to get the accurate duration for you element, or watch the tutorial to learn how to use [IBM Motion Package](#)’s javascript methods to get duration like a pro.

<grid-wrapper col_lg="8" flex="true" bleed="true">
<clickable-tile
    title="Motion Generator"
    href="https://ibm.github.io/motion/"
    type="resource"
    >
</clickable-tile>
<clickable-tile
    title="IBM Motion Package"
    href="https://github.com/IBM/carbon-elements/tree/master/packages/motion"
    type="resource"
    >
</clickable-tile>
</grid-wrapper>
