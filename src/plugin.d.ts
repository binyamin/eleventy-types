import * as config from "./config";

/**
 * 
 * @todo define `this` parameter
 * @todo the "eleventyConfig" parameter has an extra `dir` child
 */
declare type Plugin = (eleventyConfig: config.Helpers, options?: any) => void

export = Plugin;