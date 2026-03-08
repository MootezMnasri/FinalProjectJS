# GiftLink - User Stories (Sample Backlog)

1) Finish user stories
- As a product owner, I want to finalize the backlog so the team has a clear scope for the sprint.
- Acceptance Criteria (example):
  - All major epics are decomposed into actionable stories
  - Each story has a clear "As a… I need… So that…" narrative

2) Initialize and populate MongoDB
- As a data/model engineer, I want to set up MongoDB with collections for users, listings, comments, and likes, and seed initial data.
- Acceptance Criteria:
  - MongoDB connection string is configurable via environment
  - Collections exist: users, listings, comments, reviews
  - Seed script populates sample data

3) Run skeleton application
- As a developer, I want to start the skeleton MERN app locally to verify wiring between front and back ends.
- Acceptance Criteria:
  - npm install runs without errors
  - Backend server starts listening on a port (e.g., 5000)
  - Frontend dev server runs with hot reload (e.g., 3000)

4) Implement a landing page and navigation
- As a user, I want a landing page with a clean navigation bar to access Home, Listings, Login, and Sign Up.
- Acceptance Criteria:
  - Navbar is visible on all routes
  - Links navigate to correct routes without full page reloads

5) Add authentication components and logic
- As a user, I want to register and login using secure JWT-based authentication.
- Acceptance Criteria:
  - Registration creates user with hashed password
  - Login returns a JWT and sets auth state on the client
  - Protected routes require valid JWT

6) Implement Gifts details page
- As a user, I want to view details for a listed gift: title, description, image, location, condition, and status.
- Acceptance Criteria:
  - Detail view renders all fields
  - Image renders and scales properly
  - “Contact” or “Claim” action is available where applicable

7) Implement a search component
- As a user, I want to search listings by keyword, category, and location.
- Acceptance Criteria:
  - Text search filters results by title/description
  - Location and category filters refine results
  - Results update in real time (or on submit)

8) Design and implement the comments feature
- As a user, I want to comment on listings and view others’ comments.
- Acceptance Criteria:
  - Users can post comments on a listing
  - Comments are stored in MongoDB and retrieved with the listing
  - Basic moderation (optional) or approval workflow

9) Containerize the services and applications
- As a DevOps engineer, I want to Dockerize backend and frontend, with a simple compose for local development.
- Acceptance Criteria:
  - Dockerfile for backend and frontend
  - docker-compose up starts both services and a MongoDB container
  - Environment variables are easily overrideable

10) Deploy backend and frontend
- As an engineer, I want to deploy the services to a cloud platform (e.g., Kubernetes or IBM Code Engine) for staging.
- Acceptance Criteria:
  - Deployment manifests or infrastructure as code exist
  - CI/CD pipeline (optional mention) triggers deploy on push
  - Public URLs exist for frontend and backend (where applicable)
