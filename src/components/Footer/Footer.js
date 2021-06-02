import React from "react";
import { Link } from "react-router-dom";
import { Section, CenterHeading } from "./FooterElement";
import { Grid, Container } from "@material-ui/core";
function Footer() {
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
          <Grid item xs={12} md={8} lg={6}>
            <CenterHeading>
              <ul className="sIcons">
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
              <p>© 2020 Food App. Made With Love By Ashu</p>
            </CenterHeading>
          </Grid>
        </Grid>
      </Container>
    </Section>
  );
}

export default Footer;
