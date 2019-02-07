---
label: Using the appropriate voice, tone and terminology allows us to better connect and resonate with our users. 
title: Content
tabs: ['General', 'Guidance', 'Glossary']
---


<anchor-links>
<ul>
    <li><a href="#capitalization">Capitalization</a></li>
    <li><a href="#dos--donts">Do’s & dont’s</a></li>
</ul>

</anchor-links>

## Capitalization

Always capitalize proper names, such as United States. Use ALL CAPS for abbreviations, acronyms, and initials (for example, IBM and ASCII) and two-letter abbreviations (for example, AL, AK, and AZ), and for the word "OK."

For specific capitalization rules for different element or component types, see the usage details for each individual element or component type.

### Sentence style

Use sentence-style capitalization in text and for all text elements in the UI, except for table/grid column headers, headings for groups of toggles, and product names. Sentence style capitalizes only the first word of each sentence and proper nouns (such as names).

####Examples:

<br>

- Cloud Foundry apps
- Business models
- Creating Boolean expressions
- Planning network architectures

### Headline style

Only use headline-style capitalization for table/grid column headers and product names. Headline style capitalizes words based on parts of speech.

####Capitalize the initial letter of the following words:

(All nouns, pronouns, adjectives, verbs, adverbs, and subordinating conjunctions)

<br>

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

####Do not capitalize the initial letter of the following words:

<br>

- articles (except as the first word)
- coordinating conjunctions
- prepositions (except as the first or last word)

## Verb tense

Use simple verbs and tenses, and keep sentences concise, simple, friendly, and punchy. Avoid the _continuous_, _perfect_, and _perfect continuous_ tenses in favor of the simple tenses whenever possible. 

For example, for the verb "to write," the simplest tenses would be "You write," "You wrote," and "You will write." More complex tenses would include "You are writing," "You were writing," and "You will be writing." Even more complex tenses would say "You have written," "You had been writing," and "You will have been writing." 

Use simple verbs and tenses, and keep sentences concise, simple, friendly, and punchy. Focus on the user’s context and make content relevant. The more familiar you are with their context, the better you can communicate without using a lot of words.

If you need to use past or future tense, avoid verb tenses with the words have, has, had, been, should, would, and will.

<grid-wrapper col_lg="8" flex="true">
    <do-dont-example correct=true label="Be precise with the future tense." text='“The API returns a promise.”'></do-dont-example>
    <do-dont-example label='Avoid over-complicating the future tense.' text='“The API will return a promise.”'></do-dont-example>
</grid-wrapper>

## Active and passive voice

The _active voice_ is direct and punchy, and emphasizes the subject of the sentence. The subject clearly "acts upon" the verb (hence, "active"). For example, "John ate the apple." In situations where either voice will work, generally choose the active voice for more directness.

<grid-wrapper col_lg="8" flex="true">
    <do-dont-example correct=true label="Be precise when using the past tense." text='“The limit was exceeded.”'></do-dont-example>
    <do-dont-example label='Avoid over-complicating the past tense.' text='“The limit has been exceeded.”'></do-dont-example>
</grid-wrapper>

The _passive voice_, on the other hand, flips the construction so that the subject is secondary to the verb and object (hence, "passive"). Often, the subject is not even included in the sentence. For example, "_The apple was eaten by John_" or just "_The apple was eaten_." Only sentences that contain direct objects can be constructed in the passive voice. Thus, "_John ate_" cannot be constructed passively.

 The passive voice makes for a more natural tone in certain use cases. For example, if the true subject of the sentence is a system, and the human is secondary, passive voice can be acceptable.  

<grid-wrapper col_lg="8" flex="true">
    <do-dont-example correct=true label="Active Voice" text='“In the Limits window, specify the minimum and maximum values.”'></do-dont-example>
    <do-dont-example label='Passive Voice' text='“The Limits window is used to specify the minimum and maximum values.”'></do-dont-example>
</grid-wrapper>

## First and second person

Engage your readers by using second person (you, your). First person (I, we, our) focuses on the writer rather than the audience. People are interested in what they can do and how your story applies to their lives. One exception to this is in the case of possessive adjectives in the UI. You can use first person in headings or labels that are very specific to the user or customer data, for example “My Account” or “My Usage.” In explanatory text for the heading or label, switch to second person, for example _“Your usage is calculated from the 1st day of the month.”_

One exception to this is in the case of possessive adjectives in the UI. You can use first person in headings or labels that are very specific to the user or customer data, such as “My Account” or “My Usage.” In explanatory text for the heading or label, however, use second person. For example, _“Your usage is calculated from the first day of the month.”_

## Formal vs. casual tone

While a more formal tone is often appropriate for technical and business writing, a more casual tone is becoming increasingly accepted (and expected) in UI and supporting materials.

- Don't be afraid to use **contractions**. When they fit the context and improve flow, go for it.
- Beginning sentences with **and, but, or so** is not always forbidden. When it allows for shorter, scannable sentences, they can be used. Do not overuse these devices, especially in instructional content. For example, _“You can deploy an app to the cloud during lunch hour. But it's not required.”_ works for _Discover, Try, Buy_ experiences.
- It's acceptable to use **questions in headings**. In both UIs and documentation, questions can be used to further conversational style. But don't overuse them, as they can add to noise. Make sure headings that use questions are meaningful. In a UI, questions can also be used in a confirmation prompt in a dialog box. For example, _“Do you want to close without saving?”_
- Use **exclamation marks** only positively, not negatively. Make sure you use no more than one exclamation mark in a context, such as a single window or a single Docs topic.

<grid-wrapper col_lg="8" flex="true">
    <do-dont-example correct=true label="Use exclamation marks positively." text='“Your IBM Bluemix account is ready!”'></do-dont-example>
    <do-dont-example label='Avoid negative use of exclamation points.' text='“You have reached your usage limit!”'></do-dont-example>
</grid-wrapper>

**Terms of politeness** are often overused, can convey the wrong tone for technical material, and are not regarded the same way in all cultures. Use terms such as "please" and "thank you" carefully.

<grid-wrapper col_lg="8" flex="true">
    <do-dont-example correct=true label= 'Use “please” in a UI only when the user is being inconvenienced.' text='“Indexing might take a few minutes. Please wait.”'></do-dont-example>
  <do-dont-example label='Avoid “please” in all other circumstances.' text='“Please create a subscription account to get full access to all offerings in the catalog.”'></do-dont-example>
</grid-wrapper>

## Can, may, and might

**Terms of ability** are often misused. Remember, "can" implies ability, and "may" implies permission (and sometimes uncertainty).

<grid-wrapper col_lg="8" flex="true">
    <do-dont-example correct=true label='Use “can” in expressions having to do with user ability.' text='“You can use the command line interface to update your app.”'></do-dont-example>
    <do-dont-example label='Avoid “may” in expressions having to do with user ability.' text='“You may use the command line interface to update your app.”'></do-dont-example>
</grid-wrapper>

**Terms of possibility** can also be confusing. Remember, when either "may" or "might" will work, generally go with "might" to avoid confusion with the multiple meanings of "may."

<grid-wrapper col_lg="8" flex="true">
    <do-dont-example correct=true label='Use “might” in expressions having to do with possibility.' text='“You might need more advanced features when you are integrating with another app.”'></do-dont-example>
    <do-dont-example label='Avoid “may” in expressions having to do with possibility.' text='“You may need more advanced features when you are integrating with another app.”'></do-dont-example>
</grid-wrapper>
