# setup-backup-alias.ps1
# Makes "backup" a permanent command that runs backup-all.ps1

# Ensure PowerShell profile exists
if (!(Test-Path $PROFILE)) {
    New-Item -Type File -Path $PROFILE -Force
}

# Define alias line
$aliasLine = "Set-Alias backup '$PWD\backup-all.ps1'"

# Add alias to profile (only if not already there)
if (-not (Select-String -Path $PROFILE -Pattern "Set-Alias backup")) {
    Add-Content -Path $PROFILE -Value $aliasLine
    Write-Host "Alias added to PowerShell profile. Restart PowerShell to use 'backup'."
} else {
    Write-Host "Alias already exists in PowerShell profile."
}
