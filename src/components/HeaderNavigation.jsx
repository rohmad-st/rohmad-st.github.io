import React from 'react';
import styled from 'styled-components';
import { content } from '../data';

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
  margin: 3px 5px;
`;
const NavigationListItemLink = styled.a`
  line-height: 35px;
  padding: 5px 15px;
  background: none;
  color: #27b69d;
  transition: 0.3s all ease-in-out;
  text-decoration: none;

  @media only screen and (max-width: 414px) {
    font-size: 12px;
    padding: 5px 7px;
  }
`;

export class HeaderNavigation extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <NavigationMain>
        <NavigationList>
          {content.years.map((year, index) => (
            <NavigationListItem key={index}>
              <NavigationListItemLink href={`#${year}`}>{year}</NavigationListItemLink>
            </NavigationListItem>
          ))}
        </NavigationList>
      </NavigationMain>
    );
  }
}
