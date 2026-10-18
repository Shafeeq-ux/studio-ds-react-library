# Studio DS

React + TypeScript design system from the [Studio DS Figma file](https://www.figma.com/design/8wXGfy006ncSwwx6BPrAAh/Studio-DS).

Tokens: **Studio · Semantic** (Light/Dark), **Studio · Typography**, **Studio · Primitives**, **Studio/Elevation/***.

## Documentation (Mews-style guidelines + Storybook)

Hosted on GitHub Pages:

| Surface | URL |
| ------- | --- |
| **Guidelines site** (VitePress) | https://shafeeq-ux.github.io/studio-ds-react-library/ |
| **Storybook playground** | https://shafeeq-ux.github.io/studio-ds-react-library/storybook/ |

Guidelines IA mirrors [mews.design](https://www.mews.design/latest/welcome-eumfLxWD): Welcome · Get started (Design / Engineering) · Foundations · Components (status + groups) · Resources — with **GitHub · Figma · Storybook** links on every page. Flutter is out of scope.

## Install (library package)

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
npm run docs:dev         # VitePress guidelines · http://127.0.0.1:44142
npm run storybook        # Storybook 10 · http://127.0.0.1:44041
npm run build            # library package → dist/
npm run build-storybook  # Storybook only → storybook-static/
npm run build-site       # Pages bundle → site-dist/ (+ storybook/)
npm run lint
```

## Deploy (GitHub Pages / Netlify / Vercel)

Static output: **`site-dist/`** (guidelines at `/`, Storybook at `/storybook/`).

```bash
npm ci
npm run build-site
```

### GitHub Pages

Workflow: [`.github/workflows/deploy-storybook-pages.yml`](.github/workflows/deploy-storybook-pages.yml)

- Build: `npm run build-site`
- Publish: `site-dist`
- URL: https://shafeeq-ux.github.io/studio-ds-react-library/

### Netlify

| Setting | Value |
| ------- | ----- |
| Build command | `npm ci && npm run build-site` |
| Publish directory | `site-dist` |

### Vercel

| Setting | Value |
| ------- | ----- |
| Install | `npm ci` |
| Build | `npm run build-site` |
| Output | `site-dist` |

### Drag-and-drop

1. `npm ci && npm run build-site`
2. Upload **`site-dist`**

## Coverage

All Figma `Studio/*` component sets are exported with Storybook docs (core, forms, navigation, data, AI, role play, sections), plus foundations for variables / type styles / elevation.

Skipped only where Figma has no set: Checkbox, Modal/Dialog, Tag/Chip.

## License

MIT
