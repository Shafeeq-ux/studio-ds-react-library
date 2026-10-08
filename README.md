# Studio DS

React + TypeScript design system from the [Studio DS Figma file](https://www.figma.com/design/8wXGfy006ncSwwx6BPrAAh/Studio-DS).

Tokens: **Studio · Semantic** (Light/Dark), **Studio · Typography**, **Studio · Primitives**, **Studio/Elevation/***.

## Install

```bash
npm install studio-ds
```

```tsx
import { Button, Text, Stack, Icon } from "studio-ds";
import "studio-ds/tokens.css";

export function Example() {
  return (
    <div className="sds-root" data-sds-theme="light">
      <Stack gap={16}>
        <Text variant="heading">Studio DS</Text>
        <Button icon={<Icon glyph="plus" />}>Create</Button>
      </Stack>
    </div>
  );
}
```

Peer dependencies: `react` and `react-dom` (^18 or ^19).

## Develop

```bash
npm install
npm run storybook   # http://127.0.0.1:44041
npm run build
npm run lint
```

## Coverage

All Figma `Studio/*` component sets are exported with Storybook docs (core, forms, navigation, data, AI, role play, sections), plus foundations for variables / type styles / elevation.

Skipped only where Figma has no set: Checkbox, Modal/Dialog, Tag/Chip. See the project plan inventory for details.

## License

MIT
