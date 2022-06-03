import type eleventy from './src/index';

/**
 *
 * A wrapper which provides typings & autocompletion for your eleventy configuration file.
 *
 * @param callback An environment in which to configure eleventy
 *
 * @example
 * ```js
*  module.exports = defineConfig(eleventyConfig => {
*      // ...
*  })
 * ```
 */
export function defineConfig(callback: eleventy.Config): eleventy.Config;