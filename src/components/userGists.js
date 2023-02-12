import React from 'react';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Card,
  CardContent,
  Chip,
  Grid,
  Stack,
  Typography
} from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import _ from 'lodash';
import moment from 'moment';
import Gist from "./gistShow";

const UserGists = ({userGists, userDetails}) => {

  const allFiletypeColors = _.uniq(userGists.map((gist) => {
    return Object.keys(gist.files).map((item) => { return gist.files[item].language;});
  })).map((filetype) => {
    return {
      filetype: filetype[0],
      colorCode: Math.floor(Math.random()*16777215).toString(16).padStart(6, '0').toUpperCase(),
    }
  });


  return <Stack spacing={2} justifyContent="center" alignItems="center">
    {userGists.map((gist) => {

      return Object.keys(gist.files).map((item, index) => {
        const filetypeColor = allFiletypeColors.find(itemColor => itemColor.filetype === gist.files[item].language);
        return (
          <Card sx={{minWidth: 600, maxWidth: 600}} key={index}>
            <CardContent>
              <Grid container
                    spacing={3}
                    justifyContent="space-between"
                    alignItems="center"
                    pb={2}
              >
                <Grid item>
                  <Typography variant="h3" sx={{fontSize: 18}} gutterBottom>
                    {userDetails.username} / {gist.files[item].filename.replace(/\.[^/.]+$/, "")}
                  </Typography>
                </Grid>
                <Grid item>
                  <Chip style={{background: filetypeColor?'#' + filetypeColor.colorCode:'green', color: '#ffffff'}} label={_.isEmpty(gist.files[item].language)?'Unknown':gist.files[item].language}/>
                </Grid>
              </Grid>
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <Typography variant='h4' sx={{fontSize: 14}} gutterBottom>
                    Created {moment(gist.created_at).fromNow()}
                  </Typography>
                </Grid>
                <Grid item xs={12} pb={2}>
                  <Typography color="text.secondary" gutterBottom>
                    {(gist.description) || 'No Description'}
                  </Typography>
                </Grid>
              </Grid>
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <Accordion>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                    >
                      <Typography>Click to show</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Gist id={gist.id} />
                    </AccordionDetails>
                  </Accordion>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        );
      });
    })
    }
  </Stack>;
}

export default UserGists;
