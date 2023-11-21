import React from 'react';
import Person from './Person';

const PersonList = () => {
    const persons = [
        {
            id: 1,
            name: "Kate",
            age: 15,
            skill: "Cricket",
        },
        {
            id: 2,
            name: "Mike",
            age: 16,
            skill: "Soccer",
        },
        {
            id: 3,
            name: "Jack",
            age: 14,
            skill: "Basketball",
        }
    ];

    const personList = persons.map( person => <Person key={person.id} person={person}/>);

    return(<>{personList}</>);
}

export default PersonList;
