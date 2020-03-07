import React, { Component } from 'react'
import './SearchPanel.css'



export default class SearchPanel extends Component {

    state = {
        term: ''
    };

    onSearchChange = (e) => {
        // console.log(e.target.value)
        this.setState({
            label: e.target.value
        });
    }
    render() {
        return (
            <input type="text"
                className="form-control search-input"
                placeholder="type to search"
                value={this.state.term}
                onChange={this.onSearchChange}
            />
        );
    }
}

// export default SearchPanel
