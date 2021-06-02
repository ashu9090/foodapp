import React from "react";
import { Link } from "react-router-dom";
import { Grid, Container, Paper, Typography } from "@material-ui/core";
import {
  FoodHeading,
  MainSelection,
  IconTextBox,
  ProductBox,
  Time,
  CenterButton,
} from "./FoodElements";
import { FoodText, IconTexBox, productData } from "../../DataConfig";
function Food() {
  return (
    <MainSelection id="food">
      <Container>
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
          spacing={3}
        >
          <Grid item xs={12} md={4}>
            {FoodText.map((elem, i) => {
              const { Title, SubTitle } = elem;
              return (
                <FoodHeading key={(elem, i)}>
                  <h5>{Title}</h5>
                  <h1>{SubTitle}</h1>
                </FoodHeading>
              );
            })}
          </Grid>
          <Grid item xs={12} md={8}>
            <Grid
              container
              direction="row"
              justify="flex-end"
              alignItems="center"
              spacing={2}
            >
              {IconTexBox.map((elem, i) => {
                const { Icon, Title, SubTitle } = elem;
                return (
                  <Grid item xs={12} md={4} lg={3} key={(elem, i)}>
                    <IconTextBox>
                      <i className={Icon}></i>
                      <h4>{Title}</h4>
                      <p>{SubTitle}</p>
                    </IconTextBox>
                  </Grid>
                );
              })}
            </Grid>
          </Grid>
        </Grid>
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
          spacing={3}
        >
          {productData.map((elem, i) => {
            const { time, pic, Title, subTitle, stars } = elem;
            return (
              <Grid item xs={12} md={6} lg={4} key={(elem, i)}>
                <Link to="/">
                  <ProductBox>
                    <Paper>
                      <img src={pic} alt="product" />
                      <Time>{time}</Time>
                    </Paper>
                    <Typography>
                      <div className="ratingStars">
                        {stars.map((line, i) => {
                          return <i className={stars} key={(line, i)}></i>;
                        })}
                      </div>

                      <h3>{Title}</h3>
                      <p>{subTitle}</p>
                    </Typography>
                  </ProductBox>
                </Link>
              </Grid>
            );
          })}
          <Grid item xs={12}>
            <CenterButton>
              <Link to="/">Browse More Food Options</Link>
            </CenterButton>
          </Grid>
        </Grid>
      </Container>
    </MainSelection>
  );
}

export default Food;
