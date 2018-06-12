# parcel-plugin-flow

Seamlessly integrate Flow type checking to your Parcel-based project

## Usage

Install the plugin

    npm install --save-dev parcel-plugin-flow

Make sure you have `flow-bin` installed

    npm install --save-dev flow-bin

And make Babel stripping the types (in case you don't use preset-react)

    npm install --save-dev babel-plugin-transform-flow-strip-types
