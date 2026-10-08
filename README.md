# Studio DS

React + TypeScript design system component library with Storybook documentation, aligned to the [Studio DS Figma file](https://www.figma.com/design/8wXGfy006ncSwwx6BPrAAh/Studio-DS?node-id=29-1783).

Tokens come from Figma collections **Studio · Semantic** (Light/Dark), **Studio · Typography** (Inter), and **Studio · Primitives** (spacing, radius, motion).

## Install

```bash
npm install studio-ds
```

```tsx
import { Button, Text, Stack } from "studio-ds";
import "studio-ds/tokens.css";

export function Example() {
  return (
    <div className="sds-root" data-sds-theme="light">
      <Stack gap={16}>
        <Text variant="heading">Studio DS</Text>
        <Button variant="primary">Continue</Button>
      </Stack>
    </div>
  );
}
```

Peer dependencies: `react` and `react-dom` (^18 or ^19).

Use `data-sds-theme="dark"` on a root element to switch semantic colors.

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
| Tokens | Semantic color (light/dark), Inter type scale, spacing 4–64, radii, motion |
| Foundations | `Text`, `Stack` |
| Core | `Button`, `Alert`, `Badge`, `Avatar`, `Input` |
| Docs | Storybook Overview, Foundations, and per-component stories; Light/Dark toolbar |

## Figma mapping

| Figma | Code |
| ----- | ---- |
| `text/primary`, `surface/default`, `action/primary`, … | `--sds-color-*` / `colors.*` |
| `font-family/sans` = Inter | `--sds-font-sans` |
| `font-size/*` | `--sds-text-*` / `Text` variants |
| `spacing/*` | `--sds-space-*` / `Stack` `gap` |
| `Studio/Button` Appearance Primary/Secondary | `Button` `variant` |

## License

MIT
