# MCUI

# Getting started

This project uses:
  - Typescript to transpile ts/tsx to js
  - Storybook for development and documentation

Before anything else run this commmands:
```
git clone git@github.com:MissingCorner/ui.git
cd ui
yarn
yarn start
```

# Root scripts
```
yarn start        # start storybook to develop component

yarn build:ui     # run tsc to compile tsx to js code

yarn build:docs    # build storybook into docs folder

yarn publish      # publish new version to npm
```

# Run / Write new component
1. Write new component under `src/components` directory
2. Add new story for the component under `stories` directory with format `name.stories.tsx`
3. ~~Write test~~
4. ~~Build ui & docs~~
5. ~~Deploy~~
