import styled from "styled-components";
import img from "../../assets/images/bg-1.jpg";

export const Section = styled.div`
  background-image: url(${img});
  padding: 80px 0;
  float: left;
  width: 100%;
  margin-bottom: 200px;
`;
export const CenterHeading = styled.div`
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
  p {
    color: #ffffff;
    font-size: 16px;
  }
`;
export const IconOuter = styled.div`
  margin-top: 50px;
  text-align: center;
  .MuiPaper-root {
    margin: 0 auto 20px;
    display: table;
    background: none;
  }
  i {
    color: red;
    font-size: 80px;
    -webkit-transition: all 1s ease;
    -moz-transition: all 1s ease;
    -o-transition: all 1s ease;
    -ms-transition: all 1s ease;
    transition: all 1s ease;
    &:hover {
      transform: scale(1.2);
      -webkit-transition: all 1s ease;
      -moz-transition: all 1s ease;
      -o-transition: all 1s ease;
      -ms-transition: all 1s ease;
      transition: all 1s ease;
    }
  }
  h3 {
    color: #ffffff;
    font-size: 20px;
    font-weight: 300;
  }
`;
