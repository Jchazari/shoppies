<img src="public/img/readme-banner.png" width="100%" />

[![Netlify Status](https://api.netlify.com/api/v1/badges/8dc57caf-387f-4a73-88aa-3a027c109ddf/deploy-status)](https://theshoppies-2021-jc21.netlify.app/)

## The Shoppies: Movie awards for entrepreneurs

The Shoppies is a part of Shopifys Web Developer Intern Challenge and their application process.

It's a simpe web application that uses the OMDb API to search for movies and allows the user to nominate a movie of their choice. The user has the ability to view their nominations and remove nominations. Once the user has nominated 5 movies, they are notified with a banner that they are finished.

## Technical requirements:
  1. Search results should come from OMDB's API
  2. Each search result should list at least its title, year of release and a button to nominate that film
  3. Updates to the search terms should update the result list
  4. Movies in search results can be added and removed from the nomination list
  5. If a search result has already been nominated, disable its nominate button
  6. Display a banner when the user has 5 nominations
  
## Technologies
This is a full blown front-end single page application with no back-end attached. But who know's I might just attach a back-end later on 🤓.

- [React](https://github.com/facebook/react/): JavaScript library for UI
- [styled-components](https://github.com/styled-components/styled-components): CSS-in-JS

First time user of styled-components, and I gotta say, super amazing! If you have any tips, tricks or criticism on how I used styled-components or my react code in general please let me know!

## Installation & Setup
If you wanna fiddle around in the code and run the app locally, follow the following instructions:

```sh
git clone https://github.com/Juchazari/shoppies.git
```

Install dependencies:

```sh
npm install
```

Make sure to acquire your own [OMDb API key](http://www.omdbapi.com/apikey.aspx).

Once you acquire your api key head on over to `src/utils/constants.js`. There you will replace `${process.env...}` with your api key.

Start up the development server and you're good to go!

```sh
npm start
```
