# React Tutorial

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
7. Access the application. Typically the URL is **<http://localhost:3000/>**

```txt
Rules of Hooks:
  Only Call Hooks at the Top Level. Don't call Hooks inside loops, conditions, or nested functions.
  Only Call Hooks from React Functions. Make sure to call them wihtin React functional component and not just any regular JavaScript function.
```

## Tutorial

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

* Lesson 3 - useState with previous state
  * Project: **state-hook**
  * File: **HookCounterTwo.js**
  * Change state value base on previous value.
  * Essential because, when multiple `setCount()` is executed for the same `count` value. Then to save performance React group the setCount() execution into one.
    In such case the count is only incremented once. For example when using for Loop and updating state without prevState value.
  * Changing state value without noting down the previous state value, is vulnarable to bug.

* Lesson 4 - useState with Object
  * Project: **state-hook**
  * File: **HookCounterThree.js**
  * The setter function provided by `useState` does not automatically merge and update objects unlike the `setState` use in the class component.
  * You have to manually merge the object and pass to the setter function.
  * Use the JavaScript `spread` operator to merge and then update the state object using useState setter function.

* Lesson 5 - useState with Array
  * Project: **state-hook**
  * File: **HookCounterFour.js**, **HookCounterFive.js**
  * As learn in the lesson 4, the useState setter function doesn't merge and update or in the case of an array the setter function doesn't automatically append the item to the
    end of the list, we need to handle that manually using the spread operator.
  * Follow this simple steps:
    1. In case of an array, the argumetn to the setter function will be an array [].
    2. Spread the existing items (array).
    3. Push the new item / an object.

* Lesson 6 - Introduction to useEffect Hook
  * `useEffect` is used for causing side effects in the functional component.
  * The `useEffect` hook help you perform **side effects** in **functional components**, that's too in a much better way compare to Class component.
  * In the class components, the side effects is handled using the lifecycle methods like `componentDidMount`, `componentDidUpdate`, and `componentWillUnmount`.

  * ```javascript
      compoentDidMount() {
        document.title = `You clicked ${this.state.count} times.`;     // Repeated code
        this.interval = setInterval(this.tick, 1000);                  // unrelated code in same block
      }
      componentDidUpdate() {
        document.title = `You clicked ${this.state.count} times.`;     // Repeated code
      }
      componentWillUnmount() {
        clearInterval(this.interval);
      } ```

  * Unlike class components, the `useEffect` hook helps you avoid code repeatation/ duplication, and grouping together the related code, instead of spliting between
    different lifecycle methods.
  * It is a close replacement for ***componentDidMount***, ***componentDidUpdate***, and ***componentWillUnmount***. I.e, the three lifecycle can be handle using
    the useEffect hook.

* Lesson 7 - useEffect after render
  * Project: **effect-hook**
  * File: **ClassCounterOne.js**, **HookCounterOne.js**
  * 1. Implement side-effect in Class component to update the document title on every subsequent render/ re-render of the component.
  * 2. Replace the same functionality in React Functional Component, using useEffect hook.
  * 3. How does the useEffect works? [Q4](Q4)
  * Steps:
    * Import `useEffect` from `react`.
    * Call it within the component.
    * Pass in the function which has to be executed after every render of that component.

* Lesson 8 - Conditionalty run effects
  * Project: **effect-hook**
  * File: **ClassCounterOne.js**, **HookCounterTwo.js**
  * In the Class Component, we required to implement the `if` condition check between prevState value and current state value to conditionaly run the effects.
  * Unlike Class Component, In order to conditionaly run effects in `Functional Component`, specify the second parameter (**dependency array**) to `useEffect`.
  * The second parameter is the array of values, that the effect depends on. If the values don't change between renders, the effect simply not run.

* Lesson 9 - Run effects only once
  * Project: **effect-hook**
  * File: **ClassMouse.js**, **HookMouse.js**
  * > How to mimic componentDidMount with useEffect in functional component.
  * > Example 1: Run effect one in Class component using componentDidMount lifecycle method. (**classMouse.js**)
  * > Example 2: Implment the same using useEffect in functional component. (**HookMouse.js**)
  * In order to run useEffect only once during, pass in the second argument an empty array [].
  * The empty array basically tells react, that this particular effect does not depend on any props or state, so there is just no reason
    for you to call this effects on re-renders.
  * So React just call this effect on initial render of the component, and forget about it, and thus mimic the componentDidMount.
  * **Summary: We can mimic the componentDidMount in useEffect by simply passing in an empty array as the second parameter to useEffect.**

* Lesson 10 - useEffect with cleanup
  * Project: **effect-hook**
  * File: **MouseContainer.js**, **HookMouse.js**
  * > How to mimic the componentWillUnmount with useEffect in functional component.
  * > Create a container component for the HookMouse component. With a button to toggle the components visibility.
  * The point ot make note of here is, when you want to execute some component clean up code. You included in a function and
    return that function from the function passed to useEffect first argument.
  * The clean code can be canceling subscriptions, async tasks, timers, or even removing event handlers as seen in the above example.

* Lesson 11 - useEffect with incorrect dependency
  * Project: **effect-hook**
  * File: **IntervalClassCounter.js**, **IntervalHookCounter.js**
  * > Highligting a common mistake, mostly made by beginner with useEffect.
  * > Create a simple class counter, that automatically increment every second.
    * > Class component implmenetation of an interval counter.
    * > Implement the same using functional component and hooks.
  * The point to make note of there is, when you pass an emtpy array [] as the second argument to useEffect, the useEffect runs only one and forget,
    that's also mean, the useEffect do not monitor any update in props and state. Which may lead to unexpected behaviour.
  * For example: If the `setCount` could have been updated directly without prevState, then the value will be udpated only once, since React grouped
    related setState. And that means component will no re-render and subsequent `tick` interval.
  * To prevent such behevior,
    1. Pass `count` to the useEffect array dependency, or
    2. Make use of `prevState` to update the `setCount` which prevent the grouping of setCount and the component re-renders.
    * **The second way is beter in this scenario, as this properly mimic the `componentDidMount`, `componentWillUnmount` as implemented in IntervalClassCounter.js**
  * **Additional handy tips:**
    * Always think before specifying an empty dependency array.
    * Sometime you might want to call an function within useEffect

    * ```js
      //...some functional component statements
      function doSomething() {
        console.log(someProps);
      }

      useEffect(() => {
        doSomething(); // This seems clear but make developer easily make mistake and forget to track `someProps`
        const interval = setInterval(tick, 1000);
        return () => clearInterval(interval);
      }, []);
      //...some functional component statements
      ```

    * To prevent above mistake, the recommended is to group related code together:

    * ```js
      //...some functional component statements
      useEffect(() => {
        function doSomething() {
          console.log(someProps);
        }
        doSomething();
        const interval = setInterval(tick, 1000);
        return () => clearInterval(interval);
      }, [someProps]);
      //...some functional component statements
      ```

* Lesson 12 - Fetching data with useEffect
  * Project: **effect-hook**
  * File: **DataFetching.js**
  * Make useEffect to fetch data from json-placeholder using axios module after component render.
  * Runs the useEffect only once by passign empty dependency array, as second argument to useEffect.

* Lesson 13 & 14 - Fetching single post data with useEffect
  * Project: **effect-hook**
  * File: **DataFetchingTwo.js**
  1. Add an Input field for post ID, and fetch data on updating input field value.
     * Pass an postId to array dependency to make useEffect run on change of the input value.
  2. Add an Button element and on click, fetch data based on input field value.
     * Create new useState `updatedPostId` and update it to `postId` on button click.
     * Pass `updatedPostId` to useEffect array dependency.

* Lesson 15 - Introduction to useContext
  * Context provides a way to pass data through the component tree without having to pass props down manually at every level.
  * For Example:
    * Consider a component tree as **A -> B -> C**.
    * To pass a props to **Component-C**, you need to pass it through Component-A **TO** Component-B **TO** Component-C
    * Context help in passing the props directly to the **Component-C**

* Lesson 16 - context in Class component
  * Project: **context-hook**
  * File: **ComponentA.js**, **ComponentB.js**, **ComponentC.js**

* Lesson 17 - context in Functional component
  * Project: **context-hook**
  * File: **ComponentC.js**, **ComponentD.js**
  * Import **`useContext`** hook from React to use context in React functional component.
  * The `useContext` hook simplify the context consumer step as compare to the class component's `<context.consumer></context.consumer>`

* Lesson 18 - Introduction to useReducer Hook
  * `useReducer` is a hook used for state management.
  * useReducer is related to the JavaScript array reduce reducer functions.
  * Syntax:

    ```js
    // JavaScript array reduce
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    const accumulatedValue = [1,2,3,4].reduce(reducer /*reducer function*/, 5 /*initialValue*/);

    // React useReducer
    reducer(currentState, action);
    const [newState, dispatch] = useReducer(reducer, initialState);
    ```

  * **useReducer is basically changing the state in React component.**
  * It is an alternative to useState.
  * useState is built using useReducer. I.e. useReducer is more primitive hook compare to useState.
  * So, useReducer is basically changing the state in the react component.

* Lesson 19 - useReducer (simple state and action)
  * Project: **reducer-hook**
  * File: **CounterOne.js**
  * Import the `useReducer` hook from react and implement the simple state and action.
  * By simple state and action, its means using a primitive value for state and string for action instead of using array/ object.

* Lesson 20 - useReducer (complex state and action)
  * Project: **reducer-hook**
  * File: **CounterTwo.js**
  * Design and built a new component, `CounterTwo.js`, to demonstrate a more complex use of the `useReducer` hook.
  * Instead of managing a simple counter with a primitive state, `CounterTwo` showcases how to manage a state object using `useReducer`. This is particularly beneficial for:
    1. **Managing Multiple Values in a Single State:** The state now holds an object `{ firstCounter: 0 }`, allowing you to easily scale up and track multiple related values within a single state object. This is especially relevant for managing global state where you might have various properties to track.
    2. **Passing Additional Data with Actions:**  The code demonstrates passing additional data to the reducer function through the `action` object. For instance, the increment/decrement actions now accept a `value` property to control the increment/decrement step, making the component more flexible.
  * Essentially, this commit elevates the `useReducer` example from a simple counter to a more realistic scenario of managing complex state transitions, highlighting the advantages and flexibility it offers for real-world applications.

* Lesson 20 (part-2) - useReducer (complex state and action)
  * Project: **reducer-hook**
  * File: **CounterTwo.js**
  * This code change introduces the ability to manage two separate counters within the `CounterTwo` component using a single `useReducer` hook.
  * Previously, the component only managed a single counter (`firstCounter`). This update adds a `secondCounter` to the `initialState` and implements corresponding actions in the reducer function: `incrementCounter2` and `decrementCounter2`. These actions allow independent control of the second counter's value.
  * The UI is also updated to display and interact with both counters. This showcases how a single reducer can effectively manage multiple pieces of state, promoting better organization and maintainability within the component.

* Lesson 21 - Multiple useReducer
  * Project: **reducer-hook**
  * File: **CounterThree.js**
  * This code change introduces a new component, `CounterThree`, to demonstrate how to manage multiple pieces of state within a single component using multiple `useReducer` hooks.
  * Instead of creating separate reducers for each counter, `CounterThree` employs a single `reducer` function for both `count` and `countTwo`. This approach reduces redundancy and promotes code reuse, as both counters exhibit the same incrementing, decrementing, and resetting behavior.
  * Essentially, this change highlights an elegant way to handle similar state updates efficiently, enhancing the organization and maintainability of the codebase.

* Lesson 22 - useReducer with useContext
  * Project: **reducer-hook**
  * File: **CounterFour.js, CounterFourA.js, CounterFourB.js, CounterFourC.js, CounterFourD.js**
  * Component Nesting:
    * CounterFour -> CounterFourA -> CounterFourB
    * CounterFour -> CounterFourA -> CounterFourC -> CounterFourD
  * `useReducer` inside a component is Local to that component i.e. Local State Management.
  * In case you want to share state between component without prof deeling. You need to main a Global State. I.e. Global State Management.
  * To do so, we have a Context API (createContext and useContext) provided by React.
  * This code change introduces a new counter component (`CounterFour`) that demonstrates global state management in React using `useReducer` and `useContext`.
  * Previously, `useReducer` was used for local state management within individual components. This change addresses the need for sharing state across multiple nested components.
  * The key changes are:
    * A new context (`CountContext`) is created to hold the global state (`countValue`) and the dispatch function (`countDispatch`).
    * `CounterFour` uses `useReducer` to manage the counter state and provides this context to its children components.
    * Nested components (`CounterFourB` and `CounterFourD`) can access and update the shared counter state by utilizing `useContext` to consume the `CountContext`.
  * This approach offers a more efficient way to manage state globally, as opposed to passing props down through multiple levels, thereby improving code structure and maintainability when dealing with shared state.

* Lesson 23 - Fetching data with useState
  * Project: **reducer-hook**
  * File: **DataFetchingOne.js**
  * An example on fetching data using useState and then in next turial with useReducer.
  * This code change introduces a new component, `DataFetchingOne`, which is responsible for fetching data from an external API and displaying it to the user.
  * The component utilizes the `useState` and `useEffect` hooks for managing the different states of the data fetching process (loading, error, and success) and for fetching the data when the component mounts, respectively. This approach provides a clean and efficient way to handle asynchronous operations and update the UI based on the data fetching results.
  * Additionally, the component provides visual feedback to the user by displaying a loading message while fetching the data and an error message if the request fails. This enhances the user experience by providing transparency and clarity about the data fetching process.

* Lesson 24 - Fetching data with useReducer
  * Project: **reducer-hook**
  * File: **DataFetchingTwo.js**
  * This code change introduces a new React component, `DataFetchingTwo.js`, that demonstrates how to fetch data using the `useReducer` hook alongside `useEffect`.
  * Instead of managing loading, error, and data states individually with `useState`, this component employs a reducer. The reducer function consolidates state logic into a single entity, making the code cleaner and potentially easier to maintain, especially as the complexity of data fetching logic grows.
  * The component fetches data from `'https://jsonplaceholder.typicode.com/posts/1'` when it mounts and uses the reducer to dispatch actions based on the result of the fetch request. This updates the state accordingly, visually providing loading or error messages, and ultimately renders the fetched post data.
  * This approach offers a structured alternative to using multiple `useState` hooks for complex data fetching scenarios. This makes the state management more organized and potentially easier to scale.

* Lesson 25 - useState and useReducer
    | Feature                         | useState                  | useReducer              |
    |---------------------------------|---------------------------|-------------------------|
    | Type of state                   | Number, String, Boolean   | Object or Array         |
    | Number of state transitions     | One or two                | Too many                |
    | Related state transitions?      | No                        | Yes                     |
    | Business logic                  | No business logic         | Complex business logic  |
    | Local vs global                 | Local                     | Global                  |

* Lesson 26 - useCallback Hook
  * Project: **callback-hook**
  * File: **ParentComponent.js, Title.js, Count.js, Button.js**
  * useCallback hook helps in performance improvement.
  * useCallback is a hook that will return a memoized version of the callback function that only changes if one of the dependencies has changed.
  * It is useful when passing callback to optimized child components that rely on reference equality to prevent unecessary renders.
  * Imp: Though useCallback improve performance, it has its own drawback as well [Read More](https://www.youtube.com/redirect?event=video_description&redir_token=QUFFLUhqblVtZHlxc0pweEttR3MtYkduZkNPc0JJU0hTQXxBQ3Jtc0tsZDdZSjk0RXVsRldIM1REZ2Q2STIybllER3pyTVlQRU45emVUa1dSZ2ktNXMycXhLa01xT3lWYUxCTWEwbHFnN2lNY0N1YVBRUEVRSmItWmRMZVZ5ZG1fTFhrNlUwdHNDNjZGaTRZbnU1Yl9uWEdHaw&q=https%3A%2F%2Fkentcdodds.com%2Fblog%2Fusememo-and-usecallback&v=IL82CzlaCys).

* Lesson 27 - useMemo Hook
  * Project: **memo-hook**
  * File: **counter.js**
  * useMemo and useCallback both are use for performance improvement utilizing memoization.
  * But unlike useCallback that memoize the function instance, useMemo memoize the output.

* Lesson 28 - useRef Hook
  * Project: **ref-hook**
  * File: **FocusInput.js**
  * Focus the input on component load. Using useRef hook.

---

## Summary on Hooks

* **Summarise State-Hook:**
  * Lesson 1 to 6.
  * The useState hook allows you to add state to functional components.
  * To use the useState hook, you call it inside a functional component. This creates a single piece of state for the component.
  * In classes, the state is always an object. With the useState hook, the state doen't have to be an object.
  * The state can be an object, an array, a number, a boolean, or a string.
  * The useState hook returns an array with 2 elements:
    * The first element is the current value of the state and,
    * The second element is a state setter function to update the state.
  * When you call the setter function with a new value, the component will re-render.
  * If the new state value depends on the previous state value, you can pass a function to the setter function. This setter function will receive the previous state as an argument.
  * When working with objects or arrays, it's important to spread the state variable before calling the setter function. This ensures that you don't overwrite the original state.

* **Summarise Effect-Hook:**
  * Lesson 7 to 14
  * useEffect is an hook used in react functional component.
  * useEffect help to perform side effect in react functional component.
  * It's helps mimic the **`componentDidMount`**, **`componentDidUpdate`**, **`componentWillUnmount`** lifecycle methods functionality in react functional component.
    Through modifying the dependency array according to the need.
  * For Example:

    ```js
      // Syntax: useEffect(callbackFunction, dependencyArray);

      // 1. Mimic componentDidMount, componentDidUpdate and componentWillUnmount
      useEffect(() => {
        // some code statements

        return callbackFunction // If provided with return then mimic componentWillUnmount
      });

      // 2. Mimic componentDidMount
      useEffect(() => {
        // some code statements
      }, []);

      // 3. Mimic componentDidMount and on specific state-hooks mimic the componentDidUpdate
      useEffect(() => {
        // some code statements
      }, [stateVariable_1, stateVariable_n]);
    ```

* **Summarize useContext-Hook**
  * Lesson 15 to 17
  * `useContext` provides a way to share state between components without prop drilling. This simplifies component code and improves maintainability.
  * Creating a context: Define a React context using the `React.createContext` function. This creates an object with two components: `Provider` and `Consumer`.
  * Providing context: Wrap components that share the state with the Provider component. **Pass the state value as a prop to the Provider.**
  * Consuming context: Use the `useContext` hook within any child component to access the shared state from the nearest Provider above it.

* **Summarize useRecuer-Hook**
  * useRecucer is a hook that is used for state management in React.
  * useRecucer is related to reducer functions.
  * Syntax:

    ```js
    // React useReducer
    reducer(currentState, action);
    useReducer(reducer, initialState);
    ```

  * **useReducer is basically changing the state in React component.**

---
**Q&A:**

* ### Q1. What is the `useEffect` hook and why is it useful?

* ### Q2. How to use the `useEffect` hook to set the document title on initial render and subsequent updates

  * Asnwer - Lesson 6

* ### Q3. Understanding, how we can use the useEffect hook to set up the document title on initial render of the component, as well as on subsequent renders when the component update's

  * Asnwer - Lesson 7

* ### 04. How does the useEffect hook works?

  * Answer
    * When we specify/ implement the useEffect. We are basically requesting react to execute the function that is pass as an argument to the useEffect,
      everytime the component renders.
    * useEffect runs after every render of the component.
    * useEffect is placed inside the component, by doing this we can easily access the component `states` and `props` without having to write any additional code.
