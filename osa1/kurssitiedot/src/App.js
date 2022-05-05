const Part = (props) => {
  return (
    <p>{props.osa} {props.harjoitukset}</p>
  )
}

const Header = (props) => {
  return (
    <div>
    <h1>{props.kurssi}</h1>
    </div>
  )
}
const Content = (props) => {
  return (
    <div>
    <Part osa = {props.osa1} harjoitukset = {props.harjoitukset1} />
    <Part osa = {props.osa2} harjoitukset = {props.harjoitukset2} />
    <Part osa = {props.osa3} harjoitukset = {props.harjoitukset3} />
    </div>
  )
}
const Total = (props) => {
  return (
    <div>
    <p>Number of exercises {props.luku1 + props.luku2 + props.luku3}</p>
    </div>
  )
}

const App = () => {
  /*
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }

  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }
  */
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
    <>
      <Header kurssi = {course.name} />
      <Content osa1 = {course.parts[0].name} harjoitukset1 = {course.parts[0].exercises}
               osa2 = {course.parts[1].name} harjoitukset2 = {course.parts[1].exercises}
               osa3 = {course.parts[2].name} harjoitukset3 = {course.parts[2].exercises} />

      <Total luku1 = {course.parts[0].exercises} luku2 = {course.parts[1].exercises} luku3 ={course.parts[2].exercises} />
    </>
  )
}

export default App
