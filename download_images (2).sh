#!/bin/bash
# Spark Capital Website Images Download Script
# Usage: bash download_images.sh

echo "=========================================="
echo "Spark Capital Images Download Script"
echo "=========================================="
echo ""

# Create images directory
echo "Creating directory: spark-capital-images"
mkdir -p spark-capital-images
cd spark-capital-images

echo ""
echo "Downloading images..."
echo ""

# Logo
echo "[1/17] Downloading logo..."
wget -q --show-progress -O logo.png "https://sc.nuivio.com/wp-content/uploads/2025/12/freepik__please-remove-the-bg-forimg1__27360_1-removebg-preview-e1767094783206.png"

# Fund Flow Diagrams
echo "[2/17] Downloading fund-1 icon..."
wget -q --show-progress -O fund-1.png "https://sc.nuivio.com/wp-content/uploads/2026/01/fund-1.png"

echo "[3/17] Downloading arrow connector..."
wget -q --show-progress -O arrow-connector.png "https://sc.nuivio.com/wp-content/uploads/2026/01/svgviewer-png-output-58-e1767943520973.png"

echo "[4/17] Downloading fund-2 icon..."
wget -q --show-progress -O fund-2.png "https://sc.nuivio.com/wp-content/uploads/2026/01/fund-2-1.png"

echo "[5/17] Downloading external investors icon..."
wget -q --show-progress -O external-investors.png "https://sc.nuivio.com/wp-content/uploads/2026/01/External.png"

# Phase Illustrations
echo "[6/17] Downloading phase 1 illustration..."
wget -q --show-progress -O phase-1-preseed.webp "https://sc.nuivio.com/wp-content/uploads/2026/01/Recruitment-Manager-8-scaled.webp"

echo "[7/17] Downloading phase 2 illustration..."
wget -q --show-progress -O phase-2-seed.png "https://sc.nuivio.com/wp-content/uploads/2026/01/Recruitment-Manager-7-scaled.png"

echo "[8/17] Downloading phase 3 illustration..."
wget -q --show-progress -O phase-3-series-a.png "https://sc.nuivio.com/wp-content/uploads/2026/01/Recruitment-Manager-6-scaled.png"

# Rocket Graphics
echo "[9/17] Downloading rocket main visual..."
wget -q --show-progress -O rocket-main-visual.png "https://sc.nuivio.com/wp-content/uploads/2026/01/12-scaled-e1769608630171.png"

echo "[10/17] Downloading rocket cycle GIF..."
wget -q --show-progress -O rocket-cycle.gif "https://sc.nuivio.com/wp-content/uploads/2026/01/rocket.gif"

echo "[11/17] Downloading rocket icon..."
wget -q --show-progress -O rocket-icon.png "https://sc.nuivio.com/wp-content/uploads/2026/01/svgviewer-png-output-60.png"

# Background Images
echo "[12/17] Downloading CTA background (chat)..."
wget -q --show-progress -O cta-background-chat.png "https://sc.nuivio.com/wp-content/uploads/2026/01/Untitled-design-10-2-scaled.png"

echo "[13/17] Downloading CTA background (portfolio)..."
wget -q --show-progress -O cta-background-portfolio.png "https://sc.nuivio.com/wp-content/uploads/2026/01/freepik__background__59570-scaled-e1768826910631.png"

# About Page
echo "[14/17] Downloading business strategy illustration..."
wget -q --show-progress -O business-strategy-illustration.webp "https://sc.nuivio.com/wp-content/uploads/2026/01/business-enterprise-strategy-market-analysis-niche-selection-conquering-marketplace-studying-market-segmentation-planning-company-development.webp"

# Contact Page
echo "[15/17] Downloading business meeting image..."
wget -q --show-progress -O business-meeting-contact.webp "https://sc.nuivio.com/wp-content/uploads/2026/01/business-woman-attending-online-business-meeting-e1768826059676.webp"

# Investors Page
echo "[16/17] Downloading fund 2 investors main image..."
wget -q --show-progress -O fund-2-investors-main.png "https://sc.nuivio.com/wp-content/uploads/2026/01/11-scaled-e1769607460990.png"

echo "[17/17] Downloading fund 2 diagram..."
wget -q --show-progress -O fund-2-diagram.png "https://sc.nuivio.com/wp-content/uploads/2026/01/fund-2.png"

echo ""
echo "=========================================="
echo "Download Complete!"
echo "=========================================="
echo ""
echo "Downloaded files:"
ls -lh | grep -v "^d" | grep -v "^total"
echo ""
echo "Total files: $(ls -1 | wc -l)"
echo "Total size: $(du -sh . | cut -f1)"
echo ""
echo "Images saved to: $(pwd)"
echo ""
