import {createSlice} from '@reduxjs/toolkit'
import {BASE_URL} from "../utils/constants";
import {octokit} from "../utils/octokit";

export const githubSlice = createSlice({
  name: 'github',
  initialState: {
    usersSuggestion: [],
    gitDetails: {},
    gists: []
  },
  reducers: {
    setGitDetails: (state, action) => {
      state.gitDetails = action.payload;
    },
    setGists: (state, action) => {
      state.gists = action.payload;
    },
    setUsersSuggestion: (state, action) => {
      state.usersSuggestion = action.payload;
    }
  },
})

// Action creators are generated for each case reducer function
export const {setGitDetails, setGists, setUsersSuggestion} = githubSlice.actions

export default githubSlice.reducer

export const fetchUsers = () => async dispatch => {
  try {
    await octokit.request(`GET ${BASE_URL}/users`)
      .then((response) => dispatch(setUsersSuggestion(response.data.map(item => item.login))))
  } catch (e) {
    return console.error(e.message);
  }
}

export const fetchSearchUsers = (search) => async dispatch => {
  try {
    await octokit.request(`GET ${BASE_URL}/search/users?per_page=10&page=1&q=${search}`)
      .then((response) => dispatch(setUsersSuggestion(response.data.items.map(item => item.login))))
  } catch (e) {
    return console.error(e.message);
  }
}

export const fetchGitDetails = (username) => async dispatch => {
  try {
    await octokit.request(`GET ${BASE_URL}/users/${username}`)
      .then((response) => {
        const details = response.data;
        const payload = {
          username: details.login,
          name: details.name,
          avatar: details.avatar_url,
          repos: details.public_repos,
          gists: details.public_gists,
          followers: details.followers,
          following: details.following,
        };
        dispatch(setGitDetails(payload))
      })
  } catch (e) {
    return console.error(e);
  }
}

export const fetchUsernameGists = (username) => async dispatch => {
  try {
    await octokit.request(`GET ${BASE_URL}/users/${username}/gists`)
      .then((response) => {
        const gists = response.data;
        dispatch(setGists(gists));
      })
  } catch (e) {
    return console.error(e);
  }
}
