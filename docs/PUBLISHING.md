# Publishing to npm

This guide covers how to publish the Canvas LMS SDK to npm, both manually and through automated GitHub Actions.

## Table of Contents
- [Overview](#overview)
- [Prerequisites](#prerequisites)
- [Automated Publishing (Recommended)](#automated-publishing-recommended)
- [Manual Publishing](#manual-publishing)
- [First-Time Setup](#first-time-setup)
- [Troubleshooting](#troubleshooting)
- [Version History](#version-history)

## Overview

The Canvas LMS SDK is published to npm as `@avarant/canvas-lms-sdk`. We use GitHub Actions for automated releases, which handles versioning, changelog generation, GitHub releases, and npm publishing.

**Current Version**: ![npm version](https://img.shields.io/npm/v/@avarant/canvas-lms-sdk)

**Package URL**: https://www.npmjs.com/package/@avarant/canvas-lms-sdk

## Prerequisites

### For Automated Publishing
- Write access to the repository
- NPM_TOKEN configured in GitHub Secrets (already set up)

### For Manual Publishing
- npm account with publish access to `@avarant/canvas-lms-sdk`
- Node.js 18+ installed locally
- Logged in to npm CLI: `npm login`

## Automated Publishing (Recommended)

### Quick Release Commands

```bash
# For bug fixes (0.1.0 → 0.1.1)
npm run release

# For new features (0.1.0 → 0.2.0)
npm run release:minor

# For breaking changes (0.1.0 → 1.0.0)
npm run release:major

# For pre-releases (0.1.0 → 0.1.1-beta.0)
npm run prerelease
```

### What Happens Automatically

When you run a release command:

1. **Version bumped** in package.json
2. **Changelog updated** with conventional commits
3. **Git commit created** with version message
4. **Git tag created** (e.g., v0.1.1)
5. **Pushed to GitHub** (commits and tags)
6. **GitHub Actions triggered** which:
   - Creates GitHub Release
   - Publishes to npm registry
   - Updates package visibility

### Step-by-Step Process

1. **Ensure you're on master branch with latest changes**:
   ```bash
   git checkout master
   git pull origin master
   ```

2. **Make sure all changes are committed**:
   ```bash
   git status  # Should show "nothing to commit"
   ```

3. **Choose and run the appropriate release command**:
   ```bash
   # Patch release for bug fixes
   npm run release
   
   # Minor release for new features
   npm run release:minor
   
   # Major release for breaking changes
   npm run release:major
   ```

4. **Monitor the release**:
   - Check GitHub Actions: https://github.com/avarant/canvas-lms-sdk/actions
   - Verify npm package: https://www.npmjs.com/package/@avarant/canvas-lms-sdk
   - View GitHub Release: https://github.com/avarant/canvas-lms-sdk/releases

## Manual Publishing

If you need to publish manually (e.g., GitHub Actions is down):

### 1. Build the SDK

```bash
# Install dependencies
npm install
cd generated_typescript_sdk && npm install && cd ..

# Build (will show TypeScript warnings - this is expected)
cd generated_typescript_sdk
npx tsc || true
npx tsc -p tsconfig.esm.json || true
cd ..
```

### 2. Update Version

```bash
# Update version in package.json
npm version patch  # or minor/major
```

### 3. Publish to npm

```bash
# Publish with public access (required for scoped packages)
npm publish --access public --ignore-scripts
```

### 4. Create GitHub Release

```bash
# Create and push tag
git push origin master --follow-tags

# Create release using GitHub CLI
gh release create v$(node -p "require('./package.json').version") \
  --title "v$(node -p "require('./package.json').version")" \
  --notes "See [CHANGELOG.md](https://github.com/avarant/canvas-lms-sdk/blob/master/CHANGELOG.md) for details."
```

## First-Time Setup

### 1. Create npm Account

1. Go to https://www.npmjs.com/signup
2. Create account and verify email
3. Enable 2FA (recommended)

### 2. Login to npm CLI

```bash
npm login
# Enter username, password, email, and OTP if 2FA enabled
```

### 3. Request Package Access

If you need publish access to `@avarant/canvas-lms-sdk`:
```bash
# Contact package owner or
# Request access through npm website
```

### 4. Setup GitHub Secrets (for Automated Publishing)

1. Generate npm token:
   - Go to https://www.npmjs.com/settings/[username]/tokens
   - Click "Generate New Token" → "Classic Token"
   - Select type: "Automation"
   - Copy the token (starts with `npm_`)

2. Add to GitHub repository:
   - Go to Settings → Secrets and variables → Actions
   - Click "New repository secret"
   - Name: `NPM_TOKEN`
   - Value: paste your npm token

## Troubleshooting

### Build Errors During Publish

**Problem**: TypeScript compilation errors prevent publishing

**Solution**: 
```bash
# Publish without running build scripts
npm publish --access public --ignore-scripts
```

### npm Returns 404 After Publishing

**Problem**: Package not immediately available after publishing

**Solution**: Wait 5-10 minutes for npm CDN to propagate. The package is published but takes time to be globally available.

### GitHub Actions Fails to Publish

**Problem**: Release workflow fails at npm publish step

**Possible Causes**:
1. **Missing NPM_TOKEN**: Check Settings → Secrets → NPM_TOKEN exists
2. **Token expired**: Generate new token and update secret
3. **No publish access**: Ensure npm account has publish rights

**Debug Steps**:
```bash
# Check workflow logs
gh run view --log-failed

# Verify npm authentication locally
npm whoami

# Test publish permissions
npm access ls-packages
```

### Version Already Exists

**Problem**: Can't publish same version twice

**Solution**:
```bash
# Bump to next version
npm version patch
npm publish --access public --ignore-scripts
```

### Package Name Not Available

**Problem**: Package name conflicts with existing package

**Solution**: Package is already published! Check:
```bash
npm view @avarant/canvas-lms-sdk
```

## Version History

### Release Schedule
- **Patch releases** (x.x.X): As needed for bug fixes
- **Minor releases** (x.X.x): Monthly for new features
- **Major releases** (X.x.x): Yearly or for breaking changes

### Version Naming Convention
- **Production**: `0.1.0`, `0.2.0`, `1.0.0`
- **Pre-release**: `0.1.0-beta.1`, `0.1.0-rc.1`
- **Alpha/Beta**: Use prerelease with `--preid` flag

### Current Versions
- **Latest**: `npm view @avarant/canvas-lms-sdk version`
- **All versions**: `npm view @avarant/canvas-lms-sdk versions`
- **Specific version**: `npm install @avarant/canvas-lms-sdk@0.1.0`

## Best Practices

1. **Always use automated publishing** when possible
2. **Test locally** before publishing:
   ```bash
   npm pack --dry-run
   ```
3. **Update CHANGELOG.md** with meaningful entries
4. **Use semantic versioning** consistently
5. **Tag releases** in git for version history
6. **Monitor package** after publishing:
   - Check npm page loads correctly
   - Test installation in a new project
   - Verify TypeScript types work

## Quick Reference

### Check Package Info
```bash
# View current published version
npm view @avarant/canvas-lms-sdk version

# View all published versions
npm view @avarant/canvas-lms-sdk versions

# View package metadata
npm view @avarant/canvas-lms-sdk

# Check what files will be published
npm pack --dry-run
```

### Release Commands
```bash
# Automated release (recommended)
npm run release        # Patch
npm run release:minor  # Minor
npm run release:major  # Major

# Manual release
npm version patch
npm publish --access public --ignore-scripts
git push origin master --follow-tags
```

### Useful Links
- **npm Package**: https://www.npmjs.com/package/@avarant/canvas-lms-sdk
- **GitHub Releases**: https://github.com/avarant/canvas-lms-sdk/releases
- **GitHub Actions**: https://github.com/avarant/canvas-lms-sdk/actions
- **npm Documentation**: https://docs.npmjs.com/cli/v10/commands/npm-publish

## Support

For publishing issues:
1. Check this documentation
2. Review GitHub Actions logs
3. Open an issue: https://github.com/avarant/canvas-lms-sdk/issues