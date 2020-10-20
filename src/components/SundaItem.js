import React from "react";
import "./SundaItem.scss";

import Icon_block from "../img/icon/block.png";
import Icon_page from "../img/icon/page.png";

class SundaItem extends React.Component{

    componentDidMount() {

    }

    render() {
        const { itemType, title, artist, curator, comment, createdAt } = this.props;

        if( itemType == "block"){
            return (
                <div className="SundaItem">
                    
                    <img src={Icon_block} alt="content type"></img>
                    
                    <div className="description">
                        <p className="created-at">Today {createdAt}</p>
                        <div className="in-box">
                            <div className="item-info">
                                <p className="title rect-fill">{title}</p>
                                <p className="artist rect-fill">{artist}</p>
                            </div>
                            <p className="curator-info">
                                curated By {curator}
                            </p>
                            <p className="curator-comment">
                                {comment}
                            </p> 
                        </div>
                    </div>
                </div>
            );
        } else if (itemType == "page") {

        } else {
            return ( 
                <div className="SundaItem">
                    <div> Unexpected contentType </div>
                </div>
            )
        }
        
    }

}



export default SundaItem;