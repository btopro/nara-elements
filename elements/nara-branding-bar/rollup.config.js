// import { createDefaultConfig } from '@open-wc/building-rollup';
// if you need to support IE11 use "modern-and-legacy-config" instead.
import cpy from 'rollup-plugin-cpy';
import { createCompatibilityConfig } from '@open-wc/building-rollup';

const config = createCompatibilityConfig({
  input: './demo/index.html',
});

// export default createDefaultConfig({ input: './index.html' });
// if you use an array of configs, you don't need the copy task to be executed for both builds.
// we can add the plugin only to the first rollup config:
export default [
  // add plugin to the first config
  {
    ...config[0],
    plugins: [
      ...config[0].plugins,
      cpy({
        // copy over all images files
        files: [
          'node_modules/@nara/nara-logo/src/*.svg',
          'node_modules/web-animations-js/web-animations-next-lite.min.js',
          'node_modules/@webcomponents/webcomponentsjs/webcomponents-loader.js',
        ],
        dest: 'dist',
        options: {
          // parents makes sure to preserve the original folder structure
          parents: true,
        },
      }),
    ],
  },

  // leave the second config untouched
  config[1],
];
