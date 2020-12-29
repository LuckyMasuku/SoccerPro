import React from 'react';
import { Matches } from './matches';

export class Read extends React.Component {
    //added data to the state
    state = {
        matches: [
            {
                "Player": "A Lacazette",
                "Venue": "Newcastle",
                "imdbID": "tt4154756",
                "Type": "match",
                "Team": "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg"
            },
            {
                "Player": "T Silva",
                "Venue": "London",
                "imdbID": "tt3498820",
                "Type": "match",
                "Team": "https://m.media-amazon.com/images/M/MV5BMjQ0MTgyNjAxMV5BMl5BanBnXkFtZTgwNjUzMDkyODE@._V1_SX300.jpg"
            },
            {
                "Player": "O Giroud",
                "Venue": "Fullham",
                "imdbID": "tt0472062",
                "Type": "match",
                "Team": "https://m.media-amazon.com/images/M/MV5BMTgwMDgwMDc4MF5BMl5BanBnXkFtZTYwOTU3MDM4._V1_SX300.jpg"
            }
        ]

    }
    render() {
        return (
            <div>
                <h1>This is the read Component.</h1>
                <Matches matches={this.state.matches}></Matches>
            </div>
        )
    }

}