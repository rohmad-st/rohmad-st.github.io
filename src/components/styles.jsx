import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  position: relative;
  background-color: transparent;
  margin: 0;
  z-index: 4;
  margin-left: auto;
  width: 100%;

  @media only screen and (max-width: 414px) {
    width: 100%;
    margin-top: 20%;
  }
`;
export const Stack = styled.div`
  background-color: transparent;
  border: none;
  padding: 0 18px 10px;
  width: 100%;
  margin: 0;
`;
export const List = styled.ul`
  width: 100%;
  padding: 0;
  margin-top: 35px;
  display: inline-flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
`;
export const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  text-align: center;
  width: calc(100% / 4);
  list-style: none;
  background-color: #ffffff;
  border: 1px solid #e6e6e6;
  margin: 17px;
  cursor: pointer;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.1);
  padding: 0;
  animation: fadeIn 0.3s ease-in-out;
  word-break: break-word;

  a {
    text-decoration: none;
    color: #38454f;
  }

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @media only screen and (max-width: 823px) {
    width: 39%;
  }

  @media only screen and (max-width: 768px) {
    width: 38%;
  }

  @media only screen and (max-width: 698px) {
    width: 37%;
  }

  @media only screen and (max-width: 649px) {
    width: 36%;
  }

  @media only screen and (max-width: 607px) {
    width: 35%;
  }

  @media only screen and (max-width: 568px) {
    width: 34%;
  }

  @media only screen and (max-width: 539px) {
    width: 33%;
  }

  @media only screen and (max-width: 510px) {
    width: 100%;
    height: auto;
    min-height: 250px;
    margin: 12px 0;
  }
`;
export const ListItemTitle = styled.h4`
  font-weight: 400;
  font-size: 15px;
  padding: 0;
  width: 100%;
  margin: 8px 0;
  line-height: 20px;

  @media only screen and (max-width: 414px) {
    height: 35px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
`;
export const ListItemDescription = styled.p`
  font-weight: 400;
  font-size: 12px;
  padding: 0;
  margin: 0 0 10px;

  span {
    color: #6a6a6a;
  }
`;
export const ListItemImage = styled.img`
  width: 100%;
  display: flex;
  align-items: flex-start;
  text-align: center;
`;
