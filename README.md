# Introduction
This project was intented to showcase how [Yarn Workspaces](https://classic.yarnpkg.com/lang/en/docs/workspaces/) work by having two projects that share code and dependencies.

# Project structure
```
.
├── packages/
│   ├── common/
│   │   ├── src
│   │   ├── package.json
│   │   └── tsconfig.json
│   └── web/
│       ├── src
│       ├── package.json
│       └── tsconfig.json
├── package.json
└── tsconfig.json
```

On the root folder, there's the workspace root file, which is a `package.json` file that contains the configuration for the yarn workspace. This file contains two important properties:
- **"private":** true 👉 indicates that the workspace is not meant to be published (unlike the packages that make up the workspace).
- **"workspaces":** ["packages/*"] 👉 this array contains the folders of the packages that make up the workspace. I decided to put all of those package folders in the `packages` folder because this is the convention that [Babel](https://github.com/babel/babel) follows but you could have a totally different configuration.

The **packages** folder contains two packages:
- **common**: On a true project, this folder would represent all the shared code between multiple apps in order to avoid repeated code.
- **web**: This would be one of the apps that share code and dependencies with other packages. I named it web just because I was thinking of a web app when I made this but this could be a React project, an Angular project, a Node + Express API, etc.

Every of these package folders have a `package.json` file inside it, and to make things clearer every package is named `@yarn_workspaces_demo/<name_of_package>`. This is also a convention followed by [Babel](https://github.com/babel/babel).

The `web` package uses code from the `common` package by just declaring it as a dependency on its `package.json` and importing it where necessary. Also, both packages share third-party libraries like [Typescript](https://github.com/Microsoft/TypeScript). The dependencies are declared in both `package.json` files but they're installed in the same `node_modules` folder at the root of the packages, which means that it only gets installed once.

# Instructions
While on the root project run:
```bash
yarn install
```

Change to the `web` directory:
```bash
cd packages/web
```

Build the web app:
```bash
yarn build
```

**NOTE:** Running `yarn build` in the web app will automatically build the `common` package because it's declared as a dependency.

**NOTE 2:** To remove all dependencies installed and build folders you can run `yarn clean` from the root folder.
