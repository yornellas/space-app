import { styled } from "styled-components";

type TitleProps = {
  align?: string
}

const Title = styled.h2<TitleProps>`
  color: #7B78E6;
  font-size: 32px;
  text-align: ${ props => props.align ? props.align : 'left' };
`

export default Title