/* eslint-disable */
module.exports = {
  A: {
    'Common Actions': {
      Add: {
        desc:
          'Adds an existing object to a list, container, or system (for example, adding a document to a folder).',
        subtext:
          'Combine Add with the object (for example, Add user, Add space, Add role, or Add privileges). Contrast with [Insert](#insert) and [New](#new).',
      },
      Apply: {
        desc:
          'Saves changes without closing the dialog. These properties often affect subsequent system behavior.',
        subtext:
          'Use instead of Save Changes. Contrast with [Save](#save) and [Save As](#save-as).',
      },
      Approve: {
        desc:
          'Indicates the user agrees. In a business process, typically initiates the next step.',
        subtext: 'See [Reject](#reject).',
      },
    },
    Idioms: {
      'a la carte': {
        desc: '(adverb) pertaining to separately itemized objects.',
        subtext:
          'Context: Bluemix provides pay-as-you-go and subscription based pricing, a-la-carte and bundled services availability.',
      },
      app: {
        desc: '(noun) a web or mobile device application.',
        subtext:
          "Spell as shown, all lower case. In the doc, if for some reason it seems more appropriate to use application, use application for the first instance and then use app. Context: It's easy to delete apps to free up some spaces in Bluemix at any time.",
      },
    },
  },
  B: {
    'Common Actions': {
      Back: {
        desc:
          'Returns the user to the previous step in a sequence of steps, such as in a wizard.',
        subtext:
          'Use instead of Previous. See [Next](#next) and [Finish](#finish).',
      },
      Browse: {
        desc:
          'Assists the user in entering a file name or file path (for example, on a button or link next to an entry field). Typically opens a secondary window where the user can locate and select the desired directory and file.',
      },
    },
    Idioms: {
      bestseller: {
        desc:
          '(noun) a significantly successful product or service in the marketplace.',
        subtext:
          'Context: Develop software for a cause or your company’s next bestseller.',
      },
      bet: {
        desc: '(verb) to feel sure about something.',
        subtext: 'Context: We bet you have built some sweet apps by now.',
      },
      'big savings': {
        desc: '(phrase) a significant amount of money saved.',
        subtext: 'Context: You get big savings every month.',
      },
    },
  },
  C: {
    'Common Actions': {
      Cancel: {
        desc: 'Stops the current action and closes the dialog.',
        subtext:
          'Warn the user of any possible negative consequences of stopping an action from progressing, such as data corruption. See [Reset](#reset).',
      },
      Clear: {
        desc:
          'This action clears all the fields or selections. Also deletes the contents of a document, such as a log. Typically the default selection or value is re-established for controls that always have a selection or value, such as Radio Buttons.',
        subtext:
          'Where appropriate, combine Clear with the object (for example, Clear contents, Clear fields, Clear all). Contrast with [Delete](#delete) and [Remove](#remove).',
      },
      Close: {
        desc:
          'Closes the current page or window (for example, closing a secondary window containing online help).',
        subtext:
          'Do not use Close together with OK or Cancel actions. Contrast with [Done](#done). See [Cancel](#cancel).',
      },
      Copy: {
        desc:
          'Creates new instances of the selected objects to a specific destination.',
        subtext:
          'Combine Copy with the object being copied (for example, Copy folder) or the destination (for example, Copy to clipboard) if there are multiple possibilities. Use instead of Create like. Contrast with [New](#new).',
      },
      Create: {
        desc:
          'Label for a button in a dialog or form that creates a new object. The settings in the dialog are applied to the object when it is created.',
        subtext:
          'Use [New](#new) to initiate the action of creating a new object. Use Create to confirm the action after any naming or configuration. Contrast with [Add](#add), [Copy](#copy), and [Insert](#insert).',
      },
      Customize: {
        desc: 'Allow a user to make desired changes.',
        subtext: null,
      },
    },
    Idioms: {
      'cold-blooded cyborg': {
        desc:
          '(noun) a man-like robot with no feelings (to cloud its judgment) that flawlessly executes its mandate."',
        subtext:
          'Context: Create apps with the efficiency of a cold-blooded cyborg.',
      },
      congrats: {
        desc: '(noun) congratulations.',
        subtext: 'Context: Congrats on creating your new app!',
      },
      crash: {
        desc: '(noun) the unexpected termination of a software function.',
        subtext:
          'Context: Add the Mobile Quality Assurance service to your iOS app to view high value quality metrics, including information for crashes, bugs, user feedback, and user sentiment.',
      },
      'crash (verb)': {
        desc: 'of software, to unexpectedly terminate.',
        subtext: 'Context: If a service crashes, the app might stop too.',
      },
    },
  },
  D: {
    'Common Actions': {
      Delete: {
        desc: 'Destroys an existing object.',
        subtext:
          'Combine Delete with the object to delete (for example, Delete column or Delete table). Contrast with [Clear](#clear) and [Remove](#remove).',
      },
      Docs: {
        desc:
          'Opens a separate window containing the landing page for the Bluemix product documentation.',
        subtext:
          'Use as link text only for the specific link that points to the Bluemix product documentation from the console menu bar. See [Learn More](#learn-more).',
      },
      Done: {
        desc:
          'Indicates that the user has finished working in an environment (for example, editing templates) and wants to return to where he or she came from.',
        subtext: 'See [Finish](#finish). Contrast with [Close](#close).',
      },
      Download: {
        desc: 'Transfers a file from a remote system to a local system.',
        subtext: 'See [Upload](#upload).',
      },
      Drop: {
        desc: 'Use only for dropping a database table.',
        subtext:
          'In other cases, use [Delete](#delete), [Clear](#clear), or [Remove](#remove).',
      },
    },
    Idioms: {
      'dev-to-dev': {
        desc: '(phrase) developer to developer.',
        subtext: 'Context: Free support is available in our dev-to-dev forum.',
      },
      docs: {
        desc: '(noun) documentation.',
        subtext: 'Context: View docs.',
      },
      dream: {
        desc:
          '(adjective) pertaining to something that is exceptionally gratifying, excellent, or beautiful.',
        subtext: 'Context: Build your dream app.',
      },
    },
  },
  E: {
    'Common Actions': {
      Edit: {
        desc: 'Allows data or values to be changed.',
      },
      'Empty trash': {
        desc:
          'Permanently deletes all files or objects that have been placed into a trash container.',
        subtext: 'See [Move to trash](#move-to-trash).',
      },
      Export: {
        desc:
          'Saves data in a different format external to the system. Typically opens a secondary window for the user to specify the file type and destination (for example, storing table data as a set of comma-separated values).',
        subtext: 'See [Import](#import).',
      },
    },
  },
  F: {
    'Common Actions': {
      Filter: {
        desc: 'Shortens a list to objects that match the filter criteria.',
        subtext: 'Contrast with [Find](#find) and [Search](#search).',
      },
      Find: {
        desc:
          'Moves the cursor to the next element matching the specified criteria (for example, view the next occurrence of a specific word within an email message).',
        subtext: 'Contrast with (Filter)(#filter) and [Search](#search).',
      },
      Finish: {
        desc: 'Indicates completion of a series of steps, such as in a wizard.',
        subtext: 'See [Done](#done).',
      },
    },
    Idioms: {
      freebie: {
        desc: '(noun) something given away at no cost.',
        subtext:
          'Context: Enjoy freebies after the trial ends, and pay only for what you use beyond those.',
      },
    },
  },
  G: {
    'Common Actions': {
      'Get help': {
        desc:
          'Opens a search field from which the user can search for help information.',
        subtext:
          'Use only as link text on Support widget from the console menu bar. See [Docs](#docs) and [Learn more](#learn-more).',
      },
    },
    Idioms: {
      'get in touch': {
        desc: '(verb) to contact someone.',
        subtext:
          'Context: The page also provides options to post your question to Stack Overflow, or to open a ticket by clicking Get in touch.',
      },
    },
  },
  H: {
    'Common Actions': {
      Hide: {
        desc: 'Removes an element that was previously shown.',
        subtext: 'Context: Hide descriptions. See [Show](#show).',
      },
    },
    Idioms: {
      hackathon: {
        desc:
          '(noun) an event that brings together developers to work intensively on a software project.',
        subtext: 'Context: Run a hackathon.',
      },
      'have a hand in': {
        desc:
          '(phrase) to be directly involved in the accomplishment or creation of something.',
        subtext:
          "Context: If you're a developer, you now have a hand in creating the future.",
      },
      'hit the ground running': {
        desc:
          '(phrase) to immediately accomplish something when just starting to learn how to do it.',
        subtext:
          'Context: Whatever your task, Bluemix contains everything you need to hit the ground running.',
      },
    },
  },
  I: {
    'Common Actions': {
      Import: {
        desc:
          'Transforms data or objects from an external source. Typically opens a secondary window for the user to locate the external source.',
        subtext:
          'Context: Creating a new table based on comma-separated values contained in a separate file. See [Export](#export).',
      },
      Insert: {
        desc: 'Adds an element at a particular position in an ordered view.',
        subtext:
          'Context: Adding a picture to the body of a document or inserting a record into a table. Contrast with [Add](#new) and [New](#new).',
      },
    },
    Idioms: {
      'in a flash': {
        desc: '(phrase) quickly, immediately.',
        subtext: 'Context: Deploy and test your app in a flash.',
      },
    },
  },
  L: {
    'Common Actions': {
      Launch: {
        desc: 'Do not use.',
        subtext: 'Use [Start](#start).',
      },
      'Learn more': {
        desc:
          'Opens additional, highly contextual information. Insert at the end of inline text or hover text where more information follows but does not fit in the current context.',
        subtext:
          "If space permits, combine Learn more with meaningful text that describes the content you're pointing to. For example, if your user needs some best practices to manage apps in multiple regions, you could use Learn more about regions.",
      },
      'Log in': {
        desc:
          'Enters a site or application. This choice typically opens a form for entry of credentials. Also used on the submission button after users enter their credentials.',
        subtext: 'Use instead of Sign in. See [Log out](#log-out).',
      },
      'Log out': {
        desc: 'Exits an application or site.',
        subtext: 'Use instead of Sign out. See [Log in](#log-in).',
      },
    },
    Idioms: {
      'lost in space': {
        desc:
          '(phrase) to be hopelessly adrift with no chance of return, unlocatable, lost to the world.',
        subtext: 'Context: This page seems to be lost in space.',
      },
    },
  },
  M: {
    'Common Actions': {
      Move: {
        desc:
          'Transfers an object from one container (for example, folder, activity, or page) to another.',
      },
      'Move to trash': {
        desc:
          'A soft delete. Moves a file or object to an area from where it can later be permanently deleted or recovered.',
        subtext:
          'Use instead of Delete or Recycle bin. See [Empty trash](#empty-trash).',
      },
    },
    Idioms: {
      meetup: {
        desc: '(noun) an informal gathering.',
        subtext: 'Context: Plan anything, even the monthly meetup.',
      },
      muscle: {
        desc:
          '(noun) the metaphorical strength or physical power of something.',
        subtext:
          'Context: Whether startup or enterprise, your apps are supported by the muscle of an enterprise-ready cloud.',
      },
    },
  },
  N: {
    'Common Actions': {
      New: {
        desc:
          'Starts the creation of a new object. New either creates the object immediately or opens a dialog or set of fields where the user can enter properties.',
        subtext:
          'Combine New with the object to create (for example, New user or New column). See [Create](#create). Contrast with [Add](#add), [Copy](#copy), and [Insert](#insert).',
      },
      Next: {
        desc:
          'Advances the user to the next step in a sequence of steps, such as in a wizard.',
        subtext: 'See [Back](#Back) and [Finish](#finish).',
      },
    },
    Idioms: {
      'N/A': {
        desc: '(adjective) not applicable, not available.',
        subtext: 'Spell as shown, all upper case.',
      },
    },
  },
  O: {
    'Common Actions': {
      OK: {
        desc: 'Completes the current task.',
        subtext:
          'The best practice is to use a label corresponding to the requested action, such as [Save](#save) or [Create](#create). Use OK only when such a label is not available.',
      },
    },
    Idioms: {
      'oh no!': {
        desc: '(phrase) used to indicate shock.',
        subtext: 'Context: Oh no! The free trial expired.',
      },
      'on-prem': {
        desc: '(adjective) on-premises.',
        subtext:
          'Context: Incrementally port application features across on-prem platforms and clouds with consistent services.',
      },
      oops: {
        desc: '(expression) used to indicate an accident or a mistake.',
        subtext:
          'Context: Oops, sorry, the HTML5 File APIs are not fully supported in this browser.',
      },
      ops: {
        desc: '(noun) operations.',
        subtext:
          'Context: Bluemix mobile cloud services help developers minimize ops and maintenance cost.',
      },
      org: {
        desc: '(noun) organization.',
        subtext: 'Context: Change to a different org.',
      },
    },
  },
  P: {
    'Common Actions': {
      Play: {
        desc: 'Starts audio, video, or an animation.',
      },
      Post: {
        desc:
          'Adds a new comment to an online community or adds status to a log or record.',
        subtext:
          'If you are editing an existing comment, use [Save](#save) instead.',
      },
      Preview: {
        desc:
          'Shows how an object or content will appear with formatting applied before the content is published or distributed. Alternatively, provides an incomplete display of an existing object without leaving the current context.',
      },
      Print: {
        desc:
          'Sends a copy of the currently selected object or the object in view to the printer.',
      },
    },
  },
  R: {
    'Common Actions': {
      Redo: {
        desc: 'Redoes an undo action.',
        subtext:
          'Likely used only as a Tooltip on an icon button. See [Undo](#undo).',
      },
      Refresh: {
        desc:
          'Reloads the view of an object when the displayed view has become unsynchronized with the source.',
        subtext: 'Likely used only as a tooltip on an icon button.',
      },
      Reject: {
        desc:
          'Indicates the user does not approve. In a business process, typically blocks the process from proceeding to the next step.',
        subtext: 'See [Approve](#approve).',
      },
      Reply: {
        desc: 'Indicates or completes a response to an email or a comment.',
      },
      Remove: {
        desc:
          'Removes an object from a list or container but the object is not destroyed as a result of the action. Often requires one or more objects to be selected.',
        subtext:
          'Where appropriate, combine Remove with the object that will be removed (for example, Remove user, Remove role, Remove privileges). Contrast with [Delete](#delete) and [Clear](#clear).',
      },
      Reset: {
        desc:
          'Reverts values back to their last saved state. The last saved state includes the values stored the last time the user clicked Apply. Does not close the dialog or window.',
        subtext:
          'See [Restore defaults](#restore-defaults), [Undo](#undo), and [Cancel](#cancel). Contrast with [Restore](#restore).',
      },
      Restore: {
        desc:
          'Brings a file back after deletion, corruption, or similar event.',
        subtext: 'Contrast with [Reset](#reset).',
      },
      'Restore all': {
        desc:
          'Completes a restore operation on all files or objects in a given system or container.',
        subtext: 'Contrast with [Restore](#restore).',
      },
      'Restore defaults': {
        desc: 'Sets form values to the default settings.',
        subtext: 'See [Reset](#reset) and [Undo](#undo).',
      },
      Run: {
        desc: 'Sets form values to the default settings.',
        subtext: 'Use instead of Execute.',
      },
    },
    Idioms: {
      'ready for takeoff': {
        desc: '(phrase) prepared for use.',
        subtext: 'Context: Your app is ready for takeoff!',
      },
    },
  },
  S: {
    'Common Actions': {
      Save: {
        desc:
          'Saves pending modifications made to a file or document. Does not close the window or panel.',
        subtext: 'Contrast with [Apply](#apply).',
      },
      'Save as': {
        desc:
          'Creates a new object based on the state of the object currently being viewed. The user names the new object and typically identifies its location.',
      },
      Search: {
        desc:
          'Returns all objects (for example, files, names, or documents) within a defined set (for example, in a folder, directory, database, or the internet) that match some specified criteria.',
        subtext: 'Contrast with [Find](#find) and [Filter](#filter).',
      },
      Select: {
        desc: 'Selects data from a table.',
      },
      'Select all': {
        desc:
          'Adds all objects in the view to the selection set or checks all Checkboxes.',
        subtext: 'Contrast with [Clear](#clear).',
      },
      Send: {
        desc: 'Transfers an email or other information to the recipient.',
      },
      Show: {
        desc: 'Reveals an object that was previously hidden.',
        subtext: 'Context: Show descriptions. See [Hide](#hide).',
      },
      'Sign up': {
        desc: 'Creates a user account or registers a user in a system.',
        subtext: 'Use instead of Register.',
      },
      Start: {
        desc:
          'Deploy an app or service to its development or production environment so that it can be used.',
        subtext: 'Use instead of [Launch](#launch).',
      },
      Sort: {
        desc: 'Sorts a list or table column.',
        subtext:
          "Likely used only as a tooltip on an icon button. Can be used without 'Ascending' or 'Descending' only if the order can be provided to a screen reader in the code for accessibility.",
      },
      'Submit an idea': {
        desc: 'Opens a separate window containing the IBM Cloud Ideas portal.',
        subtext:
          'Use only as link text on Support widget from the console menu bar.',
      },
    },
    Idioms: {
      skunkworks: {
        desc:
          '(noun) a high priority, often secret, project taken on by a small team without constraints from management.',
        subtext: 'Context: Start a skunkworks.',
      },
      startup: {
        desc: '(noun) a newly established business.',
        subtext:
          'Context: Whether startup or enterprise, your apps are supported by the muscle of an enterprise-ready cloud.',
      },
      'start from scratch': {
        desc: '(phrase) to start from the beginning, to start from nothing.',
        subtext:
          'Context: Choose a package of sample code and services, or start from scratch.',
      },
      sweet: {
        desc:
          '(adjective) pertaining to something that is considered excellent, awesome, or cool.',
        subtext: 'Context: We bet you have built some sweet apps by now.',
      },
      sync: {
        desc: '(noun) synchronize.',
        subtext:
          'Spell as shown (not synch). Context: Download this .zip file template application or sync with the template source repository by copying and pasting the Git URL to a command line.',
      },
    },
  },
  T: {
    'Common Actions': {
      Top: {
        desc: 'Returns to the top of the page.',
        subtext: 'Use instead of Back to top.',
      },
    },
    Idioms: {
      'test drive': {
        desc:
          '(noun) a test or evaluation of a piece of software for a specified amount of time.',
        subtext: 'Context: You have 1 day left in your Bluemix test drive.',
      },
      'time flies': {
        desc: '(phrase) time passes quickly.',
        subtext: 'Context: Wow, time flies!',
      },
    },
  },
  U: {
    'Common Actions': {
      Undo: {
        desc:
          'Reverts to the state before the most recent changes made by the user. Repeated use successively reverts to prior states in reverse chronological order. Applies to changes in data and not to changes made to the view.',
        subtext:
          'Not all actions, such as [Save](#save), can be undone. See [Redo](#redo), [Reset](#reset), and [Restore](#restore) defaults.',
      },
      Update: {
        desc:
          'Label for a button in a dialog or form for editing an object. The settings in the dialog are applied to the object when it is updated.',
        subtext: 'See [Edit](#edit).',
      },
      Upload: {
        desc: 'Transfers a file from a local system to a remote system.',
        subtext: 'See [Download](#download).',
      },
    },
    Idioms: {
      unfavorite: {
        desc:
          '(verb) to change the status of an item that was previously marked as a favorite. (adjective) an item that is not a favorite.',
      },
    },
  },
  V: {
    'Common Actions': {
      'View details': {
        desc: 'Presents additional information or properties for the object.',
      },
    },
    Idioms: {
      voila: {
        desc:
          '(expression) draws attention to something that has been accomplished or gained.',
        subtext:
          'Context: Runtime and container usage is charged based on two things. One, how much memory your runtime or container uses, and two, the duration that memory is used. Multiply the two together, and voila! The GB-hour.',
      },
    },
  },
  W: {
    Idioms: {
      'wow!': {
        desc: '(expression) used to show astonishment, delight, or admiration.',
        subtext: 'Context: Wow, time flies!',
      },
    },
  },
  __content: '\n',
};
