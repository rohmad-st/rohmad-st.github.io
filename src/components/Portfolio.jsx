import React from 'react'
import styled from 'styled-components'
import PortfolioItem from './PortfolioItem'
import { project } from '../data'

const Content = styled.div`
  position: relative;
  background-color: #f3f5f7;
  padding: 25px;
  margin: 0;
`
const ContentList = styled.ul`
  width: 100%;
  padding: 0;
  margin-top: 35px;

  &:after {
    position: absolute;
    content: '';
    width: 1px;
    background-color: #e0e0e0;
    height: 100%;
    left: 50%;
    top: 0;
    transform: translateX(-50%);
    z-index: 1;
  }
`
const ContentListItemSection = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  color: #fafafa;
  background-color: #adb3b1;
  font-size: 14px;
  font-weight: 400;
  transform: translateX(-50%);
  border-radius: 20px !important;
  padding: 2px 5px !important;
  margin: 0 !important;
  width: 34px !important;
  height: 20px;
  z-index: 3;
  border: none !important;
  margin-top: 34px !important;
  left: 50%;
  cursor: default !important;
`

export class Portfolio extends React.Component {
  render () {
    return (
      <Content>
        <ContentList>
          {
            project.portfolios.map((portfolio, index) =>
              <div key={index}>
                <ContentListItemSection key={portfolio.toString()}>{portfolio.year}</ContentListItemSection>
                {
                  portfolio.works.map((work, key) =>
                    <PortfolioItem key={key} item={work} index={key}/>
                  )
                }
              </div>
            )
          }
        </ContentList>
      </Content>
    )
  }
}
