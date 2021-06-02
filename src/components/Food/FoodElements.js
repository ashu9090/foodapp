import styled from "styled-components";
import img from "../../assets/images/bg-2.jpg";
export const MainSelection = styled.div`
  padding: 80px 0;
  float: left;
  width: 100%;
  background-image: url(${img});
  overflow: hidden;
`;
export const FoodHeading = styled.div`
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

export const IconTextBox = styled.div`
  text-align: center;
  color: #fff;
  i {
    color: red;
    font-size: 30px;
  }
  h4 {
    font-size: 24px;
    font-weight: 600;
    margin: 10px 0;
  }
  p {
    font-size: 18px;
    font-weight: 300;
  }
`;
export const ProductBox = styled.div`
  float: left;
  background: #000;
  width: 100%;
  .MuiPaper-root {
    position: relative;
    height: 200px;
    width: 100%;
    border-radius: 0px;
    overflow: hidden;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .MuiTypography-root {
    padding: 20px 15px;
    color: #fff;
    position: relative;
    .ratingStars {
      position: absolute;
      right: 11px;
    }
  }
`;
export const Time = styled.div`
  background: red;
  color: #fff;
  position: absolute;
  z-index: 4;
  right: 0px;
  top: 0;
  width: 60px;
  height: 60px;
  padding: 10px 0 10px 20px;
  border-radius: 0 0 0 50px;
  text-align: center;
`;
export const CenterButton = styled.div`
  text-align: center;
  float: left;
  width: 100%;
  margin-top: 50px;
  a {
    border: solid 1px #fc2547;
    color: #ffffff;
    font-weight: 700;
    border-radius: 100px;
    padding: 14px 35px;
    font-size: 16px;
    text-transform: uppercase;
    text-align: center;
    background-image: linear-gradient(
      to right,
      #fc2547 0%,
      #ff5a00 50%,
      #fc2547 100%
    );
  }
`;
