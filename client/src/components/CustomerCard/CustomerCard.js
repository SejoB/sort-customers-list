import React from 'react'
import { customerObject } from '../../utils'
import { Container, Item, Text, Text1 } from '../CustomerCard/CustomerCard.styles'

const Card = props => {
	return (
		<Container>
			{customerObject(props.data).map(field => (
				<Item key={field.id}>
					{field.label}:<Text1>{field.data}</Text1>
				</Item>
			))}
		</Container>
	)
}
export default Card
