# DevTinder Frontend ⚡

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Redux](https://img.shields.io/badge/Redux_Toolkit-764ABC?style=for-the-badge&logo=redux&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Netlify](https://img.shields.io/badge/Deployed-Netlify-00C7B7?style=for-the-badge&logo=netlify&logoColor=white)

## 🌐 Live Demo

**[devtinder00.netlify.app](https://devtinder00.netlify.app/)**

> 🔗 **Backend Repository:** [DevTinder Backend](https://github.com/tirumalateja19/DevTinderBackend.git)

---

## 📌 Overview

DevTinder is a **MERN stack** developer networking platform — think Tinder, but for developers. Browse profiles, send connection requests, and build your developer network.

This repository contains the **React frontend**, built with Vite, Redux Toolkit, and Tailwind CSS — fully integrated with the DevTinder REST API backend.

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Framework | React.js + Vite |
| State Management | Redux Toolkit |
| Styling | Tailwind CSS |
| Authentication | JWT (via backend cookies) |
| Database | MongoDB (via backend) |
| Deployment | Netlify |

---

## ✨ Features

- **Developer Profiles** — Create and customize your profile with skills, bio, and photo
- **Developer Feed** — Browse paginated profiles of other developers
- **Connection Requests** — Send, accept, or reject connection requests
- **Authentication** — Secure login and signup with JWT
- **Edit Profile** — Update personal details, skills, and bio
- **Responsive Design** — Fully optimized for mobile and desktop

---

## 📁 Project Structure

```
devTinder-frontend/
├── src/
│   ├── components/     # Reusable UI components (Navbar, Cards, etc.)
│   ├── pages/          # Route-level pages (Feed, Profile, Login, etc.)  
│   ├── utils/          # Axios config, constants, Redux store, slices
│   └── App.js
├── public/
├── index.html
├── tailwind.config.js
└── package.json
```

---

## 🏗️ Setup & Running Locally

### 1. Clone the repository
```bash
git clone https://github.com/tirumalateja19/DevTinderFrontend.git
cd DevTinderFrontend
```

### 2. Install dependencies
```bash
npm install
```

### 3. Configure environment

Create a `.env` file in the root:
```ini
REACT_APP_SERVER_URL=http://localhost:3000
```

### 4. Start the development server
```bash
npm run dev
```

App runs at: `http://localhost:5173/`

> ⚠️ Make sure the [DevTinder backend](https://github.com/tirumalateja19/DevTinderBackend.git) is running before starting the frontend.

---

## 🔧 Backend API

The frontend consumes the DevTinder REST API. Key endpoints used:

| Feature | Endpoint |
|---|---|
| Signup / Login | `POST /auth/signup` · `POST /auth/login` |
| View Profile | `GET /profile` |
| Edit Profile | `PATCH /profile/edit` |
| Developer Feed | `GET /user/feed?page=1&limit=10` |
| Send Request | `POST /request/send/interested/:userId` |
| Review Request | `POST /request/review/accepted/:requestId` |
| View Connections | `GET /user/connections` |

Full API documentation in the [backend repository](https://github.com/tirumalateja19/DevTinderBackend.git).

---

## 🚀 Deployment

| | |
|---|---|
| Frontend | Deployed on **Netlify** → [devtinder00.netlify.app](https://devtinder00.netlify.app/) |
| Backend | Deploy guide in the backend repo (Render / Railway recommended) |

---

## 📢 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature`
3. Commit your changes: `git commit -m 'Add your feature'`
4. Push to the branch: `git push origin feature/your-feature`
5. Open a Pull Request

---

## 📜 License

This project is open-source under the [MIT License](LICENSE).

---

*Built with React + CRA by [Tirumala Teja Jampani](https://www.linkedin.com/in/tirumalateja19/)*
