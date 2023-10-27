import React from 'react';

const Hello = () => {

    {/** JSX version of React component */}
    // return(
    //     <div className='dummyClass'>
    //         <h1>Hello Mike</h1>
    //     </div>
    // )

    {/** JS version of React Component */}
    // return React.createElement('div', null, '<h1>Hello Mike</h1>');
    // return React.createElement('div', null, 'h1', 'Hello Mike');
    // return React.createElement('div', null, React.createElement('h1', null, 'Hello Mike'));
    return React.createElement('div', {id: 'hello', className: 'dummyClass'}, React.createElement('h1', null, 'Hello Mike'));

    // Basically - Each JSX element is an syntactic sugar for calling React.createElement()
    // And that is why you have to import React library when you use JSX.
}

export default Hello;