import './App.css';
import React from 'react';
import {AppBar, Autocomplete, Box, CssBaseline, Stack, TextField, Toolbar, Typography} from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';
import _ from 'lodash';
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchUsers, fetchSearchUsers, fetchGitDetails, fetchUsernameGists} from "./store/githubSlice";
import UserDetails from "./components/userDetails";
import UserGists from "./components/userGists";
import {createTheme, ThemeProvider} from '@mui/material/styles';

const theme = createTheme();

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUsers());
  }, []);
  const usersSuggestion = useSelector((state) => state.github.usersSuggestion);
  const gitDetails = useSelector((state) => state.github.gitDetails);
  const gists = useSelector((state) => state.github.gists);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <AppBar position="relative">
        <Toolbar>
          <GitHubIcon sx={{mr: 2}}/>
          <Typography variant="h6" color="inherit" noWrap>
            React Gist
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 2,
            pb: 1,
          }}
        >
          <Stack spacing={2} justifyContent="center" alignItems="center">
            <Autocomplete
              id="users-serach"
              sx={{ width: 300 }}
              options={usersSuggestion}
              onChange={(e, val) => {
                e.stopPropagation();
                e.preventDefault();
                dispatch(fetchGitDetails(val));
                dispatch(fetchUsernameGists(val));
              }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Search input"
                  onChange={e => {
                    dispatch(fetchSearchUsers(e.target.value));
                  }}
                  InputProps={{
                    ...params.InputProps,
                    type: 'search',
                  }}
                />
              )}
            />
          </Stack>
        </Box>
        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 8,
            pb: 6,
          }}
        >
          {!_.isEmpty(gitDetails) && <UserDetails userDetails={gitDetails}/>}
          {!_.isEmpty(gists) && !_.isEmpty(gitDetails) && <UserGists userGists={gists} userDetails={gitDetails}/>}
        </Box>
      </main>
    </ThemeProvider>
  );
}

export default App;
