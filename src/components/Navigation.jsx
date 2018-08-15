import React from 'react'
import ReactDOM from 'react-dom'
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
  transition: .3s all ease-in-out;
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

const refNavbar = React.createRef()

export class Navigation extends React.Component {
  getOffset (element) {
    let bounding = element.getBoundingClientRect()
    return {
      top: bounding.top + document.body.scrollTop,
      left: bounding.left + document.body.scrollLeft
    }
  };

  handleScroll () {
    const navbar = ReactDOM.findDOMNode(refNavbar.current)
    const offset = 365
    const windowsScrollTop = window.pageYOffset
    if (windowsScrollTop >= offset) {
      navbar.classList.add('in--fixed')
    } else {
      navbar.classList.remove('in--fixed')
    }
  }
  
  componentDidMount () {
    window.addEventListener('scroll', this.handleScroll)
  }

  componentWillUnmount () {
    window.removeEventListener('scroll', this.handleScroll)
  }

  render () {
    return (
      <HeaderNavigation ref={refNavbar}>
        <HeaderList>
          {
            content.years.map((year, index) => (
              <HeaderListItem key={index}>
                <HeaderListItemLink href={`#${year}`}>
                  {year}
                </HeaderListItemLink>
              </HeaderListItem>
            ))
          }
        </HeaderList>
      </HeaderNavigation>
    )
  }   
}