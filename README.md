# News-Article-NLP

## Overview

This project implements an asynchronous web app in combination with [NLP Web API from Aylien](https://aylien.com/) to perform sentiment analysis on a news article supplied by the user.

## Description

This project has the following:
- Sass styles
- Webpack Loaders and Plugins
- Service workers
- Aylien API for NLP of news articles

## Instructions
Obtain an [API key](https://developer.aylien.com/signup) for Aylien NLP API
1. Clone the repo

```
$ git clone https://github.com/shrutikumar15/News-Article-NLP.git
```

2. Navigate to the project root.
```
$ cd News-Article-NLP
```

3. Install dependencies
```
$ npm install
```

4. Crete a .env file with Aylien API key.
```


# Paste the following lines and update your API_ID and API_KEY with yours:
API_ID=*********
API_KEY=********
```

5. Build dev env.
```
$ npm run build-dev
```

6. In other terminal build prod env.
```
$ npm run build-prod
```

7. Start express server
```
$ cd src/server
$ npm start
```

8. Run jest test in other terminal
```
$ cd $PROJECT_ROOT
$ npm run test
```
