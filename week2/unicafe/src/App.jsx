import { useState } from 'react'

// Button component
// Used for each feedback button
const Button = (props) => {
  return (
    <button onClick={props.handleClick}>
      {props.text}
    </button>
  )
}

// StatisticLine component
// Displays one statistic inside a table row
const StatisticLine = (props) => {
  return (
    <tr>
      <td>{props.text}</td>
      <td>{props.value}</td>
    </tr>
  )
}

// Statistics component
// Displays all feedback statistics
const Statistics = (props) => {
  const total = props.good + props.neutral + props.bad

  // If there is no feedback yet, show this message
  if (total === 0) {
    return (
      <p>No feedback given</p>
    )
  }

  const average = (props.good - props.bad) / total
  const positive = (props.good / total) * 100

  return (
    <table>
      <tbody>
        <StatisticLine text="good" value={props.good} />
        <StatisticLine text="neutral" value={props.neutral} />
        <StatisticLine text="bad" value={props.bad} />
        <StatisticLine text="all" value={total} />
        <StatisticLine text="average" value={average} />
        <StatisticLine text="positive" value={positive + ' %'} />
      </tbody>
    </table>
  )
}

// Main App component
// Keeps all the state
const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>give feedback</h1>

      <Button
        handleClick={() => setGood(good + 1)}
        text="good"
      />

      <Button
        handleClick={() => setNeutral(neutral + 1)}
        text="neutral"
      />

      <Button
        handleClick={() => setBad(bad + 1)}
        text="bad"
      />

      <h1>statistics</h1>

      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
      />
    </div>
  )
}

export default App