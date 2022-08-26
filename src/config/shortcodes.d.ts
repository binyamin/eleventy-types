declare function ShortcodeMethod (
    /**
     * Used to invoke the shortcode within a template
     */
    name: string,
    /**
     * Provides the
     * parameters from the shortcode invokation. Returns a string representing
     * the desired HTML output.
     */
    callback: (...params: unknown[]) => string
): void;

/** @todo paired shortcodes */
declare interface Shortcodes {
    /**
     * Add a universal shortcode
     * 
     * @example Configuration
     * ```js
     *  eleventyConfig.addShortcode("icon", async (name, size) => {
     *      return "<svg>...</svg>"
     *  })
     * ```
     * @example Usage (nunjucks)
     * ```html-nunjucks
     *  {% icon "lightbulb", 24 %}
     * ```
     */
    addShortcode: typeof ShortcodeMethod,
    
    /** Add a shortcode just for liquid templates */
    addLiquidShortcode: typeof ShortcodeMethod,
    
    /** Add a shortcode just for nunjucks templates */
    addNunjucksShortcode: typeof ShortcodeMethod,

    /** Add a shortcode just for handlebars templates */
    addHandlebarsShortcode: typeof ShortcodeMethod,
    
    /** Add a shortcode/function just for `11ty.js` templates */
    addJavaScriptFunction: typeof ShortcodeMethod,

    // Undocumented Methods:
    //  addAsyncShortcode
    //  addPairedAsyncShortcode
}

export = Shortcodes