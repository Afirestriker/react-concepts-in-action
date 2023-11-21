import React from 'react';

const Person = ({ person }) => {
    return(
        <>
            <h2>I am {person.name}. My age is {person.age}. I am skill in {person.skill}</h2>
        </>
    );
}

export default Person;
