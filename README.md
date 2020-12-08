# webpack-2stage-experiment

Why it works:

1. `node_modules` in an ancestor directory will be used to reolve modules if they can't be found locally.
2. The builder code, which must have the most dependencies, is built once ahead of time- could be as an image layer.
3. The builder module path is referenced by alias in the child project so it can live anywhere or be moved later without the child project code needing to be changed.
4. Webpack 5 caching in the child project enables incremental builds.
