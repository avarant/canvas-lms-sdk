# Release Process

This document describes how to release a new version of the Canvas LMS SDK.

> **📚 For detailed npm publishing instructions, see [Publishing Guide](docs/PUBLISHING.md)**

## Versioning Strategy

We follow [Semantic Versioning](https://semver.org/):
- **MAJOR** (x.0.0): Breaking API changes
- **MINOR** (0.x.0): New features, backwards compatible
- **PATCH** (0.0.x): Bug fixes, backwards compatible

## Release Types

### 1. Patch Release (Bug Fixes)
```bash
npm run release
```

### 2. Minor Release (New Features)
```bash
npm run release:minor
```

### 3. Major Release (Breaking Changes)
```bash
npm run release:major
```

### 4. Pre-release (Beta/Alpha)
```bash
npm run prerelease
```

## Release Process

### Prerequisites

1. **Ensure you're on the main branch**
   ```bash
   git checkout master
   git pull origin master
   ```

2. **Ensure tests pass**
   ```bash
   npm test
   npm run lint
   npm run build
   ```

3. **Update CHANGELOG.md**
   - Add changes under "Unreleased" section
   - Follow Keep a Changelog format

### Automatic Release Process

1. **Run the appropriate release command**
   ```bash
   # For patch release
   npm run release
   
   # For minor release
   npm run release:minor
   
   # For major release
   npm run release:major
   ```

   This will:
   - Update version in package.json
   - Update CHANGELOG.md with version and date
   - Create a git commit with version
   - Create a git tag (v0.1.1, v0.2.0, etc.)
   - Push changes and tags to GitHub

2. **GitHub Actions will automatically**
   - Create a GitHub Release
   - Publish to npm (requires NPM_TOKEN secret)
   - Publish to GitHub Packages

### Manual Release Process

If you need more control:

1. **Update version manually**
   ```bash
   npm version patch -m "Release v%s"
   # or
   npm version minor -m "Release v%s"
   # or
   npm version major -m "Release v%s"
   ```

2. **Update CHANGELOG.md**
   - Change "Unreleased" to version number and date
   - Add new "Unreleased" section at top

3. **Commit and tag**
   ```bash
   git add CHANGELOG.md
   git commit -m "Update changelog for v0.1.1"
   git tag v0.1.1
   ```

4. **Push to GitHub**
   ```bash
   git push origin master
   git push origin v0.1.1
   ```

## Publishing to npm

### First Time Setup

1. **Create npm account**
   - Go to https://www.npmjs.com/signup
   - Verify email

2. **Login to npm**
   ```bash
   npm login
   ```

3. **Add npm token to GitHub Secrets**
   - Generate token: https://www.npmjs.com/settings/[username]/tokens
   - Add as `NPM_TOKEN` in GitHub repo settings → Secrets

### Manual Publishing

If GitHub Actions fails, you can publish manually:

```bash
npm publish
```

For scoped packages:
```bash
npm publish --access public
```

## Version Conventions

### Pre-release Versions
- Alpha: `0.1.0-alpha.1`
- Beta: `0.1.0-beta.1`
- RC: `0.1.0-rc.1`

### Version Bumping Examples

Current version: `0.1.0`

- Bug fix → `0.1.1`
- New feature → `0.2.0`
- Breaking change → `1.0.0`
- Pre-release → `0.1.1-beta.0`

## Rollback Process

If a release has issues:

1. **Unpublish from npm (within 72 hours)**
   ```bash
   npm unpublish @avarant/canvas-lms-sdk@0.1.1
   ```

2. **Delete GitHub release**
   - Go to Releases page
   - Delete the problematic release

3. **Delete git tag**
   ```bash
   git tag -d v0.1.1
   git push origin :refs/tags/v0.1.1
   ```

## Checklist Before Release

- [ ] All tests pass
- [ ] Documentation is updated
- [ ] CHANGELOG.md is updated
- [ ] Examples work correctly
- [ ] No console.log statements in production code
- [ ] Version number is correct
- [ ] Breaking changes are documented

## After Release

1. **Verify npm package**
   ```bash
   npm view @avarant/canvas-lms-sdk
   ```

2. **Test installation**
   ```bash
   npm install @avarant/canvas-lms-sdk@latest
   ```

3. **Update documentation**
   - Update README if needed
   - Tweet/announce if major release

## Troubleshooting

### npm publish fails
- Check npm login: `npm whoami`
- Check permissions: `npm access ls-packages`
- Check registry: `npm config get registry`

### GitHub Actions fails
- Check NPM_TOKEN is set in GitHub Secrets
- Check workflow syntax
- Review action logs

### Version conflicts
- Ensure local version matches remote
- Run `git pull --tags` to sync tags
- Check `npm view @avarant/canvas-lms-sdk versions`