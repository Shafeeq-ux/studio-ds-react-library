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
npm run storybook   # Storybook 10 · http://127.0.0.1:44041
npm run build
npm run lint
```

If the sidebar only shows a few components, you are likely on an older commit — pull `cursor/studio-ds-scaffold-160f` and reinstall:

```bash
git fetch origin
git checkout cursor/studio-ds-scaffold-160f
git pull origin cursor/studio-ds-scaffold-160f
rm -rf node_modules
npm install
npm run storybook
```

## Coverage

All Figma `Studio/*` component sets are exported with Storybook docs (core, forms, navigation, data, AI, role play, sections), plus foundations for variables / type styles / elevation.

Skipped only where Figma has no set: Checkbox, Modal/Dialog, Tag/Chip. See the project plan inventory for details.

## License

MIT
