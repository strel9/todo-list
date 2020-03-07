import React, { Component } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import AppHeader from '../AppHeader/';
import ItemStatusFilter from '../ItemStatusFilter/';
import SearchPanel from '../SearchPanel/';
import TodoList from '../TodoList/';
import AddNewItem from '../AddNewItem/'

export default class App extends Component {

    maxId = 100;

    state = {
        todoData: [
            { id: 1, label: 'Drink Coffe', done: false, important: false },
            { id: 2, label: 'Make awesome App', done: false, important: true },
            { id: 3, label: 'Have a lunch', done: true, important: false }
        ],
        term: '',
        filter: 'all' //active, all, done
    };

    createTodoItem(label) {
        return {
            id: this.maxId++,
            label: 'Make awesome App',
            important: false,
            done: false,
        };
    };

    deleteItem = (id) => {
        // console.log(id);
        this.setState(({ todoData }) => {

            const idx = todoData.findIndex((el) => el.id === id);
            // todoData.splice(idx, 1);

            const newArray = [
                ...todoData.slice(0, idx),
                ...todoData.slice(idx + 1)
            ];

            return {
                todoData: newArray
            };
        });
    };

    addItem = (text) => {

        const newItem =
        // this.createTodoItem(text);
        {
            id: this.maxId++,
            label: text,
            important: false,
            done: false,
        };

        this.setState(({ todoData }) => {
            // const newArray = todoData.push(newItem);
            const newArray = [
                ...todoData,
                newItem
                // { id: 100, label: 'Have a lunch', important: false }
            ];

            return {
                todoData: newArray
            };
        });
    };

    onToggleImportant = (id) => {
        // console.log('tgl important', id)
        this.setState(({ todoData }) => {
            const idx = todoData.findIndex((el) => el.id === id);
            const oldItem = todoData[idx];
            const newItem = { ...oldItem, important: !oldItem.important };

            const newArray = [
                ...todoData.slice(0, idx),
                newItem,
                ...todoData.slice(idx + 1)
            ];
            return {
                todoData: newArray
            }

        });
    };

    onToggleDone = (id) => {
        // console.log('tgl done', id)

        this.setState(({ todoData }) => {
            const idx = todoData.findIndex((el) => el.id === id);
            const oldItem = todoData[idx];
            const newItem = { ...oldItem, done: !oldItem.done };

            const newArray = [
                ...todoData.slice(0, idx),
                newItem,
                ...todoData.slice(idx + 1)
            ];
            return {
                todoData: newArray
            }

        });
    };

    onFilterChange = (filter) => {
        this.setState({ filter });
    };

    search(items, term) {
        if (term.length === 0) {
            return items;
        }

        return items.filter((item) => {
            return item.label.indexOf(term) > -1;
        })

    };

    filter(items, filter) {
        switch (filter) {
            case 'all':
                return items;
            case 'active':
                return items.filter((item) => !item.done);
            case 'done':
                return items.filter((item) => item.done);
            default:
                return items;
        }
    };

    render() {
        const { todoData, term, filter } = this.state;

        // const visibleItems = this.search(todoData, term);
        const visibleItems = this.filter(this.search(todoData, term), filter);


        const doneCount = todoData.filter((el) => el.done).length;
        const todoCount = todoData.length - doneCount;

        return (
            <div className="todo-app">
                <AppHeader toDo={todoCount} done={doneCount} />
                <div className="top-panel d-flex">
                    <SearchPanel />
                    <ItemStatusFilter filter={filter}
                        onFilterChange={this.onFilterChange} />
                </div>

                <TodoList
                    todos={visibleItems}
                    onDeleted={this.deleteItem}
                    onToggleImportant={this.onToggleImportant}
                    onToggleDone={this.onToggleDone}
                />

                <AddNewItem
                    onAddItem={this.addItem}
                />
            </div>
        );
    }

};