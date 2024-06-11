# NoteBeam

NoteBeam is a Progressive Web App (PWA) that allows you to save and share notes quickly and easily across devices without the hassle of logging in. Share your notes seamlessly with a unique 6-character token.

## Features

- **Fast**: Save and share your notes instantly.
- **Seamless**: No need to log in or create an account. Just use a unique token to access your notes.
- **Secure**: Your notes are safe and shared only with those who have the token.

## How It Works

1. Save your note.
2. Get a unique 6-character token.
3. Share the token with anyone to give them access to your note.

## Installation

### Prerequisites

- Node.js
- npm or pnpm

### Steps

1. Clone the repository:

   ```sh
   git clone https://github.com/PatphonSD/notebeam.git
   cd notebeam
   ```

2. Install dependencies:

   ```sh
   npm install
   # or
   pnpm install
   ```

3. Create a `.env` file and add your environment variables:
   `sh
    DATABASE_URL="file:./database.db"
    `

4. Run the development server:

   ```sh
   npm run dev
   # or
   yarn dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the app.

## Building for Production

To create a production build, run:

```sh
npm run build
# or
pnpm build
```
