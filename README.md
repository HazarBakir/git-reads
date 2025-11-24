# GitReads

<div align="center">
  <img src="public/papyr-logo-light.png" alt="GitReads Logo" width="120" />
  
  <p align="center">
    <strong>Discover README Files, Reimagined</strong>
  </p>
  
  <p align="center">
    Transform GitHub documentation into a beautifully organized reading experience
  </p>

  <p align="center">
    <a href="https://github.com/HazarBakir/git-reads/blob/main/LICENSE">
      <img src="https://img.shields.io/badge/license-MIT-blue.svg" alt="License" />
    </a>
    <a href="https://github.com/HazarBakir/git-reads/stargazers">
      <img src="https://img.shields.io/github/stars/HazarBakir/git-reads" alt="Stars" />
    </a>
    <a href="https://github.com/HazarBakir/git-reads/network/members">
      <img src="https://img.shields.io/github/forks/HazarBakir/git-reads" alt="Forks" />
    </a>
  </p>
</div>

---

## About

GitReads transforms GitHub README files into beautifully formatted, easy-to-navigate documentation with intelligent table of contents, advanced search, and a clean interface.

## Features

- **Smart Navigation** - Auto-generated table of contents with collapsible sections
- **Advanced Search** - Real-time search through documentation
- **Branch Switching** - View README files from different branches
- **Session Management** - Secure 30-minute sessions with activity tracking
- **Full Markdown Support** - Code highlighting, tables, images, links, and more
- **Responsive Design** - Optimized for all devices

## Tech Stack

- React 19 + TypeScript
- Tailwind CSS 4
- shadcn/ui + Radix UI
- React Router DOM
- react-markdown with GFM support
- Supabase (PostgreSQL)
- Framer Motion
- Vite

## Getting Started

### Prerequisites

- Node.js 20.x or higher
- GitHub Personal Access Token (optional, for higher rate limits)
- Supabase account with new project(supabase url, token)

### Installation

1. Clone and install:

```bash
git clone https://github.com/HazarBakir/git-reads.git
cd git-reads
npm install
```

2. Set up environment (optional):

```bash
cp .env.example .env
# Add VITE_GITHUB_TOKEN
# Add VITE_SUPABASE_URL
# Add VITE_SUPABSE_TOKEN
```
