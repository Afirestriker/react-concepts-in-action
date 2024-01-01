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
  * Props in Class component
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
  * `this.setState()` is an **`async`** method.
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

* Lesson 17 - List Rendering
  * File - **NameList.js**, **PersonList.js**, and **Person.js**
  * Learned how to render a list of items (array items) using Array.map prototype method.
  * Refractor the code for better structuring and recommened format in **PersonList.js and Person.js**

* Lesson 18 - Lists and Keys
  * File - **NameList.js**, **PersonList.js**, and **Person.js**
  * A `key` is a prop necessary to include while rendering a list of item in react.
  * A `key` is a special string attribute you need to include when creating lists of elements.
    * It is used by react to uniquely identify and distinquish different item in the lists.
  * Keys gives the elements a stable identity.
  * Keys help React identify which items have changed, are added, or are removed.
  * Help in efficient update of the user interface.
  * ***NOTE: key is a special prop i.e. you cannot pass/ access the key prop in the child component.***

* Lesson 19 - Index as key anti-pattern
  * File - **NameList.js**.
  * [Q5. When to use index as a key while rendering list items in react?](#Q5)

* Lesson 20 - Styling and CSS Basics
  * File - **Stylesheet.js**, **myStyles.css**, **InlineStyling.js**
  * 4 Different approach to styling using CSS in react
    * 1. **CSS Stylesheets**
      * Create a separate .css file and import in the Component file.
      * Apply conditional className based on props value.
      * Apply multiple className using backtick to concatenate variable and string.
    * 2. **Inline Styling**
      * In React inline style are not specified as a string, intead they are specified within object whose key's is the camelCase version of the CSS Stylename and the value is usually a string.
    * 3. **CSS MOdules**
      * CSS Module is a special file.
      * The file naming convention to be used for css module file i.e. suffix with `.module.css`.
      * The major difference between regular stylesheet and CSS-Module:
        * The regular stylesheet get auto apply to child components which may result in css conflict as the code grow bigger.
        * On the other hand, the css-module is imported and work as an object which is available in the file where it it imported.
    * 4. **CSS in JS Libraries** (Styles Components)

* Lesson 21 - Basics of Form Handling
  * File - **Form.js**
  * In Regular HTML the form elements like input, select, textarea, and so on... are responsible on their own to handle the user's input and update the respective values.
  * The form elements whose values is controlled by React is called a `Controlled Components`.
    * In the controlled components the value of input field is set to the state property.
    * And the on change event handler is added to update the state using the setState method.
  * Their are basically three simple steps:
    * 1. Create a form element.
    * 2. Assign the state value to the form element's value attribute.
    * 3. Assign the event listener to update the state.

* Lesson 22 - Component Lifecycle Methods
  * A react component goes through difference stages during it lifecycle, which are basically some predefined method that we can modify.
  * ***IMP NOTE:- This lifecycle methods are available for a class components and not on a functional components***
  * A component lifecycle methods can be miningly classified into four phases:-
    * Mounting:- When an instance of a component is being created and inserted into the DOM.
    * Updating:- When a component being re-rendered as a result of change to either its props or state.
    * Unmounting:- When a component being removed from the DOM.
    * Error Handling:- When there is an error *during rendering*, *in a lifecycle method*, or *in the constructor* of any child component.
  1. **Mounting** phase has four methods:
     * constructor
     * `static` getDerivedStateFromProps
     * render
     * componentDidMount
  2. **Updating** phase has five methods:
     * `static` getDerivedStateFromProps
     * shouldComponentUpdate
     * render
     * getSnapshotBeforeUpdate
     * componentDidUpdate
  3. **Unmounting** phase has only one method:
     * componentWillUnmount
  4. **Error Handling** phase has two methods:
     * static getDerivedStateFromError
     * componentDidCatch

* Lesson 23 - Component Mounting Lifecycle Methods
  * File - **LifecycleA.js**, **LifecycleB.js**
  1. **constructor(props)** -
     1. A special function that will get called whenever a new component is created.
     2. Use for Initializing state. Binding the event handlers.
     3. `super() / Super(props)` mandatory. Only after passing the props as a parameter to super() you can use `this.props` in current class component.
     4. Unlike props, there's no need to pass the state. The constructor directly overwrite `this.state`.
     5. What you shouldn't do is Causing Side Effect. Ex: Fetching data from a end point (HTTP Request).
  2. **static getDerivedStateFromProps(props, state)** -
     1. React documentation classified this method as a rarely used life-cycle method.
     2. This method is basically used when the state of the component depends on changes in props over time.
        **For example:** You have a component and the initial state of that component depends on the props being passed.
     3. Since this is static method you do not have access to the `this` keyword, you can not use `this.state`. Instead you simply have to return a **null** or an **object** that represents the new state of the component.
     4. What you shouldn't do is Causing Side Effect. Ex: Fetching data from a end point (HTTP Request).
  3. **render()** -
     1. The render() method is the only must required method in a class component.
     2. The redner() is simply for reading the props and state value and return the formatted JSX.
     3. The render() method is also term as pure function, since for the given props and state values. It always return the same UI.
     4. What you should not do here is to not chagne the state or interact with the DOM or make any Ajax calls.
     5. In case if the render() method contains a child-component. Then that children components lifecycle methods are also executed. Right after the parent render() method.
  4. **componentDidMount()** -
     1. This method will be called only once in the whole life cycle of a given component and it invoked immediately after a component and all its children component have been render to the DOM.
     2. This method is the perfect place to cause side effects. Ex: Interact with the DOM or perform any Ajax calls to load data.
     3. componentDidMount() is a good place to perform initialization that requires DOM nodes and also load data by making network requests.
  * **NOTE:** If you are having a children component. Then the sequence of call will be like:
    * Step 1 - parentComponent Mount Method call till render()
    * Step 2 - Inside render() method the children component will be invoked and its respective all mount method will be called.
    * Step 3 - The step-2 will be repeated if there's are more children component either nested or at level one.
    * Step 4 - Once all the children component are rendered and mounted. Then finally at the parent final mount method i.e,
               componentDidMount() method will be invoked.

* Lesson 24 - Updating Lifecycle Methods
  1. **static getDerivedStateFromProps(props, state)** -
     1. React documentation classified this method as a rarely used life-cycle method.
     2. This method is called every time a component is re-rendered.
     3. This method is basically used when the state of the component depends on changes in props over time.
        **For example:** You have a component and the initial state of that component depends on the props being passed.
     4. Since this is static method you do not have access to the `this` keyword, you can not use `this.state`. Instead you simply have to return a **null** or an **object** that represents the new state of the component.
     5. What you shouldn't do is Causing Side Effect. Ex: Fetching data from a end point (HTTP Request).
  2. **shouldComponentUpdate()** -
     1. This method is classified as the rarely used method as per the react document.
     2. It received the updated Props and State.
     3. The purpose of this method is clear from its name. It dictates if at all the component should re-render or not.
     4. By default all class components will re-render whenever the props they received or their state changes.
     5. By returning `false` the default behaviour can be prevented.
     6. One practical use of this method is to check the updated props and state with existing props and state to return
        either `true` or `false`.
     7. This method is basically for performance optimization.
     8. What you shouldn't do is Causing Side Effect. Ex: Fetching data from a end point (HTTP Request).
  3. **render()** -
     1. The thrid method in updating lifecycle is the all too familiar render() method. (Read desc above 👆).
  4. **getSnapshotBeforeUpdate(prevProps, prevState)** -
     1. This method is also classified the rarely used method as per the react documentation.
     2. This method is called right before the changes from the virtual DOM are to be reflected in the real DOM.
     3. This method accept the `prevProps` and `propsState` as its parameters.
     4. Useful to capture some information from the DOM.
        * *For Example: Read the user Scroll position. And after the update maintain that scroll position by performing some calculation.*
     5. This method will either return `null` or `value`.
     6. The returned value will be passed as the third parameter to the next lifecycle method.
     7. In Summary - **The getSnapshotBeforeUpdate(prevProps, prevState) used to read the current DOM state and return's a value or null.**
  5. **componentDidUpdate(prevProps, prevState, snapshot)** -
     1. This method is called after the render is finished in the re-render cycles.
     2. This method is guaranteed to be called only once in the re-render lifecycle. So what you can do is cause side effect.
     3. Can cause side effect in this method. I.e. you can make Ajax calls.
     4. It is recommend/ good practice to compare the prevProps/ state with current props/ state in order to decide whether to make the Ajax call or not. Thus preventing any unwanted requested.
     5. Summary - **The componentDidUpdate(prevProps, prevState, snapshot) is called only once after the component is re-rendered and is suitable to make Ajax calls based on the previous and current props/ state value.**
  * Out of all the five methods of the component updating lfecycle:
    * The render() and componentDidMount() are the more commonly used methods during the update lifecycle. The remaining three method exist for special cases and should be used sparingly.

* Lesson 24 Continue - Unmounting Phase Method
  * This phase has only one method.
  1. **componentWillUnmount()** -
     1. This method is invoked immediately before a components is unmounted and destroyed.
     2. In this method you can perform some cleanup tasks like:
        * Cancelling any network request.
        * Removing event handlers.
        * Cancelling any subscriptions
        * Invalidating timers from setTimer() or setInterval().
     3. What you shouldn't do in this method is calling setState() method. Simply because the component is never re-render after it is unmounted.
     4. Summary - **In the componentWillUnmount() method, the component will unmount, perform necessary clean up and don't call setState().**

* Lesson 24 Continue - Error Handling Phase Methods
  * This phase has two methods and the execution start whenever there is an error either during rendering, in a lifecycle method, or in the constructor of any child component. [Lesson 32 - Error Boundary](Lesson-32-Error-Boundary)
  1. **static getDrivedStateFromError()**
  2. **componentDidCatch()**

* Lesson 25 - Fragements
  * File - **FragmentDemo.js**, **Table.js**, **Columns.js**
  * In JSX it is not possible to return two node. To do so you have to wrapped the nodes into a &lg;div&gt;. But this creates a div between the parent and child component. At sometime you may just need to add a nodes and not the wrapper node. This is possible using `React.Fragment`.
  * In practical example where the fragment can be used.
    * Two separate component **Table** and **Columns**.
    * In the Table component &lt;tr&gt; tag we are importing a children Columns component and when the JSX of Columns component is render. If should be the direct child nodes of the Table's &lt;tr&gt; node.
  * There's a bit different between `<React.Fragment> ... </React.Fragment>` and `<> ... </>`
    * For Example: if you want to render a list of items using fragment. You will have to use the **`<React.Fragment>`**.
      * Since, in the **`<React.Fragment>`** you can add the **key** attribute.
      * Whereas in the **`<>...</>`** fragment you can't use the key attribute.

* Lesson 26 - Pure Components
  * File - **PureComp.js**, **RegularComp.js**, **ParentComp.js**
  * Using `React.PureComponent` class.
  * In Q&A Section below -
    * Q8. What is the difference between the `Component` and `PureComponent` class? When should we use one over the other.
    * Q9. What is Shallow props and State Comparison?
  * Summary -
    * We can create a component by extending the PureComponent class.
    * A PureComponent implements the *shouldComponentUpdate* lifecycle method by performing a shallow comparison on the props and state of the component.
    * If there is no difference, the componet is not re-render - **Performance Boost**
    * If is a good idea to ensure that all the children components are also pure to avoid undexpected behaviour.
    * When using PureComponent. Never mutate the state. Always return a new object that reflects the new state.

* Lesson 27 - Memo
  * File - **ParentComp.js**, **MemoComp.js**
  * PureComponent though only works with the class based components.
  * To achieve the same in the functional component. The `React.Memo` is used.
  * What PureComponent do to the class based components. Memo do to the functional components.

* Lesson 28 - Refs
  * File - **RefsDemo.js**
  * Refs make it possible to access DOM node directly within React.
  * It is common to create Refs within the constructor so that it can be reference throughout the class.
  * Possible Usescases:
    * Usecase 1: To autofocus an input field on form load.
    * Usecase 2: To fetch the input value.
  * Approach 1: Using React.createRef()
  * Approach 2: Using call back ref

* Lesson 29 - Refs with Class Components
  * File - **FocusInput.js**, **InputRef.js**
  * The refs can be attached to the class component. But not to the functional components.
  * Create a input ref and a class ref. Make the child component input field focus from parent component click handler.

* Lesson 30 - Forwarding Refs
  * File - **FRInput.js**, **FRParentInput.js**
  * Refs forwarding is a technique for automatically passing a `refs` through a component to one of its children.
  * Use React.ForwardRef().
  * Normally it is not possible to pass the ref attribute as props to the child component.
  * To pass ref to child component. It is needed to use React.ForwardRef().

* Lesson 31 - Portals
  * File - **index.html**, **PortalDemo.js**, **App.js**
  * React portals provide a way to render to render children into a DOM node that exist outside the DOM heirarchy of the  parent component i.e `div#app <App />`.
  * Example:
    * For far we having one DOM element in our HTML that we were mounting the React application into.
    * Go to Public > index.html > div #root
    * Go to Public > index.js > Mounted the `<App />` component onto the `div#root` element using `ReactDOM.render()`
    * So far in the React DOM tree, everty single React components are mounted over the div#root element.
  * The React Portals provide the ability to break out of the DOM tree, so to render the component onto a DOM node which is not under the div#root element using the `ReactDom.createPortal()` method.

* Lesson 32 - Error Boundary
  * File - **Hero.js**
  * [Q12. What is Error Boundary?](Q12)
  * Erro boundary catch errors during rendering, in lifecycle method, and in the constructors of the whole tree below them. However they **do not catch error inside event handlers**.
  * If you are using an event hander for example a **click** handler, you will have to use a normal try-catch statment to catch the error.
  * Summary:
    * Erro boundaries are React components that catch JavaScript error in their child component tree, log those errors, and display a fall-back UI.
    * A class component becomes an Error Boundary by defining either or both of getDerivedStateFromError() and componentDidCatch() error lifecycle methods.
    * The placement of the Error Boundary also matters as it controls if the entire app should have the fall-back UI or just the component causing the problem.
    * Provide a way to gracefully handle error in application code.

* Lesson 33, 34, 35 - Higher Order Components
  * File - **ClickCounter.js**, **HoverCounter.js**, **withCounter.js**, **App.js**
  * Par 1 - Why there is a need for HOCs
    * **To share common functionality between components without repeating the code**
    * Suppose you create a counter program that increment the count on a button click. Whcih makes the client happy.
    * Later the client request the same functionality with a heading showing count value which increment on Hover.
    * Later the client request the same functionality with a input element and increment count on keyup.
    * Slowly you realize that the same code logic has been getting repeated. It could have been possible by initalizing state in parent component with a handler functionality and passing it as props. But **Lifting the state is not a great idea**, assuming the components are not the direct child of the parent and are scatter throughout the program.
    * In such scenarios there comes a need of the concept named **HOCs**.
  * Part 2 - What excatly is the HOCs, How to create a HOCs to reuse code.
    * [Q13. What is Hight Order Components (HOC)? What is an HOC Pattern?](Q13)
    * HOC - A pattern where a function takes a component as an agrument and return a new component.
    * Implement a basic HOCs for to reuse counter functionality for clickCounter and HoverCounter by wrapping the component in withCounter.
  * Part 3 - Discussion on HOCs
    * 1. Passing down the props. The prop is passed to the HOC and not to the component whcih is wrapped.
    * 2. Pass parameter to the HOC function.

* Lesson 36, 37 - Render Props
  * File - **User.js**, **ClickCounterTwo.js**, **HoverCounterTwo.js**, **CounterRenderPops.js**, **App.js**
  * Another pattern for sharing code between react components.
  * Why need Render Props?
  * What the Render Props Pattern is?
  * How to implement Render Props?
  * The term `render props` refers to a technique for **sharing code** between React components using a **props whose value is a function.**
  * PS: Not necessary to use the props name as `render` it is just an convention.

* Lesson 38, 39 - Context API
  * FIle - **UserContext.js**, **ComponentA.js**, **ComponentB.js**, **ComponentC.js**, **App.js**
  * Context provides a way to pass data through the component tree without having to pass down manually at every level.
  * 1. Create the context. File **UserContext.js**
  * 2. Provide a context value. File **App.js**
  * 3. Consume the context value. File **ComponentC.js**


<br/>

**Q&A:**
* #### Q1. How the react application runs. How the files are called and the components gets render on web page?
  * Answer
    * The startup file structure is by default created on running the `npm create-react-app <project-name>` command.
    * On running the `npm start` command, the file are call and run in the following sequence.
      * 1st - `public/ index.html`  -- This is the only HTML file in the whole react-app. It contains the `div#root` html element.
      * 2nd - `src/ index.js`       -- index.js imports React, and render the `<App />` component on the **div#root** html element.
      * 3rd - `src/App.js`          -- App is the very first react component render on the web page when we run the React app.

* #### Q2. Difference types of componens in react?
  * Answer
    * `Functional` Component.
      * Functional component are very much similar to functions in javascript and require the use of Hooks in order to manage state.
      * Unlike the Class component we do not make use of `this` keyword to read, update, and manage state/ props.
      * Unlike the Class component do have the component lifecycle methods.
      * Unlike the Class component do not require `this` binding.
    * `Class` Component.
      * Class components make use of ES6 class and has a component lifecycle methods that represents how a component is mount, update, and unmount.
      * Class component is create by extending the `React.Component` class.
      * Require the use of `this` keyword in order to work with state and props.
      * Has one mandatory method called `render()` where we read the sate and props and return the formatted JSX.

* #### Q3. Difference between Named export and Default Export?
  * Answer
    * `Default export` are the one that can be import using alias, i.e, any other name.
    * `Named export` are the one that should be import using their exact name.

* #### Q4. Why do we need `key` prop?
  * Answer
    * The `key` prop helps react distinquish each item from the lists in order to identify which item in the list has changed, added, or removed and plays a crucial role in handling UI updates efficiently.
    * Since react maintain a virtual tree to identify the changes in the UI and updates only the parts being changed, added, or removed.

* #### Q5. When to use index as a key while rendering list items in react?
  * Answer
    * Using Array index as a key is vulnerable to cause some bug as the code progress due to how react render components by comparing react-virtual-dom and the main-dom. You can though use index as key provided some certain conditions are met:
      1. The items in your list do not have a unique id.
      2. The list is a static list and will not change.
      3. The list will never be sorted or filtered.
    * ***Tip: If needed, you can use npm-package to create a unix index***

* #### Q6. Difference between importing React, and { Component, etc... }.
  * Answer
    * Curly braces are used to import single (specific) property, whereas the word without braces is import entire object form that file.
    * ```js
      import React, { Component } from 'react';
      ```
      * Here the word **React** represents to import entire object from the file 'react'.
      * **{ Component }** means to import the particular property from the file 'react'.

* #### Q7. What the difference between `<React.Fragment>...</React.Fragment` and `<>...</>`?
  * Answer
    * Well both create a fragment i.e. empty node to wrap multiple and return multiple node while writting JSX.
    * The major difference comes when you want to add attributes in the fragment node.
    * For example: As per react classification. It it necessary to add a `key` attributes while rendering a list of items. For performance in comparing react virtual DOM and brower DOM.
    * In the `<React.Fragment>` you can add the attribute **key** whereas in the empty fragment `<>` it is not possible.

* #### Q8. What is the difference between the `Component` and `PureComponent` class? When should we use one over the other.
  * Answer Q8.1
    * **Regular Component** - A regular component does not implement the `shouldComponentUpdate()` method. It always return true by default.
    * **Pure Component** - A pure component on the other hand implements `shouldComponentUpdate()` method with a shallow props and state comparision.
    * *Description*:
      * The PureComponent class shouldComponentUpdate() method does the Shallow Comparison (SC) i.e.
        * **SC of prevState with currentState**  // `return true/ false`
        * **SC of prevProps with currentProps**  // `return true/ false`
      * And if there's there a difference in either, the shouldComponentUpdate() returns true and the component is re-rendered.

  * Answer Q8.2 (Why do we use PureComponent)
    * The `PureComponent` prevent un-necessary renders which helps in the performance boost in certain scenarios. For example rendering a list of 50+ items and by not re-rendering them when it is not required you are going to have a good performance boost.
    * **`The key point to keep in mind`**: You should not mutate objects/ arrays in props or state.
      * For example: You need to add a new item to the list, don't mutate it by pushing the item into the list. The reference to the array never changes and pure component only check for that, the component will not re-render even if there's a difference. Always return a new object or array when dealing with pure components.

* ### Q9. What is Shallow props and State Comparison?
  * Answer
    * Shallow Comparison (SC) with respective of Primitive-Types and Complex-Type.
    * **Primitive Types**
      * A SC between `var a` and `var b` returns true if `a` and `b` have the same value and are of the same type.
      ```js
        const a = 'Kate';
        const b = 'Kate';

        const ab_eq = (a === b); // return true;
      ```
    * **Complex Types**
      * For complex type `var a` and `var b`. A SC return true if `a` and `b` reference the exact same object.
      ```js
        const a = [1, 2, 3]; // {x: 1, y: 2};
        const b = [1, 2, 3]; // {x: 1, y: 2};
        const c = a;

        const ab_eq = (a === b) // return false
        const ac_eq = (a === c) // return true
      ```

* ### Q10. What are portals? When to you portals.
  * Answer:
    * Portals is a way to mount the React component onto a DOM note other than parent component.
    * The ReactDom.createPortal() is a method that lets you render some children into a different part of the DOM.
    * Syntax: `ReactDom.createPortal(children, domNode, key?)`
    * Usage:
      1. Rendering to a different part of the DOM.
      2. Rendering a popup Modal or Tooltip.
      3. Rendering React components into non-React server morkup.
      4. Rendering React components into non-React DOM nodes.

* ### Q11. Behavior of event when using Portals?
  * Anwer:
    * Events from portals propagate according to the React tree rather than the DOM tree. For example, if you click inside a portal, and the portal is wrapped in `<div onClick>`, that onClick handler will fire. If this causes issues, either stop the event propagation from inside the portal, or move the portal itself up in the React tree.

* ### Q12. What is Error Boundary?
  * Answer:
    * A class component that implements either one or both of the lifecycle methods **getDerivedStateFromError** or **componentDidCatch** becomes an **error boundary**.
    * The static method *getDerivedStateFromError* is used to render a fallback UI after an error is thrown and the *componentDidCatch* method is used to log the error information.

* ### Q13. What is Hight Order Components (HOC)? What is an HOC Pattern?
  * Answer:
    * A pattern where a function takes a component as an agrument and return a new component.
    * Typically HOC add additional functionaly or data to the originalComponent.
    * Syntax:
    ```js
    const NewComponent = higherOrderComponent( originalComponent );
    const EnhanceComponent = higherOrderComponent( originalComponent );

    // non technical point of view
    const IronMan = withSuit( TonyStark );
    // TonyStart is the original component,
    // withSuit() is the function that will enhanced TonyStart and return IronMan which is the enhanced component.
    ```
