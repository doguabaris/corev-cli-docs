---
id: usage
title: Usage
---

# Usage

## What it solves

When managing configuration files across environments, it's easy to lose track of what's current.  
Corev provides a consistent way to version, store, and retrieve these files without relying on Git or manual processes.

## How it works

- Config files follow this naming format: `project@version.json`
- A `.corevrc.json` file stores the API base URL
- Corev CLI supports four main commands: `pull`, `push`, `diff`, and `list`

## Basic workflow

```bash
# Set the API endpoint once
corev init --api https://config.acme.com

# Get the latest config for a project
corev pull customer-panel

# Push a new config version
corev push configs/customer-panel@1.2.0.json

# Compare two versions
corev diff configs/customer-panel@1.1.0.json configs/customer-panel@1.2.0.json

# List all local versions
corev list
```

## Example config file

```json
{
  "version": "1.2.0",
  "config": {
    "env": "staging",
    "apiUrl": "https://staging.acme.com"
  }
}
```

## Notes

- The `env` is defined inside the config content, not in the filename
- Corev is not a Git replacement. It's built specifically for config delivery
- Each command assumes a valid `.corevrc.json` is present in your `configs/` folder

## Installation

```bash
npm i -g @corev/cli
```
