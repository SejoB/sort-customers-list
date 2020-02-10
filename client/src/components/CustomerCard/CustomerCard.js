import React from 'react'
import { customerObject } from '../../utils'
import { Container, Item, Text } from '../CustomerCard/CustomerCard.styles'

const Card = props => {
	console.log(props)
	return (
		<Container>
			{customerObject().map(field => (
				<Item key={field.id}>
					{field.inputField.label}:<Text>{props.data}</Text>
				</Item>
			))}
		</Container>
	)
}
export default Card
