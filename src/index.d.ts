type Helpers = any;
type Options = Record<string, any>;

/**
 * @module 11ty/eleventy
 * @author Zach Leatherman
 * @version 1.0.1
 */
declare namespace eleventy {
    type Config<T extends "function" | "object" = "function"> = (
        T extends "function"
        ? (eleventyConfig: Helpers) => Options
        : T extends "object"
            ? Options
            : never
    );

    type Plugin = import("./plugin")
}


export = eleventy;