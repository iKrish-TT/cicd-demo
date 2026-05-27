# cicd-demo 🚀

A Node.js + Express project with a full **GitHub Actions CI/CD pipeline**.

## Project Structure

```
cicd-demo/
├── src/
│   ├── index.js          # Express app
│   └── utils.js          # Utility functions
├── tests/
│   ├── utils.test.js     # Unit tests
│   └── api.test.js       # API integration tests
├── .github/
│   └── workflows/
│       └── ci.yml        # ← CI/CD pipeline lives here
├── .eslintrc.json
└── package.json
```

## CI/CD Pipeline

The pipeline at `.github/workflows/ci.yml` has **3 jobs** that run in sequence:

```
Push / PR
    │
    ▼
┌─────────────────┐
│  1. Lint & Test │  ← Runs on Node 18 AND 20 in parallel
│  - ESLint       │
│  - Jest + cover │
└────────┬────────┘
         │ (only if tests pass)
         ▼
┌─────────────────┐
│  2. Build       │
│  - npm run build│
└────────┬────────┘
         │ (only on push to main)
         ▼
┌─────────────────┐
│  3. Deploy      │
│  - your deploy  │
│    command here │
└─────────────────┘
```

### When does it run?
| Event               | Lint & Test | Build | Deploy |
|---------------------|-------------|-------|--------|
| Push to `main`      | ✅           | ✅     | ✅      |
| Push to `develop`   | ✅           | ✅     | ❌      |
| Pull Request        | ✅           | ✅     | ❌      |

## Getting Started

```bash
# Install dependencies
npm install

# Run locally
npm start

# Run tests
npm test

# Lint
npm run lint
```

## API Endpoints

| Method | Route          | Description              |
|--------|----------------|--------------------------|
| GET    | `/`            | Returns a greeting       |
| GET    | `/math?a=5&b=3`| Adds two numbers         |
| GET    | `/math?a=5&b=3&op=multiply` | Multiplies   |

## Connecting a Real Deployment

Replace the "Simulate Deploy" step in `ci.yml` with one of these:

**Render** (free tier):
```yaml
- run: curl -X POST ${{ secrets.RENDER_DEPLOY_HOOK }}
```

**Railway**:
```yaml
- run: railway up
  env:
    RAILWAY_TOKEN: ${{ secrets.RAILWAY_TOKEN }}
```

**Vercel**:
```yaml
- run: vercel --prod --token=${{ secrets.VERCEL_TOKEN }}
```

Add your secrets under: GitHub repo → **Settings → Secrets and variables → Actions**
