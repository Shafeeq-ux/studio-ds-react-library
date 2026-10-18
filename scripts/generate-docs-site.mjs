#!/usr/bin/env node
/**
 * Generate detailed VitePress pages for every Studio DS component +
 * refresh group indexes / sidebar from source (TSX + CSS modules).
 */
import fs from "node:fs";
import path from "node:path";

const ROOT = path.resolve(import.meta.dirname, "..");
const COMP_ROOT = path.join(ROOT, "src/components");
const WEB = path.join(ROOT, "website");
const FIGMA =
  "https://www.figma.com/design/8wXGfy006ncSwwx6BPrAAh/Studio-DS";
const GH =
  "https://github.com/Shafeeq-ux/studio-ds-react-library/blob/main";

/** @type {Record<string, { group: string; status: string; note?: string }>} */
const STATUS = {
  Alert: { group: "Core", status: "stable" },
  Avatar: { group: "Core", status: "stable" },
  Badge: { group: "Core", status: "stable" },
  Button: { group: "Core", status: "stable" },
  Divider: { group: "Core", status: "stable" },
  Dropdown: { group: "Core", status: "beta" },
  Icon: { group: "Core", status: "stable" },
  IconButton: { group: "Core", status: "stable" },
  Link: { group: "Core", status: "stable" },
  MenuItem: { group: "Core", status: "beta" },
  PageHeading: { group: "Core", status: "stable" },
  PanelHeader: { group: "Core", status: "stable" },
  Stack: { group: "Core", status: "stable" },
  Text: { group: "Core", status: "stable" },
  Tooltip: { group: "Core", status: "beta" },
  AudienceOption: { group: "Forms", status: "beta" },
  DifficultyGroup: { group: "Forms", status: "beta" },
  Input: { group: "Forms", status: "stable" },
  NumberInput: { group: "Forms", status: "stable" },
  Radio: { group: "Forms", status: "stable" },
  Search: { group: "Forms", status: "stable" },
  Select: { group: "Forms", status: "stable" },
  SelectMenu: { group: "Forms", status: "beta" },
  SelectOption: { group: "Forms", status: "beta" },
  Switch: { group: "Forms", status: "stable" },
  Textarea: { group: "Forms", status: "stable" },
  Toggle: { group: "Forms", status: "stable" },
  ApplicationSidebar: { group: "Navigation", status: "beta" },
  AuthoringStepper: { group: "Navigation", status: "beta" },
  Breadcrumbs: { group: "Navigation", status: "stable" },
  LibraryTabs: { group: "Navigation", status: "beta" },
  NavigationItem: { group: "Navigation", status: "beta" },
  Pagination: { group: "Navigation", status: "beta" },
  StepperItem: { group: "Navigation", status: "beta" },
  StickyAuthoringActions: { group: "Navigation", status: "draft" },
  Tabs: { group: "Navigation", status: "stable" },
  TopNavigation: { group: "Navigation", status: "beta" },
  LibraryCard: { group: "Data", status: "beta" },
  LibraryToolbar: { group: "Data", status: "beta" },
  MetricCard: { group: "Data", status: "beta" },
  Progress: { group: "Data", status: "stable" },
  RolePlayRow: { group: "Data", status: "beta" },
  RolePlayTable: { group: "Data", status: "beta" },
  Score: { group: "Data", status: "beta" },
  ScoreCard: { group: "Data", status: "beta" },
  SellerRow: { group: "Data", status: "beta" },
  SellerTable: { group: "Data", status: "beta" },
  TableColumnHeading: { group: "Data", status: "beta" },
  TableHeader: { group: "Data", status: "beta" },
  AICoach: { group: "AI", status: "draft", note: "Presentational shell" },
  EvaluationSuggestions: {
    group: "AI",
    status: "draft",
    note: "Presentational shell",
  },
  GeneratedScenario: {
    group: "AI",
    status: "draft",
    note: "Presentational shell",
  },
  GenerationProgress: { group: "AI", status: "draft" },
  GenerationStatus: { group: "AI", status: "draft" },
  PromptComposer: { group: "AI", status: "draft" },
  ReadinessCheck: { group: "AI", status: "draft" },
  ScenarioSkeleton: { group: "AI", status: "draft" },
  AudioPlayer: { group: "Role play", status: "draft" },
  BuyerIdentity: { group: "Role play", status: "draft" },
  ConversationBubble: { group: "Role play", status: "draft" },
  ConversationStage: { group: "Role play", status: "draft" },
  ConversationTimeline: { group: "Role play", status: "draft" },
  EvaluationCriterion: { group: "Role play", status: "draft" },
  ReviewSummary: { group: "Role play", status: "draft" },
  SessionBuyer: { group: "Role play", status: "draft" },
  SessionBuyerHeader: { group: "Role play", status: "draft" },
  SectionAIBehavior: {
    group: "Sections",
    status: "draft",
    note: "Presentational shell",
  },
  SectionAvailability: {
    group: "Sections",
    status: "draft",
    note: "Presentational shell",
  },
  SectionBuyerPersona: {
    group: "Sections",
    status: "draft",
    note: "Presentational shell",
  },
  SectionConversation: {
    group: "Sections",
    status: "draft",
    note: "Presentational shell",
  },
  SectionConversationLength: {
    group: "Sections",
    status: "draft",
    note: "Presentational shell",
  },
  SectionConversationSettings: {
    group: "Sections",
    status: "draft",
    note: "Presentational shell",
  },
  SectionEvaluationCriteria: {
    group: "Sections",
    status: "draft",
    note: "Presentational shell",
  },
  SectionGenerationContext: {
    group: "Sections",
    status: "draft",
    note: "Presentational shell",
  },
  SectionPublishingDetails: {
    group: "Sections",
    status: "draft",
    note: "Presentational shell",
  },
  SectionScenarioDetails: {
    group: "Sections",
    status: "draft",
    note: "Presentational shell",
  },
  SectionScoreDistribution: {
    group: "Sections",
    status: "draft",
    note: "Presentational shell",
  },
  SectionSellerPerformance: {
    group: "Sections",
    status: "draft",
    note: "Presentational shell",
  },
  SectionSession: {
    group: "Sections",
    status: "draft",
    note: "Presentational shell",
  },
  SectionSkillScoreBreakdown: {
    group: "Sections",
    status: "draft",
    note: "Presentational shell",
  },
  SectionTopSkillGaps: {
    group: "Sections",
    status: "draft",
    note: "Presentational shell",
  },
  SectionVoice: {
    group: "Sections",
    status: "draft",
    note: "Presentational shell",
  },
};

const GROUP_SLUG = {
  Core: "core",
  Forms: "forms",
  Navigation: "navigation",
  Data: "data",
  AI: "ai",
  "Role play": "role-play",
  Sections: "sections",
};

const GROUP_BLURB = {
  Core: "Interactive primitives and display utilities used across products.",
  Forms: "Inputs and selection controls for authoring and settings flows.",
  Navigation: "Wayfinding, steppers, sidebars, and pagination.",
  Data: "Tables, scores, metrics, and library chrome.",
  AI: "Presentational shells for generation and coaching — host apps supply state.",
  "Role play": "Conversation and session UI for role-play experiences.",
  Sections: "Section-level authoring layouts matching Figma section sets.",
};

function kebab(name) {
  return name
    .replace(/([a-z0-9])([A-Z])/g, "$1-$2")
    .replace(/\s+/g, "-")
    .toLowerCase();
}

function storyDocsId(group, name) {
  const g = group.toLowerCase().replace(/\s+/g, "-");
  return `components-${g}-${name.toLowerCase()}--docs`;
}

function extractProps(source, componentName) {
  const propsType = `${componentName}Props`;
  const typeRe = new RegExp(
    `export type ${propsType}\\s*=\\s*\\{([\\s\\S]*?)\\}(?:\\s*&|\\s*;)`,
  );
  const m = source.match(typeRe);
  if (!m) return [];

  const body = m[1];
  const props = [];
  const lineRe =
    /(?:\/\*\*([\s\S]*?)\*\/\s*)?([A-Za-z0-9_]+)\??\s*:\s*([^;]+);/g;
  let match;
  while ((match = lineRe.exec(body))) {
    const doc = (match[1] || "")
      .replace(/\s*\*\s?/g, " ")
      .replace(/\s+/g, " ")
      .trim();
    const name = match[2];
    const type = match[3].replace(/\s+/g, " ").trim();
    if (name === "children" || name.startsWith("Omit")) continue;
    props.push({ name, type, doc });
  }

  // defaults from destructuring
  const fnRe = new RegExp(
    `export function ${componentName}\\(\\{([\\s\\S]*?)\\}\\s*:`,
  );
  const fn = source.match(fnRe);
  const defaults = {};
  if (fn) {
    for (const part of fn[1].split(",")) {
      const dm = part.trim().match(/^([A-Za-z0-9_]+)\s*=\s*(.+)$/);
      if (dm) defaults[dm[1]] = dm[2].trim();
    }
  }
  for (const p of props) {
    if (defaults[p.name]) p.default = defaults[p.name];
  }
  return props;
}

function extractSummary(source, componentName) {
  const block = source.match(
    new RegExp(
      `\\/\\*\\*([\\s\\S]*?)\\*\\/\\s*export (?:function|const) ${componentName}`,
    ),
  );
  if (block) {
    return block[1]
      .replace(/\n\s*\*/g, " ")
      .replace(/\s+/g, " ")
      .replace(/^\s+|\s+$/g, "")
      .trim();
  }
  const figma = source.match(/Maps to Figma[^*.\n]+/);
  if (figma) return figma[0].trim() + ".";
  return `React + TypeScript implementation of Studio DS **${componentName}**.`;
}

function usageSnippet(name, props) {
  if (name === "Button") {
    return [
      "```tsx",
      'import { Button, Icon } from "studio-ds";',
      'import "studio-ds/tokens.css";',
      "",
      '<Button variant="primary" size="md">Continue</Button>',
      '<Button variant="secondary" icon={<Icon glyph="plus" />}>Create</Button>',
      "```",
    ].join("\n");
  }
  if (name === "Input") {
    return [
      "```tsx",
      'import { Input } from "studio-ds";',
      'import "studio-ds/tokens.css";',
      "",
      '<Input label="Role play name" placeholder="Enter a name" />',
      '<Input label="Email" errorMessage="Required" />',
      "```",
    ].join("\n");
  }
  if (name === "Text") {
    return [
      "```tsx",
      'import { Text } from "studio-ds";',
      "",
      '<Text variant="heading">Library</Text>',
      '<Text tone="secondary">Supporting copy</Text>',
      "```",
    ].join("\n");
  }
  if (name === "Stack") {
    return [
      "```tsx",
      'import { Stack, Text } from "studio-ds";',
      "",
      "<Stack gap={16}>",
      '  <Text variant="heading">Title</Text>',
      "  <Text>Body</Text>",
      "</Stack>",
      "```",
    ].join("\n");
  }
  const sampleProps = props
    .filter((p) => p.name !== "children" && p.name !== "className")
    .slice(0, 3)
    .map((p) => {
      if (p.default) return `${p.name}={${p.default}}`;
      if (/boolean/i.test(p.type)) return `${p.name}`;
      if (/string/i.test(p.type)) return `${p.name}="…"`;
      if (/number/i.test(p.type)) return `${p.name}={0}`;
      return `${p.name}={…}`;
    })
    .join(" ");
  return [
    "```tsx",
    `import { ${name} } from "studio-ds";`,
    'import "studio-ds/tokens.css";',
    "",
    `export function Example() {`,
    `  return (`,
    `    <div className="sds-root" data-sds-theme="light">`,
    `      <${name}${sampleProps ? ` ${sampleProps}` : ""} />`,
    `    </div>`,
    `  );`,
    `}`,
    "```",
  ].join("\n");
}

function writeComponentPage(meta) {
  const { name, group, status, note, props, summary, hasCss } = meta;
  const groupSlug = GROUP_SLUG[group];
  const pageSlug = kebab(name);
  const dir = path.join(WEB, "components", groupSlug);
  fs.mkdirSync(dir, { recursive: true });

  const storyUrl = `/storybook/?path=/docs/${storyDocsId(group, name)}`;
  const reactUrl = `${GH}/src/components/${name}/${name}.tsx`;
  const cssUrl = hasCss
    ? `${GH}/src/components/${name}/${name}.module.css`
    : "";

  const propsTable =
    props.length === 0
      ? "_Props are inherited from native HTML attributes or composed children. See TypeScript source for full typing._"
      : [
          "| Prop | Type | Default | Description |",
          "| --- | --- | --- | --- |",
          ...props.map((p) => {
            const def = p.default ? `\`${p.default}\`` : "—";
            const desc = (p.doc || "—").replace(/\|/g, "\\|");
            return `| \`${p.name}\` | \`${p.type.replace(/\|/g, "\\|")}\` | ${def} | ${desc} |`;
          }),
        ].join("\n");

  const md = `---
title: ${name}
description: Studio DS ${name} — React + TypeScript documentation
---

# ${name}

<StatusPill status="${status}" />${note ? ` · ${note}` : ""}

${summary}

This page documents **${name}** in full on the guidelines site. Use the links below for Figma, the interactive Storybook playground, and the React/TypeScript + CSS source.

${
    hasCss
      ? `<ComponentResources name="${name}" figma="${FIGMA}" storybook="${storyUrl}" react="${reactUrl}" css="${cssUrl}" />`
      : `<ComponentResources name="${name}" figma="${FIGMA}" storybook="${storyUrl}" react="${reactUrl}" />`
  }

## When to use

| Do | Don't |
| --- | --- |
| Use for product UI that matches the Studio DS Figma set | Hard-code colors or type that bypass \`--sds-*\` tokens |
| Prefer semantic props that map to Figma variants | Fork styles in the app unless extending via \`className\` |
| Check Light and Dark with \`data-sds-theme\` | Assume Light-only contrast |

## Usage

${usageSnippet(name, props)}

## API

${propsTable}

## Anatomy & styling

| Layer | Location |
| --- | --- |
| React + TypeScript | [\`${name}.tsx\`](${reactUrl}) |
| CSS Module | ${hasCss ? `[\`${name}.module.css\`](${cssUrl})` : "_No dedicated CSS module_"} |
| Tokens | \`src/tokens/\` (\`--sds-*\` CSS variables) |

Styles consume semantic tokens (for example \`var(--sds-color-action-primary)\`). Do not copy hex values from Light mode into product CSS.

## Related

- Group: [${group}](/components/${groupSlug})
- [Component status board](/components/status)
- [Storybook · ${name}](${storyUrl})
- [Figma · Studio DS](${FIGMA})
`;

  fs.writeFileSync(path.join(dir, `${pageSlug}.md`), md);
  return { group, groupSlug, name, pageSlug, status };
}

function writeGroupIndex(group, items) {
  const slug = GROUP_SLUG[group];
  const rows = items
    .map(
      (i) =>
        `| [${i.name}](/components/${slug}/${i.pageSlug}) | <StatusPill status="${i.status}" /> | [Docs](/components/${slug}/${i.pageSlug}) | [Storybook](/storybook/?path=/docs/${storyDocsId(group, i.name)}) |`,
    )
    .join("\n");

  const md = `---
title: ${group}
---

# ${group}

${GROUP_BLURB[group]}

Each component below has **detailed documentation on this site** (usage, API, anatomy). External links open Figma, Storybook, and source.

<ResourceLinks />

| Component | Status | Guidelines | Storybook |
| --- | --- | --- | --- |
${rows}

::: tip
Open a component page for props tables and code samples. Use Storybook when you need live Controls.
:::
`;
  fs.writeFileSync(path.join(WEB, "components", `${slug}.md`), md);
}

function writeStatusBoard(all) {
  const counts = { stable: 0, beta: 0, draft: 0 };
  for (const i of all) counts[i.status]++;
  const rows = all
    .map((i) => {
      const meta = STATUS[i.name];
      return `| [${i.name}](/components/${i.groupSlug}/${i.pageSlug}) | ${meta.group} | <StatusPill status="${i.status}" /> | [Page](/components/${i.groupSlug}/${i.pageSlug}) | [Storybook](/storybook/?path=/docs/${storyDocsId(meta.group, i.name)}) |`;
    })
    .join("\n");

  const md = `---
title: Component status
---

# Component status

Full inventory with links to **in-site documentation**, Storybook, and grouping. The guidelines site is the narrative source of truth; Storybook is the playground.

<ResourceLinks />

| Stable | Beta | Draft |
| --- | --- | --- |
| **${counts.stable}** | **${counts.beta}** | **${counts.draft}** |

| Component | Group | Status | Guidelines | Storybook |
| --- | --- | --- | --- | --- |
${rows}

## Not shipped (missing Figma sets)

| Item | Reason |
| --- | --- |
| Checkbox | No Studio/Checkbox set in Figma |
| Modal / Dialog | No Studio/Dialog set in Figma |
| Tag / Chip | Covered by Badge for status chips |
`;
  fs.writeFileSync(path.join(WEB, "components/status.md"), md);
}

function writeComponentsOverview(byGroup) {
  const cards = Object.keys(GROUP_SLUG)
    .map((g) => {
      const slug = GROUP_SLUG[g];
      const n = byGroup[g]?.length ?? 0;
      return `  <a class="sds-card" href="./${slug}"><h3>${g}</h3><p>${n} components — detailed docs on this site.</p></a>`;
    })
    .join("\n");

  const md = `---
title: Components overview
---

# Components

Studio DS documents every component **on this guidelines site** (usage, API, anatomy). Figma, Storybook, React+TypeScript, and CSS Module links appear on each page.

<ResourceLinks />

<div class="sds-card-grid">
  <a class="sds-card" href="./status"><h3>Status board</h3><p>Stable · beta · draft across the full inventory.</p></a>
${cards}
</div>

## Documentation shape

Each component page includes:

1. **Status** — stable / beta / draft  
2. **Resources** — Figma · Storybook · React+TS · CSS  
3. **Usage** — copy-paste TypeScript examples  
4. **API** — props table extracted from source  
5. **Anatomy** — links into the GitHub implementation  
`;
  fs.writeFileSync(path.join(WEB, "components/index.md"), md);
}

function writeSidebar(byGroup) {
  const groups = [];
  for (const [group, items] of Object.entries(byGroup)) {
    const slug = GROUP_SLUG[group];
    groups.push({
      text: group,
      collapsed: group !== "Core",
      items: [
        { text: `${group} overview`, link: `/components/${slug}` },
        ...items.map((i) => ({
          text: i.name,
          link: `/components/${slug}/${i.pageSlug}`,
        })),
      ],
    });
  }

  const sidebar = {
    "/components/": [
      {
        text: "Components",
        items: [
          { text: "Overview", link: "/components/" },
          { text: "Status board", link: "/components/status" },
        ],
      },
      ...groups,
    ],
  };

  fs.writeFileSync(
    path.join(WEB, ".vitepress/sidebar.gen.json"),
    JSON.stringify(sidebar, null, 2),
  );
}

function enhanceFoundations() {
  // Color page with full token table from colors.ts
  const colorsSrc = fs.readFileSync(
    path.join(ROOT, "src/tokens/colors.ts"),
    "utf8",
  );
  const light = [...colorsSrc.matchAll(/(\w+):\s*"#(.*?)"/g)].map(
    ([, k, hex]) => ({ k, hex: `#${hex}` }),
  );
  const cssVars = [...colorsSrc.matchAll(/(\w+):\s*"var\((--sds-[^)]+)\)"/g)].map(
    ([, k, v]) => ({ k, v }),
  );

  const colorRows = cssVars
    .map((c) => {
      const hex = light.find((l) => l.k === c.k)?.hex ?? "—";
      return `| \`${c.k}\` | \`${c.v}\` | ${hex} |`;
    })
    .join("\n");

  fs.writeFileSync(
    path.join(WEB, "foundations/color.md"),
    `---
title: Color
---

# Color

Semantic color creates clear interfaces across Light and Dark. Values below are documented **on this site**; Figma remains the design source of truth.

<ResourceLinks />

## Principles

- Prefer **semantic** roles over hex values in product code.
- Pair text/background tokens for contrast.
- Status colors communicate meaning (error, success, warning).
- AI surfaces use dedicated \`--sds-color-ai-*\` roles.

## Semantic tokens

| Token key | CSS variable | Light reference |
| --- | --- | --- |
${colorRows}

Dark mode resolves the same CSS variables under \`[data-sds-theme="dark"]\` in \`tokens.css\`.

## External references

- [Figma · Studio · Semantic](${FIGMA})
- [Storybook Foundations · Tokens](/storybook/?path=/docs/foundations-tokens--overview)
- [tokens.css on GitHub](${GH}/src/tokens/tokens.css)
- [colors.ts on GitHub](${GH}/src/tokens/colors.ts)
`,
  );

  // Typography detail
  fs.writeFileSync(
    path.join(WEB, "foundations/typography.md"),
    `---
title: Typography
---

# Typography

Typography supports hierarchy of information. Studio DS uses **Inter** (Regular 400 / Semi Bold 600). Full guidance lives on this page; Storybook shows live specimens.

<ResourceLinks />

## Text variants

| Variant | Figma style | Use |
| --- | --- | --- |
| \`display\` | Studio/Type/32/Semi Bold | Hero moments |
| \`pageTitle\` | 28/Semi Bold | Page titles |
| \`heading\` | 20/Semi Bold | Section headings |
| \`subheading\` | 18/Semi Bold | Subsections |
| \`sectionTitle\` | 16/Semi Bold | Card / panel titles |
| \`body\` | 14/Regular | Default copy |
| \`label\` | 13/Semi Bold | Labels |
| \`caption\` | 12/Regular | Meta / hints |

## Usage

\`\`\`tsx
import { Text } from "studio-ds";

<Text variant="heading">Library</Text>
<Text tone="secondary">Secondary supporting copy</Text>
\`\`\`

## External references

- [Figma · Typography](${FIGMA})
- [Storybook Foundations](/storybook/?path=/docs/foundations-tokens--overview)
- [Text component docs](/components/core/text)
- [Text.tsx](${GH}/src/components/Text/Text.tsx) · [typography.ts](${GH}/src/tokens/typography.ts)
`,
  );
}

// --- main ---
const byGroup = {};
const all = [];

for (const name of Object.keys(STATUS).sort()) {
  const meta = STATUS[name];
  const tsxPath = path.join(COMP_ROOT, name, `${name}.tsx`);
  if (!fs.existsSync(tsxPath)) {
    console.warn("missing", name);
    continue;
  }
  const source = fs.readFileSync(tsxPath, "utf8");
  const cssPath = path.join(COMP_ROOT, name, `${name}.module.css`);
  const hasCss = fs.existsSync(cssPath);
  const props = extractProps(source, name);
  const summary = extractSummary(source, name);
  const page = writeComponentPage({
    name,
    group: meta.group,
    status: meta.status,
    note: meta.note,
    props,
    summary,
    hasCss,
  });
  byGroup[meta.group] ??= [];
  byGroup[meta.group].push(page);
  all.push(page);
}

// preserve group order
const ORDER = [
  "Core",
  "Forms",
  "Navigation",
  "Data",
  "AI",
  "Role play",
  "Sections",
];
const ordered = {};
for (const g of ORDER) {
  if (byGroup[g]) {
    byGroup[g].sort((a, b) => a.name.localeCompare(b.name));
    ordered[g] = byGroup[g];
    writeGroupIndex(g, byGroup[g]);
  }
}

writeStatusBoard(all.sort((a, b) => a.name.localeCompare(b.name)));
writeComponentsOverview(ordered);
writeSidebar(ordered);
enhanceFoundations();

console.log(
  `Generated ${all.length} component docs across ${Object.keys(ordered).length} groups`,
);
