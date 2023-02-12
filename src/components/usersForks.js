import {Avatar, Grid, Link, Typography} from "@mui/material";
import {useEffect, useState} from "react";
import {octokit} from "../utils/octokit";
import {BASE_URL} from "../utils/constants";

const GistsForks = ({idGists}) => {
  const [forks, setForks] = useState([]);
  useEffect(() => {
    async function fetchData() {
      await octokit.request(`GET ${BASE_URL}/gists/${idGists}/forks`)
        .then((response) => {
          setForks(response.data)
        })
    }

    fetchData();
  }, [idGists]);
  return (
    <Grid container
          direction="row"
          justifyContent="flex-start"
          alignItems="center"
          spacing={2}
          pb={2}
    >
      <Grid item p={0} style={{paddingTop: 0, paddingRight: 10}}>
        <Typography variant="h5" sx={{fontSize: 14}}>User forks: </Typography>
      </Grid>
      {forks.length === 0 && (
        <Grid item p={0} style={{padding: 0}}>
          <Typography variant="h5" sx={{fontSize: 14, paddingTop: 0}}>no forks</Typography>
        </Grid>
      )}
      {forks.map((item, index) => {
        return (
          <Link href={item.owner.html_url} key={index} target={'_blank'}>
            <Avatar
              style={{padding: '2px'}}
              alt={item.owner.login}
              src={item.owner.avatar_url}
            />
          </Link>
        );
      })}
    </Grid>
  );
}

export default GistsForks;
