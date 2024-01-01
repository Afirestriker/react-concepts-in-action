import React from 'react';
import { UserConsumer } from './UserContext';

const ComponentC = () => {
    return(
        <UserConsumer>
            {(username) => {
                return (
                    <div>
                        Component C Says: {username}
                    </div>
                )
            }}
        </UserConsumer>
    )
}

export default ComponentC;
