# Learning Google Antigravity & Agents: A Reference Guide

Welcome to Google Antigravity! Since you are a Data Scientist working with Agentic AI, tool calling, and evaluations, you will find our core design patterns and architecture very familiar. This guide explains how I (the agent) operate and how you can guide me.

---

## 1. Slash Commands

You can run these commands directly in the chat input. They automate common workflows:

*   **/goal**: *Autonomous Execution Mode*.
    *   **When to use**: If you want me to work on a large, multi-step task (e.g., "Implement the full CSS design system and all HTML markup") without stopping to ask you for permission or approval at every intermediate step.
    *   **How it works**: I will run in a more thorough, autonomous mode to fulfill the stated goal.
*   **/grill-me**: *Interactive Design Interview*.
    *   **When to use**: When you want to align on design decisions or project scope, but aren't sure of all the answers.
    *   **How it works**: I will ask you a series of targeted, interactive questions to help extract your design preferences and build a detailed specification.
*   **/learn**: *Knowledge Retention*.
    *   **When to use**: After we solve a tricky bug, establish a custom layout convention, or figure out a specific hosting setup.
    *   **How it works**: Tells me to save these instructions as a permanent guideline so I don't repeat the mistake or lose the context in future chats.
*   **/schedule**: *Timers & Cron Jobs*.
    *   **When to use**: To set a background timer (e.g., "Remind me in 10 minutes to check the server logs") or a recurring task.

---

## 2. Planning Mode & Artifacts

To prevent chaotic edits and ensure high-quality software, Antigravity uses a structured **Planning-Execution-Verification** workflow:

1.  **Research & Plan**: When you make a request, I first study the codebase. I then create or edit the [implementation plan](file:///C:/Users/ojuka/.gemini/antigravity-ide/brain/c115f822-2a59-48e0-9a3b-510c80f4b566/implementation_plan.md) which lists open questions, design choices, and proposed changes.
2.  **User Approval**: I pause and wait for your explicit approval (via the chat UI).
3.  **Task Management (`task.md`)**: Once approved, I create a checklist at `task.md` inside my system files to keep track of my progress:
    *   `[ ]` - Not started
    *   `[/]` - In progress
    *   `[x]` - Completed
4.  **Walkthrough (`walkthrough.md`)**: After writing the code, I summarize what was done, link the modified files, and verify the output.

---

## 3. Customizations (Skills & Rules)

You can customize how I behave globally or inside this project using **customization roots**:
*   **Global Root**: `C:\Users\ojuka\.gemini\config`
*   **Workspace Root**: `.agents` (inside our project folder `d:\Projects\Portfolio Website\.agents`)

### Custom Rules (`AGENTS.md`)
You can append custom guidelines, style preferences, or constraints to `AGENTS.md` in the workspace or global root.
*   *Example*: If you want me to always use double quotes in JavaScript or use modern CSS grid layouts, we can add that to `d:\Projects\Portfolio Website\.agents\AGENTS.md`. I will read this at the start of every turn.

### Custom Skills (Directories)
Skills are reusable instruction sets, scripts, or examples that teach me how to perform complex tasks (e.g., querying databases, doing protein structure searches, formatting code, etc.).
*   Each skill resides in a directory with a `SKILL.md` file (which contains YAML metadata describing when the skill should trigger).
*   If we create custom scripts or procedures for your portfolio (like deploying to GitHub Pages), we can package them as a custom skill!

---

## 4. Testing with the Browser Subagent

Instead of just hoping the website looks good, I can delegate work to a **Browser Subagent**:
*   The browser subagent starts a headless/headed browser instance, navigates to our locally hosted site, tests links, fills forms, and checks responsive styling.
*   It records its actions and saves a **WebP video recording** in our artifacts directory. This allows us to visually verify that hover states, responsive grids, and animations are working perfectly.
