import React from "react";
import { Container, Grid, Paper } from "@material-ui/core";
import { Section, CenterHeading, IconOuter } from "./DeliveryElement";
import { delivery, threeBigIcons } from "../../DataConfig";
import { Link } from "react-router-dom";
function Delivery() {
  return (
    <Section id="about">
      <Container>
        {delivery.map((elem, i) => {
          const { Title, SubTitle, description } = elem;
          return (
            <Grid container spacing={3} key={(elem, i)}>
              <Grid item xs={12} md={6} lg={6}>
                <CenterHeading>
                  <h5>{Title}</h5>
                  <h1>{SubTitle}</h1>
                </CenterHeading>
              </Grid>
              <Grid item xs={12} md={6} lg={6}>
                <CenterHeading>
                  <p>{description}</p>
                </CenterHeading>
              </Grid>
            </Grid>
          );
        })}

        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
          spacing={3}
        >
          <Grid item xs={12} md={10} lg={8}>
            <Grid
              container
              direction="row"
              justify="center"
              alignItems="center"
              spacing={3}
            >
              {threeBigIcons.map((elem, i) => {
                const { Title, icon } = elem;
                return (
                  <Grid item xs-12 md={4} key={(elem, i)}>
                    <Link to="/">
                      <IconOuter>
                        <Paper>
                          <i className={icon}></i>
                        </Paper>
                        <h3>{Title}</h3>
                      </IconOuter>
                    </Link>
                  </Grid>
                );
              })}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Section>
  );
}

export default Delivery;
