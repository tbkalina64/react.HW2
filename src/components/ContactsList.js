import React, { Component } from 'react';
import ContactsListDetails from './ContactsListDetails';
import PropTypes from 'prop-types';


export class ContactsList extends Component {




	render() {
		const {trFirstContactRow} = this.props;
		return (
			<React.Fragment>
				{trFirstContactRow.map (cols => (
					<li key={cols.id} >
					    <ContactsListDetails  cols={ cols } onShowDetails={this.onShowDetails} />
					</li>
				    )) 
				}
			</React.Fragment>
		)
	}
}
export default ContactsList;