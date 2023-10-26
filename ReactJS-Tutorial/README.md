## React Tutorial

This tutorial is designed to teach you the basics of React, a JavaScript library for building user interfaces.

**Prerequisites:**
* Basic knowledge of HTML and CSS
* Basic knowledge of JavaScript


**Installation:**
1. Install Node.js and npm.
2. Create a new directory for your project.
3. Navigate to the project directory and run the following command:


**Tutorial:**
* Lesson 1 - Hello World
  * File Structure
  * Functional Component



**Q&A:**
* Q1. How the react application runs. How the files are called and the components gets render on web page.
  * Answer
    * On creating the react application using `npx create-react-app <app-name>`.
    * The startup file structure is by default created by the react and are called in the following sequence.
      * 1st - `public/ index.html`  -- index.html is the only HTML file in the whole react-app. It contains the div#root html element.
      * 2nd - `src/ index.js`       -- index.js import React, and render the App component on the div#root html element.
      * 3rd - `src/App.js`          -- App is the very first react component render on the web page.

* Q2. Difference types of componens in react
  * Answer
    * 1st - Stateless `Functional` Component
    * 2nd - Stateful `Class` Component

* Q3. Difference between Named export and Default Export
  * Answer
    * `Default export` are the one that can be import using alias, i.e, any other name.
    * `Named export` are the one that should be import using their exact name.

