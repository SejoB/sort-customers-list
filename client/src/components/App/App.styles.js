import styled from 'styled-components'

import { BGcolor } from '../../styled/styled.components'
import { flexbox} from '../../styled/functions'

export const AppWrapper = styled.div`
      ${ flexbox({  }) }
      height: 100%;
      width: 100%;
      position: absolute;
      top: 0px;
      left: 0px;
      background-color: ${BGcolor};
      overflow: hidden;
`

