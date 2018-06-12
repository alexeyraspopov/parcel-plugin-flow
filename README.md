# parcel-plugin-flow

Seamlessly integrate Flow type checking to your Parcel-based project

## Usage

Install the plugin

    npm install --save-dev parcel-plugin-flow

Make sure you have `flow-bin` installed

    npm install --save-dev flow-bin

And make Babel stripping the types (in case you don't use preset-react)

    npm install --save-dev babel-plugin-transform-flow-strip-types

## Caveats

There is a known issue related to indirectly depending package `config-chaing`,
being tracked in https://github.com/parcel-bundler/parcel/issues/1526. To avoid
the issue, put `.*/node_modules/.*/test` to `[ignore]` section in `.flowconfig`.
