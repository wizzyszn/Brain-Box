# Brain-Box

# Collaborator Workflow

This document outlines the workflow for collaborators contributing to this project. The goal is to ensure a clean and organized history on the `development` branch while making it easy for collaborators to stay in sync with the latest changes.

---

## Set Up Your Local Repository

1. Clone the repository:
   ```bash
   git clone https://github.com/wizzyszn/Brain-Box.git
   cd your-repo
2. Ensure you have the latest changes from the development branch:
    ```bash
    git checkout development
    git pull origin development
3.  Create a Branch in your name
     ```bash
     git checkout -b branch-name
4. Stay in Sync with development
    To avoid conflicts and ensure your branch is up-to-date with the latest changes, regularly merge the development branch into your branch:
  -Fetch the latest changes from the remote repository:
   ```bash
     git fetch origin
  -Merge development into your feature branch:
  ```bash
   git merge development

