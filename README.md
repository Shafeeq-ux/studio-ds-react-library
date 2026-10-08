# Studio DS

React + TypeScript design system component library with Storybook documentation.

> **Figma note:** The [Studio DS Figma file](https://www.figma.com/design/8wXGfy006ncSwwx6BPrAAh/Studio-DS?node-id=29-1783) was not accessible during the initial scaffold. Color, type, and spacing tokens are provisional (`ASSUMPTION` markers in `src/tokens/`) and should be aligned to exported styles when Figma access is available. See the project plan for mapping intent.

## Install

```bash
npm install studio-ds
```

```tsx
import { Button, Text, Stack } from "studio-ds";
import "studio-ds/tokens.css";

export function Example() {
  return (
    <Stack gap={3}>
      <Text variant="title">Studio DS</Text>
      <Button variant="primary">Continue</Button>
    </Stack>
  );
}
```

Peer dependencies: `react` and `react-dom` (^18 or ^19).

## Develop

```bash
npm install
npm run storybook   # http://127.0.0.1:44041
npm run build       # ESM + types + tokens.css → dist/
npm run lint
```

`npm run dev` is an alias for Storybook on port **44041**.

## What’s in v0

| Area | Contents |
| ---- | -------- |
| Tokens | CSS variables + TS constants (color, type, space, radius) |
| Components | `Button`, `Text`, `Stack` |
| Docs | Storybook foundations + component stories |

## Package layout

```
src/
  tokens/           # CSS + TS design tokens
  components/       # Button, Text, Stack
  stories/          # Foundations overview
  index.ts          # public API
```

## License

MIT
