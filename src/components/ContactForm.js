import React, { Component } from 'react';

export class ContactForm extends Component {
	state = {
		firstname: ''
	}

	onFirstnameEventChange = (e) => {
		this.setState ({
			firstname: e.target.value
		});
	}

	onFormSubmit = (e) => {
        e.preventDefault();

        this.props.onSubmit({
            firstname: this.state.firstname
        });

        this.setState({
            firstname: ''
        })
    }

    onShowDetails = (e) => {
    	console.log(e)
    	
    } 

	render() {
		return (
			<React.Fragment>
			<form action="#" onSubmit={this.onFormSubmit}>
			  <label>
			    Name:
			    <input type="text" 
			    value={this.state.firstname}
			    onChange={this.onFirstnameEventChange}
			     />
			  </label><br/>
			  <label>
			    Sername:
			    <input type="text" name="sername" />
			  </label><br/>
			  <label>
			    Age:
			    <input type="number" name="age" />
			  </label><br/>
			  <label>
			    PhoneNumber:
			    <input type="number" name="phone" />
			  </label><br/>
			  <button > Add </button><br/>
			  <button > Save contact </button><br/>
			</form>
			</React.Fragment>
		)
	}
}

export default ContactForm;