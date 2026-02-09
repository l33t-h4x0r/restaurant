// we import the merge function and the common
// config file
import { merge } from 'webpack-merge';
import common from './webpack.common.js';

// we are exporting the output of merging common
// with the dev-specific configurations
export default merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        static: './dist',
        watchFiles: ["./src/template.html"],
    },
});