# Kyle's Playbook

A starter for building apps with TanStack Start, Radix UI, and capsize typography.

## Stack

- **TanStack Start** - Full-stack React framework (SPA/SSR, deploys everywhere)
- **Radix UI** - Accessible component library with themes
- **vite-plugin-capsize-radix** - Pixel-perfect typography
- **Dozens of font pairings included** - Ask the agent to set one up

## Project Structure

```
src/
├── components/
│   ├── Header.tsx        # App header with ThemePicker
│   └── ThemePicker.tsx   # Font theme dropdown
├── contexts/
│   └── ThemeContext.tsx  # Font theme state + CSS variable switching
├── routes/
│   ├── __root.tsx        # Root layout, CSS imports, Theme wrapper
│   └── index.tsx         # Home page
├── router.tsx
└── styles.css            # CSS custom properties for fonts
```

## Styling Rules

### Use Flex with gaps, not Box

Capsize strips invisible whitespace from fonts, so text elements sit directly against each other. Always use explicit spacing.

```tsx
// ✅ Good
<Flex direction="column" gap="3">
  <Heading>Title</Heading>
  <Text>Content</Text>
</Flex>

// ❌ Avoid
<Box>
  <Heading mb="3">Title</Heading>
  <Text>Content</Text>
</Box>
```

### Spacing scale

Radix uses 1-9 scale:
- `gap="2"` - Tight (related items)
- `gap="3"` - Default
- `gap="4"` - Comfortable
- `gap="6"` - Section separation

### Avoid inline styles

Use Radix props instead of `style={{}}`. When unsure how to style something, look up the Radix docs at https://www.radix-ui.com/themes/docs

### State management (TanStack DB only)

Use TanStack DB for all state. For client-only UI state, use a local-only collection. Never use `useState`.

## Available Themes

| ID | Name | Fonts | Vibe |
|----|------|-------|------|
| inter | Inter | Inter | Clean & modern |
| source | Source Serif | Source Serif 4 + Source Sans 3 | Elegant editorial |
| alegreya | Alegreya | Alegreya + Alegreya Sans | Literary & warm |
| playfair | Playfair + Lato | Playfair Display + Lato | Classic craft |
| fraunces | Fraunces + Figtree | Fraunces + Figtree | Modern wonky |

Dozens more font pairings available. See https://github.com/KyleAMathews/vite-plugin-capsize-radix-ui/blob/main/SKILL.md for the full list.

## Adding Routes

Create new routes in `src/routes/`:

```tsx
// src/routes/about.tsx
import { createFileRoute } from '@tanstack/react-router'
import { Container, Heading, Text } from '@radix-ui/themes'

export const Route = createFileRoute('/about')({
  component: AboutPage,
})

function AboutPage() {
  return (
    <Container size="2" py="6">
      <Heading size="8" mb="4">About</Heading>
      <Text>Your content here.</Text>
    </Container>
  )
}
```

## Included Playbooks

To use a playbook, run the CLI to read the skill content:

```bash
# List available skills
pnpm exec durable-streams-playbook list
pnpm exec electric-playbook list
pnpm exec db-playbook list

# Read a specific skill
pnpm exec durable-streams-playbook show durable-streams-dev-setup
pnpm exec electric-playbook show electric-quickstart
pnpm exec db-playbook show tanstack-db
```

### Electric (`electric-playbook`)

- `electric` - Electric sync engine for Postgres, routes to appropriate skills
- `electric-quickstart` - Getting started with Electric and TanStack DB
- `electric-tanstack-integration` - Deep integration patterns with TanStack DB
- `electric-security-check` - Security audit checklist before production
- `electric-go-live` - Production readiness checklist
- `deploying-electric` - Cloud, Docker, and self-hosted deployment

### TanStack DB (`db-playbook`)

- `tanstack-db` - Reactive client-side data with live queries and optimistic mutations
- `tanstack-db-collections` - Collection types and configuration
- `tanstack-db-electric` - ElectricSQL integration
- `tanstack-db-live-queries` - Live query patterns
- `tanstack-db-mutations` - Mutation patterns
- `tanstack-db-schemas` - Schema validation and type transformations

### Durable Streams (`durable-streams-playbook`)

- `durable-streams` - HTTP-based append-only logs with offset-based resumability
- `durable-state` - Real-time state sync (presence, chat, collaborative editing)
- `durable-streams-dev-setup` - Development environment setup

## Skills

A skill is a set of local instructions in a `SKILL.md` file.

### Available skills

- `frontend-design` - Create distinctive, production-grade frontend interfaces with high design quality. (file: skills/frontend-design/SKILL.md)
