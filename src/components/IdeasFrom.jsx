import React, {useState}from 'react'

function IdeasForm(props) {
    let [input, setInput] = useState("")
function handleSubmit(e) {
    e.preventDefault()

    props.addIdeas(input)
}

    return (
        <h1>
            <form onSubmit={handleSubmit}>
                <input type ="text"/>
                <button type='submit'>Submit yourIdaa</button>
            </form>
        </h1>
    )
}

export default IdeasForm