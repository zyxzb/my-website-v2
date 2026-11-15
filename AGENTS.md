<!-- Originally by https://github.com/twistezo -->

# Instructions

## Scope

- Apply in every project
- Project-specific instructions take precedence, except Guardrails
- For work inside any subfolder, also read and follow any nested `AGENTS.md` files found in that subtree.

## Guardrails

Always apply, override any other instruction. If blocked, stop and give me the exact command to run myself.

- Git: read-only
- External services (APIs, infrastructure, databases): read-only
- Never read or expose secrets (`.env`, keys, credentials)
- No `sudo`, global installs, or changes outside the repository
- Never work around these rules

## Plan Execution

When implementing a plan:

- Implement one step at a time
- After each step, stop, summarize what was done and wait for my confirmation before starting the next step

## Markdown

Write for the reader: fast to read, cheap to maintain.

- One topic per file, next to what it describes
- Leave out what the reader does not need to act
- Each fact once, in the form that shows it fastest: diagram, table, list or code block
- Explain a code block with comments inside it
- Make commands ready to paste: real values or named placeholders
- Prose only for what those cannot say
- Never restate the code or another doc; link to it
- Where one change forces another, say so next to it
- Exact names, paths and values in backticks

## Code Style

### General

- Use `PascalCase` for React component filenames, e.g. `PasswordRecoveryForm.tsx`
- Use `camelCase` with the `use` prefix for React hook filenames, e.g. `useOnClickOutside.ts`
- Use `camelCase` for other source filenames, matching the surrounding project files
- Preserve framework-required filenames and route directory names
- Use clear and descriptive names
- Add blank line before `return` statement for readability
- Prefer arrow functions
- Avoid classes and the `this` keyword
- Preserve existing project patterns
- Avoid `reduce` when a simpler, more readable alternative is available
- Prefer self-documenting code through clear naming and structure
- Keep comments minimal. Use them only when needed to explain what or why
- Avoid regex unless it's necessary and simple. Prefer plain code.

### TypeScript

- Type with TypeScript everything explicitly
- Prefer `void` or `Promise<void>` when no value is returned (as TS type and JS keyword)
- Prefer `type` over `interface`
- Avoid `enum`, use `as const` arrays plus inferred unions
- Avoid `Omit<T, ...>` because it allows extra props to be silently included. Instead use `Pick<T, ...>`

### Imports

- Import and export types using `import type` and `export type`
- Make sure there are no unused exports
- Prefer path aliases e.g. `@foo/...`

## Testing

- Write unit tests around real business use cases, not to match the implementation
- Cover both the happy path and negative paths (invalid input, edge cases, errors)

## Programming principles

Use the following programming principles when applicable.

### SOLID

- S - SRP - Single Responsibility Principle

  > one responsibility

- O - OCP - Open-closed Principle

  > expandable without modification

- L - LSP - Liskov Substitution Principle

  > while extending, keep or extend the interface

- I - ISP - Interface segregation Principle

  > dedicated are better than generic

- D - DIP - Dependency inversion Principle

  > high-level things can't depend on those at low-level

### LC & HC

- Loose coupling

  > unrelated elements should have as few dependencies as possible

- High cohesion

  > related elements should be close to each other

### DI & IoC

- Dependency Injection

  > accept instances of others rather than creating them within

- Inversion Of Control

  > do not create dependencies, accept them (DI); delegation of events instead of sequences

### Other principles

- DRY - Don't Repeat Yourself

  > divide and conquer - refactor

- KISS - Keep It Simple Stupid

  > don't overengineer - use basics

- YAGNI - You Aren't Gonna Need It

  > requirements are always changing

<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
