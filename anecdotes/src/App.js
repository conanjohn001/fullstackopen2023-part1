// import logo from './logo.svg';
// import './App.css';
import { useState } from "react";

const App=()=> {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(anecdotes.map(()=>0))
  const [maxVote, setMaxVote] = useState(0)

  const getRandomNum =(min, max)=>{
    min =Math.ceil(min);
    max =Math.floor(max);
    return Math.floor(Math.random()*(max -min) +min);
  }

  const handleAnecdote = ()=>{setSelected(getRandomNum(0, anecdotes.length))}

  const handleVote = ()=>{
    //update votes
    const updateVotes = [...votes]
    updateVotes[selected] += 1;
    setVotes(updateVotes);

    //find max vote
    const indexMax = updateVotes.indexOf(Math.max(...updateVotes))
    setMaxVote(indexMax);
  }

  return (
    <div className="App">
      <h1>Anecdote of the day</h1>
      <p>{anecdotes[selected]}</p>
      <p>Has {votes[selected]} votes</p>

      <button onClick={handleAnecdote} >next anecdote</button>
      <button onClick={handleVote} >vote</button>

      <h1>Anecdote most votes</h1>
      <p>{anecdotes[maxVote]}</p>
      <p>Has {votes[maxVote]} votes</p>

    </div>
  );
}

export default App;
