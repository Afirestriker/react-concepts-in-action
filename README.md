# React
React is a JavaScript library that allows developers to build dynamic and intetractive user interfaces using a declarative approach.

## Declarative v Imperative Programming Approach
Before moving forward, let's first understand the difference between 'Imperative' and 'Declarative' programming.

Declarative programming and imperative programming are two different ways of telling a computer what to do.

- Declarative programming is like giving a recipe to a chef. You tell the chef what you want to make and the ingredients you have, and the chef figures out the steps to make it. This is similar to how React tells the computer what to display on a webpage, and the computer figures out the steps to make it happen.

- Imperative programming is like giving a chef a list of instructions on how to make a dish. You tell the chef exactly what steps to take, in what order to take them, and how to do them. This is similar to how you would tell the computer exactly what steps to take to display something on a webpage, and in what order to take them.

So in simple words, `Declarative programming is telling what you want` and `Imperative programming is telling how to do it.`

It's like if you want to make a cake and you tell the chef, I want a cake, and the chef knows how to make it. But if you give the chef a recipe, like "first mix sugar and eggs, then add flour and baking powder" you are using imperative programming.


## React (A Declarative Programming Approach)
It is made up of three main packages:

- **React**: The core library that provides the ability to create and manage components. A component is a part of a webpage that represents some information to the user.
- **React DOM**: This package is responsible for rendering components on the page.
- **Babel**: This package is a translator for JSX, an extension to JavaScript that allows developers to mix HTML and JavaScript together.

# JSX Language
JSX is an extension to JavaScript that allows developers to mix HTML and JavaScript together. This makes it easy to create and manage components in React.

# React Component
A React component is a JavaScript function that represents a React component. The power of components is that they can be reused and parameterized with properties (props) to display different information based on the values of the props.

Example:
```js
function Hello(props) {
  return (
    Hello {props.name}
  );
}
```


# React State
State is any kind of data that we want to store inside of the component itself. React provides an inbuilt function/ Hooks called `useState` to create and initialize state.

SYNTAX:
```js
const [varName, setVarName] = React.useState(0);
```

Explanation:
- `varName` is any valid JavaScript literal.
- `setVarName` is a function using which the value of `'varName'` can be modified. We can't just write `'varName = varName + 1'`, we have to use `setVarName` i.e. `setVarName(varName + 1)` to update the value by one.

Example 2:
Setting multiple React state using objects:
```js
const [varName, setVarName] = React.useState({num1:25, num2:50});
```


# Conclusion
React is a powerful JavaScript library that allows developers to build user interfaces in a declarative way. With React, developers can create reusable components, manage state, and easily translate JSX code to JavaScript. It is widely used in web development and is supported by a large community of developers.

