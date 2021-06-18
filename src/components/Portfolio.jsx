import React from 'react';
import styled from 'styled-components';
import PortfolioItem from './PortfolioItem';
import { project } from '../data';

const Content = styled.div`
  position: relative;
  background-color: #f3f5f7;
  padding: 25px;
  margin: 0;

  @media only screen and (max-width: 414px) {
    padding: 25px 10px;
  }
`;
const ContentList = styled.ul`
  width: 100%;
  padding: 0;
  margin-top: 35px;

  @media only screen and (max-width: 768px) {
    width: 97%;
    margin-top: 0;
    margin-left: 3%;
  }
  @media only screen and (max-width: 414px) {
    width: 100%;
    margin: 0;
  }
  &:after {
    position: absolute;
    content: '';
    width: 1px;
    background-color: #bdc3c7;
    height: 100%;
    left: 50%;
    top: 0;
    transform: translateX(-50%);
    z-index: 1;

    @media only screen and (max-width: 768px) {
      left: 3%;
    }
    @media only screen and (max-width: 414px) {
      display: none;
    }
  }
`;
const ContentListGroup = styled.div`
  padding-top: 70px;

  @media only screen and (max-width: 414px) {
    padding-top: 22px;
  }
`;
const ContentListItemSection = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  color: #fafafa;
  background-color: #34495e;
  font-size: 13px;
  font-weight: 400;
  transform: translateX(-50%);
  border-radius: 20px !important;
  padding: 4px 8px !important;
  margin: 0 !important;
  width: 34px !important;
  height: 20px;
  z-index: 4;
  border: none !important;
  margin-top: 34px !important;
  left: 50%;
  cursor: default !important;

  @media only screen and (max-width: 768px) {
    left: 3%;
    border-radius: 0 !important;
    padding: 2px !important;
    font-size: 12px;
  }
  @media only screen and (max-width: 414px) {
    margin-top: -24px !important;
    left: 50%;
    color: #999999;
    background: none;
    font-weight: 600;
    font-size: 15px;
  }
`;
export class Portfolio extends React.Component {
  render() {
    return (
      <Content>
        <ContentList>
          {project.portfolios.map((portfolio, index) => (
            <ContentListGroup key={index} id={portfolio.year} className={index === 0 ? 'in--first__init' : ''}>
              <ContentListItemSection key={portfolio.toString()}>{portfolio.year}</ContentListItemSection>
              {portfolio.works.map((work, key) => (
                <PortfolioItem key={key} item={work} index={key} />
              ))}
            </ContentListGroup>
          ))}
        </ContentList>
      </Content>
    );
  }
}
