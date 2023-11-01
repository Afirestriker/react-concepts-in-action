import React from 'react';

// function Greet(props) {
//     return(<h2> Welcome {props.name} </h2>)
// }


// const Greet = props => {
//     return(
//         <h2> Welcome {props.name} </h2>
//     );
// }


const Greet = ({name, heroName, children}) => {
    return(
        <div>
            <h2>Welcome {name} a.k.a {heroName}</h2>
            {children}
        </div>
    )
}

export default Greet;