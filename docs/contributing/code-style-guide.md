---
title: Code Style Guide
---

Code style guide documents motivate contributors to submit code changes by maintaining code quality and
matching the existing code style of a specific project. This document guides you to write C++ or JavaScript
codes according to the Neutralinojs internal coding style. 

Adhering to the following points makes the pull request merging process more productive.

## Programming best practices

First, make sure that your code change adheres to the following language-independent best practices:

- Neutralinojs codebases use a procedural and functional mixed coding style, so avoid adding classes and OOP
concepts. However, it's okay to use class-based libraries, but make sure not to expose those classes from
Neutralinojs internal procedures.

- Keep the source code simple even though the development requirement is somewhat complex.
[This article](https://levelup.gitconnected.com/5-programming-principles-that-help-you-to-write-better-code-5d96197725cc?sk=750ce3340204c82c7ae053dfa8337a85)
explains more about programming principles that you need to know.

- We stabilized the Neutralinojs codebase structure and have no plans to extend it further with new modules.
In other words, please try to implement your code changes without changing the existing code structure.
Please discuss first if your code suggestion needs to extend the code structure.

- Try to make new APIs and features consistent with the existing implementation.

- We decided not to expose any operating system-specific feature from the Neutralinojs API for the framework consistency across all operating systems. Therefore, make sure that your new feature will work on all supported operating systems.

- Write tests for new features and update the changelog file.

- Add comments only if a further explanation is required.

- Use self-explanatory identifiers for every code element by following the existing naming convention
in the codebase.

- Use four spaces for indentation instead of tabs or two spaces. Inspect an existing source file and use
the same formatting with new source files.

## C++ code style guide

We are still composing a complete C++ code style guide. Make sure to follow the following points for
C++ code submissions for now. 

- We don't use C++ exceptions. Use booleans to identify failures. For example, we use the following struct for the file read operation:

```cpp
struct FileReaderResult {
    bool hasError = false;
    string error;
    string data;
};
```

- We prefer single-line comments (i.e., `// comment`) over multi-line comments.

- Use pass-by-reference for complex data types, but use pass-by-value for atomics. Also, make sure to use the
`const` keyword properly if the parameter doesn't change within the procedure. For example, look at the
following function definition:

```cpp
fs::FileReaderResult readFile(const string &filename);
```

- Avoid mixing old C-style syntax with modern C++ syntax.
- Use the `__` prefix (double underscore) to declare module-only functions as shown in the following example:

```cpp
void __registerAllowList() {
    // implementation
}
```
- Use getter and setter functions instead of shared global variables (defined with `extern`).

## JavaScript code style guide

- Use ES6 JavaScript syntax by avoiding legacy language syntax.

- Use template literals for somewhat complex string construction, but use the `+` operator for simple
concatenation.

- Use the async/await syntax instead of the then/catch syntax for asynchronous operations.

- Avoid using too recent JavaScript APIs and language features since we need to support older Node.js
and browser versions. But, think twice about readability with somewhat old JavaScript features.

- Don't use more than three parameters for a function&mdash;use a JSON object instead for better readability.

- If you work with some TypeScript codes, always strive to use the meaningful data types instead `any` or
`unknown` broad data types.

