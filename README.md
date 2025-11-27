# GitReads

<div align="center">
  <img src="public/papyr-logo-light.png" alt="GitReads Logo" width="120" />
  
  <h3>Discover README Files, Reimagined</h3>
  
  <p>Transform GitHub documentation into a beautifully organized reading experience</p>
  
  ![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white) ![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white) ![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-06B6D4?logo=tailwindcss&logoColor=white) ![License](https://img.shields.io/badge/License-MIT-green.svg)
</div>

---

## Overview

GitReads transforms GitHub README files into beautifully formatted, easy-to-navigate documentation. Whether you're exploring open-source projects or documenting your own work, GitReads provides an elegant reading experience with intelligent navigation and powerful search capabilities.

## Features

| Feature | Description |
|---------|-------------|
| **Smart Navigation** | Auto-generated table of contents with collapsible sections for effortless browsing |
| **Advanced Search** | Real-time search through documentation with instant results |
| **Branch Switching** | Seamlessly view README files from any branch |
| **Session Management** | Secure 30-minute sessions with automatic activity tracking |
| **Full Markdown Support** | Rich rendering with code highlighting, tables, images, and links |
| **Responsive Design** | Optimized experience across desktop, tablet, and mobile devices |

## Quick Start

### Prerequisites

- **Node.js** 20.x or higher
- **npm** or **yarn**
- **GitHub Personal Access Token** (optional, for higher API rate limits)

### Installation

1. **Clone the repository**

```bash
git clone https://github.com/HazarBakir/git-reads.git
cd git-reads
```

2. **Install dependencies**

```bash
npm install
```

3. **Configure environment variables**

```bash
cp .env.example .env
```

Edit your `.env` file:

```env
# Optional: Increases GitHub API rate limits (60 → 5000 requests/hour)
VITE_GITHUB_TOKEN=your_github_token_here

# Optional: Required only for local session management testing
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

4. **Start the development server**

```bash
npm run dev
```

5. **Open your browser**

Navigate to `http://localhost:5173`

### Production Build

```bash
npm run build
npm run preview
```

## Usage

1. **Enter a repository URL**  
   Example: `https://github.com/happyhackingspace/awesome-hackathon`

2. **Navigate with ease**  
   Use the sidebar table of contents to jump between sections

3. **Search intelligently**  
   Find specific content instantly with the search bar

4. **Switch branches**  
   View documentation from different branches using the dropdown

## Tech Stack

<table>
  <tr>
    <td><strong>Frontend</strong></td>
    <td>React 19, TypeScript, Vite</td>
  </tr>
  <tr>
    <td><strong>Styling</strong></td>
    <td>Tailwind CSS 4, shadcn/ui, Radix UI</td>
  </tr>
  <tr>
    <td><strong>Routing</strong></td>
    <td>React Router DOM</td>
  </tr>
  <tr>
    <td><strong>Markdown</strong></td>
    <td>react-markdown with GitHub Flavored Markdown (GFM)</td>
  </tr>
  <tr>
    <td><strong>Database</strong></td>
    <td>Supabase (PostgreSQL)</td>
  </tr>
  <tr>
    <td><strong>Animation</strong></td>
    <td>Framer Motion</td>
  </tr>
</table>

## Database Setup (Optional)

> **Note**: Database setup is **required** for most contributors. Local development won't work without it in document page.

If you need to test session management features locally:

1. Create a free account at [supabase.com](https://supabase.com)
2. Create a new project
3. Navigate to **SQL Editor** in your dashboard
4. Execute the contents of `database/schema.sql`
5. Get your credentials from **Project Settings → API**
6. Add them to your `.env` file

**Pro tip**: All pull requests are automatically deployed to Vercel with full database access for complete feature testing!

## Contributing

We welcome contributions! Whether it's a bug fix, new feature, or documentation improvement, your help is appreciated.

### Getting Started

1. **Fork** the repository
2. **Create** a feature branch
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Make** your changes
4. **Commit** with clear messages
   ```bash
   git commit -m "Add: amazing new feature"
   ```
5. **Push** to your fork
   ```bash
   git push origin feature/amazing-feature
   ```
6. **Open** a Pull Request

### Contribution Guidelines

- Follow existing code style and TypeScript conventions
- Ensure components are accessible (ARIA labels, keyboard navigation)
- Test on multiple browsers (Chrome, Firefox, Safari)
- Verify responsive design on various screen sizes
- Write descriptive commit messages using prefixes:
  - `Add:` for new features
  - `Fix:` for bug fixes
  - `Update:` for updates to existing features
  - `Refactor:` for code refactoring
  - `Docs:` for documentation changes

### Testing Your Changes

| Testing Type | Method | When to Use |
|--------------|--------|-------------|
| **Local Testing** | Run `npm run dev` | UI/UX changes, styling, components |
| **Full Testing** | Push PR for Vercel preview | Session management, database features, integrations |

### Project Structure

```
git-reads/
├── src/
│   ├── components/       # Reusable React components
│   ├── hooks/           # Custom React hooks
│   ├── lib/             # External service integrations (GitHub, Supabase)
│   ├── pages/           # Route page components
│   ├── types/           # TypeScript type definitions
│   └── utils/           # Helper functions and utilities
├── database/            # Database schema and migrations
├── public/              # Static assets (images, icons)
└── ...config files
```

## Troubleshooting

<details>
<summary><strong>API rate limit exceeded</strong></summary>

- Add a GitHub Personal Access Token to your `.env` file
- Create one at [github.com/settings/tokens](https://github.com/settings/tokens)
- Requires only public repository read access
</details>

<details>
<summary><strong>Port 5173 already in use</strong></summary>

- Kill the process: `lsof -ti:5173 | xargs kill -9` (macOS/Linux)
- Or change the port in `vite.config.ts`
</details>

<details>
<summary><strong>Module not found errors</strong></summary>

- Delete `node_modules` and reinstall: `rm -rf node_modules && npm install`
- Clear npm cache: `npm cache clean --force`
</details>

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Links

- **Issues**: [Report a bug](https://github.com/HazarBakir/git-reads/issues)
- **Pull Requests**: [Contribute code](https://github.com/HazarBakir/git-reads/pulls)
- **Discussions**: [Join the conversation](https://github.com/HazarBakir/git-reads/discussions)

## Acknowledgments

Built with love for the open-source community. Special thanks to all contributors who help make GitReads better! ❤️

---

<div align="center">
  <p><strong>Made with ❤️</strong></p>
  <p>Star us on GitHub if you find this project helpful!</p>
</div>
