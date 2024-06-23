# React + Redux

**React and Redux are two different things.**

## Redux and react-redux

- Redxu is in itself is an library (Core Library).
- Whereas, react-redux is an implementation of it in react for wiring so that react and redux can communicate with eachother.

## Redux Toolkit

- Redux tookit or RDK, is an innovative version to Flux and Redux.
- In redux toolkit most of the work has been automated. We don't need to take a look for preventing state mutation, it is handle by redux-tookit behind the scene.

## Steps for implementing redux-toolkit and react-redux

### Initialize the Redux Store

- Step 1: Create a file to implement the redux store. For example `store.js`
  - Each application or app has only one store also called as **'Single source of truth'** (Except some rare exceptions).
- Step 2: import the `ConfigureStore` function from `@redux/toolkit`.
  - ConfigureStore accept one parameter of type Object.
- Step 3: store need to know the reducer, to understand the data-flow.

### Initialize the Redux Reducer

Note: Base on documentation, it is a convention that the feature is called as **slice** in redux.

- Step 4: Create a slice. For example `todoSlice.js`
- Step 5: import the `createSlice` method from `@redux/toolkit`
- Step 6: createSlice accept one parameter of type object.
- Step 6: For creating slice, we basically need 3 things
  1. name
  2. initialState
  3. reducers - object for key-value functions list
     1. reducer function accept two parameter by default i.e., `state` and `action`
        1. state represent the current/ updated state value in the store
        2. action provide the additional data to be use in function definition
        - Note: Unlike Context API, in redux-tookit we do not need to preserve the state. That is, no need to spread the state array for updating.

### Export and Import

#### Export

- Step 7: Export the individual functionality.
  - For example, if you have 10 reducers. You will need to export 10 reducers. As we don't know, when and where we might require that reducer.
- Step 8: Export the main source of all the reducers
  - Important, as it is require in store to configure store with reducer list. As mentioned in `**step 3**`

#### Import

- Step 9: Import the required reducer in the component.

### useSelector and useDispatch

- `useSelector` and `useDispatch` are two methods provided by `react-redux`
- `useSelector` is used for getting the state value
- `useDispatch` is used to pass data as action to the reducer function.
- `useDispatch` is an method, inside which we called the reducer function, with the provided payload.

## Wrapper Provider

    - Similar to context API, to use

## React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
