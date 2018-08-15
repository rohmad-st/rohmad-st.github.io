import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

// Independent styled component
const ContentButton = styled.a`
  display: inline-block;
  padding: 10px 15px;
  margin: 5px 0;
  text-align: center;
  font-size: 15px;
  font-weight: 400;
  border: none;
  text-decoration: none;
`

const ContentListItem = styled.li`
  border: 1px dashed #bdc3c7;
  padding: 0;
  margin: 0 0 28px;
  list-style: none;
  width: 45%;
  cursor: pointer;
  transition: .3s all ease-in-out;
  margin-left: ${props => props.custom.marginLeft};
  float: ${props => props.custom.float};
  
  &:hover, &:focus, &:active {
    box-shadow: 0 30px 60px rgba(0, 0, 0, 0.1);
    transition: .3s all ease-in;
  }
  @media only screen and (max-width: 768px) {
    width: 100%;
    margin-left: 0;
  }
`
ContentListItem.defaultProps = {
  custom: {
    marginLeft: 0,
    float: 'none',
  }
}

const ContentListItemThumbnail = styled.div`
  width: 100%;
  height: 200px;
  padding: 0;
  margin: 0;
  overflow: hidden;
  overflow-y: auto;
  transition: .3s all ease-in-out;
`
const ContentListItemImage = styled.img`
  width: 100%;
  padding: 0;
  margin: 0;
  transition: .3s all ease-in-out;
`
const ContentListItemTitle = styled.h4`
  color: #ecf0f1;
  background: #34495e;
  padding: 8px 15px;
  margin: 0;
  overflow: hidden;
  letter-spacing: 0.1rem;
`
const ContentListItemDescription = styled.p`
  padding: 2px 15px;
`
const ContentListItemTechology = ContentListItemDescription.extend`
  /*  */
`
const ContentListItemTechologyBagde = styled.span`
  font-size: 13px;
  display: inline-block;
  color: #333;
  background: #fefefe;
  padding: 3px 6px;
  margin: 0 4px;

  &:nth-child(1) {
    margin-left: 0;
    margin-right: 2px;
  }
`
const ContentListItemSourceLink = ContentButton.extend`
  color: #fafafa;
  background-color: #27b69d;
  margin-left: 15px;
  margin-bottom: 20px;
`
const ContentListItemDate = styled.span`
  position: absolute;
  display: inline-block;
  font-size: 14px;
  font-weight: 400;
  color: #ecf0f1;
  background: rgba(51, 51, 51, 0.45);
  padding: 8px 15px;
  margin-top: 0;
  overflow: hidden;
`

const getCustomPosition = (side) => {
  const marginLeft = (side === 'right' || side === 'right-float') ? 'auto' : 0
  const float = (side === 'right-float') ? 'right' : 'none'

  return {
    marginLeft,
    float
  }
}

const PortfolioItem = ({ item, index }) => {
  const inFirst = (index === 0) ? 'in--first' : ''
  const inLeftOrRight = (item.side === 'left') ? 'in--left' : 'in--right'
  const globalClass = [inFirst, inLeftOrRight].join(' ')
  
  return (
    <ContentListItem
      className={globalClass}
      custom={getCustomPosition(item.side)}
      >
      <ContentListItemDate key={item.date.toString()}>
        {`Created on: ${item.date.from} - ${item.date.to}`}
      </ContentListItemDate>
      <ContentListItemThumbnail>
        <ContentListItemImage src={item.image}></ContentListItemImage>
      </ContentListItemThumbnail>
      <ContentListItemTitle>{item.title}</ContentListItemTitle>
      <ContentListItemDescription>{item.summary}</ContentListItemDescription>
      <ContentListItemTechology>
        {item.technologies.map((tech, index) =>
          <ContentListItemTechologyBagde key={index}>{tech}</ContentListItemTechologyBagde>
        )}
      </ContentListItemTechology>
      <ContentListItemSourceLink
        href={item.url}
        target="_blank">
        Open app site
      </ContentListItemSourceLink>
    </ContentListItem>
  )
}

PortfolioItem.propTypes = {
  item: PropTypes.object.isRequired,
  index: PropTypes.number
}

export default PortfolioItem