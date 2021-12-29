import * as React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

import { Box, Paper } from "@mui/material";

export default function Framework({ selected, setSelected }) {
  console.log(selected.framework);
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
        I WANT MY SITE TO BE BUILT ON (CHOOSE FRAMEWORK)
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
              ...(selected.framework === "python" && cardSelect),
            }}
            onClick={() => setSelected({ ...selected, framework: "python" })}
          >
            <Paper
              className="select"
              sx={{ textAlign: "justify", padding: `2rem 2rem 0.5rem 2rem` }}
            >
              <Typography variant="p" sx={{ fontWeight: "bold" }}>
                Python
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
              ...(selected.framework === "wordpress" && cardSelect),
            }}
            onClick={() => setSelected({ ...selected, framework: "wordpress" })}
          >
            <Paper
              className="select"
              sx={{ textAlign: "justify", padding: `2rem 2rem 0.5rem 2rem` }}
            >
              <Typography variant="p" sx={{ fontWeight: "bold" }}>
                Wordpress
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
              ...(selected.framework === "phplaravel" && cardSelect),
            }}
            onClick={() =>
              setSelected({ ...selected, framework: "phplaravel" })
            }
          >
            <Paper className="select" sx={{ padding: 3 }}>
              <Typography variant="p" sx={{ fontWeight: "bold" }}>
                Php Laravel
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
              ...(selected.framework === "php" && cardSelect),
            }}
            onClick={() => setSelected({ ...selected, framework: "php" })}
          >
            <Paper className="select" sx={{ padding: 3 }}>
              <Typography variant="p" sx={{ fontWeight: "bold" }}>
                Php (From Scratch)
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
              ...(selected.framework === "kajabi" && cardSelect),
            }}
            onClick={() => setSelected({ ...selected, framework: "kajabi" })}
          >
            <Paper className="select" sx={{ padding: 3 }}>
              <Typography variant="p" sx={{ fontWeight: "bold" }}>
                Kajabi
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
