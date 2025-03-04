import React from 'react';
import SearchBar from './SearchBar';
import unsplash from '../API/unsplash';
import ImageList from './ImageList';
class App extends React.Component {
    state = { images:[] }



    onSearchSubmit = async (term)=>{
        //first object is the path you want get, second is to modify the value you want to get
        const response = await unsplash.get('/search/photos',{
            params: {query: term}   
        });
        this.setState({images: response.data.results });
    }



    render(){
        return( 
            <div className="ui container" style={{marginTop:'10px'}}>
                <SearchBar onSubmit={this.onSearchSubmit}/>
            <ImageList images={this.state.images}/>
            </div>
        
        );
    }
};

export default App;