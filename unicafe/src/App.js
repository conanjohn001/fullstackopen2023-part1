
import { useState } from "react";

const App =() => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodClick = ()=>{
    const updateGood = good+1
    setGood(updateGood)
  }
  const handleNeutralClick = ()=>{
    const updateNeutral = neutral+1
    setNeutral(updateNeutral)
  }
  const handleBadClick = ()=>{
    const updateBad = bad+1
    setBad(updateBad)
  }

  const StatisLine =(props)=>{
    return(
      <tr>
        <td>{props.text}</td>
        <td>{props.value}</td>
      </tr>
    );
  }

  const Statistics =({good, neutral, bad})=>{
    return(
      <table>
        <tbody>
          <StatisLine text="good" value={good} />
          <StatisLine text="neutral" value={neutral} />
          <StatisLine text="bad" value={bad} />
          <StatisLine text="all" value={good+neutral+bad} />
          <StatisLine text="average" value={(good +neutral*0 +bad*-1) /(good +neutral +bad)} /> 
          <StatisLine text="positive" value={good*100/(good +neutral +bad) + "%"} />

        </tbody>
      </table>
    );
  }

  return (
    <div className="App">
      <h1>Give feedback</h1>
      <button onClick={handleGoodClick}       >Good</button>
      <button onClick={handleNeutralClick} >Neutral</button>
      <button onClick={handleBadClick}         >Bad</button>

      <h1>Statistics</h1>

      {(good===0 && neutral===0 && bad===0) ? (
        <h2>No feedback given</h2>
      ) : (
        <Statistics good={good} neutral={neutral} bad={bad} />
      )}
      

    </div>
  );
}

export default App;
