import 'styled-components'
import { createGlobalStyle } from 'styled-components'

import { deviceMin } from './functions'
const GlobalStyle = createGlobalStyle`

   html {
      font-size: 10px;
      font-family: 'Roboto', Arial, sans-serif;
      ${deviceMin.mobileM`
            font-size: 12px;
      `}
      ${deviceMin.mobileL`
            font-size: 14px;
      `}
      ${deviceMin.tablet`
            font-size: 16px;
      `}
   }

   body {
      font-family: 'Roboto', Arial, sans-serif;
      text-decoration: none;
      font-size: 10px;
      margin: 0;
      padding: 0;
      direction: ltr;
      border: none;
      width: 100%;
      box-sizing: border-box;

      
   }

   * {
      margin: 0;
      padding: 0;
      border:none;
      outline:none;
      box-sizing: border-box;
   }

   button {
      text-decoration: none;
      border: none;
      -webkit-appearance: none;
      background-color: transparent;
   }

   span, a, ul, li, div {
      text-decoration: none;
      list-style-type: none; 
   }

   input:focus,
   input,
   select:focus,
   textarea:focus,
   button:focus,
   button,
   textarea {
      outline: none;
      border: none; 
   }

   button {
   cursor: pointer; 
   }
   `

export default GlobalStyle
