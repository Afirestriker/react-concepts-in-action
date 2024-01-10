## React Tutorial

This tutorial is designed to teach you the Hooks in React, a JavaScript library for building user interfaces.

**Prerequisites:**
* Basic knowledge of HTML and CSS
* Basic knowledge of JavaScript (ES6)
* Basic knowledge of React


**Steps to creat React App:**
1. Install Node.js and npm.
2. Create a new directory for your project.
3. Navigate to the project directory and run the following command:
   1. `npx create-react-app <project-name>`
   2. `npm start` OR `npm run start`


**Steps to run existing React App:**
1. Download and install **Node.js** and **npm**
2. Download and install **Git**
3. Clone the repository. Use the `git clone` command, followed by the GitHub repository URL.
4. Navigate to the project directory. Use the command `cd <project-name>`
5. Install dependencies. Use the command `npm install`
6. Start the development server. Use the command `npm start`
7. Access the application. Typically the URL is **http://localhost:3000/**


**Tutorial:**
* Lesson 1 - React Hoooks - Introduction
  * Hooks are a new feature in React 16.8.
  * Hooks allow you to use React features without having to write a class. For example to use state you have to use Class Component
    but with the introduction to Hooks you can use State in Functional Components.
  * Hooks are special functions that let you "hook into" React features like state and lifecycle methods.
  * You can use hooks in any functional component.
  * There are three main reasons for hooks:
    1. **To avoid the confusion with the this keyword in JavaScript.**
      * Classes in React use the this keyword, which can be confusing for some developers. Hooks don't use classes, so they avoid this problem.
    2. **To make it easier to reuse stateful logic between components.**
       * With hooks, you can write reusable functions that contain stateful logic. This can make your code cleaner and easier to maintain.
    3. **To improve the organization of code within a component.**
       * Hooks allow you to split components into smaller, more focused functions. This can make your code easier to understand and debug.

* Lesson 2 - useState Hook
  * Project: **state-hook**
  * File: **ClassCounter.js**, **HookCounter.js**
  * `useState()` is a hook that let you add `state` into a functional component. useState is a named export.
  * `useState()` being a function,
    * Accept a **parameter** which is the `initial value` of the state property.
    * **returns** the `current value` of the state property and a `method` that is capable of updating that state property
  * Basic example of how to use a state hook in React.
    * Step 1 - Import useState.
    * Step 2 - Call useState() passing in a default value.
    * Step 3 - Assign the return pair of values to variables using array destructuring. For example
    * Step 4 - Use them while rendering the JSX.
    ```js
      const [count, setCount] = useState(0);
      // The variable `count` - will always contains the current state value.
      // `setCount` will accept an argument and set count values to that argument.
    ```
  * NOTE:
    * The default/ initial value of useState is never use on Re-renders.

```
Rules of Hooks:
  Only Call Hooks at the Top Level. Don't call Hooks inside loops, conditions, or nested functions.
  Only Call Hooks from React Functions. Make sure to call them wihtin React functional component and not just any regular JavaScript function.
```

* Lesson 3 - useState with previous state
  * File: **HookCounterTwo.js**
  * Change state value base on previous value.
  * Essential because, when multiple `setCount()` is executed for the same `count` value. Then to save performance React group the setCount() execution into one.
    In such case the count is only incremented once. For example when using for Loop and updating state without prevState value.
  * Changing state value without noting down the previous state value, is vulnarable to bug.

* Lesson 4 - useState with Object
  * File: **HookCounterThree.js**
  * The setter function provided by `useState` does not automatically merge and update objects unlike the `setState` use in the class component.
  * You have to manually merge the object and pass to the setter function.
  * Use the JavaScript `spread` operator to merge and then update the state object using useState setter function.

* Lesson 5 - useState with Array
  * File: **HookCounterFour.js**


<br/>


**Q&A:**
* #### Q1.
  * Asnwer

