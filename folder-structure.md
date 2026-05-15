# Project Folder Structure & CI/CD Guidelines

This document provides an overview of the "Wedding & Event Planning Dashboard" project structure and critical points for implementing Docker and Jenkins.

---

## 📂 Folder Structure

```text
/ (Project Root)
├── event-planner-backend/          # Laravel 12 API (PHP)
│   ├── app/                        # Core application logic (Models, Controllers, Services)
│   ├── bootstrap/                  # Framework bootstrapping
│   ├── config/                     # Configuration files (database, auth, etc.)
│   ├── database/                   # Migrations, Seeders, and Factories
│   ├── public/                     # Entry point (index.php) and static assets
│   ├── resources/                  # Frontend assets (not used in this decoupled setup)
│   ├── routes/                     # API and Web route definitions
│   ├── storage/                    # Logs, cache, and file uploads
│   ├── tests/                      # Feature and Unit tests
│   ├── artisan                     # Laravel CLI tool
│   ├── composer.json               # PHP dependencies
│   └── .env                        # Backend environment variables
│
├── event-planner-frontend/         # React + Tailwind CSS 4 (Vite)
│   ├── public/                     # Static assets (images, favicon)
│   │   └── images/                 # Hero and UI images
│   ├── src/                        # Source code
│   │   ├── components/             # Reusable UI components
│   │   ├── layouts/                # Page layouts (Public/Dashboard)
│   │   ├── pages/                  # Main page views
│   │   ├── routes/                 # React Router configuration
│   │   ├── services/               # API clients (Axios)
│   │   ├── store/                  # State management (Zustand)
│   │   ├── App.jsx                 # Root component
│   │   ├── index.css               # Global styles (Tailwind 4)
│   │   └── main.jsx                # Entry point
│   ├── index.html                  # HTML template
│   ├── package.json                # JS dependencies
│   ├── vite.config.js              # Vite configuration
│   └── .env                        # Frontend environment variables
│
├── folder-structure.md             # This file
└── .gitignore                      # Root git ignore file
```

---

## 🐳 Docker Implementation Points

To containerize this project, consider the following for your `Dockerfile`:

### Backend (Laravel)
- **Base Image**: Use `php:8.2-fpm-alpine` for a lightweight production image.
- **Extensions**: Ensure `pdo_mysql`, `bcmath`, `gd`, and `zip` are installed.
- **Composer**: Use a multi-stage build to install dependencies without including Composer in the final image.
- **Permissions**: Grant `www-data` ownership of `storage` and `bootstrap/cache`.
- **Optimization**: Run `php artisan config:cache` and `php artisan route:cache` during build.

### Frontend (React)
- **Base Image**: Use `node:20-alpine` for building.
- **Build Step**: Run `npm run build` to generate the `dist` folder.
- **Serving**: Use `nginx:alpine` to serve the static files. Copy the `dist` contents to `/usr/share/nginx/html`.
- **Nginx Config**: Ensure you handle Single Page Application (SPA) routing by redirecting all 404s to `index.html`.

### Database
- Use a standard `mysql:8.0` image.
- Ensure the `MYSQL_DATABASE` matches your `.env` settings (`event_planner_DB`).

---

## 🏗️ Jenkins Implementation Points

For your `Jenkinsfile` (Pipeline), focus on these stages:

1.  **Checkout**: Pull the latest code from the repository.
2.  **Environment Setup**:
    - Copy `.env.example` to `.env` for both projects.
    - Generate Laravel App Key: `php artisan key:generate`.
3.  **Backend Build**:
    - Run `composer install --no-dev --optimize-autoloader`.
    - Run migrations: `php artisan migrate --force`.
4.  **Frontend Build**:
    - Run `npm install`.
    - Run `npm run build`.
5.  **Testing**:
    - Backend: Run `./vendor/bin/phpunit`.
    - Frontend: Run `npm test` (if implemented).
6.  **Deployment**:
    - **Docker Compose**: If using Docker, run `docker-compose up --build -d`.
    - **Artifacts**: Archive the `event-planner-frontend/dist` and backend files if deploying manually.

### 💡 Pro Tips for CI/CD
- **Caching**: Cache `node_modules` and `vendor` directories in Jenkins to speed up builds.
- **Secrets**: Use Jenkins Credentials Store for sensitive `.env` values (DB passwords, API keys).
- **Static Analysis**: Add a stage for `phpstan` or `eslint` to maintain code quality.
