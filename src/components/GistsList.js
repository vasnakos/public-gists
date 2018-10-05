import React, { Component } from 'react';
import GistItem from './GistItem';
import axios from 'axios';

class GistsList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            gistsData: []
          };
    }

    componentDidMount() {
        // We populate data with AJAX calls in the componentDidMount lifecycle method. 
        // This is so we can use setState to update our component when the data is retrieved.
        axios.get('https://api.github.com/gists/public')
        .then((json) => {
            this.setState({
                gistsData: json.data
            });
        });
    }

    render() {
      return (
        <div>
            {this.state.gistsData.map((gist) => {
                return <GistItem key={gist.id} gist={gist}></GistItem>
            })}
        </div>
      );
    }
  }
  
  export default GistsList;