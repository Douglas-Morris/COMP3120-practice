// Header component
// Displays the course name.
const Header = (props) => {
  return (
    <h1>{props.course}</h1>
  )
}

// Part component
// Displays one course part and its exercises.
const Part = (props) => {
  return (
    <p>
      {props.part.name} {props.part.exercises}
    </p>
  )
}

// Content component
// Displays all course parts.
const Content = (props) => {
  return (
    <div>
      <Part part={props.parts[0]} />
      <Part part={props.parts[1]} />
      <Part part={props.parts[2]} />
    </div>
  )
}

// Total component
// Calculates the total number of exercises.
const Total = (props) => {
  const total =
    props.parts[0].exercises +
    props.parts[1].exercises +
    props.parts[2].exercises

  return (
    <p>Number of exercises {total}</p>
  )
}

// Main App component
// Stores the course and its parts.
const App = () => {

  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>

      {/* Display the course name */}
      <Header course={course.name} />

      {/* Display the course parts */}
      <Content parts={course.parts} />

      {/* Display the total */}
      <Total parts={course.parts} />

    </div>
  )
}

export default App