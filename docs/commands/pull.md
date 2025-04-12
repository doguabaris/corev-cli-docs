---
id: pull
title: pull
---

# `corev pull`

Fetches the latest configuration file for a given project from the remote API.  
Saves it locally under the `configs/` folder using the `project@version.json` format.

## Syntax

```bash
corev pull <project>
```

## Example

```bash
corev pull customer-panel
```

This will contact the configured API endpoint (stored in `.corevrc.json`), fetch the latest config for `customer-panel`, and save it as:

```
configs/customer-panel@1.2.0.json
```

## Requirements

- `.corevrc.json` must exist and contain a valid `api` URL
- The remote API must respond to `GET /configs/:project/latest` with a JSON payload:

```json
{
  "version": "1.2.0",
  "config": {}
}
```

## Notes

- If the file already exists locally, it will be overwritten
- The command does not validate the schema or contents of the config
