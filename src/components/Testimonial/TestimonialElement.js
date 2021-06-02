import styled from "styled-components";
import img from "../../assets/images/test-banner.jpg";

export const Section = styled.div`
  background-image: url(${img});
  background-color: #111;
  background-blend-mode: overlay;
  padding: 60px 0;
  background-attachment: fixed;
  float: left;
  width: 100%;
`;
export const ClientPerson = styled.div`
  text-align: center;
  .MuiPaper-root {
    width: 80px;
    height: 80px;
    border-radius: 100px;
    overflow: hidden;
    margin: 0 auto 10px;
    display: table;
  }
  h3 {
    color: red;
    font-size: 26px;
    text-transform: capitalize;
    font-weight: 400;
  }
  h5 {
    color: #fff;
    font-size: 16px;
    text-transform: capitalize;
    font-weight: 300;
    margin: 10px 0;
  }
  p {
    color: #fff;
    font-size: 14px;
    font-weight: 300;
  }
`;
