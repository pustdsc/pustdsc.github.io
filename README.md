# PUST Data Science Club

Website: [https://pustdsc.github.io](https://pustdsc.github.io)

The official web platform for the Data Science Club at Pabna University of Science & Technology (PUST), Pabna, Bangladesh. Founded under the guidance of the Department of Statistics, the club provides a collaborative environment for students to master data science, machine learning, and artificial intelligence through practical projects, academic research, and skill-building events.

## Key Modules and Features

### 1. Explorer Hub
A curated resource center structured into four learning and research channels:
- **Try Technology**: Interactive AI models and tool demonstrations including ChatGPT, Google Gemini, Runway, ElevenLabs, Google Lens, MediaPipe, Semantris, and Tesla Autopilot concepts.
- **Learning Pathway**: Visual and interactive learning portals such as Seeing Theory, MLU-Explain, CNN Explainer, Transformer Explainer, TensorFlow Playground, SQLZoo, and PyNative.
- **Datasets**: Global open data sources including Kaggle, Google Dataset Search, UCI Machine Learning Repository, Our World in Data, Hugging Face, NASA Open Data, and UN Data.
- **Research & Papers**: Direct links to academic paper search engines including Google Scholar, Semantic Scholar, CORE, IEEE Xplore, arXiv, PubMed Central, and DOAJ.

### 2. Community and Leadership
- **Executive Committee**: Roster of current student leaders, department representatives, and committee portfolios.
- **Faculty Advisory Board**: Mentorship and direction from faculty members in the Department of Statistics and computer science disciplines.
- **Membership Gateway**: Online recruitment portal and membership registration forms for general students.

### 3. Events and Journey Gallery
- **Milestones**: Coverage of major club milestones, including official inauguration ceremonies, committee handovers, advisor visits, and career seminars.
- **Past Workshops**: Workshop summaries covering Python data operations, R programming, data visualization, and career pathways in AI.

### 4. Skill Focus
Workshops, projects, and peer learning sessions center on in-demand tools and frameworks:
- **Programming & Data Processing**: Python, R, SQL
- **Analytics & Business Intelligence**: Power BI, Tableau, Excel, SPSS
- **Version Control & Development**: Git, GitHub, Jupyter Notebooks

## Technology Stack

- **Framework**: Next.js (App Router, React 19, TypeScript)
- **Styling**: Tailwind CSS
- **Interactions & Animations**: Framer Motion
- **Iconography**: Lucide React

## Repository Structure

```
next-pustdsc/
├── src/
│   ├── app/                # App Router pages (Home, About, Blog, Contact, Membership, Committee, Gallery)
│   ├── components/         # Reusable UI components (Navbar, Footer, Section Blocks)
│   └── data/               # Centralized data structures for club roster, events, and resources
├── public/                 # Static media assets, event photographs, and skill icons
├── next.config.ts          # Next.js configuration and build settings
├── package.json            # Dependencies and scripts
└── README.md               # Project documentation
```

## Getting Started

### Prerequisites

- Node.js (v18.0 or higher)
- npm (v9.0 or higher)

### Local Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/pustdsc/pustdsc.github.io.git
   cd pustdsc.github.io
   ```

2. Install project dependencies:
   ```bash
   npm install
   ```

3. Run the local development server:
   ```bash
   npm run dev
   ```

4. Open `http://localhost:3000` in your browser to view the application.

### Production Build

To test or verify the production bundle locally:

```bash
npm run build
```

## Contact & Links

- **Website**: [https://pustdsc.github.io](https://pustdsc.github.io)
- **Affiliation**: Department of Statistics, Pabna University of Science & Technology, Pabna-6600, Bangladesh
- **Repository**: [https://github.com/pustdsc/pustdsc.github.io](https://github.com/pustdsc/pustdsc.github.io)

## License

This project is licensed under the [MIT License](LICENSE).
