import styled from "styled-components";

export const UpperDiv = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #3e3e3e;
  height: 275px;
  justify-content: center;
  align-items: center;
`;
export const LowerDiv = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #424242;
  height: 100px;
  border-top: 1px solid black;
  justify-content: space-evenly;
  align-items: center;
  color: #fff;
`;

export const FooterLinkLists = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;
export const FooterLink = styled.li`
    display: flex;
    flex-direction: row;
    padding: 10px;
    cursor: pointer;

    &:hover{
        color: #FEA742;
    }
`;

export const SocialMedia = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;
export const SocialMediaLink = styled.li`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 10px;
  cursor: pointer;
`;
export const Logo = styled.div`
    display:flex;
    font-size: 29px;
    font-family: Sunshine;
`;
