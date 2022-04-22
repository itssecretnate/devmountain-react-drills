import React, {useEffect} from 'react'

function TodoList(props) {

    const {todoList} = props;

    return (
        <div>
            <h1>TodoList</h1>
            <div>
                {todoList.map(item => <h2>{item}</h2>)}
            </div>
        </div>
    )
}

export default TodoList