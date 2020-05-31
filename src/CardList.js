import React from 'react';
import Card from './Card.js';

const CardList = ({teacher}) => {

	/*To check if our errorboundry componenet is working or not 
	if(true){
		throw new Error('Nooooo!');
	}*/
	 const cardcomponent= teacher.map( (user, i) => {
	 	return (  
	 		
	 		<Card key= {i} 
	 		id={teacher[0].id} 
	 		name={teacher[i].name} 
	 		contact={teacher[i].contact} 
	 		email={teacher[i].email} 
	 		onlineclass={teacher[i].onlineclass} 
	 		imgpath={teacher[i].imgpath}/> 

	 		);
	 })

 return (
   
	<div>
    
      {cardcomponent}

    </div>

   );
}

export default CardList;