# How to Update Your Spark Capital Website

Making changes to your live website is simple!

## Option 1: The Easy Way (Automated Script)

I've created a helper script for you called `deploy_updates.ps1` in this folder.

1.  **Make your changes** to any file (e.g., edit `index.html`).
2.  **Right-click** on `deploy_updates.ps1` and select "Run with PowerShell".
3.  **Type a short message** describing what you changed (e.g., "Fixed typo in About page").
4.  **Press Enter**.

The script will automatically send your changes to GitHub. Your live site will update in about **1-2 minutes**.

## Option 2: The Manual Way (Command Line)

If you prefer using the terminal:

1.  Open a terminal in this folder.
2.  Run these three commands:

```powershell
git add .
git commit -m "Describe your changes here"
git push origin main
```

## Troubleshooting

- **"Everything up-to-date"**: This means you haven't saved your changes yet, or you already pushed them.
- **Errors**: If you see red text, check your internet connection or try running the commands manually to see the specific error.
