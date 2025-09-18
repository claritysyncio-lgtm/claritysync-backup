# backup-all.ps1
# Pushes your current project to ALL repos at once (only if changes exist)

# Define repo names
$repos = @(
    "csmain",
    "csbackup1",
    "csbackup2",
    "csbackup3",
    "csbackup4"
)

# Check if there are changes
if (-not (git diff --quiet) -or -not (git diff --cached --quiet)) {
    # Commit message with timestamp
    $timestamp = Get-Date -Format "yyyy-MM-dd HH:mm:ss"
    $commitMessage = "🔄 Backup ALL versions at $timestamp"

    # Stage all changes
    git add .

    # Commit
    git commit -m "$commitMessage"

    # Push to all repos
    foreach ($repo in $repos) {
        Write-Host "⬆️  Backing up ALL versions to $repo..."
        git push $repo main
    }

    Write-Host "✅ Backup to ALL versions completed successfully!"
} else {
    Write-Host "ℹ️ No changes to commit. Skipping backup."
}
