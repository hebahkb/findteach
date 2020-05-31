import React from 'react';
//import img from './assests';

const Card= ({id, name, contact, email, onlineclass, imgpath}) => {
	return(
        <div className="tc bg-light-yellow dib br3 pa3 ma2 grow bw2 shadow-5 h-20 w-30">
          <img alt='prophoto' src={imgpath} className="h-50 w-50"/> 
            <div>
                <h2> {name} </h2>
                <h3> {contact} </h3>
                <h3> {email} </h3>
                <h3> {onlineclass} </h3>
            </div>           
        </div> 	);
}

export default Card;