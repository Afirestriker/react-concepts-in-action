import React, { useState, useCallback } from "react";
import Title from "./Title";
import Count from "./Count";
import Button from "./Button";

const ParentComponent = () => {
    console.log("Parent component");

    const [age, setAge] = useState(20);
    const [salary, setSalary] = useState(50000);

    const updateAgeHandler = useCallback(() => {
        setAge(age + 1);
    }, [age]);

    const updateSalaryHandler = useCallback(() => {
        setSalary(salary + 1000);
    }, [salary]);

    return (
        <div>
            <Title title={'Person Info'} />
            <Count title={'Age'} count={age} />
            <Button title={'Age'} updateHandler={updateAgeHandler} />
            <Count title={'Salary'} count={salary} />
            <Button title={'Salary'} updateHandler={updateSalaryHandler} />
        </div>
    );
}

export default React.memo(ParentComponent);
