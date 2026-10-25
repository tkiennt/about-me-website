# Modern Minimalist Developer Portfolio

> A clean, high-performance developer portfolio and digital showcase inspired by [victoreke.com](https://victoreke.com), featuring real-time GitHub API data synchronization.

---

## 🌟 Key Features

- **Victor Eke Inspired Design**: Minimalist aesthetics with dark/light themes, subtle borders, and mint/emerald accents (`#33E092`).
- **Real-Time GitHub Integration**: Live stats fetched dynamically from the GitHub REST API (Repositories, Stargazers, Forks, and Followers) with zero hardcoded statistics.
- **Dynamic Language Breakdown**: Calculates programming language share percentages dynamically across public repositories.
- **Contribution Activity**: Integrated GitHub contribution heatmap and real-time public commit activity stream.
- **Projects & Experience**: Curated engineering showcases with tech stack tags and direct repository links.
- **Performance & Accessibility**: Built with Vite and modern React 19, achieving sub-second load times and fluid responsive layouts.

---

## 🛠️ Tech Stack

- **Framework**: [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Deployment**: [GitHub Pages](https://pages.github.com/) (Automated via GitHub Actions)

---

## ⚙️ Configuration

The portfolio connects dynamically to GitHub without hardcoding. You can configure the target GitHub profile in:

- **`src/config/githubConfig.ts`** or via an environment variable in `.env.local`:

```env
VITE_GITHUB_USERNAME=your-github-username
```

---

## 🚀 Getting Started

Follow these steps to run the portfolio locally:

### 1. Clone the repository
```bash
git clone https://github.com/tkiennt/about-me-website.git
cd about-me-website
```

### 2. Install dependencies
```bash
npm install
```

### 3. Start development server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### 4. Build for production
```bash
npm run build
```

---

## 📦 Deployment

### Automated Deployment (GitHub Actions)
Pushing to the `main` branch automatically triggers the build and deployment workflow in [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) to deploy to the `gh-pages` branch.

### Manual Deployment
```bash
npm run deploy
```

---

## 📄 License & Attribution

- This project is open-source and licensed under the [MIT License](LICENSE).
- Design and theme inspired by [Victor Eke](https://victoreke.com) ([Evavic44/victoreke.com](https://github.com/Evavic44/victoreke.com)).
