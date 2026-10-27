# Pulse — v1.0

**Historical frontend prototype, before the BioSensus name.**

This branch preserves the original `dashboard_inicial.zip` supplied by the project owner as version 1.0. All six files retain their original names, relative paths, and bytes. This historical snapshot was imported on October 27, 2026; its Git commit date is the import date, not the original development date.

## Relationship to BioSensus

The owner identifies this dashboard as Pulse 1.0 and the later dashboard and login interfaces as BioSensus 2.0. According to the owner, the project was renamed because LG has a brand with the same name. This records the owner's explanation and does not assert an independently verified trademark or legal finding.

The current project remains on [main](https://github.com/matheuuniumar2/biosensus/tree/main). This historical branch is independently rooted to avoid representing the newly imported snapshot as an actual ancestor of commits that already existed. No existing history was rewritten.

## Contents and technology

`dashboard_inicial/` contains `index.html`, `style_page_1.css`, `dossel.png`, `PULSE.png`, `PULSE__1_-removebg-preview.png`, and `side_bar.png`. The dashboard uses HTML, CSS, inline JavaScript, Chart.js, and Bootstrap Icons 1.11.3. Chart.js and icons are loaded from external CDNs. Chart datasets and displayed measurements are fixed prototype examples. No login files, backend, live weather service, sensors, or operational AI were supplied for v1.0.

## Preview

Serve the original directory as the web root, for example with an existing Python 3 installation:

```shell
python -m http.server 8002 --bind 127.0.0.1 --directory dashboard_inicial
```

Open http://127.0.0.1:8002/. External resources require internet access. The supplied HTML contains a trailing space in the `/dossel.png ` image reference; it is retained without correction and may affect resource resolution. Other controls are demonstration elements. No code changes or dependency installation were performed.

## Integrity and license

See [the SHA-256 manifest](docs/original-files.sha256). No project license was authorized or added. This early prototype is not agronomically validated and must not guide field operations.
