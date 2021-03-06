import React from 'react';
import axios from 'axios';

//Class extends from react
export class Create extends React.Component {

    //allows the bind to the controls
    constructor() {
        super();

        this.onSubmit = this.onSubmit.bind(this);
        this.onChangePlayer = this.onChangePlayer.bind(this);
        this.onChangeVenue = this.onChangeVenue.bind(this);
        this.onChangeTeam = this.onChangeTeam.bind(this);

        this.state = {
            Player: '',
            Venue: '',
            Team: ''

        }
    }
    //when  the value changes update the state
    onChangePlayer(e) {
        this.setState({
            Player: e.target.value
        });
    }
    // update the value when the state changes
    onChangeVenue(e) {
        this.setState({
            Venue: e.target.value
        });
    }
    // update the value when the state changes
    onChangeTeam(e) {
        this.setState({
            Team: e.target.value

        });
    }
     //alert will display the different data on controls
    onSubmit(e) {
        e.preventDefault();
        alert("Match: " + this.state.Player + " " + this.state.Venue + " " + this.state.Team);
        
        const newMatch ={
            Player: this.state.Player,
            Venue: this.state.Venue,
            Team: this.state.Team
        }
        //local host running on 4000
        //returns a promise
        axios.post('http://localhost:4000/api/matches',newMatch)
        .then((res)=>{
            console.log(res);
        })
        //Unhappy path
        .catch((err)=>{
            console.log(err);
        });
    }
    render() {
        return (
            //form that will store 
            <div className='App'>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Add Match Player: </label>
                        <input type='text'
                            className='form-control'
                            value={this.state.Player}
                            onChange={this.onChangePlayer}></input>

                    </div>

                    <div className="form-group">
                        <label>Add Match Venue:</label>
                        <input type='text'
                            className='form-control'
                            value={this.state.Venue}
                            onChange={this.onChangeVenue}>
                        </input>
                    </div>

                    <div className="form-group">
                        <label>Match Team:</label>
                        <textarea type='text'
                            className='form-control'
                            value={this.state.Team}
                            onChange={this.onChangeTeam}>
                        </textarea>
                    </div>

                    <div className="form-group">
                        <input type='submit'
                            value='Add Match'
                            className='btn btn-primary'>

                        </input>
                    </div>
                </form>

            </div>
        )
    }

}