# Reading Quest Adventure AR

An interactive reading game for 3rd graders to improve reading speed and comprehension with fun, gamified passages in Argentinian Spanish. Unlock new worlds by reading stories and completing challenges.

## Features

- Gamified reading passages and vocabulary challenges
- Comprehension and results tracking
- Student records and settings panel
- Modern React + Vite + TypeScript stack
- Uses Gemini API for AI-powered features

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or newer recommended)
- A Gemini API key ([get one here](https://aistudio.google.com/app/apikey))

### Installation

1. **Clone the repository:**
   ```sh
   git clone <repo-url>
   cd reading-quest-adventure-ar
   ```
2. **Install dependencies:**
   ```sh
   npm install
   ```
3. **Configure environment:**
   - Copy `.env.local` if not present and set your Gemini API key. Do not share your API key publicly.

### Running the App

Start the development server:
```sh
npm run dev
```
The app will be available at the URL shown in your terminal (usually http://localhost:5173).

### Build for Production

To build the app for production:
```sh
npm run build
```
To preview the production build:
```sh
npm run preview
```

## Project Structure

- `components/` – React UI components
- `constants/` – Static data, icons, models, and stories
- `context/` – React context providers
- `App.tsx` – Main app entry
- `index.tsx` – App bootstrap
- `types.ts` – TypeScript types

## Environment Variables

- `GEMINI_API_KEY` – Your Gemini API key (required)

## Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

## License

MIT License. See [LICENSE](LICENSE) for details.
