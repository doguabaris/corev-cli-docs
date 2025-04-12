---
id: push
title: push
---

# `corev push`

Uploads a local configuration file to the remote API.

The file must be named using the format: `project@version.json`.

## Syntax

```bash
corev push <filepath>
```

## Example

```bash
corev push configs/customer-panel@1.2.0.json
```

This reads the specified file, extracts the project and version from its name, and sends it to:

```
POST /configs/customer-panel
```

The body of the request is the file's contents.

## Requirements

- `.corevrc.json` must exist with a valid `api` base URL
- The target config file must exist and be valid JSON
- Filename format must be correct (`project@version.json`)

## Notes

- The command does not validate the contents beyond JSON parsing
- The version is taken from the filename, not the content
- Response status code and message will be shown after push
