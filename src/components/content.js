import React from 'react';

//Class extends from react
export class Content extends React.Component{
    render(){
        //the return will return and display the command
        return(
            <div>
                 <h1>Welcome to my soccer App!</h1>
                 <h2>It is {new Date().toLocaleTimeString()}.</h2>
                </div>
        )
    }

}