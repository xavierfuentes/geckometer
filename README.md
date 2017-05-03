### Description

[![Greenkeeper badge](https://badges.greenkeeper.io/xavifuefer/geckometer.svg)](https://greenkeeper.io/)
We would like you to spend no more than 4 hours of happy fun time turning a payload like this:

```json
{
  "value": 34,
  "min": 0,
  "max": 200,
  "format": "currency",
  "unit": "GBP"
}
```

Into a Gecko-O-Meter (yeah...) like this:

![Geck-O-Meter](https://www.dropbox.com/s/6oels5ih2hud2a6/Screen%20Shot%202015-10-19%20at%2014.48.56.png?dl=1)

Here is an endpoint returning some random values you can integrate with (should you wish):

https://widgister.herokuapp.com/challenge/frontend

or you can get the sample payload (as above) from:

https://widgister.herokuapp.com/challenge/frontend?fixed=1

### Get Started
You will need NodeJS >= 6.5.0
```
git clone https://github.com/xavifuefer/geckometer.git
cd geckometer
npm install; npm start
```
go to [http://localhost:3000/](http://localhost:3000/) and refresh to see different values

### Features
* [React](https://facebook.github.io/react/) -> Awesome and fast library to create interfaces
* [create-react-app](https://github.com/facebookincubator/create-react-app) as a starter -> great starting point for small react apps with 0 config that includes:
  * [webpack](https://webpack.github.io/) with [webpack-dev-server](https://github.com/webpack/webpack-dev-server), [html-webpack-plugin](https://github.com/ampedandwired/html-webpack-plugin) and [style-loader](https://github.com/webpack/style-loader)
  * [Babel](http://babeljs.io/) with ES6 and extensions used by Facebook (JSX, [object spread](https://github.com/sebmarkbage/ecmascript-rest-spread/commits/master), [class properties](https://github.com/jeffmo/es-class-public-fields))
  * [Autoprefixer](https://github.com/postcss/autoprefixer)
  * [ESLint](http://eslint.org/)
  * [Jest](http://facebook.github.io/jest)

### Future Improvements
* todo: move data fetching to a Container Component
* todo: tests for template and styling
* todo: improve:
  * handle when max is lte min
  * handle other formats
  * use of color theming to change all the style
  * use of dynamic size

## Some pointers

### We don't expect you to complete this challenge

So tackle the parts you believe to be the most important, or that show off your skills
best. Show us the most user value you can in the limited time.

### Show your working

Commit logs and READMEs would be great. We might need help setting up your project.
If you feel that an approach needs justification, leave a note.

### We're looking for production ready code

So we're hoping you'll take a test driven approach.

### Use the stack you're most familiar with

Now is not the best time to try something new. But maybe it is? Prove us wrong!

### We're not giving you a design

So you can show some creative flair, or not, thats ok; we're looking for all sorts.

### Describe what you would have done next with more time

This is as interesting to us as the code you've actually written. What are the limitations of
what you've done? Where would you improve?

### Enjoy yourself

This is not supposed to be a stressful challenge. Honestly.
