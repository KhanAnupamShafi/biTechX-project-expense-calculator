import * as React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

import { Box, Paper } from "@mui/material";

export default function SiteType({ selected, setSelected }) {
  const cardStyle = {
    margin: "1rem",
  };

  const cardSelect = {
    border: "2px solid #13A2E2",
    boxShadow: "2px 4px 15px 0px rgba(0, 0, 0, 0.75)",
  };
  return (
    <React.Fragment>
      <Typography variant="h5" gutterBottom sx={{ fontWeight: "bold" }}>
        I WANT TO BUILD
      </Typography>
      <Grid container justifyContent="center" alignItems="center" spacing={0}>
        <Grid item xs={12}>
          <Box
            sx={{
              margin: "auto",
              textAlign: "left",
              "&:hover": {
                opacity: [0.9, 0.8, 0.7],
                cursor: "pointer",
              },
            }}
            style={{
              ...cardStyle,
              ...(selected.type === "ecommerce" && cardSelect),
            }}
            onClick={() => setSelected({ ...selected, type: "ecommerce" })}
          >
            <Paper className="select" sx={{ padding: 3 }}>
              <Typography variant="p" sx={{ fontWeight: "bold" }}>
                An ecommerce site
              </Typography>
              <Typography
                variant="p"
                component="div"
                sx={{ fontWeight: "light" }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
                ipsum suspendisse ultrices gravida. Risus commodo viverra
                maecenas accumsan lacus vel facilisis.
              </Typography>
            </Paper>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box
            sx={{
              margin: "auto",
              textAlign: "left",
              "&:hover": {
                opacity: [0.9, 0.8, 0.7],
                cursor: "pointer",
              },
            }}
            style={{
              ...cardStyle,
              ...(selected.type === "learning" && cardSelect),
            }}
            onClick={() => setSelected({ ...selected, type: "learning" })}
          >
            <Paper className="select" sx={{ padding: 3 }}>
              <Typography variant="p" sx={{ fontWeight: "bold" }}>
                An online course platform
              </Typography>
              <Typography
                variant="p"
                component="div"
                sx={{ fontWeight: "light" }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
                ipsum suspendisse ultrices gravida. Risus commodo viverra
                maecenas accumsan lacus vel facilisis.
              </Typography>
            </Paper>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box
            sx={{
              margin: "auto",
              textAlign: "left",
              "&:hover": {
                opacity: [0.9, 0.8, 0.7],
                cursor: "pointer",
              },
            }}
            style={{
              ...cardStyle,
              ...(selected.type === "blog" && cardSelect),
            }}
            onClick={() => setSelected({ ...selected, type: "blog" })}
          >
            <Paper className="select" sx={{ padding: 3 }}>
              <Typography variant="p" sx={{ fontWeight: "bold" }}>
                A blog site
              </Typography>
              <Typography
                variant="p"
                component="div"
                sx={{ fontWeight: "light" }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
                ipsum suspendisse ultrices gravida. Risus commodo viverra
                maecenas accumsan lacus vel facilisis.
              </Typography>
            </Paper>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box
            sx={{
              margin: "auto",
              textAlign: "left",
              "&:hover": {
                opacity: [0.9, 0.8, 0.7],
                cursor: "pointer",
              },
            }}
            style={{
              ...cardStyle,
              ...(selected.type === "mysite" && cardSelect),
            }}
            onClick={() => setSelected({ ...selected, type: "mysite" })}
          >
            <Paper className="select" sx={{ padding: 3 }}>
              <Typography variant="p" sx={{ fontWeight: "bold" }}>
                My company website with pice calculators
              </Typography>
              <Typography
                variant="p"
                component="div"
                sx={{ fontWeight: "light" }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
                ipsum suspendisse ultrices gravida. Risus commodo viverra
                maecenas accumsan lacus vel facilisis.
              </Typography>
            </Paper>
          </Box>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
