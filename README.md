# React - JS Library

## React is a JavaScript library

### Three Packages
- React... Component, state
- React Dom... Rendering component on page
- Babel... Translator for JSX language 

### JSX Language:
Extension to Javascript where we mix up html and JavaScript together.

• Read is a Declarative programming not a imperative programming

### React component
- It is a JS function that is represent as React component.
- Component is a part of webpage that represent some information to the user.
#### Power of component is that
- We can re-use component.
- we can parameterized, cimponent with properties (props) to display different information based on the valve of probs.

### React competent properties
- Same like html elements has attributes. React component can have properties.
- Example: 
    <Hello name="Ron" />
      function Hello(props) {
        return ( <div> Hello {props.name} </div> );
      }

### React State
- State is going to be any kind of data that we want to store inside of the component itself.
- SYNTAX:
      const [varName, setVarName] = React.useState(0);
- Explaination
  - 1. varName, is nothing but any valid js literal.
  - 2. setVarName, is function using which the value of 'varName' can be modified. We cant just write "varName=varName+1". We have to use setVarName i.e. setVarName(varName+1); to update value by one
  - 3. useState is React inbuilt function to create and initialize react state.

- Example 2: Setting multiple react state using objects:
      const [varName, setVarName] = React.useState({num1:25, num2:50});
