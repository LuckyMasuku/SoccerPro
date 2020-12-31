import React from 'react';
import { Matches } from './matches';
import axios from 'axios';



//Class extends from react
export class Read extends React.Component {
    //added data to the state
    state = {
        matches: [ ]
    };
      componentDidMount(){
          //it will allow to retrieve information about resource
          axios.get('http://localhost:4000/api/matches')
          //this function will get response from the path updating the state
          .then((response)=>{
              this.setState({ matches: response.data.matches })
          })
          //if there is an error this function will be used
        .catch((error) =>{
            console.log(error)
        });
      
    }
    render() {
        return (
            <div>
                <h1>Our The Best Teams.</h1>
                <Matches matches={this.state.matches}></Matches>
            </div>
        );
    }

}