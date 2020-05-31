import React, {Component} from 'react';
import CardList from './CardList.js';
import {teacher} from './teacher.js';
import Searchbox from './searchbox.js';
import ErrorBoundry from './ErrorBoundry';
import Scroll from './Scroll.js';
import './App.css';


class App extends Component {

    constructor(){   
         super()
         this.state = {
         teacher: teacher, //teacher: [],
         searchField: ''  
        }
    }

/*Lifcycle used to fetch user's data from a live server, 

componentDidMount(){

	fetch('https://jsonplaceholder.typicode.com/users')
	.then(response=> {
		return response.json();
		})
	.then(users=> {
		this.setState({teacher: users})
        });  
}*/

onSearchchange = (event) => {
       this.setState({ searchField: event.target.value})      
    }
	render(){
		const filteredteacher= this.state.teacher.filter( 
			teacher =>{
       	                 return teacher.name.toLowerCase().includes(this.state.searchField.toLowerCase()); 
                      })
		return(
            <div className="tc">  
              <h1 className="f1"> Faculty Members </h1>
              <Searchbox searchChange={this.onSearchchange} />
              <Scroll>
                <ErrorBoundry>
                 <CardList teacher={filteredteacher} />
                </ErrorBoundry> 
              </Scroll>
            </div>
		);
	}
}
//const App= () => {
  

	
//}

/*<Scroll>
    <CardList teacher={filteredteacher} />
   </Scroll> */
   
export default App;