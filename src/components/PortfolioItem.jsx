import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

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
`;

const ContentListItem = styled.li`
  border: 1px dashed #bdc3c7;
  padding: 0;
  margin: 0 0 28px;
  list-style: none;
  width: 45%;
  cursor: ${props => (props.clickable ? 'pointer' : 'default')};
  transition: 0.3s all ease-in-out;
  margin-left: ${props => props.custom.marginLeft};
  float: ${props => props.custom.float};

  &:hover,
  &:focus,
  &:active {
    box-shadow: 0 30px 60px rgba(0, 0, 0, 0.1);
    transition: 0.3s all ease-in;
    border-style: solid;
  }
  @media only screen and (max-width: 768px) {
    width: 100%;
    margin-left: 0;
  }
  @media only screen and (max-width: 414px) {
    width: 100%;
    margin: 0 0 22px;
    border: 1px solid #e7e8e9;
    background-color: #fafafa;
  }
`;
ContentListItem.defaultProps = {
  custom: {
    marginLeft: 0,
    float: 'none',
  },
};

const ContentListItemThumbnail = styled.div`
  width: 100%;
  height: ${props => (props.isDetail ? '35px' : '200px')};
  padding: 0;
  margin: 0;
  overflow: hidden;
  transition: 0.3s all ease-in-out;
`;
const ContentListItemImage = styled.img`
  width: 100%;
  padding: 0;
  margin: 0;
  transition: 0.3s all ease-in-out;
`;
const ContentListItemTitle = styled.h4`
  color: #ecf0f1;
  background-color: #34495e;
  padding: 8px 15px;
  margin: 0;
  overflow: hidden;
  letter-spacing: 0.1rem;

  @media only screen and (max-width: 414px) {
    background: none;
    color: #34495e;
  }
`;
const ContentListItemDescription = styled.p`
  font-size: 14px;
  font-weight: 400;
  padding: 2px 15px;
  margin-bottom: 0;
`;
const ContentListItemDescriptionDetail = styled.div`
  font-size: 14px;
  font-weight: 400;
  padding: 2px 15px;
  margin-bottom: 0;

  h4 {
    margin: 14px 0 4px;
    text-transform: uppercase;
    font-weight: 600;
    letter-spacing: 0.5px;
  }

  p {
    font-size: 14px;
    font-weight: 400;
    line-height: 22px;
    margin: 0;
  }

  ul,
  ol {
    margin: 0;
    padding-left: 4px;
  }

  li {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  li > span {
    padding-right: 8px;
    color: #6a6a6a;
    font-size: 12px;
  }
`;
const ContentListItemTechology = ContentListItemDescription.extend`
  /*  */
`;
const ContentListItemTechologyBagde = styled.span`
  font-size: 13px;
  display: inline-block;
  color: #333;
  background: #fefefe;
  padding: 3px 6px;
  margin: 4px;

  &:nth-child(1) {
    margin-left: 0;
    margin-right: 2px;
  }
`;
const ContentListItemSeeMore = styled.a`
  font-size: 14px;
  font-weight: 400;
  display: inline-block;
  color: #34495e;
  padding: 0;
  margin: 0 0 0 14px;
  text-decoration: none;

  &:hover,
  &:focus,
  &:active {
    text-decoration: underline;
  }
`;
const ContentListItemSourceLink = ContentButton.extend`
  color: #fafafa;
  background-color: #27b69d;
  margin-left: 15px;
  margin-bottom: 20px;
`;
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
`;

const getCustomPosition = side => {
  const marginLeft = side === 'right' || side === 'right-float' ? 'auto' : 0;
  const float = side === 'right-float' ? 'right' : 'none';

  return {
    marginLeft,
    float,
  };
};

const PortfolioItem = ({ isDetail, item, index, onSelect }) => {
  const inFirst = index === 0 ? 'in--first' : '';
  const inLeftOrRight = index % 2 === 0 ? 'in--right' : 'in--left';
  const leftOrRight = index % 2 === 0 ? 'right' : 'left';
  const globalClass = [inFirst, inLeftOrRight].join(' ');

  function handleSelect() {
    if (item.description && onSelect) onSelect();
  }

  function getCreatedBy() {
    const createdBy = 'Dibuat pada:';
    const { from, to } = item.date;
    if (from === to) return `${createdBy} ${from}`;
    return `${createdBy} ${from} - ${to}`;
  }

  return (
    <ContentListItem
      className={globalClass}
      custom={getCustomPosition(leftOrRight)}
      onClick={handleSelect}
      clickable={!!item.description}
      title={!!item.description && 'Klik untuk lihat selengkapnya!'}
    >
      <ContentListItemDate key={item.date.toString()}>{getCreatedBy()}</ContentListItemDate>
      <ContentListItemThumbnail isDetail={isDetail}>
        <ContentListItemImage src={item.image}></ContentListItemImage>
      </ContentListItemThumbnail>
      <ContentListItemTitle>{item.title}</ContentListItemTitle>
      {!isDetail ? (
        <ContentListItemDescription>{item.summary}</ContentListItemDescription>
      ) : (
        <ContentListItemDescriptionDetail>
          <h4>Sekilas Info</h4>
          <p>{item.summary}</p>

          {item.description && (
            <div>
              <h4>Tentang</h4>
              <p>{item.description}</p>
            </div>
          )}

          {item.daily_routines && (
            <div>
              <h4>Rutinitas Di Project</h4>
              <p>
                <ul>
                  {item.daily_routines.map((activity, k) => (
                    <li key={k}>
                      <span>●</span> {activity}
                    </li>
                  ))}
                </ul>
              </p>
            </div>
          )}
        </ContentListItemDescriptionDetail>
      )}
      {item.description && (
        <ContentListItemSeeMore href="javascript:void(0)" onClick={handleSelect}>
          {isDetail ? 'Lihat sedikit...' : 'Lihat selengkapnya...'}
        </ContentListItemSeeMore>
      )}
      <ContentListItemTechology>
        {item.technologies.map((tech, index) => (
          <ContentListItemTechologyBagde key={index}>{tech}</ContentListItemTechologyBagde>
        ))}
      </ContentListItemTechology>
      {item.url && (
        <ContentListItemSourceLink href={item.url} target="_blank">
          Kunjungi situs
        </ContentListItemSourceLink>
      )}
    </ContentListItem>
  );
};

PortfolioItem.propTypes = {
  item: PropTypes.object.isRequired,
  index: PropTypes.number,
};

export default PortfolioItem;
