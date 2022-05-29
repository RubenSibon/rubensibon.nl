[![Stand With Ukraine](https://raw.githubusercontent.com/vshymanskyy/StandWithUkraine/main/banner2-direct.svg)](https://stand-with-ukraine.pp.ua)

# [rubensibon.nl](https://www.rubensibon.nl/)

## What is this?

This is my personal website.

It is built with [Nuxt.js](https://nuxtjs.org/), the intuitive Vue framework, and it is hosted on GitHub as a static site (meaning that it's just good ol' HTML with some CSS and JS on top). The site uses the [Nuxt Content](https://content.nuxtjs.org/) module to write and publish articles. [Tailwind CSS](https://tailwindcss.com/) is employed to create a beautiful and consistent theme easily.

In order to ensure a decently professional workflow the [GitHub Flow](https://githubflow.github.io/) convention is used together with [commitlint](https://commitlint.js.org/) and [husky](https://github.com/typicode/husky) for pre-commit sanity checks.

In the current GitHub Flow these protected branches are used for the following purposes:

```txt
main       => the production state of the site
feat/*     => add a new feature
fix/*      => fix an issue
content/*  => write and publish a new article
chore/*    => miscellaneous maintenance stuff and plumbing
docs/*     => add documentation such as this README
gh-pages   => a special branch for GitHub's static site generation system
```

When the `main` branch is updated by a merge [GitHub Actions](https://github.com/features/actions) kicks in to automatically build a new release on the `gh-pages` branch.

## See it in action

Check out the site on [rubensibon.nl](https://www.rubensibon.nl/).

## How to build this site locally

**But why would you?**

Clone this branch, `cd` into the directory and then follow Nuxt's instructions:

```bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev

# build for production and launch server
$ yarn build
$ yarn start

# generate static project
$ yarn generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).

## Legal

All code and content, apart from code and content provided by third-parties, is subject to the copyrights of Ruben Sibon since the start of this GitHub repository up to the date of the last git commit.

© Ruben Sibon
