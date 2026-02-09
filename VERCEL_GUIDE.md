# How to Deploy to Vercel 🚀

Vercel is often faster and easier than GitHub Pages. Since your code is already on GitHub, this is very simple!

## Step 1: Log in to Vercel
1.  Go to **[vercel.com](https://vercel.com)**
2.  Click **"Sign Up"** or **"Login"**.
3.  Choose **"Continue with GitHub"**. (This is important!)

## Step 2: Import your Repository
1.  Once logged in, click the **"Add New..."** button (top right) -> **"Project"**.
2.  **👀 LOOK CAREFULLY HERE**:
    -   You should see a list under **"Import Git Repository"**.
    -   Find **`spark-capital`** in that list.
    -   Click the **blue "Import" button** next to it.

## Step 3: Deploy
1.  You will see a "Configure Project" screen.
2.  **Leave everything as default.** (No settings need changing).
3.  Click the big blue **"Deploy"** button.

## Step 4: Success!
- Vercel will take about **30 seconds** to build.
- You will see a "Congratulations!" screen.
- Click the preview image to visit your live site!

---

## ⚠️ Troubleshooting
### Error: "The specified name is already used..."
If you see this error, it means **you are trying to create a NEW repository** instead of importing the one we just made.

**To Fix:**
1.  Click **"Back"** or go to the Vercel Dashboard.
2.  Do **NOT** click "Clone Template" or use the search box at the top.
3.  Look at the **list of repositories** below the search box.
4.  If you don't see `spark-capital`:
    -   Click the link **"Adjust GitHub App Permissions"** (usually at the bottom).
    -   Select "All Repositories" or select `spark-capital`.
    -   Save.
5.  Now you should see `spark-capital` in the list. Click **Import**.
