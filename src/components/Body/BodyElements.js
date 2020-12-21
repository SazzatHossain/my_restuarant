import styled from "styled-components";

export const Main = styled.div`
  height: auto;
  width: 100%;
  overflow-x: auto;
  /* position: absolute; */
`;

export const BodyContent = styled.div`
  display: block;
  padding-top: 130px;
  padding-bottom: 100px;
  text-align: center;
  margin-top: 80px;

  /* position: relative; */
`;
export const P = styled.p`
  text-align: center;
  font-size: 15px;
  font-family: Georgia, "Times New Roman", Times, serif;
`;

export const Text = styled.div`
  color: #272727;
  font-size: 85px;
  /* font-weight: bold; */
  font-family: Sunshine;
`;

export const Button = styled.div`
  padding: 11px;
  background: transparent;
  display: inline-block;
  color: #ffa742;
  /* width: 20px; */
  border: 2px solid #ffa742;
  font-weight: bold;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  user-select: none;

  &:hover {
    background-color: #ffa742;
    cursor: pointer;
    color: #fff;
  }
`;
