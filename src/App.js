import Header from './components/Header'
import index from './index.css'
import FeedbackList from './components/FeedbackList'
import FeedbackData from './data/FeedbackData'
import{useState} from 'react'

function App(){
  const [feedback, setfeedback]=useState(FeedbackData)
return (
  <> 
    <Header/>
    <div className = 'container'>
     <FeedbackList feedback={feedback}/>
    </div>
  </>
  )
}
export default App