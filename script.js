function App() {
  const [expression, setExpression] = React.useState("");
  const [answer, setAnswer] = React.useState("");

  const display = (symbol) => {
    setAnswer(symbol);
    const operators = ["+", "-", "*", "/"];
    const lastChar = expression.slice(-1);

    if (operators.includes(lastChar) && operators.includes(symbol)) {
      setExpression(expression.slice(0, -1) + symbol);
      return;
    }

    if (expression.includes("=")) {
      if (/[0-9.]/.test(symbol)) {
        setExpression(symbol); 
      } else {
        setExpression(answer + symbol);
      }
      return;
    }

    if (expression === "Digit Limit Met") {
      setExpression("");
      return;
    }
    if (expression.length < 22) {
      setExpression((prevEx) => prevEx + symbol);
    } else {
      setExpression("Digit Limit Met");
      setTimeout(() => {
        setExpression(expression);
      }, 500);
    }
  };

  const calculate = () => {
    try {
      const operators = ["+", "-", "*", "/"];
      const lastChar = expression.slice(-1);
      let result;
      let updatedExpression = expression;

      if (operators.includes(lastChar)) {
        updatedExpression = expression.slice(0, -1);
      }

      result = eval(updatedExpression);

      if (!Number.isInteger(result)) {
        result = parseFloat(result.toFixed(11));
      }

      setAnswer(result);
      setExpression(updatedExpression + "=" + result);
    } catch (e) {
      alert("Invalid Expression");
      setAnswer("Error");
    }
  };


  const clearAll = () => {
    setExpression("");
    setAnswer(0);
  };

  return (
    <div className="cal-container">
      <div className="grid">
        <div className="dis">
          <input type="text" value={expression} disabled />
          <div className="total">{answer === "" ? "0" : answer}</div>
        </div>
        <div onClick={clearAll} className="padButton AC">
          AC
        </div>
        <div onClick={() => display("/")} className="padButton div">
          /
        </div>
        <div onClick={() => display("*")} className="padButton times">
          x
        </div>
        <div onClick={() => display("7")} className="padButton seven dark-gray">
          7
        </div>
        <div onClick={() => display("8")} className="padButton eight dark-gray">
          8
        </div>
        <div onClick={() => display("9")} className="padButton nine dark-gray">
          9
        </div>
        <div onClick={() => display("-")} className="padButton minus">
          -
        </div>
        <div onClick={() => display("4")} className="padButton four dark-gray">
          4
        </div>
        <div onClick={() => display("5")} className="padButton five dark-gray">
          5
        </div>
        <div onClick={() => display("6")} className="padButton six dark-gray">
          6
        </div>
        <div onClick={() => display("+")} className="padButton plus">
          +
        </div>
        <div onClick={() => display("1")} className="padButton one dark-gray">
          1
        </div>
        <div onClick={() => display("2")} className="padButton two dark-gray">
          2
        </div>
        <div onClick={() => display("3")} className="padButton three dark-gray">
          3
        </div>
        <div onClick={calculate} className="padButton equal">
          =
        </div>
        <div onClick={() => display("0")} className="padButton zero dark-gray">
          0
        </div>
        <div onClick={() => display(".")} className="padButton dot dark-gray">
          .
        </div>
      </div>
      <div className="infor">
        <p>Designed and Coded By</p>
        <a href="https://web.facebook.com/vankhanh.47.2004">Original NVK</a>
      </div>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
