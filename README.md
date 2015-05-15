<a href="https://este.herokuapp.com/"><img alt="Este.js" src="https://cloud.githubusercontent.com/assets/66249/6515265/b91f0fb8-c388-11e4-857e-c90902e0b7a1.png" width="200"></a>

[![Circle CI](https://circleci.com/gh/steida/este.svg?style=svg)](https://circleci.com/gh/steida/este)
[![Join the chat at https://gitter.im/steida/este](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/steida/este)
[![Dependency Status](https://david-dm.org/steida/este.png)](https://david-dm.org/steida/este)
[![Deploy](https://www.herokucdn.com/deploy/button.png)](https://heroku.com/deploy)

> The most complete React/Flux dev stack and starter kit for isomorphic functional web apps. Forget about [evil frameworks](http://tomasp.net/blog/2015/library-frameworks/), learn laser focused libraries and patterns instead.

> Forget about PHP/Ruby/Angular/Backbone whatever client or server only framework. Also, we don't need yet another Flux library, vanilla Flux is good enough. This dev stack is web dev panacea, at least for me :-)

## Techniques

- ECMAScript 6/7 via the best transpiler [babeljs.io](https://babeljs.io/). [JSX](http://facebook.github.io/react/docs/jsx-in-depth.html) and [Flowtype](http://flowtype.org/) syntax supported. Sourcemaps are enabled by default.
- Isomorphic architecture with server side rendering.
- Immutable and functional design. Class is leaky abstraction for "business model".
- Well tuned webpack devstack with handy [notifier](https://github.com/mikaelbr/node-notifier).
- Webpack css livereload with hot module reload even for React components.
- [eslint](http://eslint.org/) ES6 linting with [React](https://github.com/yannickcr/eslint-plugin-react) JSX support. ([Sublime Text 3 integration](https://github.com/steida/este/wiki/Recommended-Sublime-Text-3-Packages#how-to-setup-the-eslint-for-st3))
- Localization with [formatjs.io](http://formatjs.io/), stale browsers supported as well.
- [react-router](https://github.com/rackt/react-router) for routing on client and server side.
- Simple yet powerfull sync/async validation based on famous [chriso/validator.js](https://github.com/chriso/validator.js)
- Authentication form and reusable `auth` [higher order](https://medium.com/@dan_abramov/mixins-are-dead-long-live-higher-order-components-94a0d2f9e750) component to protect access to specific components.
- [React](http://facebook.github.io/react/) with [Flux](https://facebook.github.io/flux/) with [immutable](http://facebook.github.io/immutable-js) global app state like Om.
- Vanilla Flux, we don't need over abstracted frameworks.
- Easy undo/redo and app state load/save.
- [jest](https://facebook.github.io/jest) unit testing.
- Super fast rendering with [immutable.js](http://facebook.github.io/immutable-js).
- [ftlabs/fastclick](https://github.com/ftlabs/fastclick) for fast click on touch devices
- LESS, SASS, Stylus, or plain CSS with [autoprefixer](https://github.com/postcss/autoprefixer).
- Google Analytics preconfigured.

## Prerequisites

Install [iojs](https://iojs.org/) or [node.js](http://nodejs.org).
Then install [gulp.js](http://gulpjs.com/).
```shell
npm install -g gulp
```

#### Windows

- Install Python - Install version 2.7 of Python and add it to your path or/and create a PYTHONPATH environment variable.
- Install Visual Studio (Express Edition is fine) - We will need this for some of modules that are compiled when we are installing Este. [Download VS Express](https://www.visualstudio.com/en-us/products/visual-studio-express-vs.aspx), get one of the versions that has C++ - Express 2013 for Windows Desktop for example.
- Set Visual Studio Version Flags - We need to tell node-gyp (something that is used for compiling addons) what version of Visual Studio we want to compile with. You can do this either through an environment variable GYP_MSVS_VERSION. If you are using Express, you have to say GYP_MSVS_VERSION=2013e.

Thanks to [Ryanlanciaux](http://ryanlanciaux.github.io/blog/2014/08/02/using-jest-for-testing-react-components-on-windows/)

## Create App

```shell
git clone https://github.com/steida/este.git myapp
cd myapp
npm install
```

## Start Development

- run `gulp`
- point your browser to [localhost:8000](http://localhost:8000)
- build something beautiful

## Dev Tasks

- `gulp` run app in development mode
- `gulp -p` run app in production mode
- `gulp test`

## CI Tasks

- `npm start` just run app, remember to set NODE_ENV=production and others environment variables.
- `npm postinstall` just alias for `gulp build --production`, useful for Heroku.
- `npm test` just alias for `gulp test`

## Examples

- [Este TodoMVC](https://github.com/steida/este-todomvc)

## Documentation

So you decided to give a chance to this web stack, but where is documentation? Code is documentation itself as it illustrates various patterns, but for start you should read something about [React.js](http://facebook.github.io/react/). Then you should learn [what is the Flux
application architecture](https://medium.com/brigade-engineering/what-is-the-flux-application-architecture-b57ebca85b9e). Now refresh you JavaScript knowledge about "new" JavaScript - [learn ES6](https://babeljs.io/docs/learn-es6/). This stack uses [immutable.js](http://facebook.github.io/immutable-js/) and class-less design for a [good reason](https://github.com/facebook/immutable-js/#the-case-for-immutability). Check this nice short [video](https://www.youtube.com/watch?v=5yHFTN-_mOo), wouldn't be possible with classic OOP classes everywhere approach. Functional programming is a next (current) big thing, read [why](https://medium.com/javascript-scene/the-dao-of-immutability-9f91a70c88cd). [Express.js](http://expressjs.com/) is used on the [Node.js](http://nodejs.org/api/) based server. Application is [isomorphic](http://isomorphic.net/javascript), so we can share code between client and server easily. Congrats, now you're Este.js expert level 1 :-)

## Links

- [wiki: Recommended React Components](https://github.com/steida/este/wiki/Recommended-React-Components)
- [wiki: Recommended Sublime Text 3 Packages](https://github.com/steida/este/wiki/Recommended-Sublime-Text-3-settings)
- [twitter.com/estejs](https://twitter.com/estejs)
- [github.com/enaqx/awesome-react](https://github.com/enaqx/awesome-react)

## Tips and Tricks 

- Whole app state is stored in one immutable app state object. To get snapshot, press `shift+ctrl+s`, then open dev console and type `_appState`.
- With global app state, we don't need IoC container so badly - [SOLID: the next step is Functional](http://blog.ploeh.dk/2014/03/10/solid-the-next-step-is-functional). Still DI is relevant for some cases and then use [Pure DI](http://blog.ploeh.dk/2014/06/10/pure-di/).
- Use `const` by default, `let` if you have to rebind a variable.
- Learn and use immutable [Seq](https://github.com/facebook/immutable-js#lazy-seq). Very handy for native arrays and objects. For example, get object values: `Seq(RoomType).toSet().toJS()`
- Even though we can use `import {canUseDOM} from 'react/lib/ExecutionEnvironment'` to detect browser/server, don't do it since it's runtime value. Use webpack DefinePlugin to set `process.env.IS_BROWSER` rather, because compilation removes dead code.
- How to use Closure Tools, [gist](https://gist.github.com/steida/afbc595a1e2f27e925d9)
- Recommended editor is [atom.io](https://atom.io) ([tips](https://github.com/steida/atom-io-settings)) or [sublimetext](http://www.sublimetext.com/).

## Training
- [Czech Republic](http://javascript-skoleni.cz)
- San Francisco - feel free to [write me](daniel@steigerwald.cz)

## Notes

- Este.js dev stack should work on OSX, Linux, and even Windows. Feel free to report any issue.
- As a rule of thumb, Este.js supports all evergreen browsers plus last two pieces of IE.

## Credit

<img alt="Este.js" src="https://cloud.githubusercontent.com/assets/66249/6515278/de638916-c388-11e4-8754-184f5b11e770.jpeg" width="200">

made by Daniel Steigerwald, [twitter.com/steida](https://twitter.com/steida)
