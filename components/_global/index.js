import Vue from 'vue';
import upperFirst from 'lodash/upperFirst';
import camelCase from 'lodash/camelCase';
import { __esModule } from 'vform';

// require all components in the current directory and subdirectories (by webpack)
const requireComponent = require.context('.', true, /_base-[\w-]+\.vue$/); // _filename base endup with .vue

requireComponent.keys().forEach(fileName => {
  // get the component's configuration
  const componentConfig = requireComponent(fileName);

  const fn = fileName
    .split('/') // get filename path
    .pop() // get the component by last
    .replace(/\.\w+$/, ''); // remove .vue

  const componentName = upperFirst(camelCase(fn));

  // register components by default (by webpack)
  Vue.component(componentName, componentConfig.default || componentConfig); 
});
