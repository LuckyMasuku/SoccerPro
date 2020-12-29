import React from 'react';
import { MatchItem } from './matchItem';


//Class extends from react
export class Matches extends React.Component{
    render(){
        //function
        return this.props.matches.map((match)=>{
            return <MatchItem match={match}></MatchItem>
        })
            
        
    }

}