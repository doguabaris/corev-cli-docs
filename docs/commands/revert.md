---
id: revert
title: revert
---

# `corev revert`

Reverts the remote configuration of a project to a previous version  
by re-pushing a local config file that matches the desired version.

## Syntax

```bash
corev revert <project> <version>
```

## Example

```bash
corev revert customer-panel 1.2.0
```

This reads the local file:

```
configs/customer-panel@1.2.0.json
```

Then sends its contents to:

```
POST /configs/customer-panel
```

The file becomes the new “latest” configuration.

## Requirements

- `.corevrc.json` must exist with a valid `api` base URL
- The target config file must exist and be valid JSON
- Filename format must be correct (`project@version.json`)

## Notes

- The command does not validate the contents beyond JSON parsing
- The version is taken from the filename, not the content
- Response status code and message will be shown after push
