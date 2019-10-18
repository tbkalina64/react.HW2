import React, { Component } from 'react';
import ContactsList from './components/ContactsList';
import ContactsDetails from './components/ContactsDetails';
import ContactForm from './components/ContactForm';
import PropTypes from 'prop-types';



class App extends Component {
    state = {
        firstRow: [{
                id: 1,
                firstName: 'Alex',
                lastName: 'Smith',
                age: 26,
                phone: '0987654321',
                isShow: false
            },
            {
                id: 2,
                firstName: 'Vasya',
                lastName: 'Smith2',
                age: 32,
                phone: '0987775566',
                isShow: false
            },
            {
                id: 3,
                firstName: 'Egor',
                lastName: 'Smith3',
                age: 34,
                phone: '0987242424',
                isShow: false
            },
            {
                id: 4,
                firstName: 'Danil',
                lastName: 'Smith4',
                age: 29,
                phone: '0987635353',
                isShow: false
            }
        ]
    }


addTodo(contactItem){
    this.setState({
      firstRow: [...this.state.firstRow, contactItem]
    });
  }

createFirstname = (firstName) =>{
	console.log('firstName', firstName)
  }

    render() {
        return (
            <div className="container">
	            <div className="left-col">
	            	<h3> List Contacts</h3>
	            	<ul>
			      		<ContactsList 
			      		trFirstContactRow={this.state.firstRow}
						onSubmit={this.createTodo}
			      		/>
			        </ul>
			        <button > Add contact </button>
	            	<button > Edit contact </button>
	            </div>
	            <div className="right-col">
	            	<h3> Details Contacts</h3>
						<ContactsDetails trFirstContactRow={this.state.firstRow}/>
	            		<ContactForm onSubmit={this.createFirstname} />
	            </div> 
      		</div>
        )
    }
}

export default App;