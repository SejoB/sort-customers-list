import styled from 'styled-components'

import { whiteColor, borderColor } from '../../styled/styled.components'

export const ContWrapper = styled.div`
      display: grid;
      grid-template-columns:  20%  20%  20%  40%;
      grid-template-rows:  10% 90%;
      grid-template-areas:   "header header header header" 
                             "countries cities company map";
      height: 55%;
      width: 80%;
      background-color: ${whiteColor};
      border-radius: 10px;
      box-shadow: 0 0px 20px 0 rgba(0, 0, 0, 0.2), 0 0px 20px 0 rgba(0, 0, 0, 0.19);
`
export const Header = styled.div`
      display: block;
      font-size: 1.2rem;
      font-weight: 600;
      border-bottom: 1px solid ${borderColor};
      padding-left: 0.4rem;
      align-self: flex-end;
`


