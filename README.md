# Pulse — v1.0

**The original dashboard prototype, before BioSensus.**

Pulse 1.0 is the first dashboard version of the project. Version 2.0 adopted the BioSensus name to distinguish the project from LG's Pulse brand and includes the BioSensus dashboard and login interfaces.

Browse [BioSensus on main](https://github.com/matheuuniumar2/biosensus/tree/main) for the current project.

## Contents and technology

`dashboard_inicial/` contains `index.html`, `style_page_1.css`, `dossel.png`, `PULSE.png`, `PULSE__1_-removebg-preview.png`, and `side_bar.png`.

The dashboard uses HTML, CSS, inline JavaScript, Chart.js, and Bootstrap Icons 1.11.3. Chart.js and icons load from external CDNs. Measurements and chart datasets are fixed demonstration values. Version 1.0 does not include a login interface, backend, live weather integration, sensors, or operational AI.

## Preview

Serve `dashboard_inicial/` as the web root. With Python 3 installed:

```shell
python -m http.server 8002 --bind 127.0.0.1 --directory dashboard_inicial
```

Open http://127.0.0.1:8002/. External resources require internet access. The `/dossel.png ` image reference contains a trailing space that may affect resource resolution. Navigation and other controls are demonstration elements.

## Archive and integrity

The dashboard was archived in this repository on October 27, 2026. The first commit records the archive date rather than the original development date. This branch has a separate history from `main`.

The six original application files retain their original names, paths, and contents. See [the SHA-256 manifest](docs/original-files.sha256). The `v1.0` tag identifies the original archived snapshot; this branch also includes later documentation updates.

## License and development status

A project license has not yet been selected. This frontend prototype has not undergone agronomic validation and must not guide field operations.
