import React from "react";
import { Container, Grid, Paper } from "@material-ui/core";
import { Section, CenterHeading, IconOuter } from "./AppIconElement";
import { AppHeading, AppIconsList } from "../../DataConfig";
import { Link } from "react-router-dom";
function AppIcons() {
  return (
    <Section id="app">
      <Container>
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
          spacing={3}
        >
          <Grid item xs={12} md={8} lg={6}>
            {AppHeading.map((elem, i) => {
              const { Title, SubTitle } = elem;
              return (
                <CenterHeading key={(elem, i)}>
                  <h5>{Title}</h5>
                  <h1>{SubTitle}</h1>
                </CenterHeading>
              );
            })}
          </Grid>
        </Grid>
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
          spacing={3}
        >
          <Grid item xs={12} md={8}>
            <Grid
              container
              direction="row"
              justify="center"
              alignItems="center"
              spacing={3}
            >
              {AppIconsList.map((elem, i) => {
                const { Title, pic } = elem;
                return (
                  <Grid item xs-12 md={6} key={(elem, i)}>
                    <Link to="/">
                      <IconOuter>
                        <Paper>
                          <img src={pic} alt="app" />
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

export default AppIcons;
