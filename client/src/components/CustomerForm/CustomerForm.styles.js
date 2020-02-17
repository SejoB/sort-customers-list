import styled from 'styled-components'
import { AddCircle, Close } from 'styled-icons/material'

export const Form = styled.form`
	display: ${props => props.displayForm};
	flex-direction: column;
	z-index: 100;
	border: 1px solid #cccccc;
	border-radius: 15px;
	background-color: #ffff;
	padding: 1rem;
`
export const Label = styled.label`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin: 1rem;
	font-size: 1.5rem;
	color: darkgray;
	white-space: nowrap;
`
export const Input = styled.input`
	border-radius: 3px;
	border: 1px solid #cccccc;
	font-size: 1.5rem;
	padding: 4px;
	margin-left: 1.5rem;
	&:focus {
		border-color: #1da0ff;
	}
`
export const ButtonContainer = styled.div`
	display: flex;
	justify-content: center;
	margin: 1rem 0 1rem;
`
export const Button = styled.input`
	padding: 0.5rem;
	background-color: #f7f6f6;
	border: 1px solid #cccccc;
	border-radius: 4px;
	margin-right: 13px;
	font-size: 1rem;
	width: 5rem;
	color: gray;
	&:hover {
		background-color: white;
		cursor: pointer;
	}
`
export const OpenFormIcn = styled(AddCircle)`
	color: #003dff;
	width: 5rem;
	height: 5rem;
	z-index: 100;
	position: absolute;
	right: 50px;
	bottom: 50px;
	&:hover {
		opacity: 0.6;
		cursor: pointer;
	}
`
export const CloseFormIcn = styled(Close)`
	color: #bfbfbf;
	width: 2rem;
	height: 2rem;
	z-index: 100;
	display: flex;
	align-self: flex-end;
	&:hover {
		opacity: 0.6;
		cursor: pointer;
	}
`
