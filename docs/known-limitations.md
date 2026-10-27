# Known Limitations of the Original Prototype

The following limitations apply to version 2.0.

- The login and dashboard are independent folders with separate entry points. No login-to-dashboard navigation is implemented.
- Login submission displays a simulated status message; authentication and sessions are absent. Password recovery displays a future-feature message. The remember-me control has styling but no persistence logic.
- Dashboard indicator values, status labels, chart arrays, and conclusions are examples embedded in HTML/JavaScript. “Updated now” does not indicate a live data connection.
- Navigation links using `#` and several buttons have no corresponding application workflow in version 2.0.
- The dashboard document title and logo alternative text retain the original label `PULSE`.
- Both interfaces reference some images with root-relative paths. Serve each original folder as a separate web root to resolve those paths without editing the files.
- The dashboard loads Chart.js from an unversioned jsDelivr URL and Bootstrap Icons 1.11.3 from a CDN. The login imports Inter from Google Fonts. External resource availability affects rendering, and Chart.js behavior may change over time.
- The ZIP includes Unicode filename metadata for `talhão-ideal.png`. Extraction must respect it; replacement characters or an incorrect decoding can break the original image reference.
- Backend services, operational AI, live weather integration, sensor connectivity, data storage, automated testing, and deployment configuration are not implemented.
- Agronomic validation remains a future development phase. Prototype conclusions must not guide field operations.
- The login `.vscode/settings.json` configures the Live Server port.

Screenshots in the README show the application interfaces. Image and third-party asset permissions should be reviewed before redistribution.
