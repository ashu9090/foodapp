import styled from "styled-components";
import img from "../../assets/images/bg-1.jpg";

export const Container = styled.div`
  padding: 15% 0 80px 0;
  float: left;
  width: 100%;
  background-image: url(${img});
  height: 100vh;
  overflow: hidden;
`;
export const SubTitle = styled.h6`
  color: #fff;
  font-size: 16px;
  text-align: center;
  font-weight: 400;
`;
export const MainTitle = styled.h1`
  color: #fff;
  font-size: 90px;
  text-align: center;
  font-weight: 400;
  margin: 30px 0;
`;

export const PhotoBox = styled.div`
  position: relative;
  float: left;
  width: 100%;
`;
export const Img1 = styled.div`
  position: absolute;
  height: 200px;
  width: 200px;
  overflow: hidden;
  top: -400px;
  left: -98px;
  border-radius: 100px;
  z-index: 1;
`;
export const Img2 = styled.div`
  position: absolute;
  height: 400px;
  width: 400px;
  overflow: hidden;
  z-index: 1;
  right: -450px;
  top: -400px;
`;
export const Img3 = styled.div`
  position: absolute;
  height: 200px;
  width: 200px;
  overflow: hidden;
  z-index: 1;
  left: -266px;
  bottom: -234px;
`;
export const Img4 = styled.div`
  position: absolute;
  height: 70px;
  width: 70px;
  overflow: hidden;
  z-index: 1;
  right: 0;
  bottom: 340px;
`;
export const Location = styled.div`
  margin-top: 50px;
  form {
    background-color: #2d2d2d;
    overflow: hidden;
    border-radius: 100px;
    padding: 10px;
    display: flex;
    justify-content: space-between;
    .MuiInput-underline {
      width: 70%;
    }
    input {
      color: #595959;
      border-bottom: none;
      padding: 10px;
      font-size: 18px;
      width: 100%;
      &:hover {
        border-bottom: none;
      }
    }
    .MuiInputAdornment-positionStart {
      color: #595959;
    }
    .MuiInput-underline::after,
    .MuiInput-underline::before,
    .MuiInput-underline:hover:not(.Mui-disabled)::before {
      border-bottom: none;
    }
    Button {
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
  }
`;
export const SocialIcons = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 30px;
  ul {
    list-style: none;
    padding: 0;
    display: inline-flex;
    flex-direction: column;
    li {
      margin-bottom: 20px;
      a {
        color: #fff;
        padding: 10px;
        &:hover {
          background: linear-gradient(to right, #fc2547 50%, #ff5a00 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
      }
    }
  }
`;
