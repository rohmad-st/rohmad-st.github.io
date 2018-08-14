import React from 'react'
import styled from 'styled-components'
import { content } from '../data'

const HeaderNavigation = styled.div`
  text-align: center;
  background-color: #e6e6e6;
`
const HeaderList = styled.ul`
  list-style: none;
  display: inline-block;
  margin: 8px 0;
  padding: 0;
`
const HeaderListItem = styled.li`
  display: inline-block;
  margin: 3px 5px;
`
const HeaderListItemLink = styled.a`
  line-height: 35px;
  padding: 5px 15px;
  background: none;
  color: #27b69d;
  transition: .3s all ease-in-out;
  text-decoration: none;
`

export class Navigation extends React.Component {
  render () {
    return (
      <HeaderNavigation>
        <HeaderList>
          {
            content.years.map((year, index) => (
              <HeaderListItem key={index}>
                <HeaderListItemLink href='#'>{year}</HeaderListItemLink>
              </HeaderListItem>
            ))
          }
        </HeaderList>
      </HeaderNavigation>
    )
  }   
}