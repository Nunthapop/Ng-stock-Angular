# Ng Stock & Currency Dashboard

An Angular 19 web application for tracking stocks, interactive financial charting, currency conversion, and financial news.

## Tech Stack
- **Framework:** Angular 19 (Standalone Components, Zoneless Change Detection)
- **UI & Styling:** PrimeNG 19, PrimeIcons, PrimeFlex
- **Charting:** Syncfusion EJ2 Charts, Chart.js (`ng2-charts`)
- **Package Manager:** Yarn

---

## Quick Start

### 1. Prerequisites
- **Node.js**: v18.19+ or v20+
- **Yarn**: `1.22+` (or npm)

### 2. Install Dependencies
```bash
yarn install
```
*(If using npm, run `npm install`)*

### 3. Start Development Server
```bash
yarn start
# or: npm start
```
Open [http://localhost:4200](http://localhost:4200) in your browser. The app will automatically reload when source files are modified.

### 4. Build for Production
```bash
yarn build
# or: npm run build
```
Compiled output will be generated inside the `dist/chart/` directory.

---

## Features
- **Interactive Stock Charts (`/app-chart`):** Candlestick and volume visualization via Syncfusion & Polygon.io API.
- **Currency Exchange (`/app-wallet`):** Live currency conversion and exchange calculator.
- **Stock News (`/app-stock-news`):** Financial headlines and market updates.
- **Contact & Feedback (`/app-contact`):** Responsive inquiry form.

## Project Background

This repository was developed as part of a college project for the **App-Script** class (2024), showcasing practical Angular web page development based on Standalone Components and integrated with UI & chart libs.
