import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
// import scss from "rollup-plugin-scss";
import postcss from 'rollup-plugin-postcss';
import dts from "rollup-plugin-dts";

const packageJson = require("./package.json");

export default [
  {
    input: ["src/index.ts",
        // "src/components/dropdowns/simple-dropdown/simple-dropdown.tsx", 
        // "src/components/loaders/spinner/spinner.component.tsx"
    ],
    output: [
      {
        file: packageJson.main,
        // dir: 'dist',
        format: "cjs",
        sourcemap: true,
      },
      {
        file: packageJson.module,
        // dir: 'dist',
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
        resolve(),
        commonjs(),
        typescript({ 
            tsconfig: "./tsconfig.json",
            exclude: ["*.scss"]
        }),
        postcss({
            modules: true,
            extract: true,
            use: ['sass']
        })
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