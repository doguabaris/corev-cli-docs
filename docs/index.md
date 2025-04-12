---
id: index
title: Home
---

![Image](https://private-user-images.githubusercontent.com/135986694/433080453-b1821770-1263-4a09-b3a1-7d278e9b203b.svg?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NDQ0ODY4NzMsIm5iZiI6MTc0NDQ4NjU3MywicGF0aCI6Ii8xMzU5ODY2OTQvNDMzMDgwNDUzLWIxODIxNzcwLTEyNjMtNGEwOS1iM2ExLTdkMjc4ZTliMjAzYi5zdmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwNDEyJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDQxMlQxOTM2MTNaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT1iNzBlYzU2MzkxN2M2NDRiMzMxNWZiMThlN2QxMzgzZWNmZGViYzFlYzBiNGVmNTYyOTQ5NDNkYTU5NmUyMGJjJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.2-bSZKEBGzTOF3acMPgZaOS81gjhcgA1uokeCcaDpZc)

# Corev-CLI

A minimal CLI tool for managing versioned configuration repositories. Built to pull, push, diff, and list config files across distributed environments. Ideal for systems where settings must be easily maintainable, versioned, and auditable.

[![Product Hunt](https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=952597&theme=dark)](https://www.producthunt.com/posts/corev-cli?embed=true&utm_source=badge-featured&utm_medium=badge&utm_souce=badge-corev-cli)

### Some stand-out features:
- Initialize CLI with a central API endpoint
- Pull latest project configuration
- Push local config files to the server
- Diff between config versions
- List available config versions
- Caches configuration files under `configs/`

### Installation

```bash
npm i -g @corev/cli
```

### Filename format

All configuration files must follow this naming convention:

```
<project>@<version>.json
```

Example:

```
configs/atlas@1.0.0.json
```

### File structure

All configuration files are expected to follow this structure:

```json
{
	"version": "1.0.0",
	"config": {
		"key": "value",
		"...": "..."
	}
}
```

### Quick Start

#### 1. Initialize once:

```bash
npx corev init --api http://localhost:3000
```

This saves your API endpoint to `configs/.corevrc.json`.

#### 2. Pull latest config for a project:

```bash
npx corev pull <project>
```

Example:

```bash
npx corev pull atlas
```

#### 3. Push local config file:

```bash
npx corev push configs/atlas@1.0.1.json
```

#### 4. Diff two config files:

```bash
npx corev diff configs/atlas@1.0.0.json configs/atlas@1.0.1.json
```

#### 5. List versions (based on filenames):

```bash
npx corev list
```

### Testing

Start the mock API:

```bash
node tests/mock-api.mjs
```

Then run CLI commands while targeting `http://localhost:3000`.

### Requirements

- Node.js ≥ 20.18.1
- TypeScript
- API endpoint that serves configs at `/configs/:project/latest` and accepts POSTs at
  `/configs/:project`
