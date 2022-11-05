# web component starter
starter for creating web components, 
contains a demo "hello-world" `src/components/hello-world` component

#### Dependencies

###### at runtime

- [uhtml](https://github.com/WebReflection/uhtml) (for creating HTML templates in JS)

###### at development time
- [browsersync](https://browsersync.io/) (as local dev server)
- [rollup.js](https://rollupjs.org/) (for bundling third party ES modules)


###### Install npm dependencies
- `npm install`

###### bundle third party dependencies into single ES module
`npx rollup --config rollup.config.js` bundles ES6 module in src/lib/vendor`

#### Run (using local development server) renders hello-world component
- `npm start`
- launch browser `http://localhost:3000`
