import FeedbackItem from './FeedbackItem'

function FeedbackList({feedback}) {
    if(!feedback || feedback === 0)
    <p>No feedback available</p>
    return (
        <div className='feedback-list'>
         {feedback.map((item)=> (
         <FeedbackItem key={item.id} item={item}/>
         ))}
        </div>
    )
}

export default FeedbackList
