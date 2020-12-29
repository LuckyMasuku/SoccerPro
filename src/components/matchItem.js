import React from 'react';
import { Card } from 'react-bootstrap';

export class MatchItem extends React.Component{
    render(){
        return(
            <div>
                
        
        <Card>
        <Card.Header>{this.props.match.Player}</Card.Header>
        <Card.Body>
            <blockquote className="bloquote mb-0">
            <img src={this.props.match.Team} width="200" height="200"></img>
                <footer className="bloquote-footer">
                <p>{this.props.match.Venue}</p> 
                </footer>
        </blockquote>
        </Card.Body>
        </Card>
                </div>
        )
    }

}