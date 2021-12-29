import * as React from "react";
import Typography from "@mui/material/Typography";

import { Button, Slider, Stack } from "@mui/material";
import { Box } from "@mui/system";

export default function Review({ selected, setSelected }) {
  const [value, setValue] = React.useState(1);

  const cardStyle = {
    background: "#f3f3f3f3",
    margin: "1rem",
    color: "black",
  };

  const cardSelect = {
    border: "1px solid #13A2E2",
    background: "#fefefefe",
    boxShadow: "2px 4px 10px 0px rgba(0, 0, 0, 0.75)",
  };

  const handleChange = (value, newValue) => {
    setValue(newValue);
    setSelected({ ...selected, pages: newValue });
  };

  return (
    <React.Fragment>
      <React.Fragment>
        <Typography
          variant="h6"
          component="div"
          sx={{ fontWeight: "bold" }}
          gutterBottom
        >
          DO YOU HAVE UX DESIGN READY?
        </Typography>
        <Stack
          justifyContent="center"
          alignItems="center"
          direction="row"
          spacing={2}
        >
          <Button
            style={{
              ...cardStyle,
              ...(selected.ready === true && cardSelect),
            }}
            onClick={() => setSelected({ ...selected, ready: true })}
          >
            <div className="select">Yes</div>
          </Button>

          <Button
            style={{
              ...cardStyle,
              ...(selected.ready === false && cardSelect),
            }}
            onClick={() => setSelected({ ...selected, ready: false })}
          >
            <div className="select">No</div>
          </Button>
        </Stack>

        <Typography
          variant="h6"
          component="div"
          sx={{ fontWeight: "bold", pb: 2 }}
          gutterBottom
        >
          HOW MANY WEBPAGES DO YOU WANT FOR YOUR PUBLIC WEBSITE?
        </Typography>
        <Typography variant="subtitle1">
          {value === 1 ? "1 page" : `${value} pages`}
        </Typography>

        <Box width={300} sx={{ margin: "auto", pb: 2 }}>
          <Slider
            aria-label="Temperature"
            defaultValue={1}
            valueLabelDisplay="auto"
            onChange={handleChange}
            step={1}
            marks
            min={1}
            max={10}
          />
        </Box>
        <Typography
          variant="h6"
          component="div"
          sx={{ fontWeight: "bold" }}
          gutterBottom
        >
          ANY PAYMENT GATEWAY INTEGRATION?
        </Typography>
        <Stack
          justifyContent="center"
          alignItems="center"
          direction="row"
          spacing={2}
        >
          <Button
            style={{
              ...cardStyle,
              ...(selected.payment === "stripe" && cardSelect),
            }}
            onClick={() => setSelected({ ...selected, payment: "stripe" })}
          >
            <div className="select">Stripe</div>
          </Button>

          <Button
            style={{
              ...cardStyle,
              ...(selected.payment === "paypal" && cardSelect),
            }}
            onClick={() => setSelected({ ...selected, payment: "paypal" })}
          >
            <div className="select">Paypal</div>
          </Button>
          <Button
            style={{
              ...cardStyle,
              ...(selected.payment === "both" && cardSelect),
            }}
            onClick={() => setSelected({ ...selected, payment: "both" })}
          >
            <div className="select">Both</div>
          </Button>
          <Button
            style={{
              ...cardStyle,
              ...(selected.payment === "none" && cardSelect),
            }}
            onClick={() => setSelected({ ...selected, payment: "none" })}
          >
            <div className="select">None</div>
          </Button>
        </Stack>
      </React.Fragment>
    </React.Fragment>
  );
}
