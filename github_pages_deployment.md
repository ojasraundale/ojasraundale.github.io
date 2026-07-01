# How to Deploy Your Portfolio Website to GitHub Pages

GitHub Pages is a free hosting service provided by GitHub that serves static HTML/CSS/JS websites directly from a repository. Since your website uses a clean, compilation-free Vanilla architecture, it is 100% compatible.

Follow these simple steps to deploy your site:

---

## Prerequisites
1. You must have a free GitHub account.
2. You must have Git installed on your computer.

---

## Step-by-Step Guide

### Step 1: Initialize Git and Commit Your Files
Open your command prompt, terminal, or VS Code terminal in the project directory (`D:\Projects\Portfolio Website`) and run:

```bash
# Initialize a new Git repository
git init

# Add all files to staging
git add .

# Create the initial commit
git commit -m "feat: initial commit of portfolio website"
```

### Step 2: Create a New GitHub Repository
1. Go to [GitHub](https://github.com/) and log in.
2. Click the **New** repository button in the top-left or go to [github.com/new](https://github.com/new).
3. **Repository Name**: Set this to:
   *   `username.github.io` (Replace `username` with your actual GitHub username, e.g., `ojasraundale.github.io`). This is the best approach, as it will serve the portfolio as the main root page of your website.
4. **Public/Private**: Keep it **Public** (required for free GitHub Pages hosting).
5. **Initialize this repository with**: Leave everything unchecked (no README, no .gitignore, no license).
6. Click **Create repository**.

### Step 3: Link Your Local Repo and Push
On the repository page, under the section **"…or push an existing repository from the command line"**, copy and run the commands:

```bash
# Rename the default branch to 'main'
git branch -M main

# Link your local repository to the GitHub repository
git remote add origin https://github.com/username/username.github.io.git

# Push the code to GitHub
git push -u origin main
```
*(Remember to replace `username` with your actual GitHub account name!)*

### Step 4: Verify Deployment
1. Go to your repository settings on GitHub.
2. Click on the **Pages** tab in the left-hand sidebar (under the "Code and automation" section).
3. Under **Build and deployment**, ensure:
   *   Source is set to **Deploy from a branch**.
   *   Branch is set to **main** and folder is set to **/ (root)**.
4. GitHub will start building and deploying your site. This typically takes 1-2 minutes.
5. Once complete, you will see a success message at the top of the Pages section with your live URL (e.g., `https://username.github.io`).

---

## How to Edit Content in the Future
Whenever you want to update your resume details, project list, or image:
1. Open [index.html](file:///d:/Projects/Portfolio%20Website/index.html) in your IDE.
2. Edit the content inside the clearly marked `<!-- EDIT HERE -->` sections.
3. Save the file and run:
   ```bash
   git add .
   git commit -m "update: refresh projects list"
   git push origin main
   ```
4. GitHub Pages will automatically update your site within a minute!
