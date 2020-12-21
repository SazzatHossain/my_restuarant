import react, {useState} from "react";
import styled from "styled-components";


export const UpperDiv = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  background-color: #3e3e3e;
  min-height: 275px;
  justify-content: center;
  align-items: center;
`;
export const LowerDiv = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  background-color: #424242;
  min-height: 100px;
  border-top: 1px solid black;
  justify-content: space-evenly;
  align-items: center;
  color: #fff;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const FooterLinkLists = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;
export const FooterLink = styled.li`
  display: flex;
  user-select: none;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 10px;
  cursor: pointer;

  &:hover {
    color: #fea742;
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


  #facebook{
    &:hover{
      color: #1877F2;
    }
  }

  #twitter{
    &:hover{
      color: #1DA1F2;
    }
  }
  #instagram{
    &:hover{
      color: #F24C58;
    }
  }
  #linkedin{
    &:hover{
      color: #0077B5;
    }
  }
  #youtube{
    &:hover{
      color: red;
    }
  }

`;

