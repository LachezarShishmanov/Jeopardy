import { useState, useEffect } from "react"
import QuestAns from './components/QandA'
import './App.css';

function App() {
  const[question, setQuestion]= useState (null)
  useEffect(() => {
    getQuestion()
  }, [])
  const getQuestion = async () => {
    try{
      const res = await fetch('http://jservice.io/api/random')
      const data = await res.json()
      console.log(data);
      setQuestion(data)
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className="App">
      <h1>Welcome to Jeopardy</h1>
     
      <QuestAns question={question}/>
    </div>
  );
}

export default App;
