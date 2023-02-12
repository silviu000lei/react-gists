# Project Title
React Single Page Application demo that uses Github Gist API to show all public gists for an user.


## Description
ReactJS Single Page App demo which has the following features:
1. Search: When a user enters a username, it should be able to get a full list of public gists by that user.
2. Filetype: Convert the filetypes of the files in the gist into a tag/badge, (e.g, if the returned gist has list of files containing python and javascript files, the gist should have the respective tags/badges).
3. Fork: Username/Avatar of the last 3 users who forked it with avatar linking to the fork.


## Libraries/Components used
* @emotion/react
* @emotion/styled
* @fontsource/roboto
* @mui/icons-material
* @mui/material
* @octokit/rest
* @reduxjs/toolkit
* @testing-library/jest-dom
* @testing-library/react
* @testing-library/user-event
* axios
* lodash
* moment
* octokit
* react
* react-dom
* react-redux
* react-scripts
* web-vitals


## Getting Started and Installing
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

* First Git clone the repo into your computer
```
git clone https://github.com/silviu000lei/react-gists.git
```
* Open your terminal
```
$ cd react-gist
$ npm install
```
* This should install all the dependencies. Once done
* Create a personal access token [here](https://github.com/settings/tokens) to authenticate to GitHub from the browser.
* Create an file .env and add REACT_APP_GH.
* Run
``` 
$ yarn start
or
$ npm start
```
* to start the server.
* [open] (http://localhost:3000) in your browser.
* This should open up the Demo App

## Possible Improvements
* Pagination for large result set.[react-infinite](https://github.com/seatgeek/react-infinite) or [react-virtualized](https://github.com/bvaughn/react-virtualized).
* Better Styling may be.
* Use of normalizr library to normalize the redux store. [normalizr](https://github.com/paularmstrong/normalizr).
* Unit Tests - JEST & Enzyme.

## Authors
* **[Ion Silviu Lucian](https://github.com/silviu000lei)**

## License
This project is licensed under the MIT License
