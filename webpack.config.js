const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: "development",
    entry: "./src/index.js",
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "dist"),
        clean: true,
    },
    // adds a source map, which makes any error messages
    // match up with the correct files & line numbers
    // in our development files
    devtool: "eval-source-map",
    devServer: {
        // tells the server to restart when we change the
        // html template file (by default only restarts when
        // the JS bundle files change)
        watchFiles: ["./src/template.html"]
    },
    plugins: [
        // allows webpack to process html files
        new HtmlWebpackPlugin({
            // uses our html boilerplate as a template
            template: "./src/template.html",
        }),
    ],
    module: {
        rules: [
            // tells webpack to use our css loaders when it sees
            // a css file
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
            // tells webpack that any image files it sees are assets
            {
                test: /\.(png|svg|jpg|jpeg|gif|webp)$/i,
                type: "asset/resource",
            },
        ],
    },
};
