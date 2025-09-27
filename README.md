# 🚀 Portfolio - Adão Ângelo João

A modern, responsive portfolio website built with Next.js 15, TypeScript, and Supabase. This project showcases web development skills and projects with a clean, professional design.

![Next.js](https://img.shields.io/badge/Next.js-15.5.2-black?style=flat-square&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.x-38B2AC?style=flat-square&logo=tailwind-css)
![Supabase](https://img.shields.io/badge/Supabase-Backend-green?style=flat-square&logo=supabase)

## 🏗️ Tech Stack

### Core Technologies
- **Framework**: Next.js 15 with App Router and Turbopack
- **Language**: TypeScript with strict mode enabled
- **Styling**: Tailwind CSS v4 with PostCSS
- **State Management**: Zustand for client-side state management
- **Database**: Supabase for backend services and data storage
- **Fonts**: Google Fonts (Inter & Roboto)
- **Icons**: Lucide React for modern iconography

### Development Tools
- **Linting**: ESLint with Next.js configuration
- **Package Manager**: pnpm with lock file
- **Build Tool**: Turbopack for fast development and builds

## 📁 Project Structure

```
portfolio/
├── 📁 app/                    # Next.js App Router
│   ├── layout.tsx            # Root layout with metadata
│   ├── page.tsx              # Home page
│   ├── globals.css           # Global styles with CSS variables
│   └── favicon.ico           # Site favicon
├── 📁 components/            # Reusable components
│   ├── 📁 project/           # Project-related components
│   │   ├── ProjectRoot.tsx   # Context provider wrapper
│   │   ├── ProjectContext.tsx # React Context for project data
│   │   ├── ProjectTitle.tsx  # Project title component
│   │   ├── ProjectDescription.tsx # Project description
│   │   ├── ProjectImage.tsx  # Project image display
│   │   ├── ProjectActions.tsx # Project action buttons
│   │   └── index.ts          # Barrel exports
│   └── 📁 ui/                # UI components (to be developed)
├── 📁 types/                 # TypeScript definitions
│   ├── project.ts            # Project & ProjectsState interfaces
│   └── index.ts              # Barrel exports
├── 📁 stores/                # State management
│   └── useProjectsStore.ts   # Zustand store for projects
├── 📁 hooks/                 # Custom React hooks
│   └── useProjects.ts        # Hook wrapping the Zustand store
├── 📁 lib/                   # Utilities and configurations
│   └── supabase.ts          # Supabase client configuration
├── 📁 public/                # Static assets
│   └── me.jpeg              # Profile image
└── Configuration files...
```

## 🔧 Key Features

### 🗄️ Database Integration
- **Supabase**: Modern PostgreSQL database with real-time capabilities
- **Projects Table**: Stores project information with JSON technology arrays
- **Authentication Ready**: Configured for future auth implementation

### 📊 State Management
The application uses Zustand for efficient state management:

```typescript
interface ProjectsStore {
  projects: Project[];
  loading: boolean;
  error: string | null;
  currentProject: Project | null;
  
  // CRUD Operations
  fetchProjects: () => Promise<void>;
  addProject: (project) => Promise<void>;
  updateProject: (id, updates) => Promise<void>;
  deleteProject: (id) => Promise<void>;
  
  // Search & Filter
  filterProjectsByTechnology: (tech: string) => Project[];
  searchProjects: (query: string) => Project[];
}
```

### 🎨 Design System
- **Dark/Light Mode**: Automatic theme switching based on user preference
- **Custom CSS Variables**: Consistent color scheme throughout the app
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Modern Typography**: Google Fonts integration with fallbacks

### 🧩 Component Architecture
- **Compound Components**: Flexible project display components
- **Context Pattern**: Shared state between related components
- **TypeScript**: Full type safety across all components

## 📋 Data Models

### Project Interface
```typescript
interface Project {
  id: number;
  created_at: string;
  name: string;
  description: string;
  github_url: string;
  live_url?: string | null;
  image_url?: string | null;
  technologies: string[];
}
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- pnpm (recommended) or npm
- Supabase account and project

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Adao-Angelo/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Environment Setup**
   Create a `.env.local` file in the root directory:
   ```env
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

4. **Database Setup**
   Create a `Projects` table in your Supabase database:
   ```sql
   CREATE TABLE Projects (
     id SERIAL PRIMARY KEY,
     created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
     name TEXT NOT NULL,
     description TEXT NOT NULL,
     github_url TEXT NOT NULL,
     live_url TEXT,
     image_url TEXT,
     technologies TEXT -- JSON array stored as text
   );
   ```

5. **Run the development server**
   ```bash
   pnpm dev
   ```

6. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📝 Available Scripts

```bash
# Development with Turbopack (faster builds)
pnpm dev

# Production build with Turbopack
pnpm build

# Start production server
pnpm start

# Run ESLint
pnpm lint
```

## 🎯 Development Status

### ✅ Completed
- [x] Project infrastructure and configuration
- [x] Supabase integration and database setup  
- [x] State management with Zustand
- [x] TypeScript configuration and type definitions
- [x] Component architecture foundation
- [x] Styling system with Tailwind CSS v4

### 🔄 In Progress
- [ ] Complete home page UI implementation
- [ ] Project showcase components
- [ ] Responsive design optimization
- [ ] UI component library development

### 📋 Planned Features
- [ ] Project filtering and search interface
- [ ] Contact form integration
- [ ] Blog section (optional)
- [ ] Performance optimization
- [ ] SEO enhancements
- [ ] Animation and micro-interactions

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Contact

**Adão Ângelo João**
- Portfolio: [Live Demo](https://your-portfolio-url.com)
- GitHub: [@Adao-Angelo](https://github.com/Adao-Angelo)
- Email: your.email@example.com

---

⭐ If you found this project helpful, please give it a star on GitHub!