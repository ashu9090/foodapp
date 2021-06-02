import React from "react";

import Slider from "react-slick";
import { Section, ClientPerson } from "./TestimonialElement";
import { Container, Grid, Paper, Typography } from "@material-ui/core";
import { clients } from "../../DataConfig";
function Testimonial() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Section>
      <Container>
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
          spacing={3}
        >
          <Grid item xs={12} md={8}>
            <Slider {...settings}>
              {clients.map((elem, i) => {
                const { pic, name, city, subTitle } = elem;
                return (
                  <ClientPerson key={(elem, i)}>
                    <Paper>
                      <img src={pic} alt="client" />
                    </Paper>
                    <Typography>
                      <h3>{name}</h3>
                      <h5>{city}</h5>
                      <p>{subTitle}</p>
                    </Typography>
                  </ClientPerson>
                );
              })}
            </Slider>
          </Grid>
        </Grid>
      </Container>
    </Section>
  );
}

export default Testimonial;
