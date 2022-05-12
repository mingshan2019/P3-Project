import styled from 'styled-components'
import {Link} from 'react-scroll'

export const Button = styled(Link) `
    border-radius: 50px;
    background: $ ${({primary})=>(primary ? '#01BF71':'010606')};
    cursor: pointer;
`