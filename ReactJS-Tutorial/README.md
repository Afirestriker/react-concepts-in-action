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
  * File - **Greet.js**
  * Create a functional component in 2 ways.
    * 1. Using function keyword.
    * 2. An flat arrow ES6 function. **(Recommended)**

* Lesson 6 - Class Components
  * File - **Welcome.js**
  * Import React `Component` class from 'react'.
  * Create a ES6 class `Welcome` which inherites the react Component class.
  * Create a `render()` method that return an HTML heading tag.

* Lesson 7 - React Hooks/ Hooks Update
  * React Introducted Hooks in 16.7.0 - Alpha release.
  * Hooks make it possible to use State in Functional components.
  * Mitegate the frustration of using `this` keyword in the class component.

* Lesson 8 - JSX
  * File - **Hello.js**
  * JavaScript XML (JSX) - Extension to JavaScript language syntax.
  * Wtire XML like code for elements, and components.
  * JSX tags have a tag name, attributes, and children.
  * JSX is not necessity to write React applications. It help your code simpler and elegant (stylish in appearance).
  * Using Babel - JSX is transpiles to pure JavaScript which is then interpret by the browsers.
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
  * state is nothing but an object, that is privately mentained inside a component.
  * A state can influence what is rendered in the browser and state can be changed within the component.
  * State is similar to declaring a variable inside the function body.
  * Both props and state hold information that influences the UI in the browser.
  * Using state in the **Class component**.
    * `this.state = {}` is use to declare state in class component.
      * *NOTE: The only place where you can assign `this.state` is in the class constructor*
    * If we want to update/ change the state value we have to use `this.setState()` method.

* Lesson 11 - setState()
  * `this.setState()` method is used to change/ update the state value.
  * `this.setState()` is an `async` method.
  * We can though update the `this.state.count` value without using this.setState(). But it will not re-render the UI.
  * This is the main reason why we use `this.setState()`.
  * ```js
      import React, { Component } from 'react';

      class Counter extends Component {
        constructor() {
          super();
          this.state = {
            count: 0
          };
        }

        increaseCount() {
          this.setState([
            count: this.state.count + 1
          ])
        }

        render() {
          return(
            <>
              <h1>Count: {this.state.count} </h1>
              <button onClick={() => increaseCount()}> Increase Count </button>
            </>
          )
        }
      }
      ```

  * **Do and Don't for React state**
    * Always make use of setState() and never modify the state directly. Because when we modify state directly React will not re-render the component. The setState() method will let React know that it has to re-render the component.
    * Remember setState() is an `async` method.
      * Whenever you want to execute a code after the state has been change/ updated. Do not place that code after the setState method.
      * Instead, placed that code within the setState callback function which is passed as the second parameter to the setState() method.
      * ```js
          this.setState({
              // React state key: value
            },
            () => {
              // callback function
            }
          )
          ```
      * *Note: If we call the increaseCount() function 5 times, the state value still get updated by 1. This kind of behaviour is because React may group multiple setState() call into a single update for better performance*
      * So, when you want to update the state based on the previous state, we need to pass in a function as an first argument instead of a regular object to the setState() method. This helps because the function has an access to the previous-state which is useful to calculate the new state value.
      * ```js
          this.setState(
            // first argument as function
            (prevState, props) => ({
              count: prevState.count + 1
            }),

            // second argument - a callback function
            () => {
              // statement to execute
            }
          )
        ```

* Lesson 12 - Destructuring props and state
  * Destructuring props in functional component ( `Greet.js` ).
    * Destructuring in function parameters.
    * Destructuring in function body.
  * Descturturing prosp in class component. ( `Welcome.js` ).
    * In class component, we generally trend to destructure props/ state in the render method.
  * Example:
  * ```js
      // functional component parameter
      const Greet = ({name, heroName}) => {
        // function body
      }

      // class component render() method
      render() {
        const {name, heroName} = this.props;
      }
    ```

* Lesson 13 - Event Handling
  * File - **FunctionClick.js** and **ClassClick.js`**
  * Design a button and add a click event to execute a basic code.
  * unlike html and vanilla JavasScript, In React the dom envent are named in camelCase notation rahter than lowercase.
  * In JSX we pass a function as an event-handler rather than a string.
  * `Common Mistake made by beginners`: **The event handler is a function and not a function call. So do not write parenthesis () while assigning a function to eventHandler**
  * Example:
  * ```js
      // react function compoenent statement...
      return (
        <>
          <button onClick={clickHandler}>Click</button> // this is an exmple of event handler function. ✅
          <button onClick={clickHandler()}>Click</button> // this is an example of event handler function call. ❌
        </>
      )
      // rest of the code...
    ```

* Lesson 14 - Binding event handlers
  * File - **EventBind.js**
  * We bind event in React, purely because of the way `this` keyword works in JavaScript, and it is not on how React works.
  * Binding `this` using 4 different approaches
    * Approach 1 - Binding in render method (Performance implecation).
    * Approach 2 - Using arrow function in render method (Performance implecation, but good when need to pass parenthesis).
    * Approach 3 - Binding in Class constructor. From React Doc (Go to approach).
    * Approach 4 - Declare handler function as arrow function. From React Doc (Go to approach).

* Lesson 15 - Method as props
  * File - **ParentComponent.js** and **ChildComponent.js**
  * Learned how to pass a method declared in the parent-component to the child-component using props.
  * Very Similar to how we pass information from parent to child component using attributes.
  * Learned how to pass a parameters to while calling the parent-component function using flat arrow function.

* Lesson 16 - Conditional Rendering
  * File - **UserGreeting.js**
  * Format the JSX rendering based on a condition using 4 different approach.
    * Approach 1 - if-else
    * Approach 2 - Element Variables
    * Approach 3 - Ternary Operator (?:)
    * Approach 4 - Short-circuit Operator (&&)

<br/>

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

