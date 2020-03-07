import React, { Component } from 'react'
import './AddNewItem.css'

export default class AddNewItem extends Component {

    // onAddItem = () => {
    //     console.log('add some text');
    // }

    state = {
        label: ''
    };

    onLabelChange = (e) => {
        // console.log(e.target.value)
        this.setState({
            label: e.target.value
        });
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.onAddItem(this.state.label);
        this.setState({
            label: ''
        })
    }

    render() {
        // const { onAddItem } = this.props;

        return (
            <form className="AddNewItem d-flex justify-content-between"
                onSubmit={this.onSubmit}
            >
                <input type="text"
                    placeholder="введите новую заметку"
                    className="form-control"
                    onChange={this.onLabelChange}
                    value={this.state.label}
                />

                <button type="button"
                    className="btn btn-outline-secondary btn-sm"
                    onClick={this.onSubmit}
                // onClick={() => onAddItem('hello')}
                >Add
                </button>
            </form>
        )

    }
}

// export default AddNewItem

