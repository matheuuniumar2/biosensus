# Versions and Publication Strategy

## v0.1.0 — Initial Frontend Prototype

This is the first documented publication package built from the supplied `BIOSENSUS_Dashboard_principal.zip` and `Login_BIOSENSUS.zip`. It records the initial interfaces and their original assets without application changes. Documentation and repository configuration were added separately.

The version label identifies a development milestone and does not guarantee stability, completed integrations, or production readiness. It does not by itself create a Git tag or a GitHub release. No earlier version history is inferred or imported from any pre-existing repository.

## Simple workflow for future versions

- **`main`** holds the principal published version.
- **Development branches** isolate future changes when useful. No extra branch is required for this initial package.
- **Commits** record reviewed changes with clear messages.
- **Tags** may identify accepted versions, such as `v0.1.0`, after owner authorization.
- **Releases** may distribute significant versions with notes and assets after owner authorization.

## When a new version arrives

1. Provide the new files and describe the intended changes.
2. Compare the new package with the tracked version before replacing anything.
3. Review sensitive data, file deletions, renames, dependencies, and behavior changes.
4. Update documentation and changelog to match verified capabilities.
5. Commit approved changes, preserving previous commits. Use a branch and pull request when appropriate.
6. Publish only after any required owner approval. Do not force-push or rewrite earlier history.
7. Create a version tag or release only when the owner authorizes it.

## Viewing previous versions

On GitHub, open **Commits** to browse earlier snapshots. Open a commit to inspect its files and changes. If tags or releases are added later, use the branch/tag selector or **Releases** to find those milestones.

## Visibility

The intended new repository is private. To make it public later, the owner can use repository **Settings → General → Danger Zone → Change repository visibility**, after reviewing the entire history for sensitive information and deciding licensing and asset permissions. A public repository does not automatically grant an open-source license.
