import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

// Independent styled component
const ContentButton = styled.a`
  padding: 10px 15px;
  margin-right: 5px;
  text-align: center;
  font-size: 15px;
  font-weight: 400;
  border: none;
  text-decoration: none;
`

const ContentListItem = styled.li`
  border: 1px dashed #c7c7c7;
  /* border-radius: 10px; */
  padding: 8px 14px 22px;
  margin: 0 0 10px;
  list-style: none;
  width: 45%;
  cursor: pointer;
  transition: .3s all ease-in-out;
  margin-left: ${props => props.custom.marginLeft};
  float: ${props => props.custom.float};
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
  /*  */
`
const ContentListItemDescription = styled.p`
  /*  */
`
const ContentListItemTechology = styled.p`
  /*  */
`
const ContentListItemSourceLink = ContentButton.extend`
  color: #fafafa;
  background-color: #27b69d;
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
  return (
    <ContentListItem
      className={(index === 0) ? 'in--first' : null}
      custom={getCustomPosition(item.side)}
      >
      <ContentListItemThumbnail>
        <ContentListItemImage src={item.image}></ContentListItemImage>
      </ContentListItemThumbnail>
      <ContentListItemTitle>{item.title}</ContentListItemTitle>
      <ContentListItemDescription>{item.summary}</ContentListItemDescription>
      <ContentListItemTechology>{item.technologies.join(', ')}</ContentListItemTechology>
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