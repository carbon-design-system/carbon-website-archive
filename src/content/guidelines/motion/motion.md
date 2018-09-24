---
label: Guidelines
title: Motion
---

## Principles

Motion brings personality, tone, rhythm, and purpose to otherwise static objects. When used properly, UI motion should feel like a well choreographed dance, with all of the elements acting and reacting to one another in sync. Start with a clear objective, layering in movements that mimic reality and guide the user through an interface.

### Purposeful

Motion within an experience should be meaningful and intentional. It is used to establish hierarchy and draw the user’s attention to essential elements, giving them an understanding of an object’s role within the design. In order to convey this, the motion needs to be quick, direct, and precise.

### Familiar

Motion design should mirror movements we encounter in the physical world around us. Mimicking the expected behavior of objects from reality creates repetition and consistency, which enables users to anticipate what comes next. Providing motion feedback can help guide the user’s workflow, creating a clear path towards their end goal.

### Unobtrusive

Motion should be used with discretion—a little bit goes a long way. When applied properly, motion goes unnoticed. If a motion feels like it is calling attention to itself, tone it down! Subtlety ensures that the user won’t be distracted and allows for a cohesive motion experience across components.

## Guidelines

### Duration

Movement should be slow enough that the user can recognize what's happening, but fast enough that they are never waiting. The magnitude of change in an animation and its importance combine to determine its duration. Most animations in our component library last between 100 and 300 milliseconds.

<motion-example type="duration" correcttext="300ms" incorrecttext="600ms"></motion-example>

| Type                     | Duration  |
| ------------------------ | --------- |
| Buttons/small components | 100-200ms |
| Alerts/table reorder     | 250-300ms |
| Panels/modals            | 300-400ms |
| Page transitions         | 500-700ms |

### Easing

Strictly linear movement appears strange to the human eye. An animation should accelerate and decelerate smoothly throughout its duration to appear as natural as possible.

<motion-example type="easing" correcttext="Easing" incorrecttext="No-Easing"></motion-example>

There are three specific easing curves: standard, ease-out, and ease-in.

You can think of “in” and “out” as referring to the side of the curve where more time will be spent. So an ease-out will slow down into it's final position. More time is dedicated to the end of the curve or the "out".

**Standard:** cubic-bezier(0.5, 0, 0.1, 1)
The standard cubic-bezier is used for the majority of animations. Especially when extra context is needed or when an element is removed from the screen but easily accessible (i.e. slide out navigation panel). Acceleration and deceleration occur asymmetrically to feel natural. This means that more emphasis is placed on the end of the curve than at the beginning. In most cases, a user will need greater easing at the end of a movement to allow their eye to register the new state of the element.

<motion-example type="standard"></motion-example>

**Ease-out:** cubic-bezier(0, 0, 0.25, 1)
The ease-out cubic-bezier is used for adding elements to the stage or changing on-screen states at a users' input.
Ease-out is a much more dramatic curve because it is used for moving elements onto the stage. In which case, the object will slowly come to rest allowing the user to adjust to its arrival.

<motion-example type="ease-out"></motion-example>

**Ease-in:** cubic-bezier(0.25, 0, 1, 1)
The ease-in cubic-bezier is used primarily for removing elements from the screen or stage.
Ease-in does not need as much easing since it is primarily used for objects exiting the stage. Therefore, slow it slightly to allow the user to recognize that it is exiting before speeds out of view.

<motion-example type="ease-in"></motion-example>

### Properties

The reality of the web is that [some properties](https://csstriggers.com/) are better to animate than others since some properties trigger more work for the browser than others. With a few exceptions, animations should be created by making changes to the transform and opacity properties.
