import styled from 'styled-components'

import { whiteColor, borderColor, blueColor } from '../../styled/styled.components'

export const ContWrapper = styled.div`
      display: grid;
      position: absolute;
      grid-template-columns:  20%  20%  20%  40%;
      grid-template-rows:  10% 90%;
      grid-template-areas:   "header header header header" 
                             "countries cities company mapcont";
      height: 55%;
      width: 80%;
      background-color: ${whiteColor};
      border-radius: 10px;
      box-shadow: 0 0px 20px 0 rgba(0, 0, 0, 0.2), 0 0px 20px 0 rgba(0, 0, 0, 0.19);
`
export const Header = styled.div`
      font-size: 1.2rem;
      font-weight: 600;
      border-bottom: 1px solid ${borderColor};
      padding-left: 0.4rem;
      align-self: flex-end;
`
export const MapCont = styled.div`
      width: 100%;
      grid-column: 4;
      grid-row: 2;  
      position: relative; 
      border: 10px solid ${whiteColor};
      border-top: 0;
      border-bottom-right-radius: 10px;
`
export const List = styled.ul`
	overflow-x: hidden;
      overflow-y: scroll;
`
export const ListItem =styled.li`
      color: ${blueColor};
      font-size: 1rem;
      line-height: 3;
      opacity: 0.8;
      padding-left: 10px;
      text-overflow: ellipsis;
      overflow: hidden;
      padding-right: 10px;
      white-space: nowrap;


      :hover{
            background-color: ${blueColor};
            border-radius: 10px;
            color: ${whiteColor};
      }
`



