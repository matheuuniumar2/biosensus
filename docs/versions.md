# Versions and Publication Strategy

## Version chronology

| Version | Project name | Supplied artifacts | Location |
| --- | --- | --- | --- |
| v1.0 | Pulse | Original `dashboard_inicial.zip`, six dashboard files | [history/pulse-v1.0](https://github.com/matheuuniumar2/biosensus/tree/history/pulse-v1.0), tag `v1.0` |
| v2.0 | BioSensus | `BIOSENSUS_Dashboard_principal.zip` and `Login_BIOSENSUS.zip`, eleven original files | `main`, tag `v2.0` |

The project owner supplied these version identities. According to the owner, the name changed from Pulse to BioSensus because LG has a brand with the same name. This is recorded as project history, not as an independently verified trademark or legal finding.

## Historical import and corrected publication label

The first GitHub commit (`568e2c7`) initially documented the later BioSensus files as `v0.1.0`, before the owner clarified that they represent version 2.0. That provisional publication label does not represent a distinct application version. The commit and its original documentation remain in history; the current documentation corrects the identity to v2.0.

Pulse v1.0 was supplied afterward and imported on October 27, 2026 on an independently rooted historical branch. Its commit date records the import, not the original development date. It is an earlier product version, but is not represented as a Git ancestor of the pre-existing BioSensus commit. No history was rewritten, and no force-push was used.

The original source files of both versions remain unchanged and have separate SHA-256 manifests in their respective snapshots. The v1.0 archive contains only the dashboard; no login files were supplied for that version. Both versions are frontend prototypes and do not guarantee stability or agronomic validation.

## Simple workflow for future versions

- **`main`** holds the current BioSensus version.
- **`history/pulse-v1.0`** preserves the imported Pulse snapshot; it is not an active development branch.
- **Development branches** isolate reviewed changes when useful.
- **Commits** record changes without replacing previous history.
- **Tags `v1.0` and `v2.0`** identify the historical and current snapshots. Do not move published version tags.
- **GitHub releases** may distribute later milestones with explicit owner authorization. No releases are created as part of this historical import.

## When a new version arrives

1. Provide the new files and intended changes.
2. Compare against the tracked version before replacing anything.
3. Review sensitive data, deletions, renames, dependencies, and behavior changes.
4. Update documentation and changelog to match verified capabilities.
5. Commit approved changes while preserving earlier commits; use a branch and pull request when appropriate.
6. Publish after required owner approval. Do not force-push or rewrite history.

## Viewing versions

Use the branch/tag selector above the GitHub file list to choose `v1.0` or `v2.0`. Use **Commits** to inspect publication and documentation history. Return to `main` to see the current project.

## Visibility and license

The repository remains private, and existing collaborators and pending invitations are unchanged by the historical import. To make it public later, review the entire history for sensitive data and asset permissions, then use **Settings → General → Danger Zone → Change repository visibility**. No project license has been authorized; public visibility would not automatically grant an open-source license.
