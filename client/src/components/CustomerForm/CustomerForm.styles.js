import styled from 'styled-components'
import { AddCircle } from 'styled-icons/material/AddCircle'

export const Container = styled.form`
    display: ${props => props.displayForm};
    flex-direction: column;
    z-index: 100;
    border: 1px solid #cccccc;
    border-radius: 15px;
    background-color: #ffff;
    padding: 1rem;
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
export const Label = styled.label`
    margin: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 1.5rem;
    color: darkgray;
    white-space: nowrap;
`
export const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    margin: 1rem 0 1rem;
`
export const Button = styled.input`
    padding: 0.5rem;
    background-color: #f7f6f6;
    outline: none;
    border: 1px solid #cccccc;
    border-radius: 4px;
    margin-right: 13px;
    font-size: 1rem;
    width: 5rem;
    color: gray;
    &:hover {
        background-color: white;
    }
`
export const AddCircleIcn = styled(AddCircle)`
    color: #003dff;
    width: 5rem;
    height: 5rem;
    z-index: 100;
    position: absolute;
    right: 50px;
    bottom: 50px;
`
