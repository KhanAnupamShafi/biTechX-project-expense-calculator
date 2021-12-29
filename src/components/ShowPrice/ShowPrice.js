import { Box, Container, Paper, Typography } from "@mui/material";
import React, { useEffect } from "react";

const ShowPrice = ({ activeStep, selected }) => {
  console.log(selected);

  const [framework, setFramework] = React.useState(null);
  const [type, setType] = React.useState(null);
  const [ready, setReady] = React.useState(1200);
  const [pages, setPages] = React.useState(null);
  const [payment, setPayment] = React.useState(null);

  useEffect(() => {
    if (selected.framework === "wordpress") {
      setFramework(600);
    } else if (selected.framework === "python") {
      setFramework(200);
    } else if (selected.framework === "phplaravel") {
      setFramework(300);
    } else if (selected.framework === "php") {
      setFramework(400);
    } else if (selected.framework === "kajabi") {
      setFramework(500);
    }
  }, [selected.framework]);

  useEffect(() => {
    if (selected.type === "ecommerce") {
      setType(600);
    } else if (selected.type === "learning") {
      setType(200);
    } else if (selected.type === "blog") {
      setType(300);
    } else if (selected.type === "mysite") {
      setType(400);
    }
  }, [selected.type]);

  useEffect(() => {
    if (selected.ready === true) {
      setReady(1200);
    } else if (selected.ready === false) {
      setReady(2000);
    }
  }, [selected.ready]);

  useEffect(() => {
    if (selected.pages === 1) {
      setPages(600);
    } else if (selected.pages === 2) {
      setPages(800);
    } else if (selected.pages === 3) {
      setPages(1000);
    } else if (selected.pages === 4) {
      setPages(1100);
    } else if (selected.pages === 5) {
      setPages(1200);
    } else if (selected.pages === 6) {
      setPages(1300);
    } else if (selected.pages === 7) {
      setPages(1400);
    } else if (selected.pages === 8) {
      setPages(1600);
    } else if (selected.pages === 9) {
      setPages(1800);
    } else if (selected.pages === 10) {
      setPages(2000);
    }
  }, [selected.pages]);

  useEffect(() => {
    if (selected.payment === "stripe") {
      setPayment(600);
    } else if (selected.payment === "paypal") {
      setPayment(200);
    } else if (selected.payment === "both") {
      setPayment(800);
    } else if (selected.payment === "none") {
      setPayment(0);
    }
  }, [selected.payment]);

  console.log(framework);
  console.log(type);
  console.log(ready);
  console.log(pages);

  return (
    <div>
      {activeStep === 2 ? (
        <Container component="main" sx={{ mb: 4 }}>
          <Paper
            variant="outlined"
            sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
          >
            <Typography sx={{ color: "#13A2E2" }} gutterBottom>
              Est Cost
            </Typography>
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              ${framework + type + ready + pages + payment} - $
              {framework + type + ready + pages + payment + 500}
            </Typography>
            <Typography>
              "This cost will include 2 rounds of corrections at UI design
              stage, and once the design is finalized, we will proceed to
              development. Project will be divided into 2 - 3 milestone
              payments."
            </Typography>
          </Paper>

          <Box
            sx={{
              color: "white",
              p: 2,

              bottom: 40,

              zIndex: "tooltip",
            }}
          >
            <Paper
              variant="outlined"
              sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
            >
              <Typography variant="h5" gutterBottom>
                Start Your Project Now
              </Typography>
            </Paper>
          </Box>
        </Container>
      ) : activeStep === 3 ? (
        <Container component="main" sx={{ mb: 4 }}>
          <Paper
            variant="outlined"
            sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
          >
            <Typography variant="h5" gutterBottom>
              Thank you
            </Typography>
          </Paper>
        </Container>
      ) : (
        <Container component="main" sx={{ mb: 4 }}>
          <Paper
            variant="outlined"
            sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
          >
            <Typography variant="subtitle1">
              PLEASE INPUT ALL THE FIELDS TO SHOW ESTIMATED PRICE
            </Typography>
          </Paper>
        </Container>
      )}
    </div>
  );
};

export default ShowPrice;
