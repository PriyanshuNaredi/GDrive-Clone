# Store It – Storage and File Sharing Platform

A modern, full-featured storage management and file sharing platform. Effortlessly upload, organize, and share documents, images, videos, and audio files. Built with Next.js 15, React 19, Appwrite, and TailwindCSS for a fast, scalable, and beautiful experience.

## ⚙️ Tech Stack

- **React 19**
- **Next.js 15**
- **Appwrite** (authentication, storage, sharing)
- **TailwindCSS** (UI styling)
- **ShadCN** (UI components)
- **TypeScript**

## 🔋 Features

- **User Authentication:** Secure signup, login, and logout with Appwrite.
- **File Uploads:** Upload documents, images, videos, and audio.
- **File Management:** View, rename, delete, and download files.
- **File Sharing:** Share files with others for easy collaboration.
- **Dashboard:** Visualize storage usage, recent uploads, and file summaries.
- **Global Search:** Quickly find files and shared content.
- **Sorting:** Sort files by date, name, or size.
- **Modern Responsive Design:** Clean, minimalist UI for all devices.

## 🤸 Quick Start

### Prerequisites

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en)
- [npm](https://www.npmjs.com/)

### Clone the Repository

```bash
git clone https://github.com/JavaScript-Mastery-Pro/storage_management_solution.git
cd storage_management_solution
```

### Install Dependencies

```bash
npm install
```

### Set Up Environment Variables

Create a `.env.local` file in the root directory and add:

```env
NEXT_PUBLIC_APPWRITE_ENDPOINT="https://cloud.appwrite.io/v1"
NEXT_PUBLIC_APPWRITE_PROJECT=""
NEXT_PUBLIC_APPWRITE_DATABASE=""
NEXT_PUBLIC_APPWRITE_USERS_COLLECTION=""
NEXT_PUBLIC_APPWRITE_FILES_COLLECTION=""
NEXT_PUBLIC_APPWRITE_BUCKET=""
NEXT_APPWRITE_KEY=""
```

Replace the values with your Appwrite credentials.

### Run the Project

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to use the app.

---

## 📺 Project Video Walkthrough

Watch the complete video walkthrough of this project below:

[![Watch the video](public/readme/hero.png)](./your-video-file.mp4)

<!--
Replace './your-video-file.mp4' with the actual filename if different.
-->

<sub>Project structure and learning approach inspired by <a href="https://www.youtube.com/@javascriptmastery/videos" target="_blank">JavaScript Mastery</a>.</sub>
