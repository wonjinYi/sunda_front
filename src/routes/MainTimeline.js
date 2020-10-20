import React from 'react';

import Navigation from '../components/Navigation';
import SundaItem from "../components/SundaItem";

import "./MainTimeline.scss";


class MainTimeline extends React.Component{
    state = {
        loggedin : true,
        username : "thisisverylongname",
        test : 123,
    };

    render () {
        console.log(this.state);
        const { loggedin, username } = this.state;

        return (
            <div className="MainTimeline">
                <Navigation loggedin={loggedin} username={username}/>
                <div className="items">
                    <SundaItem itemType="block" title="달과달의소리" artist="moremi" curator="jjoriping" comment="아, lnx적분하고싶다" createdAt="01:53" />
                    <SundaItem itemType="block" title="달과달의소리" artist="moremi" curator="jjoriping" comment="아, lnx적분하고싶다" createdAt="01:53" />
                    <SundaItem itemType="block" title="달과달의소리" artist="moremi" curator="jjoriping" comment="아, lnx적분하고싶다" createdAt="01:53" />
                    <SundaItem itemType="block" title="달과달의소리" artist="moremi" curator="jjoriping" comment="아, lnx적분하고싶다" createdAt="01:53" />
                    <SundaItem itemType="block" title="달과달의소리" artist="moremi" curator="jjoriping" comment="아, lnx적분하고싶다" createdAt="01:53" />
                </div>
                
            </div>
           
        ); 
        
    }
}

export default MainTimeline;