import {Card, CardContent, Typography} from "@mui/material";

const UserGists = ({userGists}) => {
  return <div className="results-box">
    <div>
      {userGists.map((gist, index) => {

        const noOfFiles = Object.keys(gist.files).length;
        return (
          <Card sx={{minWidth: 275}} key={index}>
            <CardContent>
              <Typography sx={{fontSize: 14}} color="text.secondary" gutterBottom>
                {(gist.description) || 'No Description'}
              </Typography>
              <Typography variant="h5" component="div">
                {noOfFiles} {(noOfFiles > 1) ? 'Files' : 'File'}
              </Typography>
              {
                Object.keys(gist.files).map((item, index) => {
                  return (
                    <Card sx={{minWidth: 275}} key={index}>
                      <Typography sx={{fontSize: 14}} color="text.secondary"
                                  gutterBottom>{gist.files[item].language}</Typography>
                    </Card>
                  );
                })
              }
            </CardContent>
          </Card>
        );
      })}
    </div>
  </div>;
}

export default UserGists;
