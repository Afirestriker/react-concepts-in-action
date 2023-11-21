import React from 'react';

const NameList = () => {
    const names = ['Kate', 'Mike', 'Jack', 'Harry', 'Ron'];
    const nameList = names.map( (name, key) => <h2 key={key}>{name}</h2>)

    return(<>{nameList}</>);
}

export default NameList;
