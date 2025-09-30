# AstroRazer Checkout Flow

## Overview

This project is a modern, multi-step checkout experience built with Astro.js. It allows users to initiate a payment, select a payment method, and receive a confirmation of their order. The application is designed to be fast, secure, and user-friendly, leveraging the best of Astro's server-first architecture and the interactivity of client-side JavaScript where needed.

## Features & Design

*   **Simulated Checkout:** The entire checkout process is now simulated. No actual database is used.
*   **Dark Theme:** The application features a consistent dark, modern, and visually appealing theme.
    *   **Color Palette:** Dark grays (`gray-800`, `gray-900`) for backgrounds, white and light grays for text, and a vibrant purple for interactive elements and accents.
    *   **Effects:** `backdrop-blur` and semi-transparent backgrounds (`bg-gray-800/80`) are used to create a "glassmorphism" effect.
    *   **Interactivity:** Buttons have hover effects, transitions, and shadows to provide clear feedback to the user.
*   **Step 1: Start Shopping:** A landing page where users can begin the checkout process.
*   **Step 2: Payment Selection:** A page where users can choose from multiple payment methods.
*   **Step 3: Payment Confirmation:** A success page that confirms the payment and displays the order details.
*   **Progress Tracker:** A visual indicator that shows the user their current step in the checkout process.

## Project Structure

*   `src/pages/index.astro`: The initial landing page.
*   `src/pages/checkout/[orderId].astro`: The payment selection page.
*   `src/pages/success/[orderId].astro`: The payment confirmation page.
*   `src/pages/api/visits/start.js`: API endpoint to **simulate** creating a new order.
*   `src/pages/api/checkout/pay.ts`: API endpoint to **simulate** processing the payment.
*   `src/layouts/Layout.astro`: The main layout for the application, defining the dark theme and overall structure.
*   `src/components/OrderSummary.astro`: A component to display the (simulated) order summary.
*   `src/components/CardPayment.astro`: Component for card payment.
*   `src/components/UpiPayment.astro`: Component for UPI payment.
*   `src/components/WalletPayment.astro`: Component for wallet payment.
*   `src/components/NetbankingPayment.astro`: Component for netbanking payment.
*   `src/components/ProgressTracker.astro`: The component that displays the checkout progress.

## Current Task: Refactor Checkout Flow

*   **Dynamic Routing:** The `checkout` and `success` pages have been moved to dynamic routes (`checkout/[orderId].astro` and `success/[orderId].astro`) to handle the `orderId` directly in the URL.
*   **Fixed Redirection:** The client-side scripts in all payment components have been updated to redirect to the new dynamic success page URL, ensuring the `orderId` is correctly passed.
*   **Centralized Progress Tracker:** The `ProgressTracker` component has been integrated into the main `Layout.astro` file, and the redundant trackers have been removed from the individual pages. The layout now conditionally renders the tracker based on the `currentStep` prop.
*   **Consolidated Payment Logic:** All payment components (`CardPayment.astro`, `UpiPayment.astro`, `WalletPayment.astro`, `NetbankingPayment.astro`) are now correctly rendered and managed within `checkout/[orderId].astro`.
*   **Bug Fixes:** Corrected invalid import paths and ensured the application is stable.
