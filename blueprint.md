# Razorpay Clone Blueprint

## Overview

This project is a clone of the Razorpay checkout page, built with Astro, Tailwind CSS, and Stripe. It allows users to see a product, click a "Pay Now" button, and be redirected to a Stripe checkout page.

## Project Structure & Features

### Styling

*   **Framework:** Tailwind CSS
*   **Global Styles:** `src/styles/global.css` contains the Tailwind base styles.
*   **Layout:** The main layout in `src/layouts/Layout.astro` has a dark background (`bg-gray-900`) and white text.

### Components

*   **`Header.astro`:** A simple header with the application title and a link to the home page.
*   **`ProductCard.astro`:** A card component that displays a product with an image, name, description, price, and a "Pay Now" button. The "Pay Now" button is a form that submits a POST request to `/api/create-checkout-session`.

### Pages

*   **`index.astro`:** The main page of the application, which displays the `Header` and `ProductCard` components.
*   **`success.astro`:** The page the user is redirected to after a successful payment.
*   **`cancel.astro`:** The page the user is redirected to after a canceled payment.
*   **`/api/create-checkout-session.ts`:** An API endpoint that creates a Stripe checkout session and redirects the user to the Stripe checkout page.

### Environment Variables

The project uses the following environment variables, which are stored in the `.env` file:

*   `STRIPE_SECRET_KEY`: Your Stripe secret key.
*   `ASTRO_URL`: The URL of your application (e.g., `http://localhost:4321`).

## Current Task: Initial Setup

This is the initial setup of the project. The following steps have been completed:

1.  Installed dependencies: `astro`, `@astrojs/tailwind`, `tailwindcss`, and `stripe`.
2.  Configured Tailwind CSS.
3.  Created the `Header`, `ProductCard`, and layout components.
4.  Created the `index`, `success`, and `cancel` pages.
5.  Created the Stripe checkout session API endpoint.
6.  Created the `.env` file with placeholder values.
