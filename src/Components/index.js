// Karl talks about using Rollup (a bundler) for avoiding tree shaking and circular importing of modules;   Then webPack will bundles it all together;

export { default as Jumbotron } from './Jumbotron';
export { default as Footer } from './footer';
export { default as Player } from './player';
export { default as Accordion } from './accordion';
export { default as OptForm } from './opt-form';
export { default as Header } from './header';
export { default as Feature } from './feature';
export { default as Card } from './card';
export { default as Form } from './form';
export { default as Loading } from './loading';
export { default as Profiles } from './profiles'; /* ! important;  these files must be named index.js or .jsx */

// telling Webpack not to eliminate if used, but otherwise get rid of it from bundle;
