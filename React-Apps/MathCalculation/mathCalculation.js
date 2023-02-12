const {useState} = React;

const App_MathCalculation = () => {
    
    const [state, setState] = useState({
        num1: Math.ceil(Math.random() * 10),  /*Generate random one digit number between 1-10*/
        num2: Math.ceil(Math.random() * 100), /*Generate random number between 1-99*/
        MathOperands: ['+', '-', '*', '/'],
        operandsLength: 4,                    /*Length of MathOperands array*/
        opeationType: "+",
        response: "",
        score: 0        
    });
    
    function updateResponse(event) {
        setState({
            ...state,
            response: event.target.value,
        });
    }

    function inputKeyPress(event) {
        if(event.key === "Enter") {
            let equationResult = 0;
            
            if(state.opeationType == "+")   equationResult = state.num1 + state.num2;
            if(state.opeationType == "-")   equationResult = state.num1 - state.num2;
            if(state.opeationType == "*")   equationResult = state.num1 * state.num2;
            if(state.opeationType == "/")   equationResult = parseInt(state.num1 / state.num2);

            if(equationResult == state.response) {
                setState({
                    ...state,
                    num1: Math.ceil(Math.random() * 100),
                    num2: Math.ceil(Math.random() * 10),
                    opeationType: state.MathOperands[Math.floor(Math.random()*state.operandsLength)],
                    score: state.score + 1
                });
            } else {
                setState({
                    ...state,
                    score: state.score - 1
                });
            }
        }
    }

    const EquationItem = (props) => {
        return (
            <div className="equationBox">{props.item}</div>
        );
    }

    const Equation = () => {
        return (
            <div>
                <div className="equationItems">
                    <EquationItem item={state.num1} />
                    <EquationItem item={state.opeationType} />
                    <EquationItem id="num2" item={state.num2} />
                </div>
                <input autoFocus={true} type="text" value={state.response} placeholder="Answer" onChange={updateResponse} onKeyPress={inputKeyPress} />
                <div>Score: {state.score}</div>
            </div>
        );
    }

    if(state.score == 10) {
        return (
            <div className="equation won">
                YOU WON!!
            </div>
        );
    }

    return (
        <div>
            <h3>Let have Some Tricky Mathematical Calculations</h3>
            <hr/>
            <i>Evaluate the following equation:</i>
            <div className="equation">
                <Equation />
            </div>
        </div>
    );
}

ReactDOM.render(<App_MathCalculation />, document.querySelector('#App_mathCalculation'));
