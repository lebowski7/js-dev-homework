# js-dev-homework

The aim of this exercise is to create single web application that will consume data from remote API and will render pulled data in charts

![screenshot.png](https://github.com/lebowski7/js-dev-homework/blob/master/public/screenshot.png)

## Requirements

* The aim of this exercise is to create single web application that will consume data from remote API and will render pulled data in charts
* Use TypeScript
* Use next.js framework for building web application
* Use ant.d library for UI and components on the page
* Use remote API for data - https://coronavirus.data.gov.uk/details/developers-guide/main-api
* Use g2.antv for render charts (any chart types can be used, up to your selection)
* [OPTIONAL] Use trpc library for backend services and endpoints (use db up to your selection (eg., https://railway.app/))

## Design of the page

* The page will consist from page header and content area
* Page header contains only title
* Content area contains two cards with charts (any chart type is possible) with dummy avatar and dummy
  button as per picture
* Above charts, there is a space (a panel) for Page title and dummy buttons (as per design, without any logic
  behind)
* [OPTIONAL] Add a heart icon (not on design below!) to cards which allows visitors to select card as a favorite
  (use trpc for this feature)

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
