import React, { useEffect } from "react";
import { VideoItem } from "./components";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Theme from "../theme";
import videoDetails from "./util/videoDetails";

export default function Videos() {
  const classes = Theme();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Box className={classes.page}>
        <Box pt={10}>
          <Typography className={classes.title} variant="h2" align="center">
            Videos
          </Typography>
        </Box>
        <Box pt={5} pb={5}>
          <Typography className={classes.title} variant="h5" align="center">
            My Games
          </Typography>
        </Box>
        <Box
          display="flex"
          flexWrap="wrap"
          alignItems="stretch"
          justifyContent="center"
          p={2}
        >
          {videoDetails
            .filter((videoItem) => videoItem.genre === "My Games")
            .map((videoItem) => (
              <Box key={videoItem.title} p={2}>
                <VideoItem link={videoItem.link} title={videoItem.title} />
              </Box>
            ))}
        </Box>
        <Box pt={5} pb={5}>
          <Typography className={classes.title} variant="h5" align="center">
            My Music
          </Typography>
        </Box>

        <Box
          display="flex"
          flexWrap="wrap"
          alignItems="stretch"
          justifyContent="center"
          p={2}
        >
          {videoDetails
            .filter((videoItem) => videoItem.genre === "My Music")
            .map((videoItem) => (
              <Box key={videoItem.title} p={2}>
                <VideoItem link={videoItem.link} title={videoItem.title} />
              </Box>
            ))}
        </Box>
      </Box>
    </div>
  );
}
