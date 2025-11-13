# SFX Payments Dashboard

A React dashboard component for visualizing payments, transactions, revenue, success rates, and payment issues. Built with modern UI components and charts for a clean, professional interface.

The Dashboard is not responsive because provision wasn't given to make it reponsive

## Features
- Revenue bar chart with weekly breakdowns.
- Pie chart for payment success rates.
- Horizontal bar chart for payment issues categorization.
- Sidebar navigation for app sections.
- Searchable header with user profile and notifications.
- Messages panel for recent activity.
- Responsive design mimicking a fixed-width Figma layout (1411px x 1134px).

## Setup Instructions

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn package manager

### Installation
1. Clone the repository (if applicable):
   ```
   git clone <your-repo-url>
   cd sfx-dashboard
   ```

2. Install dependencies:
   ```
   npm install
   ```
   This installs all required libraries (see [Libraries Used](#libraries-used) below).

3. Set up Tailwind CSS and shadcn/ui (if not already configured):
   - Install Tailwind CSS: Follow [official Tailwind docs](https://tailwindcss.com/docs/guides/vite) for Vite or Create React App.
   - Install shadcn/ui components:
     ```
     npx shadcn-ui@latest init
     npx shadcn-ui@latest add avatar badge card input select switch
     ```
   - Ensure your `tailwind.config.js` includes the necessary content paths (e.g., `./index.html`, `./src/**/*.{js,ts,jsx,tsx}`).

4. Add the logo image:
   - Place `profile.jpg` in `src/assets/` (or update the import path in `App.jsx`).

5. Run the development server:
   ```
   npm run dev
   ```
   Open [http://localhost:5173](http://localhost:5173) (or the port shown) in your browser.

### Build for Production
```
npm run build
npm run preview
```

## Libraries Used

| Library | Version (Approximate) | Purpose |
|---------|-----------------------|---------|
| `react` | ^18.0.0 | Core framework for building the UI. |
| `lucide-react` | ^0.263.1 | Icon library (e.g., DollarSign, BarChart3). |
| `recharts` | ^2.8.0 | Data visualization charts (BarChart, PieChart, etc.). |
| `@radix-ui/react-*` (via shadcn/ui) | ^1.0.0 | Accessible primitives for UI components. |
| `class-variance-authority` (via shadcn/ui) | ^0.7.0 | Utility for variant-based styling. |
| `clsx` (via shadcn/ui) | ^2.0.0 | Conditional className utility. |
| `tailwind-merge` (via shadcn/ui) | ^2.0.0 | Merges Tailwind classes without conflicts. |
| `tailwindcss` | ^3.3.0 | Utility-first CSS framework for styling. |

**Note**: shadcn/ui components (Avatar, Badge, Card, Input, Select, Switch) are not direct dependencies but are added via the shadcn CLI, relying on Tailwind and Radix UI.

## Assumptions Made
- **Project Structure**: Assumes a Vite-based React app (due to `@/` alias for imports). If using Create React App, update `tsconfig.json` or `jsconfig.json` for path aliases.

- **Styling**: Tailwind CSS is pre-configured with shadcn/ui themes. Custom colors (e.g., purple-600) are from Tailwind's default palette; extend if needed.

- **Data**: Hardcoded sample data (e.g., `revenueData`, `messages`) for demo purposes. In a real app, replace with API fetches (e.g., using Axios or React Query).

- **Layout**: Fixed-width design (1411px x 1134px) to match a Figma spec. Not fully responsive for mobile; add media queries for production.

- **Images**: `profile.jpg` is assumed to exist in `src/assets/`. Replace with a real avatar or use a placeholder service like Unsplash.

- **Accessibility**: Basic ARIA compliance via shadcn/ui, but full testing (e.g., with Lighthouse) is recommended.
- **Environment**: No backend integration; assumes frontend-only for now. Live switch and selects are non-functional placeholders.

- **Date/Time**: Messages use static dates; integrate with a date library like `date-fns` for dynamic formatting.

## Contributing
Fork the repo, create a branch, and submit a PR. Ensure code follows ESLint/Prettier standards.

## License
MIT License. See [LICENSE](LICENSE) for details.