const operations = ['+', '-', '*', '/'];
const num1 = Math.ceil(Math.random() * 10);  /*Generate random one digit number between 1-9*/
const num2 = Math.ceil(Math.random() * 100); /*Generate random two digit number between 10-99*/
const operationType = Math.floor(Math.random()*operations.length);

const EquationItem = (props) => {
    return (
        <div id={props.id} className="equationBox">{props.item}</div>
    );
}

const Equation = () => {
    return (
        <div className="equation">
            <EquationItem id="num1" item={num1} />
            <EquationItem id="opType" item={operations[operationType]} />
            <EquationItem id="num2" item={num2} />
            <EquationItem item="=" />
            <input type="text" id="result" name="result" placeholder="Result" />
        </div>
    );
}

function checkResult() {
    debugger;
    let resultVal = document.querySelector('#result');
}

const App_MathCalculation = () => {
    return (
        <div>
            <h3>Let have Some Fun Mathematical Calculations</h3>
            <hr/>
            <div><i>Evaluate the following equation:</i></div> 
            <Equation />
            <div><button onClick={checkResult()}>Check</button></div>
        </div>
    );
}

ReactDOM.render(<App_MathCalculation />, document.querySelector('#App_mathCalculation'));
