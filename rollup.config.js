import {nodeResolve} from '@rollup/plugin-node-resolve';

export default [
    {
        input: './node_modules/uhtml/esm/index.js',
        output: {
            file: './src/lib/vendor/uhtml.js',
            format: 'es'
        },
        plugins: [
            nodeResolve({browser: true})
        ]
    }
];
