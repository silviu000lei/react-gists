import { Card, CardContent, Chip, Grid, Stack, Typography} from "@mui/material";
import _ from 'lodash';

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
                <Grid item>
                  <Typography color="text.secondary" gutterBottom>
                    {(gist.description) || 'No Description'}
                  </Typography>
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
