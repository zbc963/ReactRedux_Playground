import React from 'react';

class SearchBar extends React.Component{

    state = {term:''}

    onInputChange = (event)=>{
        this.setState({term:event.target.value});
    }

    onFormSubmit = (event) =>{
        event.preventDefault();

        this.props.onFormSubmit(this.state.term)

        //TODO: Make sure we call
        //Callback from parent component
    }

    render(){
        return(
        <div className="search-bar ui segment">
            <form onSubmit={this.onFormSubmit} className = "ui form">
                <div className="field">
                    <label>Video Search</label>
                    <input type="text" placeholder = "Seach the video..."  onChange={this.onInputChange}></input>
                </div>
            </form>
        </div>
        );

    }
        
    
}

export default SearchBar;