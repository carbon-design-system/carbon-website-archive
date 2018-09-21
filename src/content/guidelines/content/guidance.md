---
label: Guidelines
title: Content
tabs: ['General', 'Guidance', 'Glossary']
---

## Capitalization

> ![capitalization](images/Aa.svg)
> Good content design is consistent and coherent so that users can trust and predict how to interact with it. Details matter.

Always capitalize proper names, such as United States. Use ALL CAPS for abbreviations, acronyms, and initials (for example, IBM and ASCII) and two-letter abbreviations (for example, AL, AK, and AZ), and for OK.

For specific capitalization rules for different element or component types, see the usage details for each individual element or component type.

### Sentence style

Use sentence-style capitalization in text and for all text elements in the UI, except for table/grid column headers, headings for groups of toggles, and product names. Sentence style capitalizes only the first word of each sentence and proper nouns
(such as names).

**Examples:**

- Cloud Foundry apps
- Business models
- Creating Boolean expressions
- Planning network architectures

### Headline style

Use headline-style capitalization for table/grid column headers and product names. Headline style capitalizes words based on parts of speech.

**Capitalize the initial letter of the following words:**

- All nouns, pronouns, adjectives, verbs, adverbs, and subordinating conjunctions such as:
- After
- Although
- Because
- Before
- How
- If
- Than
- That
- Though
- Until
- When
- Where
- Whether
- While

**Do not capitalize the initial letter of the following words:**

- articles, except as the first word
- coordinating conjunctions
- prepositions, except as the first or last word

## Do's & Dont's

These guidelines apply for developers and writers working with IBM Cloud UI and documentation.

### Do use simple tense

Use simple verbs and tenses, and keep sentences concise, simple, friendly, and punchy. Focus on the user's context and make content relevant. The more familiar you are with their context, the better you can communicate without using a lot of words.

If you need to use past or future tense, avoid verb tenses with the words have, has, had, been, should, would, and will.

<flex-group>
    <example correct=true title="Future Tense" text='"The API returns a promise."'></example>
    <example title='Future Tense' text='"The API will return a promise."'></example>
</flex-group>
<flex-group>
    <example correct=true title="Past Tense" text='"The limit was exceeded."'></example>
    <example title='Past Tense' text='"The limit has been exceeded."'></example>
</flex-group>

### Do use active voice

To convey a more natural tone, use active voice. People tend to speak in active voice unless they have a reason not to. For example, a good reason to use passive voice is to avoid sounding judgmental or blaming the user. Consider how a statement like, “You entered the wrong value,” which is active voice, might not be a well received error message.

<flex-group>
    <example correct=true title="Active Voice" text='"In the Limits window, specify the minimum and maximum values."'></example>
    <example title='Passive Voice' text='"The Limits window is used to specify the minimum and maximum values."'></example>
</flex-group>

### Do use second person

Engage your readers by using second person **(you, your)**. First person **(I, we, our)** focuses on the writer rather than the audience. People are interested in what they can do and how your story applies to their lives.
One exception to this is in the case of possessive adjectives in the UI. You can use first person in headings or labels that are very specific to the user or customer data, for example “My Account” or “My Usage.” In explanatory text for the heading or label, switch to second person, for example _“Your usage is calculated from the 1st day of the month.”_

### Don't be too formal or stuffy

- Do not be afraid to use contractions once in a while. Decide whether they fit the context.
- Occasionally begin sentences with **and, but or so.** This usage allows for shorter, scannable sentences. Do not overuse these devices, especially in instructional (steps) content.
- For example, _“You can deploy an app to the cloud during lunch hour. And still have time to eat”_ is great for Discover, Try, Buy.
- Occasionally use questions in headings. In both UIs and documentation, questions can be used to further conversational style, but don't overuse them, as they can add to noise and hinder retrievability. Make sure headings that use questions are meaningful. In a UI, questions can be used in a confirmation prompt in a dialog box. For example: _“Do you want to close without saving?”_
- Use exclamation marks only positively, not negatively. Make sure you use no more than one exclamation mark in a context, such as a single window or a single Docs topic.

<flex-group>
    <example correct=true title="Exclamation Points" text='"Your IBM Bluemix account is ready!"'></example>
    <example title='Exclamation Points' text='"You have reached your usage limit!"'></example>
</flex-group>

### Don't be overly mannerly

Terms of politeness are superfluous, convey the wrong tone for technical material, and are not regarded the same way in all cultures.

<example correct=true title="Using Please" text='"Indexing might take a few minutes. Please wait."'></example>

Use **please** in a UI only when the user is being inconvenienced.

<flex-group>
    <example correct=true title="Ability" text='"You can use the command line interface to update your app."'></example>
    <example title='Ability' text='"You may use the command line interface to update your app."'></example>
</flex-group>
<flex-group>
    <example correct=true title="Possibility" text='"You might need more advanced features when you are integrating with another app."'></example>
    <example title='Possibility' text='"You may need more advanced features when you are integrating with another app."'></example>
</flex-group>
