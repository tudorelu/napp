import React, { ReactNode } from 'react'
import styled from 'styled-components/native'
import Title from './Title';

export const HeaderBox = styled.View`
  background-color: #ddd;
  margin: 10px;
  border: 1px solid #000;
`

interface Props {
  title: ReactNode
}

const Header: React.FC<Props> = ({title}: Props) => {
  return (
    <HeaderBox>
      <Title>{title}</Title>
    </HeaderBox>
  )
}


export default Header
