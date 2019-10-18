import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class ContactsDetailsItem extends Component {

	render () {
		const { details } = this.props;
		return (
			<ul>
				<li>{details.firstName} </li>
				<li>{details.lastName} </li>
				<li>{details.age} </li>
				<li>{details.phone} </li> 
			</ul>
		)
	}
}

export default ContactsDetailsItem;