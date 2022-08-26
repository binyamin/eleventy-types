const is = require("@sindresorhus/is").default;
const { inspect } = require("node:util");
const { defineConfig } = require("../helpers");

function print(o) {
    console.log(inspect(o, {
        colors: true,
        depth: 0,
        showHidden: true,
        getters: true,
        sorted: true,
        showProxy: true
    }))
}

module.exports = defineConfig((eleventyConfig) => {
    // This function just checks if a given method exists on eleventyConfig
    function assert(key) {
        if(is.nullOrUndefined(eleventyConfig[key])) {
            console.log(key, '\t',  false);
        } else {
            console.log(key, '\t', is(eleventyConfig[key]))
        }
    }

    assert('addPlugin');
    assert('reset');
})