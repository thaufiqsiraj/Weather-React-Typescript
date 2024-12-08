# Weather App 🌤️

A modern weather app built using **React**, **TypeScript**, **Bun**, and **Vite**. This app allows users to search for
weather information for any city worldwide, offering detailed insights with an intuitive and vibrant user interface.

---

## Features

### 🌍 Global Weather Search

- Search for any city across the globe.
- Get instant results with real-time weather data.

### 🔍 Smart Auto-Suggestions

- As you type, the app provides a dropdown with location suggestions to speed up the search process.

### 📊 Comprehensive Weather Details

The app displays:

- **Temperature**: Current, high, and low.
- **Wind**: Speed, direction, and gusts.
- **Feels Like**: Perceived temperature for better context.
- **Humidity**: Atmospheric moisture levels.
- **Precipitation**: Probability and intensity of rain or snow.
- **Visibility**: Distance you can see clearly.
- **Pressure**: Atmospheric pressure in hPa.

### 🎨 Stunning UI

- Gradient background and clean card-based layout for effortless readability.
- Responsive design for a seamless experience across devices.

---

## Tech Stack

### Frameworks and Tools

- **React**: For building a dynamic and reusable component-based UI.
- **TypeScript**: For static type-checking and improved code quality.
- **Bun**: For a fast JavaScript runtime and modern package manager.
- **Vite**: For a blazing-fast development environment and optimized builds.

### APIs

- [OpenWeatherMap API](https://openweathermap.org/api): Fetching accurate and up-to-date weather data.

---

## Installation

Follow these steps to get the app up and running locally:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/thaufiqsiraj/Weather-React-Typescript
   cd Weather-React-Typescript
   ```

2. **Install dependencies** using Bun:
   ```bash
   bun install
   ```

3. **Set up the environment**:  
   Create a `.env` file in the root directory and add your OpenWeatherMap API key:
   ```env
   VITE_WEATHER_API_KEY=your_api_key
   ```

4. **Start the development server**:
   ```bash
   bun run dev
   ```

---

## Usage

1. **Search for a city**: Type in the search bar, and select a location from the auto-suggestions dropdown.
2. **View weather details**: The app will display detailed weather metrics for the selected city.

---

## Screenshots

### Main Interface

![Weather App Screenshot](./src/assets/London%20Weather.jpeg)

---

## Future Enhancements

- Integrate dark mode for better usability in low-light conditions.

---

## Feedback

Feel free to open issues or contribute via pull requests. Your suggestions are always welcome!

---
