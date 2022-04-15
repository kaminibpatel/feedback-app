import Header from './components/Header'
import index from './index.css'
import FeedbackList from './components/FeedbackList'
import FeedbackData from './data/FeedbackData'
import{useState} from 'react'

function App(){
  const [feedback, setFeedback]=useState(FeedbackData)
  const feedbackDelete = (id) => {
    if(window.confirm('Are you sure you wan to delete?'))
   setFeedback(feedback.filter((item)=> (item.id) !== id))
  }
return (
  <> 
    <Header/>
    <div className = 'container'>
     <FeedbackList feedback={feedback} handleDelete={feedbackDelete}/>
    </div>
  </>
  )
}
export default App