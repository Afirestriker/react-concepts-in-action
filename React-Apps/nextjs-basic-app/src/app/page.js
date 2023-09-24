"use client"

import { useState } from "react";

function Title(props) {
    return (
        <div>
            <h1> {props.title} </h1>
            {/* using curly braces we can write javascript inside jsx */}
        </div>
    );
}

function Header({ context }) {
    return (
        <>
            <h2> {context} </h2>
        </>
    );
}

// Iterating through lists
function Names({ nameList = [] }) {
    return (
        <ul>
            {nameList.map((name) => {
                return (
                    <li id={name} key={name}>
                        {name}
                    </li>
                );
            })}
        </ul>
    );
}

// Interactivity with State and event handlers in react
function ToggleButton() {
    const [visibility, setVisibility] = useState("initial");

    function clickHandlerFunction() {
        setVisibility(visibility === "initial" ? "none" : "initial");
    }

    return (
        <>
            <button onClick={clickHandlerFunction}>
                {" "}
                {visibility == "none" ? "Show" : "Hide"} Text &gt;{" "}
            </button>
            <span style={{ display: visibility }}>
                {" "}
                React Event Handling Using State{" "}
            </span>
        </>
    );
}

export default function Homepage() {
    return (
        <>
            <Title title="React Practise" />
            <Header context="Run...Build...Deploy...🚀" />
            <Names
                nameList={["Kate", "Mike", "Jake", "Harry", "Hermione", "Ron"]}
            />
            <ToggleButton />
        </>
    );
}
