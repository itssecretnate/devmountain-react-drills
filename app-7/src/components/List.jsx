import React from 'react'
import Todo from './Todo'

function List(props) {

    const {todoList} = props;

    return (
        <div>
            {todoList.map((item, index) => (
                <Todo key={index} item={item} />
            ))}
        </div>
    )
}

export default List