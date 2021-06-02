import styled from "styled-components";
import img from "../../assets/images/bg-2.jpg";

export const Section = styled.div`
  background-image: url(${img});
  padding: 80px 0;
  float: left;
  width: 100%;
`;
export const CenterHeading = styled.div`
  text-align: center;
  h5 {
    background: linear-gradient(to right, #fc2547 50%, #ff5a00 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-size: 20px;
    font-weight: 300;
    margin-bottom: 30px;
  }
  h1 {
    color: #ffffff;
    line-height: 1;
    font-size: 72px;
    font-weight: 400;
    margin-bottom: 50px;
  }
`;
export const IconOuter = styled.div`
  text-align: center;
  .MuiPaper-root {
    width: 200px;
    height: 200px;
    margin: 0 auto 20px;
    display: table;
    background: none;
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  h3 {
    color: #ffffff;
    font-size: 20px;
    font-weight: 300;
  }
`;
