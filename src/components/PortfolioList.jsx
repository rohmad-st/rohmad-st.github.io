import React from 'react'
import styled from 'styled-components'
import { profile, project } from '../data'

const Content = styled.div`
  position: relative;
  background-color: #f3f5f7;
  margin: 0;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`
const ContentDetail = styled.div`
  display: flex;
  position: fixed;
  height: 100%;
  width: 40%;
  background-color: transparent;
  margin: 0;
  left: 0;
  top: 0;
  z-index: 5;

  @media only screen and (max-width: 414px) {
    width: 100%;
    height: 10%;
  }
`
const ContentDetailItem = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  background-color: #fafafa;
  height: 100%;
  border: 1px solid #e6e6e6;
  padding: 10px 15px;
  margin: 0;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.1);
`
const ContentDetailButtonClose = styled.button`
  position: absolute;
  display: inline-block;
  font-size: 14px;
  font-weight: 400;
  color: #ecf0f1;
  background: rgba(51, 51, 51, 0.45);
  padding: 10px 15px;
  border: none;
  margin: 0;
  text-align: center;
  margin-left: auto;
  top: 0;
  right: 0;
  cursor: pointer;
`
const ContentDetailProfile = ContentDetailItem.extend`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  @media only screen and (max-width: 414px) {
    width: 100%;
    height: 100%;
  }
`
const ContentDetailProject = ContentDetailItem.extend`
  justify-content: flex-start;
  flex-direction: column;
  overflow: hidden;
  overflow-y: auto;
`
const ContentDetailItemText = styled.p`
  font-weight: 400;
`
const ContentDetailProfileText = ContentDetailItemText.extend`
  line-height: 28px;
`
const ContentDetailProjectTitle = styled.h4`
  font-weight: 600;
  margin: 20px 0 8px;
`
const ContentDetailProjectText = ContentDetailItemText.extend`
  font-size: 14px;
  margin-bottom: 2px;
  line-height: 20px;
  text-align: justify;

  &:last-child {
    margin-bottom: 30px;
  }
`
const ContentDetailProjectBagde = styled.span`
  font-size: 13px;
  display: inline-block;
  color: #333;
  background: #e6e6e6;
  padding: 3px 6px;
  margin: 4px;

  &:nth-child(1) {
    margin-left: 0;
    margin-right: 2px;
  }
`
const ContentProject = styled.div`
  display: flex;
  position: relative;
  background-color: transparent;
  margin: 0;
  z-index: 4;
  margin-left: auto;
  width: 60%;
  
  @media only screen and (max-width: 414px) {
    width: 100%;
    margin-top: 20%;
    /* z-index: 6; */
  }
`
const ContentProjectItem = styled.div`
  background-color: transparent;
  border: none;
  padding: 0 18px 10px;
  width: 100%;
  margin: 0;
`
const ContentList = styled.ul`
  /* width: 100%; */
  padding: 0;
  margin-top: 35px;
  display: inline-flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
`
const ContentListItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  text-align: center;
  width: calc(100% / 4);
  height: 240px;
  list-style: none;
  background-color: #ffffff;
  border: 1px solid #e6e6e6;
  margin: 17px;
  cursor: pointer;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.1);
  padding: 5px;
  animation: fadeIn .3s ease-in-out;

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @media only screen and (max-width: 768px) {
    width: 39%;
  }

  @media only screen and (max-width: 414px) {
    width: 100%;
    height: auto;
    min-height: 250px;
    margin: 12px 0;
  }
`
const ContentListItemTitle = styled.h4`
  font-weight: 400;
  font-size: 15px;
  padding: 0;
  width: 100%;
  margin: 10px 13px 5px;
  line-height: 20px;

  @media only screen and (max-width: 414px) {
    height: 35px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
`
const ContentListItemImage = styled.img`
  width: 100%;
  display: flex;
  align-items: flex-start;
  text-align: center;
`
const ContentDetailProjectImage = ContentListItemImage.extend`
  animation: fadeIn .3s ease-in-out;
  border: 1px solid #e6e6e6;

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`

const [DETAIL_PROFILE, DETAIL_PROJECT] = [0, 1]

export default class Portfolio extends React.Component {
  constructor () {
    super()

    this.state = {
      mode: 0, // 0: profile, 1: project
      detail: {}
    }
  }

  componentDidMount () {
    this.setState({ detail: profile })
  }

  showDetailProject (item) {
    this.setState({ mode: DETAIL_PROJECT, detail: item })
    console.log('show detail project!', { mode: DETAIL_PROJECT, detail: item })
  }

  closeDetailProject () {
    this.setState({ mode: DETAIL_PROFILE, detail: profile })
    console.log('close detail project', this.state)
  }

  render () {
    return (
      <Content>
        <ContentDetail className={(this.state.mode === 1) ? 'in--max' : ''}>
          {
            (this.state.mode === 0) &&
              <ContentDetailProfile>
                <ContentDetailProfileText dangerouslySetInnerHTML={{__html: profile.summary}} />
              </ContentDetailProfile>
          }
          {
            (this.state.mode === 1) &&
              <ContentDetailProject>
                <ContentDetailButtonClose onClick={() => this.closeDetailProject() }>X</ContentDetailButtonClose>
                <ContentDetailProjectImage src={this.state.detail.image} alt={`${this.state.detail.title} image`} />
                <ContentDetailProjectTitle dangerouslySetInnerHTML={{__html: this.state.detail.title}} />
                <ContentDetailProjectText dangerouslySetInnerHTML={{__html: this.state.detail.summary}} />
                <ContentDetailProjectText dangerouslySetInnerHTML={{__html: this.state.detail.description}} />
                <ContentDetailProjectText>
                  {this.state.detail.technologies.map((tech, index) =>
                    <ContentDetailProjectBagde key={index}>{tech}</ContentDetailProjectBagde>
                  )}
                </ContentDetailProjectText>
              </ContentDetailProject>
          }
        </ContentDetail>
        <ContentProject>
          <ContentProjectItem>
            <ContentList>
              {
                project.portfolios.map((portfolio, index) =>
                  portfolio.works.map((work, key) =>
                    <ContentListItem
                      key={key}
                      id={portfolio.year}
                      onClick={ () => {
                          console.log('clickable is work.')
                          this.showDetailProject(work)
                        }
                      }
                    >
                      <ContentListItemImage
                        alt="image"
                        src={work.image}
                      />
                      <ContentListItemTitle>{work.title}</ContentListItemTitle>
                    </ContentListItem>
                  )
                )
              }
            </ContentList>
          </ContentProjectItem>
        </ContentProject>
      </Content>
    )
  }
}
