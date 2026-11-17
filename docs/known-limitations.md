# Known Limitations

The following limitations apply to the v3.0 frontend prototype. The [v2.0 snapshot](https://github.com/matheuuniumar2/biosensus/blob/v2.0/docs/known-limitations.md) documents the earlier interface.

- The login has a separate entry point. Submission and password recovery are simulated, and authentication, sessions, remember-me persistence, and dashboard redirection are absent.
- Dashboard and History values are examples. Period controls demonstrate date labels and chart axes. The underlying table and CSV use the selected field's fixed dataset. The search filters visible rows; CSV export includes all sample rows for that field.
- Settings actions affect the current page. Saving displays feedback, and refreshing resets the demonstration. Adding, renaming, or removing entries does not update the dashboard or the History datasets.
- The dashboard uses Chart.js from jsDelivr. Bootstrap Icons and the login font also load from external services.
- Backend services, live weather integration, sensor connectivity, data storage, operational AI, and agronomic validation are future work. Prototype conclusions must not guide field operations.
