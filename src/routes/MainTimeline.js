import React from 'react';
import Navigation from '../components/Navigation';

class MainTimeline extends React.Component{
    state = {
        loggedin : true,
        username : "username",
        test : 123,
    };

    render () {
        console.log(this.state);
        const { loggedin, username } = this.state;

        return (
            <div>
                <Navigation loggedin={loggedin} username={username}/>
                <h1>Here is MainTImeline dd {this.state.loggedin}</h1>
                <h2>{this.state.loggedin}d</h2>
            </div>
           
        ); 
        
    }
}

export default MainTimeline;