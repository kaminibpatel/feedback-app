import React from 'react'

function Header({text, bgcolor, textcolor}) {
    const headerStayle = {
        backgroundColor: bgcolor,
        color:textcolor
    }
    return (
        <header style = {headerStayle}>
            <div className = 'container'>
                <h2>{text}</h2>
            </div>
        </header>
    )
}
Header.defaultProps={
text:'Feedback UI',
bgcolor:'rgba(0,0,0,0.7)',
textcolor:'#ff6a95'

}
export default Header
