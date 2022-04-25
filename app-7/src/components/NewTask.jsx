import React, {useState} from 'react'

function NewTask(props) {

    const {addTodoItem} = props;

    const [item, setItem] = useState('');

    return (
    <form onSubmit={e => {
        e.preventDefault();
        addTodoItem(item);
    }}>
        <input type='text' onChange={e => {
            e.preventDefault();
            setItem(e.target.value);
        }}></input>
        <button>Add</button>
    </form>
    )
}

export default NewTask