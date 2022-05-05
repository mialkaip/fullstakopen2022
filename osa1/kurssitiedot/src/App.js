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
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <>
      <Header kurssi = {course} />
      <Content osa1 = {part1} harjoitukset1 = {exercises1}
               osa2 = {part2} harjoitukset2 = {exercises2}
               osa3 = {part3} harjoitukset3 = {exercises3} />

      <Total luku1 = {exercises1} luku2 = {exercises2} luku3 ={exercises3} />
    </>
  )
}

export default App
