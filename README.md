# GitReads

GitReads is a web application for viewing and navigating GitHub repository README files. It features a sidebar for easy navigation of document headings, as well as branch and version switching.

## Features

- Fetches README files directly from public GitHub repositories.
- Displays README content with markdown rendering.
- Sidebar navigation is generated from the README's table of contents.
- Supports version switching by fetching different repository branches.
- Search functionality for headings within the README.
- Responsive UI built with React and TypeScript.

## Getting Started

1. **Clone the repository:**
   ```
   git clone https://github.com/YOUR_USERNAME/GitReads.git
   cd GitReads
   ```

2. **Install dependencies:**
   ```
   npm install
   # or
   yarn install
   ```

3. **Run the development server:**
   ```
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser:**
   - Visit `http://localhost:3000`

## Project Structure

```
src/
├── components/     # React component modules
│   ├── layout/     # Layout-related components (Sidebar, Search)
│   ├── document/   # Markdown/README rendering
│   ├── features/   # Additional features
│   └── ui/         # Reusable UI components
├── pages/          # Next.js page components
├── hooks/          # Custom React Hooks
├── contexts/       # Global state providers (contexts)
├── lib/            # Library code & integrations (e.g., with GitHub)
├── utils/          # Utility/helper functions
└── types/          # TypeScript type definitions
```

## Technologies Used

- React
- TypeScript
- Next.js
- Radix UI
- Lucide Icons

## License

This project is licensed under the MIT License.
