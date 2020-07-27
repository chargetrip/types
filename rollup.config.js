import Module from "module";
import path from "path";
import graphql from "@kocal/rollup-plugin-graphql";
import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import replace from "@rollup/plugin-replace";
import babel from "rollup-plugin-babel";
import { terser } from "rollup-plugin-terser";
import pkg from "./package.json";

const WATCH = Boolean(process.env.ROLLUP_WATCH);
const EXTENSIONS = [".mjs", ".js", ".json", ".ts"];
const OUTPUT_DIR = "dist";
const OUTPUT_DIR_NODE = path.join(OUTPUT_DIR, "node");
const OUTPUT_DIR_BROWSER = path.join(OUTPUT_DIR, "browser");
const ENVS = {
  "process.env.NODE_ENV": JSON.stringify("development")
};

const getPlugins = ({ target }) => {
  return [
    replace(ENVS),
    resolve({
      extensions: EXTENSIONS,
      browser: target === "browser" ? true : false
    }),
    commonjs({
      namedExports: {}
    }),
    babel({
      extensions: EXTENSIONS,
      // Will be merged with `babel.config.js`
      presets: [
        target === "browser"
          ? [
              "@babel/preset-env",
              {
                targets:
                  ">0.25%, not dead, ie 11, not op_mini all, not android <= 4.4, not samsung <= 4",
                modules: false,
                useBuiltIns: "usage",
                corejs: {
                  version: 3,
                  proposals: true
                }
              }
            ]
          : [
              "@babel/preset-env",
              {
                targets: { node: "10" },
                modules: false
              }
            ]
      ]
    }),
    graphql(),
    !WATCH && target === "browser" && terser()
  ];
};

export default [
  {
    input: "src/index.ts",
    output: {
      file: path.join(OUTPUT_DIR_NODE, "index.js"),
      format: "cjs",
      sourcemap: true
    },
    external: [...Module.builtinModules, ...Object.keys(pkg.dependencies)],
    plugins: getPlugins({ target: "node" })
  },
  {
    input: "src/index.ts",
    output: {
      file: path.join(OUTPUT_DIR_BROWSER, "index.js"),
      format: "esm",
      sourcemap: true
    },
    plugins: getPlugins({ target: "browser" })
  }
];
