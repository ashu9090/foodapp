import styled from "styled-components";
export const HeaderBox = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 998;
  -webkit-transition: all 1s ease;
  -moz-transition: all 1s ease;
  -o-transition: all 1s ease;
  -ms-transition: all 1s ease;
  transition: all 1s ease;

  .scrolled {
    background: rgba(0, 0, 0, 0.8) !important;
    position: fixed;
    -webkit-transition: all 1s ease;
    -moz-transition: all 1s ease;
    -o-transition: all 1s ease;
    -ms-transition: all 1s ease;
    transition: all 1s ease;
  }
  .MuiAppBar-root {
    background: rgba(0, 0, 0, 0);
    box-shadow: none;
    padding: 10px 0;
  }
  .MuiToolbar-regular {
    display: flex;
    justify-content: space-between;
  }
`;
export const LogoBox = styled.div`
  width: 100px;
`;
export const NavContainer = styled.div`
  width: 400px;
  display: flex;
  justify-content: space-between;
  a {
    color: #fff;
    font-size: 16px;
    font-weight: 300;
    border-bottom: 1px solid transparent;
    &:hover {
      color: red;
      border-color: red;
    }
  }
  .active {
    color: red;
    border-color: red;
  }
`;
