---
id: diff
title: diff
---

# `corev diff`

Compares two configuration files and shows the differences.

## Syntax

```bash
corev diff <fileA> <fileB>
```

## Example

```bash
corev diff configs/customer-panel@1.1.0.json configs/customer-panel@1.2.0.json
```

The output will show the differences between the two JSON files using a line-by-line comparison.

## Requirements

- Both files must exist and be valid JSON
- Configs can contain either flat or nested objects

## Notes

- Only shows differences in the entire JSON structure (not just `config`)
- Output is colorized in the terminal if supported
- Does not save anything — it’s a read-only operation
