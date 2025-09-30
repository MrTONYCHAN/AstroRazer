
# Project Blueprint

## Overview

This project is a static-first web application built with Astro.js. It is designed to be developed within the Firebase Studio (formerly Project IDX) environment. The focus is on creating a fast, highly-performant, and scalable site that delivers minimal JavaScript by default, ensuring an exceptional user experience and top-tier Core Web Vitals.

## Implemented Features

### Styling and Layout

- **CSS Framework:** Tailwind CSS is used for styling.
- **Layout:** A single layout file, `src/layouts/Layout.astro`, defines the basic structure of all pages.
- **Global Styles:** Global styles, including Tailwind's base styles, components, and utilities, are defined in `src/layouts/Layout.astro`.

### Pages

- **Home Page:** `src/pages/index.astro` is the main entry point of the application.
- **API Routes:** The project includes two API routes, `src/pages/api/auth/register.ts` and `src/pages/api/auth/login.ts`.

## Current Task: Fix Styling Issue

### Plan

1.  **DONE** Install the `@astrojs/tailwind` dependency.
2.  **DONE** Configure the `astro.config.mjs` file to use the `@astrojs/tailwind` integration.
3.  **DONE** Create a `blueprint.md` file to document the project.
4.  **UP NEXT** Remove the temporary test files (`src/layouts/TestLayout.astro` and `src/pages/test.astro`).
5.  Run the build and verify that the client-side assets are generated correctly.
