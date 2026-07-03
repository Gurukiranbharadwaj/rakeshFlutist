#!/bin/sh

# Exit immediately if a command exits with a non-zero status
set -e

# Get the current repository remote URL dynamically
REMOTE_URL=$(git remote get-url origin)

echo "Building React application..."
npm run build

echo "Navigating to build output directory..."
cd dist

echo "Initializing temporary git repository..."
git init
git checkout -B production

# Configure local git settings inside the temporary directory
git config user.name "Gurukiranbharadwaj"
git config user.email "gurukiranbharadwaj@users.noreply.github.com"

echo "Staging compiled production files..."
git add -A

echo "Creating commit..."
git commit -m "Production release: $(date)"

echo "Adding remote origin: $REMOTE_URL..."
git remote add origin "$REMOTE_URL"

echo "Force pushing compiled assets to 'production' branch..."
git push -f origin production

echo "Deployment complete! The 'production' branch is updated on GitHub."
