// we import the merge function and the common
// config file
import { merge } from 'webpack-merge';
import common from './webpack.common.js';

export default merge(common, {
    mode: 'production',
});


