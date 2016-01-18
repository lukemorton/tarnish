# tarnish

> Your silverware needs a polish.

## Goals

 - Make developers more productive
 - Provide a sensible set of defaults
 - Prefer serverless, offline first approaches
 - Encourage testing

## Working with it

```
npm install -g tarnish
npm install
tarnish dev
```

```
tarnish spec
```

```
tarnish deploy
```

## Some early decisions

 - The framework won't be called tarnish
 - To reduce bullshit JS boilerplate we will leverage globals with browserify
 - Autoloading based on directory structure will be used to tie things together
 - Not including a file should simply mean default behaviours apply, for example
   if config/application.js missing will just load defaults, same goes for index.js
 - Uses mocha, chai and enzyme to test react components
 - Actions will come with lots of middleware to achieve common goals, writing
   procedural is not productive
 - Reducers are banned, your frontend should not manipulate data, it should only
   render it
 - Should come with baked in ways to develop, test and deploy
 - Should come with opinions on asset management and compilation
 - Will avoid serverside decisions at all
