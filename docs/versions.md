# Version History

## Project versions

| Version | Name | Contents | Browse |
| --- | --- | --- | --- |
| v1.0 | Pulse | Initial dashboard with six source and image files | [Historical branch](https://github.com/matheuuniumar2/biosensus/tree/history/pulse-v1.0) |
| v2.0 | BioSensus | Dashboard and login interfaces with eleven source, configuration, and image files | [Current branch](https://github.com/matheuuniumar2/biosensus/tree/main) |

The project adopted the BioSensus name in version 2.0 to distinguish it from LG's Pulse brand. Both versions are frontend prototypes with demonstration data.

## Repository history

BioSensus 2.0 was the first version published in this repository. The initial documentation used the provisional label `v0.1.0`, later corrected to `v2.0`. The earlier label remains in the first commit but does not identify a separate application version.

The Pulse 1.0 dashboard was archived on October 27, 2026 in `history/pulse-v1.0`. Its first commit records the archive date rather than the original development date. The historical branch has a separate root, while `main` retains the BioSensus development history.

Each version has a SHA-256 manifest for its original application files. Documentation updates do not change those files.

## Branches, tags, and releases

- **`main`** contains the current BioSensus project and documentation.
- **`history/pulse-v1.0`** contains the historical Pulse dashboard and its documentation.
- **Development branches** isolate future changes for review.
- **Commits** record changes and preserve earlier snapshots.
- **`v1.0` and `v2.0` tags** mark the original archived snapshots. Their documentation reflects the state at the time of tagging; branch documentation may be updated afterward.
- **GitHub releases** can package significant milestones with release notes. No releases have been published yet.

## Preparing a new version

1. Compare the new files with the current version.
2. Review additions, deletions, renames, dependencies, and sensitive information.
3. Validate the changes and update the documentation and changelog.
4. Commit the changes on a development branch and open a pull request when appropriate.
5. Merge approved work into `main` and create a version tag for the milestone.

Preserve existing commits and published tags so earlier versions remain available.

## Viewing earlier versions

Use the branch/tag selector above the GitHub file list to choose `v1.0` or `v2.0`. Use **Commits** to inspect individual changes. Return to `main` for current documentation.
