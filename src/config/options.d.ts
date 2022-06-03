declare type TemplateEngineName = 'html' | 'md' | '11ty.js' | 'njk' | 'liquid' | 'hbs' | 'mustache' | 'ejs' | 'haml' | 'pug';

/**
 * @todo finish
 * @docs https://www.11ty.dev/docs/config/
 */
interface Options {
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
    },

    /**
     * Default template engine for global data files
     *
     * The `dir.data` global data files run through this
     * template engine before transforming to JSON.
     *
     * @note Use `false` to avoid pre-processing
     *
     * @see https://www.11ty.dev/docs/data-global/
     *
     * @default false
     */
    dataTemplateEngine?: (TemplateEngineName & string) | false,

    /**
     * Default template engine for Markdown files
     *
     * Markdown files run through this template engine
     * before transforming to HTML.
     *
     * @note Use `false` to avoid pre-processing
     *
     * @default "liquid"
     */
    markdownTemplateEngine?: (TemplateEngineName & string) | false,
 
    /**
     *
     * Default template engine for HTML files
     *
     * HTML templates run through this template engine
     * before transforming to (better) HTML.
     * 
     * @note Use `false` to avoid pre-processing
     *
     * @default "liquid"
     */
    htmlTemplateEngine?: (TemplateEngineName & string) | false,
 
    /**
     *
     * Specify which types of templates should be transformed.
     * 
     * @note You can also use the `setTemplateFormats()` method
     *
     * @default
     * // Any supported template engine
     * [
     *  'html', 'md', '11ty.js', 'njk', 'liquid', 'hbs',
     *  'mustache', 'ejs', 'haml', 'pug'
     * ]
     */
    templateFormats?: TemplateEngineName[],
}

export = Options;
