export interface Helpers {
    // Note - `addPlugin` cannot use our own `Plugin` type,
    // since that would only cover plugins which used our
    // particular config typedefs
    /**
     *
     * @category plugins
     * @since v0.2.13
     * @docs https://www.11ty.dev/docs/plugins/
     */
    addPlugin<P extends (config: any, options: NonNullable<any>) => void>(
        /**
         *
         * Plugin function. Often the default export of the module.
         */
        plugin: P,
        options?: Parameters<P>['1']
    ): void;
    addPlugin(plugin: (...args: any[]) => void): void;
}

/**
 * @todo finish
 * @docs https://www.11ty.dev/docs/config/
 */
export interface Options {
    dir: {
        /**
         * Controls the top level directory/file/glob that
         * we’ll use to look for templates. Defaults to the
         * current working directory.
         * 
         * @default "."
         */
        input: string,
        /**
         * Meant for layouts, partials, and macros. These
         * files will be consumed by other templates.
         * - This setting is relative to `dir.input`
         * 
         * See also `dir.layouts`
         * @default "_includes"
         */
        includes: string,
        /**
         * Sets the directory for layouts.
         * - This setting only applies to Eleventy's own
         * layout system (ie. front-matter and data files).
         * - This setting is relative to `dir.input`
         * - Defaults to the value of `dir.includes`
         */
        layouts: string,
        /**
         * The directory for global data files.
         * - This setting is relative to `dir.input`
         * @default "_data"
         */
        data: string,
        /**
         * Location of the build directory.
         * @default "_site"
         */
        output: string,
    }
}