---
id: index
title: Home
---

![Image](https://github.com/user-attachments/assets/e857b10d-693a-4a57-b843-701848a81718)

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

Below is an Advanced API Specification section that includes both an introduction and a detailed WebIDL contract along with the corresponding HTTP Mapping. This section is intended as a formal guideline for API providers to develop endpoints compliant with Corev-CLI.

## API specification

This section defines the contract that an API endpoint must implement to be compliant with Corev-CLI. The specification is divided into two main parts: the methods (belonging to the `ConfigService` interface) and the dictionaries (`Configuration` and `UploadResponse`).

### § 1 The `getLatestConfig()` method

Belongs to the **Corev ConfigService conformance class**.  
Expects a single argument, `projectName`, which identifies the project. It returns a promise that resolves with a `Configuration` object containing the latest configuration for that project.

```webidl
partial interface ConfigService {
  Promise<Configuration> getLatestConfig(DOMString projectName);
};
```

**Behavior:**
- When this method is invoked, the implementation MUST retrieve the latest configuration from storage (or memory) and return it as a `Configuration` object.
- If the project is not found, the promise SHOULD reject with an appropriate error.

### § 2 The `uploadConfig()` method

Belongs to the **Corev ConfigService conformance class**.  
Expects two arguments:
1. `projectName` — a DOMString specifying the project.
2. `config` — a `Configuration` object to be stored or updated.

```webidl
partial interface ConfigService {
  Promise<UploadResponse> uploadConfig(DOMString projectName, Configuration config);
};
```

**Behavior:**
- When this method is invoked, the implementation MUST store or update the configuration for the specified project, then return an `UploadResponse` indicating success or error.
- If a duplicate or lower version of a configuration is not allowed by policy, this method SHOULD reject with a `409 Conflict`-like error or return an appropriate error response in the `UploadResponse`.

### § 3 The `Configuration` dictionary

Represents the structure of a project configuration object.

```webidl
dictionary Configuration {
  required DOMString name;      // Project name (e.g., "atlas")
  required DOMString version;   // Version string (e.g., "1.0.0")
  required any config;          // JSON object with configuration data
};
```

**Usage notes:**
- `name` typically matches the project identifier (e.g., "atlas").
- `version` can be any string representing a version (e.g., "1.0.0", "2025.04.13-alpha", etc.).
- `config` is an arbitrary JSON-like structure containing key-value pairs relevant to the configuration.

### § 4 The `UploadResponse` dictionary

Defines the response returned after a successful (or failed) configuration upload.

```webidl
dictionary UploadResponse {
  required DOMString status;    // "success" or "error"
  DOMString? message;           // Optional message with details
};
```

**Usage notes:**
- `status` MUST be either `"success"` or `"error"`.
- `message` MAY be provided to give further context, such as error details or confirmations.

### File naming

All configuration files must follow this naming convention:

```
<project>@<version>.json
```

Example:

```
configs/atlas@1.0.0.json
```

### JSON schema

Every configuration file must conform to the JSON schema below, which precisely defines the required structure and fields:

```json
{
  "type": "object",
  "properties": {
    "name": {
      "type": "string"
    },
    "version": {
      "type": "string"
    },
    "config": {
      "type": "object",
      "additionalProperties": true
    }
  },
  "required": ["name", "version", "config"],
  "additionalProperties": false
}
```

### HTTP mapping

| HTTP Method | Endpoint URL                     | WebIDL Method                                      | Expected Response       |
|-------------|----------------------------------|----------------------------------------------------|-------------------------|
| GET         | `/configs/:project/latest`       | `ConfigService.getLatestConfig(projectName)`       | `Configuration` object  |
| POST        | `/configs/:project`              | `ConfigService.uploadConfig(projectName, config)`  | `UploadResponse` object |


### Quick start

#### 1. Initialize once:

```bash
corev init --api http://localhost:3000
```

This saves your API endpoint to `configs/.corevrc.json`.

#### 2. Pull latest config for a project:

```bash
corev pull <project>
```

Example:

```bash
corev pull atlas
```

#### 3. Push local config file:

```bash
corev push configs/atlas@1.0.1.json
```

#### 4. Diff two config files:

```bash
corev diff configs/atlas@1.0.0.json configs/atlas@1.0.1.json
```

#### 5. List versions (based on filenames):

```bash
corev list
```

### Testing

Start the mock API:

```bash
node tests/mock-api.mjs
```

Then run CLI commands while targeting `http://localhost:3000`.
