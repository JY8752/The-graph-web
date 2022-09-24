# doodle subgraph web

The graphで作成した[shimashiサブグラフ](https://github.com/JY8752/The-graph-demo3)のweb.

## init

```
npx create-next-app --ts .
```

## setup

### graphql

```
yarn add @apollo/client graphql
```

### graphql codegen

```
yarn add -D @graphql-codegen/cli
yarn add -D @graphql-codegen/typescript

yarn graphql-codegen init
? What type of application are you building? Application built with React
? Where is your schema?: (path or url) https://api.thegraph.com/subgraphs/name/jy8752/doodle
? Where are your operations and fragments?: queries/**/*.ts
? Pick plugins: TypeScript (required by other typescript plugins), TypeScript Operations (operations and fragments), TypeScript React Apollo (typed components and HOCs)
? Where to write the output: types/generated/graphql.tsx
? Do you want to generate an introspection file? No
? How to name the config file? codegen.yml
? What script in package.json should run the codegen? gen-types

yarn gen-types
```

## css

```
yarn add clsx
```

### ipfs

```
yarn add ipfs-core
```