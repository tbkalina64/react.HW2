import React, { Component } from 'react';

export class ContactsListDetails extends Component {

	render () {
		const { cols } = this.props;
		return (
			<React.Fragment>
				{cols.firstName} 
				{cols.lastName} 
			</React.Fragment>
		)
	}
}

export default ContactsListDetails;