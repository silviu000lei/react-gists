import React from 'react';
import {Avatar, Box, Container, Grid, Typography} from "@mui/material";

const UserDetails = ({userDetails}) => {
  return <Box
    sx={{
      bgcolor: 'background.paper',
      pt: 2,
      pb: 1,
    }}
  >
    <Container maxWidth="sm">
      <Typography
        component="h1"
        variant="h2"
        align="center"
        color="text.primary"
        gutterBottom
      >
        {userDetails.name}
      </Typography>
      <Grid container spacing={4}>
        <Grid item xs={12} md={3}>
          <Avatar
            alt={userDetails.name}
            src={userDetails.avatar}
            sx={{width: 100, height: 100}}
          />
        </Grid>
        <Grid item xs={12} md={8}>
          <Grid container>
            <Grid item xs={12} md={6}>
              <b>Username:</b> {userDetails.username}
            </Grid>
            <Grid item xs={12} md={6}>
              <b>Repositories:</b> {userDetails.repos}
            </Grid>
            <Grid item xs={12} md={6}>
              <b>Followers:</b> {userDetails.followers}
            </Grid>
            <Grid item xs={12} md={6}>
              <b>Following:</b> {userDetails.following}
            </Grid>
            <Grid item xs={12} md={6}>
              <b>Gists:</b> {userDetails.gists}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  </Box>;
}

export default UserDetails;
