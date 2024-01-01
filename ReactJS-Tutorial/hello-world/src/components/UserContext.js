import React, { createContext } from 'react';

const userContext = createContext('defaultValueHere');

const UserProvider = userContext.Provider;
const UserConsumer = userContext.Consumer;

export { UserProvider, UserConsumer };
