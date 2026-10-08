# Studio DS

React + TypeScript design system component library with Storybook documentation, aligned to the [Studio DS Figma file](https://www.figma.com/design/8wXGfy006ncSwwx6BPrAAh/Studio-DS?node-id=29-1783).

Tokens come from Figma collections **Studio · Semantic** (Light/Dark), **Studio · Typography** (Inter), **Studio · Primitives** (spacing, radius, icon, border, motion), and effect styles **Studio/Elevation/***.

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

## What’s included

| Area | Contents |
| ---- | -------- |
| Tokens | Semantic color (light/dark), overlay/tooltip, Inter type scale, spacing, radii, icon sizes, border widths, motion, elevation shadows |
| Foundations | `Text`, `Stack` |
| Actions & feedback | `Button`, `IconButton`, `Alert`, `Badge`, `Avatar`, `Progress`, `Tooltip` |
| Forms | `Input`, `Textarea`, `Select`, `SelectOptionItem`, `Search`, `NumberInput`, `Radio`, `Switch`, `Toggle` |
| Navigation | `Tabs`/`Tab`, `Breadcrumbs`, `NavigationItem`, `StepperItem`, `PageHeading`, `PanelHeader`, `Dropdown`, `MenuItem` |
| Data | `MetricCard` |
| Utilities | `Link`, `Divider` (token-derived; no Figma component set) |
| Docs | Storybook Overview, Foundations (variables / type / effects), per-component stories; Light/Dark toolbar |

Domain AI / role-play / table composites and the Icon glyph library remain deferred — see the project plan inventory.

## License

MIT
