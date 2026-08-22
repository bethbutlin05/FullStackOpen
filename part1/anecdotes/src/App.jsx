import { useState } from 'react'

const Button = (props) => (
  <button onClick={props.onClick}>
    {props.text}
  </button>
)

const App = () => {

  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(0)

  const [votes, setVote] = useState(new Array(anecdotes.length).fill(0))

  const getRnd = () => {
    const rndIndex = Math.floor(Math.random() * anecdotes.length)
    setSelected(rndIndex)
  }

  const vote = () => {
    const copy = [...votes]
    copy[selected] += 1
    setVote(copy)
  }

  const mostVotes = votes.indexOf(Math.max(...votes))

  return (
    <div>
      <h1>Anecdote of the Day:</h1>
      <p>{anecdotes[selected]}</p>
      
      <p>This anecdote has {votes[selected]} votes</p>
     
      <Button onClick={getRnd} text="new anecdote"/>
      <Button onClick={vote} text="vote"/>
     
      <h3>The anecdote with the most votes:</h3>
      <p>{anecdotes[mostVotes]}</p>
      <p>has {Math.max(...votes)} votes</p>
      <p></p>
    </div>
  )
}

export default App
