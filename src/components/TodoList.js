import React from 'react';
import Item from './Todo';

const TodoList = props => {
    return (
        <div className="do-list">
            {props.todo.map(item => (
                <Item key={item.id} item={item} toggleItem={props.toggleItem}/>
            ))}
            <button className="clear-btn" onClick={props.clearFinished}>
                Clear Finished
            </button>
        </div>
    );
};

export default TodoList;
