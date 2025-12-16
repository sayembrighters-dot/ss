# PowerShell Version Update Script for Cache Busting
# Run this before publishing to GitHub

Write-Host "Updating cache-busting versions..." -ForegroundColor Cyan

# Generate new version based on timestamp
$newVersion = [DateTimeOffset]::UtcNow.ToUnixTimeSeconds()

# Read index.html
$indexPath = Join-Path $PSScriptRoot "index.html"
$indexContent = Get-Content $indexPath -Raw

# Replace all version parameters with new version
$indexContent = $indexContent -replace '\?v=[^"'')\s]+', "?v=$newVersion"

# Write updated content back
Set-Content -Path $indexPath -Value $indexContent -NoNewline

Write-Host "✓ Updated all asset versions to: $newVersion" -ForegroundColor Green
Write-Host "✓ Your website will now bypass browser cache when published!" -ForegroundColor Green
Write-Host ""
Write-Host "Next steps:" -ForegroundColor Yellow
Write-Host "1. git add ." -ForegroundColor White
Write-Host "2. git commit -m 'Update website'" -ForegroundColor White
Write-Host "3. git push" -ForegroundColor White