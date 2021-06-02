import styled from "styled-components";
import img from "../../assets/images/bg-2.jpg";

export const Section = styled.div`
  background-image: url(${img});
  padding: 80px 0;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: -1;
`;
export const CenterHeading = styled.div`
  .sIcons {
    display: table;
    margin: 0 auto 20px;
    padding: 0;
    list-style: none;
    text-align: center;
    li {
      display: inline-block;
      margin: 0 10px;
      a {
        color: #fff;
        background: red;
        width: 30px;
        height: 30px;
        line-height: 30px;
        border-radius: 100px;
        display: inline-block;
        &:hover {
          color: red;
          background: #fff;
        }
      }
    }
  }
  p {
    font-size: 12px;
    color: #fff;
    text-align: center;
  }
`;
