import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
// import scss from "rollup-plugin-scss";
import postcss from 'rollup-plugin-postcss';
import dts from "rollup-plugin-dts";

// for minifying js code
import { terser } from "rollup-plugin-terser";
// for updating react like dependencies to peer dependencies
import peerDepsExternal from 'rollup-plugin-peer-deps-external';

const packageJson = require("./package.json");

export default [
  {
    input: ["src/index.ts"],
    output: [
      {
        file: packageJson.main,
        format: "cjs",
        sourcemap: true,
      },
      {
        file: packageJson.module,
        format: "esm",
        sourcemap: true,
      },
    ],
    external: Object.keys(packageJson.dependencies),
    plugins: [
        // scss({
        //     output: 'dist/styles.css',
        //     failOnError: true,
        //     runtime: require('sass')
        //   }),

        peerDepsExternal(),
        resolve(),
        commonjs(),
        typescript({ 
            tsconfig: "./tsconfig.json",
            exclude: ["*.scss"]
        }),
        postcss({
            modules: true,
            extract: true,
            extensions: ['scss'],
            use: ['sass']
        }),
        terser()
    ],
  },
  {
    input: "dist/esm/types/index.d.ts",
    output: [{ 
        file: "dist/index.d.ts", 
        format: "esm"
    }],
    plugins: [
        dts()
    ],
    external: [/\.s?css$/],
  },
];