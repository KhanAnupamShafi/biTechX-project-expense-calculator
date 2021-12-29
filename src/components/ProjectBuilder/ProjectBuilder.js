import { Grid } from "@mui/material";
import React from "react";
import Checkout from "../CalculatePrice/Checkout";
import ShowPrice from "../ShowPrice/ShowPrice";

const ProjectBuilder = () => {
  const [activeStep, setActiveStep] = React.useState(0);
  const [selected, setSelected] = React.useState({
    framework: "python",
    type: "ecommerce",
    ready: true,
    pages: 1,
    payment: "none",
  });

  return (
    <Grid container spacing={2} columns={16} sx={{ fontFamily: "Poppins" }}>
      <Grid item xs={8}>
        <Checkout
          activeStep={activeStep}
          setActiveStep={setActiveStep}
          setSelected={setSelected}
          selected={selected}
        />
      </Grid>
      <Grid item xs={8}>
        <ShowPrice activeStep={activeStep} selected={selected} />
      </Grid>
    </Grid>
  );
};

export default ProjectBuilder;
