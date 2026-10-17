# Studio DS

React + TypeScript design system from the [Studio DS Figma file](https://www.figma.com/design/8wXGfy006ncSwwx6BPrAAh/Studio-DS).

Tokens: **Studio · Semantic** (Light/Dark), **Studio · Typography**, **Studio · Primitives**, **Studio/Elevation/***.

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
npm run storybook        # Storybook 10 · http://127.0.0.1:44041
npm run build            # library package → dist/
npm run build-storybook  # static docs site → storybook-static/
npm run lint
```

If the sidebar only shows a few components, pull the latest branch and reinstall:

```bash
git fetch origin
git checkout cursor/studio-ds-scaffold-160f
git pull origin cursor/studio-ds-scaffold-160f
rm -rf node_modules
npm install
npm run storybook
```

## Deploy Storybook (static site)

Static output folder: **`storybook-static/`** (gitignored — build on CI or locally).

### Build command

```bash
npm ci
npm run build-storybook
```

Produces `/storybook-static` with `index.html` — ready for any static host.

### GitHub Pages (this repo)

CI workflow: [`.github/workflows/deploy-storybook-pages.yml`](.github/workflows/deploy-storybook-pages.yml).

1. Push to `main` (or run **Actions → Deploy Storybook to GitHub Pages → Run workflow**).
2. In the repo: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
3. Site URL after the first green deploy:

   **https://shafeeq-ux.github.io/studio-ds-react-library/**

Local build with the same base path:

```bash
STORYBOOK_BASE_PATH=/studio-ds-react-library/ npm run build-storybook
```

### Netlify (connect repo)

`netlify.toml` is already in the repo:

| Setting | Value |
| ------- | ----- |
| Build command | `npm ci && npm run build-storybook` |
| Publish directory | `storybook-static` |
| Node | 22 |

Connect the Git repo in Netlify → Deploy. No extra UI settings needed if `netlify.toml` is present.

### Vercel (connect repo)

`vercel.json` is already in the repo:

| Setting | Value |
| ------- | ----- |
| Install command | `npm ci` |
| Build command | `npm run build-storybook` |
| Output directory | `storybook-static` |
| Framework preset | Other (null) |

Import the Git repo in Vercel → Deploy.

### Drag-and-drop (no Git connect)

1. Locally: `npm ci && npm run build-storybook`
2. Upload the **`storybook-static`** folder:
   - **Netlify** → Sites → Add new site → Deploy manually → drop `storybook-static`
   - **Vercel** → Add New → Project → upload the `storybook-static` directory (or zip of its contents)

Yes — drag-and-drop of `storybook-static` works as a finished static site (SPA rewrite not required for browsing Storybook’s hashed assets; Netlify/Vercel configs also include a fallback rewrite for deep links).

## Coverage

All Figma `Studio/*` component sets are exported with Storybook docs (core, forms, navigation, data, AI, role play, sections), plus foundations for variables / type styles / elevation.

Skipped only where Figma has no set: Checkbox, Modal/Dialog, Tag/Chip.

## License

MIT
