# backup-all.ps1
# Pushes your current project to ALL repos at once

# Define repo names
$repos = @(
    "csmain",
    "csbackup1",
    "csbackup2",
    "csbackup3",
    "csbackup4"
)

# Commit message with timestamp
$timestamp = Get-Date -Format "yyyy-MM-dd HH:mm:ss"
$commitMessage = "Backup at $timestamp"

# Stage all changes
git add .

# Commit (ignore error if nothing changed)
git commit -m "$commitMessage" 2>$null

# Push to all repos
foreach ($repo in $repos) {
    Write-Host "Pushing to $repo..."
    git push $repo main --force
}

