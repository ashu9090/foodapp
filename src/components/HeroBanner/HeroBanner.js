import React from "react";
import { Link } from "react-router-dom";
import {
  Container,
  SubTitle,
  MainTitle,
  Img1,
  Img2,
  Img3,
  Img4,
  PhotoBox,
  Location,
  SocialIcons,
} from "./HeroElements";
import { Button, Grid } from "@material-ui/core";
import Photo1 from "../../assets/images/slider-ele1.png";
import Photo2 from "../../assets/images/slider-ele3.png";
import Photo3 from "../../assets/images/slider-ele4.png";
import Photo4 from "../../assets/images/slider-ele5.png";
import Input from "@material-ui/core/Input";
import InputAdornment from "@material-ui/core/InputAdornment";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import { HeroText } from "../../DataConfig";

function HeroBanner() {
  return (
    <Container>
      <SocialIcons>
        <ul>
          <li>
            <Link to="/">
              <i className="fab fa-facebook-f"></i>
            </Link>
          </li>
          <li>
            <Link to="/">
              <i className="fab fa-twitter"></i>
            </Link>
          </li>
          <li>
            <Link to="/">
              <i className="fab fa-instagram"></i>
            </Link>
          </li>
        </ul>
      </SocialIcons>
      <Grid
        container
        spacing={3}
        direction="row"
        justify="center"
        alignItems="center"
      >
        {HeroText.map((elem, i) => {
          const { Title, SubTitle1, SubTitle2 } = elem;
          return (
            <Grid item xs={12} md={6} key={(elem, i)}>
              <SubTitle>{SubTitle1}</SubTitle>
              <MainTitle>{Title}</MainTitle>
              <SubTitle>{SubTitle2}</SubTitle>
            </Grid>
          );
        })}
        ;
        <Grid item xs={12} md={8}>
          <PhotoBox>
            <Img1 data-aos="fade-right">
              <img
                src={Photo1}
                id="image1"
                alt="pic"
                style={{ width: "100%" }}
              />
            </Img1>
            <Img2 data-aos="fade-left">
              <img src={Photo2} alt="pic" style={{ width: "100%" }} />
            </Img2>
            <Img3 data-aos="fade-up">
              <img src={Photo3} alt="pic" style={{ height: "100%" }} />
            </Img3>
            <Img4 data-aos="fade-down">
              <img src={Photo4} alt="pic" style={{ width: "100%" }} />
            </Img4>
          </PhotoBox>
          <Location>
            <form noValidate autoComplete="off">
              <Input
                id="input-with-icon-adornment"
                placeholder="Your Address"
                startAdornment={
                  <InputAdornment position="start">
                    <LocationOnIcon />
                  </InputAdornment>
                }
              />

              <Button type="submit">CHECK FOOD DELIVERY</Button>
            </form>
          </Location>
        </Grid>
      </Grid>
    </Container>
  );
}

export default HeroBanner;
