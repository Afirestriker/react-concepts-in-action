## React Tutorial

This tutorial is designed to teach you the basics of React, a JavaScript library for building user interfaces.

**Prerequisites:**
* Basic knowledge of HTML and CSS
* Basic knowledge of JavaScript (ES6)


**Installation:**
1. Install Node.js and npm.
2. Create a new directory for your project.
3. Navigate to the project directory and run the following command:
   1. `npm create-react-app <project-name>`
   2. `npm start` OR `npm run start`


**Tutorial:**
* Lesson 1 - Introduction to React
  * What is React --> `A JavaScript Library for Creating User Interface`.
  * Who created React --> `Meta (Facebook)`.
  * Why is React use for --> `For creating single page application using reusable components`.
  * Why is React so popular --> `React adopts a Declarative Approach instead of traditional Imperative Approach`.

* Lesson 2 - Hello World!
  * Create react app.
  * Run react app.
  * Make changes in the React App component to diplay text "Hello World!".

* Lesson 3 - Folder Structure
  * Folder and File Structure.
  * How the react componenet is render.
  * Which is the first react component render on screen.

* Lesson 4 - Components
  * Types of Components
    * Functional Components. **(Recommended)**
    * Class Components.

* Lesson 5 - Functional Components
  * File - Greet.js
  * Create a functional component in 2 ways.
    * 1. Using function keyword.
    * 2. An flat arrow ES6 function. **(Recommended)**

* Lesson 6 - Class Components
  * File - Welcome.js
  * Import React `Component class` from 'react'.
  * Create a ES6 class `Welcome` which inherites the react Component class.
  * Create a render() method that return an HTML heading tag.

* Lesson 7 - React Hooks/ Hooks Update
  * React Introducted Hooks in 16.7.0 - APlha release.
  * Hooks make it possible to use State in Functional components.
  * Mitegate the frustration of using `this` keyword in the class component.

* Lesson 8 - JSX
  * File - Hello.js
  * JavaScript XML (JSX) - Extension to JavaScript language syntax.
  * Wtire XML like code for elements, and components.
  * JSX tags have a tag name, attributes, and children.
  * JSX is not necessity to write React applications. It help your code simpler and elegant (stylish in appearance).
  * Using Babel - JSX is transpiles to pure JavaScript which is then interpret by the browsers.
  * -------------------------------------------------------
  * JSX Differences
    * class --> className
    * for --> htmlFor
    * camelCase porperty name conventions
      * onclick --> onClick
      * tabIndex --> tabIndex

* Lesson 9 - Props
  * Props is short for properties.
  * Props are simply an object that contains properties and their values, passed from the parent component.
  * Props are optional inputs that a component can accept that allows component to be dynamic.
  * Props in Functional component
    * How to pass component `attributes` and recieve as props properties.
    * How to pass component `children` i.e, dynamic html content inside component and recieving it using the reserved children property of the props object.
  * Props in Classs component
    * Unlike functional component. To use props in React Class component we need to make use of `this` keyword.
    * For Example: ```this.props.name / this.props.heroName / this.props.children ```
  * **Props are immutable i.e. you cannot changes the props property values**

* Lesson 10 - State
  *

**Q&A:**
* Q1. How the react application runs. How the files are called and the components gets render on web page.
  * Answer
    * The startup file structure is by default created on running the `npm create-react-app <project-name>` command.
    * On running the `npm start` command, the file are call and run in the following sequence.
      * 1st - `public/ index.html`  -- This is the only HTML file in the whole react-app. It contains the `div#root` html element.
      * 2nd - `src/ index.js`       -- index.js imports React, and render the `App component` on the div#root html element.
      * 3rd - `src/App.js`          -- App is the very first react component render on the web page when we run the React app.

* Q2. Difference types of componens in react
  * Answer
    * 1st - `Functional` Component.
    * 2nd - `Class` Component.

* Q3. Difference between Named export and Default Export
  * Answer
    * `Default export` are the one that can be import using alias, i.e, any other name.
    * `Named export` are the one that should be import using their exact name.

