import React from 'react';
import { Card } from 'react-bootstrap';



//Class extends from react
export class MatchItem extends React.Component {
    render() {
        return (
            <div>


                <Card>
                    <Card.Header>{this.props.match.Player}</Card.Header>
                    <Card.Body>
                        <blockquote className="bloquote mb-0">
                            <img src={this.props.match.Team} width="200" height="200"></img>
                            <footer className="bloquote-footer">
                                {this.props.match.Venue}
                            </footer>
                        </blockquote>
                    </Card.Body>
                </Card>
            </div>
        )
    }

}