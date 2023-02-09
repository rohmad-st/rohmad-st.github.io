import React from 'react';
import styled from 'styled-components';
import { menus } from '../data';

const NavigationMain = styled.div`
  text-align: center;
  background-color: #e6e6e6;
`;
const NavigationList = styled.ul`
  list-style: none;
  display: inline-block;
  margin: 8px 0;
  padding: 0;
  transition: 0.3s all ease-in-out;
`;
const NavigationListItem = styled.li`
  display: inline-block;
  margin: 0 5px;
`;
const NavigationListItemLink = styled.a`
  line-height: 35px;
  padding: 5px 15px;
  margin: 0;
  background-color: ${props => (props.active ? '#27b69d' : 'none')};
  color: ${props => (props.active ? '#ffffff' : '#27b69d')};
  font-weight: ${props => (props.active ? '600' : '400')};
  transition: 0.3s all ease-in-out;
  text-decoration: none;

  @media only screen and (max-width: 414px) {
    font-size: 12px;
    padding: 10px 10px;
  }
`;

export class HeaderNavigation extends React.Component {
  constructor(props) {
    super(props);
    this.render = this.render.bind(this);
  }

  render() {
    return (
      <NavigationMain>
        <NavigationList>
          {menus.map((menu, index) => (
            <NavigationListItem key={index}>
              <NavigationListItemLink
                href={menu.anchor}
                onClick={() => this.props.onChanged(index)}
                active={this.props.active === index}
              >
                {menu.title}
              </NavigationListItemLink>
            </NavigationListItem>
          ))}
        </NavigationList>
      </NavigationMain>
    );
  }
}
