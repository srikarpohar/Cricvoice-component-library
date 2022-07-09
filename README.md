## Cricvoice Component Library
- Contains commonly used components like dropdowns, spinners etc required for building cricvoice website.
- This package can be used as commonjs as well as es modules library

##### Setting up library in your project.
1. First install the latest version of the package.

    If you already have the package in your package.json, use:
    ```npm update @srikarpohar/cricvoice-library```

    If you do not have the package in your package.json, use:
    ```npm i @srikarpohar/cricvoice-library --save```

2. Next, import main css stylesheet from node_modules.

    If you are using commonjs, you can use following import in your main css/sass file.
    ```@import "~@srikarpohar/cricvoice-library/dist/cjs/index.css";```

    Else if you are using esm, you can use following import in your main css/scss file.
    ```@import "~@srikarpohar/cricvoice-library/dist/esm/index.css";```

3. Now you can import library components in your react components and use them with props.

4. Components built until now:
    1. SimpleDropdown
       1. Types
        1. IDropdownProps** 
            1. Type used for props of dropdown.
        2. IDropdownOption**
            2. Types used for options of dropdown.

    #### Spinner
       ##### Types
       **ILoaderProps**
       1. Types used for props of spinner. 

