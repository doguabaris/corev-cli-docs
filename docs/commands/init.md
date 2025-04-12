---
id: init
title: init
---

# `corev init`

Stores the API base URL in a local `.corevrc.json` file.  
This file is used by all other commands to determine where to pull and push configs.

## Syntax

```bash
corev init --api <url>
```

## Example

```bash
corev init --api https://config.acme.com
```

This creates a `.corevrc.json` file under the `configs/` directory:

```json
{
  "api": "https://config.acme.com"
}
```

## Requirements

- The URL must be a valid base API endpoint (no trailing slash)

## Notes

- You only need to run this once, unless the API changes
- If the file already exists, it will be overwritten
- All other commands depend on this file being present
