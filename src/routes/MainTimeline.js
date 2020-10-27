//module
import React from 'react';

// component
import SundaItem from "../components/SundaItem";

// style sheet
import "./MainTimeline.scss";


class MainTimeline extends React.Component{

    render () {

        return (
            <div className="MainTimeline">
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