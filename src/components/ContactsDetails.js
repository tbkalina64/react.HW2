import React, { Component } from 'react';
import ContactsDetailsItem from './ContactsDetailsItem';
import PropTypes from 'prop-types';



export class ContactsDetails extends Component {

	render () {
		const { trFirstContactRow } = this.props;
		return (
			<React.Fragment>
				{trFirstContactRow.map (details => (
						<ContactsDetailsItem key={details.id} details={ details } />
					)) 
				}	
			</React.Fragment>
		)
	}
}

export default ContactsDetails;