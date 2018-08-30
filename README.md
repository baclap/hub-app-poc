# Hub App With External Page POC

The goal of this POC is to show that a "hub" single page React app can dynamically import pages to be rendered in the app from an external source. This would enable that page to be developed an deployed independently without requiring the entire SPA to re-deploy each time that external page updates.

## How It Works

### Hub App

The hub app is a standard single page React app bundled by webpack. The app is served statically on port 8000.

### External Page

The external page is a React component with its own webpack build process. The webpack configuration for this code outputs the bundle as a umd library. The bundled code is then served by its own static server on port 8001.

### Synergy

When hub app loads it request the external page component from `localhost:8001`. Once resolved, the hub app can render the component as if it were any other React component.

### `window` Hack

In order to reduce the size of the external page bundle the hub app attaches `React` and `ReactRouterDOM` to the `window` object when the app loads. The external app `webpack.config.js` is configured to expect those two libraries to be available on `window`, thus excluding it from the bundle and greatly reducing the bundle size.

I'd like to find a cleaner solution here. Possibly [share-loader](https://github.com/MrFrankel/share-loader), but it didn't work as expected after a cursory attempt to implement it.

## Run Locally

To run the POC locally:
- `npm i`
- `npm serve:hub`
    - bundles hub-app code with webpack and starts the static server for the hub-app SPA
- `npm serve:external`
    - bundles external-page code with webpack and starts the static server for external-page assets
- navigate to [http://localhost:8000](http://localhost:8000)
