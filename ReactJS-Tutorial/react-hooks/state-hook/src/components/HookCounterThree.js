import React, {useState} from 'react';

const HookCounterThree = () => {
    const [name, setName] = useState({firstName: '', lastName: ''});

    return (
        <div>
            <input
              type="text"
              value={name.firstName}
              onChange={e => setName({...name, firstName: e.target.value})}
              placeholder='Firstname'
            />
            <input
              type="text"
              value={name.lastName}
              onChange={e => setName({...name, lastName: e.target.value})}
              placeholder='Lastname'
            />
            <div>
                <h2>Your firstname is: {name.firstName}</h2>
                <h2>Your lastname is: {name.lastName}</h2>
            </div>
            <h2>{JSON.stringify(name)}</h2>
        </div>
    )
}

export default HookCounterThree;
