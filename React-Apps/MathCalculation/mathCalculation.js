const App_MathCalculation = () => {
    const operations = ['+', '-', '*', '/'];
    const num1 = Math.ceil(Math.random() * 10);  /*Generate one digit random number between 1-9*/
    const num2 = Math.ceil(Math.random() * 100); /*Generate one digit random number between 10-99*/
    const operationType = Math.floor(Math.random()*operations.length);
    
    return (
        <div>
            <h3>Let have Some Fun Mathematical Calculations</h3>
            <hr/>
            <div><i>Evaluate the following equation:</i></div> 
            <div className="equation">
                <div className="equationBox">{num1}</div>
                {operations[operationType]}
                <div className="equationBox">{num2}</div>
            </div>
        </div>
    );
}

ReactDOM.render(<App_MathCalculation />, document.querySelector('#App_mathCalculation'));
