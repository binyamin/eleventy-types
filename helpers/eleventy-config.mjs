import { inspect } from "node:util";
import UserConfig from "@11ty/eleventy/src/UserConfig.js";

function print(o) {
    console.log(inspect(o, {
        colors: true,
        depth: 1,
        showHidden: true,
        getters: true,
        sorted: true
    }))
}

const uc = new UserConfig();
print(UserConfig); // this is more complete than `uc`
