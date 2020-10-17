import React from 'react';
import Navigation from '../components/Navigation';

class MainTimeline extends React.Component{
    state = {
        loggedin : true,
        test : 123,
    };

    render () {
        console.log(this.state.loggedin);
        return (
            <div>
                <Navigation loggedin={this.state.loggedin} />
                <h1>Here is MainTImeline dd {this.state.loggedin} {this.state.test}</h1>
                <h2>{this.state.loggedin}d</h2>
            </div>
           
        ); 
        
    }
}

export default MainTimeline;