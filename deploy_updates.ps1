# Simple script to update your Spark Capital website on GitHub

$CommitMessage = Read-Host "Enter a description of your changes (e.g., 'Updated contact info')"

if ([string]::IsNullOrWhiteSpace($CommitMessage)) {
    $CommitMessage = "Update website content"
}

Write-Host "Stage 1: Adding files..." -ForegroundColor Cyan
git add .

Write-Host "Stage 2: Committing changes..." -ForegroundColor Cyan
git commit -m "$CommitMessage"

Write-Host "Stage 3: Pushing to GitHub..." -ForegroundColor Cyan
git push origin main

Write-Host "------------------------------------------------" -ForegroundColor Green
Write-Host "✅ Success! Your changes are on their way to GitHub." -ForegroundColor Green
Write-Host "The live site should update in 1-2 minutes." -ForegroundColor Green
Write-Host "------------------------------------------------" -ForegroundColor Green
Pause
