# Spark Capital Website Images Download Script (PowerShell)
# Usage: .\download_images.ps1

Write-Host "==========================================" -ForegroundColor Cyan
Write-Host "Spark Capital Images Download Script" -ForegroundColor Cyan
Write-Host "==========================================" -ForegroundColor Cyan
Write-Host ""

# Create images directory
Write-Host "Creating directory: images" -ForegroundColor Yellow
New-Item -ItemType Directory -Force -Path "images" | Out-Null
Set-Location "images"

Write-Host ""
Write-Host "Downloading images..." -ForegroundColor Green
Write-Host ""

# Function to download with progress
function Download-Image {
    param(
        [string]$Url,
        [string]$Output,
        [string]$Number,
        [string]$Description
    )
    Write-Host "[$Number/17] Downloading $Description..." -ForegroundColor White
    try {
        Invoke-WebRequest -Uri $Url -OutFile $Output -UseBasicParsing
        Write-Host "  Success: $Output" -ForegroundColor Green
    } catch {
        Write-Host "  Failed: $Output" -ForegroundColor Red
        Write-Host "  Error: $_" -ForegroundColor Red
    }
}

# Logo
Download-Image -Url "https://sc.nuivio.com/wp-content/uploads/2025/12/freepik__please-remove-the-bg-forimg1__27360_1-removebg-preview-e1767094783206.png" -Output "logo.png" -Number "1" -Description "logo"

# Fund Flow Diagrams
Download-Image -Url "https://sc.nuivio.com/wp-content/uploads/2026/01/fund-1.png" -Output "fund-1.png" -Number "2" -Description "fund-1 icon"

Download-Image -Url "https://sc.nuivio.com/wp-content/uploads/2026/01/svgviewer-png-output-58-e1767943520973.png" -Output "arrow-connector.png" -Number "3" -Description "arrow connector"

Download-Image -Url "https://sc.nuivio.com/wp-content/uploads/2026/01/fund-2-1.png" -Output "fund-2.png" -Number "4" -Description "fund-2 icon"

Download-Image -Url "https://sc.nuivio.com/wp-content/uploads/2026/01/External.png" -Output "external-investors.png" -Number "5" -Description "external investors icon"

# Phase Illustrations
Download-Image -Url "https://sc.nuivio.com/wp-content/uploads/2026/01/Recruitment-Manager-8-scaled.webp" -Output "phase-1-preseed.webp" -Number "6" -Description "phase 1 illustration"

Download-Image -Url "https://sc.nuivio.com/wp-content/uploads/2026/01/Recruitment-Manager-7-scaled.png" -Output "phase-2-seed.png" -Number "7" -Description "phase 2 illustration"

Download-Image -Url "https://sc.nuivio.com/wp-content/uploads/2026/01/Recruitment-Manager-6-scaled.png" -Output "phase-3-series-a.png" -Number "8" -Description "phase 3 illustration"

# Rocket Graphics
Download-Image -Url "https://sc.nuivio.com/wp-content/uploads/2026/01/12-scaled-e1769608630171.png" -Output "rocket-main-visual.png" -Number "9" -Description "rocket main visual"

Download-Image -Url "https://sc.nuivio.com/wp-content/uploads/2026/01/rocket.gif" -Output "rocket-cycle.gif" -Number "10" -Description "rocket cycle GIF"

Download-Image -Url "https://sc.nuivio.com/wp-content/uploads/2026/01/svgviewer-png-output-60.png" -Output "rocket-icon.png" -Number "11" -Description "rocket icon"

# Background Images
Download-Image -Url "https://sc.nuivio.com/wp-content/uploads/2026/01/Untitled-design-10-2-scaled.png" -Output "cta-background-chat.png" -Number "12" -Description "CTA background (chat)"

Download-Image -Url "https://sc.nuivio.com/wp-content/uploads/2026/01/freepik__background__59570-scaled-e1768826910631.png" -Output "cta-background-portfolio.png" -Number "13" -Description "CTA background (portfolio)"

# About Page
Download-Image -Url "https://sc.nuivio.com/wp-content/uploads/2026/01/business-enterprise-strategy-market-analysis-niche-selection-conquering-marketplace-studying-market-segmentation-planning-company-development.webp" -Output "business-strategy-illustration.webp" -Number "14" -Description "business strategy illustration"

# Contact Page
Download-Image -Url "https://sc.nuivio.com/wp-content/uploads/2026/01/business-woman-attending-online-business-meeting-e1768826059676.webp" -Output "business-meeting-contact.webp" -Number "15" -Description "business meeting image"

# Investors Page
Download-Image -Url "https://sc.nuivio.com/wp-content/uploads/2026/01/11-scaled-e1769607460990.png" -Output "fund-2-investors-main.png" -Number "16" -Description "fund 2 investors main image"

Download-Image -Url "https://sc.nuivio.com/wp-content/uploads/2026/01/fund-2.png" -Output "fund-2-diagram.png" -Number "17" -Description "fund 2 diagram"

Write-Host ""
Write-Host "==========================================" -ForegroundColor Cyan
Write-Host "Download Complete!" -ForegroundColor Cyan
Write-Host "==========================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "Downloaded files:" -ForegroundColor Yellow
Get-ChildItem | Format-Table Name, Length, LastWriteTime -AutoSize
Write-Host ""
$fileCount = (Get-ChildItem).Count
$totalSize = (Get-ChildItem | Measure-Object -Property Length -Sum).Sum / 1MB
Write-Host "Total files: $fileCount" -ForegroundColor Green
Write-Host "Total size: $([math]::Round($totalSize, 2)) MB" -ForegroundColor Green
Write-Host ""
Write-Host "Images saved to: $(Get-Location)" -ForegroundColor Yellow
Write-Host ""
