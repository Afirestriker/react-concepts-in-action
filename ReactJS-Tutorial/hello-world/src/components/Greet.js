import React from 'react';

// function Greet(props) {
//     return(<h2> Welcome {props.name} </h2>)
// }


// const Greet = props => {
//     return(
//         <h2> Welcome {props.name} </h2>
//     );
// }


const Greet = props => {
    console.log(props);
    return(
        <div>
            <h2>Welcome {props.name} a.k.a {props.heroName}</h2>
            {props.children}
        </div>
    )
}

export default Greet;