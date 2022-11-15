import React from "react";
import './TodoList.css';

function TodoItem(props) {
    return(
        <div>
            {props.item}
        </div>
    );
};

export default TodoItem