import React, { useState } from "react";
import useInput from "../hooks/useInput";

const UserForm = () => {
    const [firstName, bindFirstName, resetFirstName] = useInput('');
    const [lastName, bindLastName, resetLastName] = useInput('');

    const submitHandler = (event) => {
        event.preventDefault();
        console.log(`Hello ${firstName} ${lastName}`);

        resetFirstName();
        resetLastName();
    }

    return (
        <div>
            UserForm
            <form>
                <div>
                    <label>First Name</label>
                    <input
                        type="text"
                        {...bindFirstName}
                        placeholder="Enter First Name"
                    />
                </div>
                <div>
                    <label>Last Name</label>
                    <input
                        type="text"
                        {...bindLastName}
                        placeholder="Enter Last Name"
                    />
                </div>
                <div>
                    <button type="submit" onClick={(e) => submitHandler(e)}>Submit</button>
                </div>
            </form>
        </div>
    );
}

export default UserForm;
