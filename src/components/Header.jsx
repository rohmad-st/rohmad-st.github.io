import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import { HeaderNavigation } from './HeaderNavigation';
import { profile } from '../data';

const HeaderMain = styled.div``;
const HeaderContent = styled.div`
  position: relative;
  height: 300px;
  @media only screen and (max-width: 414px) {
    height: 500px;
  }
`;
const HeaderInfo = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(to left top, #1abc9c 0, #16a085 68.51%);
  height: 100%;
`;
const Avatar = styled.img`
  width: 135px;
  height: 135px;
  border-radius: 50%;
`;
const Text = styled.p`
  font-size: 18px;
  font-weight: 400;
  line-height: 28px;
  padding: 5px;
  margin: 10px 0;
  color: #fafafa;
  text-align: center;

  @media only screen and (max-width: 768px) {
    padding: 5px 25px;
    text-align: center;
    margin: 10px 50px;
  }
`;

const refHeader = React.createRef();
const refNavbar = React.createRef();

export class Header extends React.Component {
  constructor() {
    super();
  }

  handleScroll() {
    const header = ReactDOM.findDOMNode(refHeader.current);
    const navbar = ReactDOM.findDOMNode(refNavbar.current);
    const boundingHeader = header.getBoundingClientRect();
    const boundingNavbar = navbar.getBoundingClientRect();
    const windowsScrollTop = window.pageYOffset;
    const offset = boundingHeader.height - boundingNavbar.height;
    const className = 'in--fixed';

    if (windowsScrollTop >= offset) {
      navbar.classList.add(className);
    } else {
      navbar.classList.remove(className);
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  render() {
    return (
      <HeaderMain ref={refHeader}>
        <HeaderContent>
          <HeaderInfo>
            <Avatar src={profile.avatar} />
            <Text dangerouslySetInnerHTML={{ __html: profile.summary }} />
          </HeaderInfo>
        </HeaderContent>
        <HeaderNavigation ref={refNavbar} />
      </HeaderMain>
    );
  }
}
