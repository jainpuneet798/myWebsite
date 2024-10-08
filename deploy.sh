#!/bin/bash -x

# If a command fails then the deploy stops
set -e

printf "\033[0;32mDeploying updates to GitHub...\033[0m\n"

# Build the project.
hugo # if using a theme, replace with `hugo -t <YOURTHEME>`

# Go To Public folder
if [[ ! -d "public" ]]; then
	git clone git@github.com:jainpuneet798/jainpuneet798.github.io public
fi

cd public
touch .nojekyll

# Add changes to git.
git add .

# Commit changes.
msg="rebuilding site $(date)"
if [ -n "$*" ]; then
	msg="$*"
fi

git commit -m "$msg" || true

# Push source and build repos.

git push origin main

