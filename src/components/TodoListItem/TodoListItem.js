import React, { Component } from 'react'
import './TodoListItem.css'

export default class TodoListItem extends Component {

    render() {
        const {
            label,
            onDeleted,
            onToggleImportant,
            onToggleDone,
            important,
            done
        } = this.props;
        // const { done, important = false } = this.state;

        // let classNames = done ? 'todo-list-item done' : 'todo-list-item';
        let classNames = 'todo-list-item';
        if (done) {
            classNames += ' done';
        }
        if (important) {
            classNames += ' important';
        }
        // const style = {
        //     color: important ? 'steelblue' : 'black',
        //     fontWeight: important ? 'bold' : 'normal'
        // };

        return (
            <span className={classNames}>
                <span
                    className="todo-list-item-label"
                    // style={style}
                    onClick={onToggleDone}>
                    {label}
                </span>

                <button type="button"
                    className="btn btn-outline-success btn-sm float-right"
                    onClick={onToggleImportant}>
                    <i className="fa fa-exclamation" />
                </button>

                <button type="button"
                    className="btn btn-outline-danger btn-sm float-right"
                    onClick={onDeleted}>
                    <i className="fa fa-trash-o" />
                </button>
            </span>
        );
    };
}

// const TodoListItemF = ({ label, important = false }) => {

//     const style = {
//         color: important ? 'steelblue' : 'black',
//         fontWeight: important ? 'bold' : 'normal'
//     };

//     return (
//         <span className="todo-list-item">
//             <span
//                 className="todo-list-item-label"
//                 style={style}>
//                 {label}
//             </span>

//             <button type="button"
//                 className="btn btn-outline-success btn-sm float-right">
//                 <i className="fa fa-exclamation" />
//             </button>

//             <button type="button"
//                 className="btn btn-outline-danger btn-sm float-right">
//                 <i className="fa fa-trash-o" />
//             </button>
//         </span>
//     );
// };