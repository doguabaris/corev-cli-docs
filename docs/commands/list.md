---
id: list
title: list
---

# `corev list`

Displays all configuration files available locally under the `configs/` directory.  
Groups them by project and lists their available versions.

## Syntax

```bash
corev list
```

## Example output

```
customer-panel:
  - 1.0.0
  - 1.1.0
  - 1.2.0

admin-dashboard:
  - 2.0.1
```

## Requirements

- Configuration files must follow the `project@version.json` format
- Files must be located inside the `configs/` directory

## Notes

- Versions are sorted automatically
- If no files are found, the command prints a warning
- Only file names are parsed, not contents
