// Karl talks about using Rollup (a bundler) for avoiding tree shaking and circular importing of modules;   Then webPack will bundles it all together;

export { default as Jumbotron } from './Jumbotron';
export { default as Footer } from './footer';
export { default as Accordion } from './accordion';

// telling Webpack not to eliminate if used, but otherwise get rid of it from bundle;
