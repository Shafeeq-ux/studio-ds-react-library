export type ComponentStatus = "stable" | "beta" | "draft";

export type ComponentGroup =
  | "Core"
  | "Forms"
  | "Navigation"
  | "Data"
  | "AI"
  | "Role play"
  | "Sections";

export type ComponentStatusRow = {
  name: string;
  group: ComponentGroup;
  status: ComponentStatus;
  note?: string;
};

/** Inventory for the status board — Core leans stable; domain shells lean beta/draft. */
export const componentStatusRows: ComponentStatusRow[] = [
  // Core
  { name: "Alert", group: "Core", status: "stable" },
  { name: "Avatar", group: "Core", status: "stable" },
  { name: "Badge", group: "Core", status: "stable" },
  { name: "Button", group: "Core", status: "stable" },
  { name: "Divider", group: "Core", status: "stable" },
  { name: "Dropdown", group: "Core", status: "beta" },
  { name: "Icon", group: "Core", status: "stable" },
  { name: "IconButton", group: "Core", status: "stable" },
  { name: "Link", group: "Core", status: "stable" },
  { name: "MenuItem", group: "Core", status: "beta" },
  { name: "PageHeading", group: "Core", status: "stable" },
  { name: "PanelHeader", group: "Core", status: "stable" },
  { name: "Stack", group: "Core", status: "stable" },
  { name: "Text", group: "Core", status: "stable" },
  { name: "Tooltip", group: "Core", status: "beta" },
  // Forms
  { name: "AudienceOption", group: "Forms", status: "beta" },
  { name: "DifficultyGroup", group: "Forms", status: "beta" },
  { name: "Input", group: "Forms", status: "stable" },
  { name: "NumberInput", group: "Forms", status: "stable" },
  { name: "Radio", group: "Forms", status: "stable" },
  { name: "Search", group: "Forms", status: "stable" },
  { name: "Select", group: "Forms", status: "stable" },
  { name: "SelectMenu", group: "Forms", status: "beta" },
  { name: "SelectOption", group: "Forms", status: "beta" },
  { name: "Switch", group: "Forms", status: "stable" },
  { name: "Textarea", group: "Forms", status: "stable" },
  { name: "Toggle", group: "Forms", status: "stable" },
  // Navigation
  { name: "ApplicationSidebar", group: "Navigation", status: "beta" },
  { name: "AuthoringStepper", group: "Navigation", status: "beta" },
  { name: "Breadcrumbs", group: "Navigation", status: "stable" },
  { name: "LibraryTabs", group: "Navigation", status: "beta" },
  { name: "NavigationItem", group: "Navigation", status: "beta" },
  { name: "Pagination", group: "Navigation", status: "beta" },
  { name: "StepperItem", group: "Navigation", status: "beta" },
  { name: "StickyAuthoringActions", group: "Navigation", status: "draft" },
  { name: "Tabs", group: "Navigation", status: "stable" },
  { name: "TopNavigation", group: "Navigation", status: "beta" },
  // Data
  { name: "LibraryCard", group: "Data", status: "beta" },
  { name: "LibraryToolbar", group: "Data", status: "beta" },
  { name: "MetricCard", group: "Data", status: "beta" },
  { name: "Progress", group: "Data", status: "stable" },
  { name: "RolePlayRow", group: "Data", status: "beta" },
  { name: "RolePlayTable", group: "Data", status: "beta" },
  { name: "Score", group: "Data", status: "beta" },
  { name: "ScoreCard", group: "Data", status: "beta" },
  { name: "SellerRow", group: "Data", status: "beta" },
  { name: "SellerTable", group: "Data", status: "beta" },
  { name: "TableColumnHeading", group: "Data", status: "beta" },
  { name: "TableHeader", group: "Data", status: "beta" },
  // AI
  { name: "AICoach", group: "AI", status: "draft", note: "Presentational shell" },
  { name: "EvaluationSuggestions", group: "AI", status: "draft", note: "Presentational shell" },
  { name: "GeneratedScenario", group: "AI", status: "draft", note: "Presentational shell" },
  { name: "GenerationProgress", group: "AI", status: "draft" },
  { name: "GenerationStatus", group: "AI", status: "draft" },
  { name: "PromptComposer", group: "AI", status: "draft" },
  { name: "ReadinessCheck", group: "AI", status: "draft" },
  { name: "ScenarioSkeleton", group: "AI", status: "draft" },
  // Role play
  { name: "AudioPlayer", group: "Role play", status: "draft" },
  { name: "BuyerIdentity", group: "Role play", status: "draft" },
  { name: "ConversationBubble", group: "Role play", status: "draft" },
  { name: "ConversationStage", group: "Role play", status: "draft" },
  { name: "ConversationTimeline", group: "Role play", status: "draft" },
  { name: "EvaluationCriterion", group: "Role play", status: "draft" },
  { name: "ReviewSummary", group: "Role play", status: "draft" },
  { name: "SessionBuyer", group: "Role play", status: "draft" },
  { name: "SessionBuyerHeader", group: "Role play", status: "draft" },
  // Sections
  { name: "SectionAIBehavior", group: "Sections", status: "draft", note: "Presentational shell" },
  { name: "SectionAvailability", group: "Sections", status: "draft", note: "Presentational shell" },
  { name: "SectionBuyerPersona", group: "Sections", status: "draft", note: "Presentational shell" },
  { name: "SectionConversation", group: "Sections", status: "draft", note: "Presentational shell" },
  { name: "SectionConversationLength", group: "Sections", status: "draft", note: "Presentational shell" },
  { name: "SectionConversationSettings", group: "Sections", status: "draft", note: "Presentational shell" },
  { name: "SectionEvaluationCriteria", group: "Sections", status: "draft", note: "Presentational shell" },
  { name: "SectionGenerationContext", group: "Sections", status: "draft", note: "Presentational shell" },
  { name: "SectionPublishingDetails", group: "Sections", status: "draft", note: "Presentational shell" },
  { name: "SectionScenarioDetails", group: "Sections", status: "draft", note: "Presentational shell" },
  { name: "SectionScoreDistribution", group: "Sections", status: "draft", note: "Presentational shell" },
  { name: "SectionSellerPerformance", group: "Sections", status: "draft", note: "Presentational shell" },
  { name: "SectionSession", group: "Sections", status: "draft", note: "Presentational shell" },
  { name: "SectionSkillScoreBreakdown", group: "Sections", status: "draft", note: "Presentational shell" },
  { name: "SectionTopSkillGaps", group: "Sections", status: "draft", note: "Presentational shell" },
  { name: "SectionVoice", group: "Sections", status: "draft", note: "Presentational shell" },
];

export const missingFromFigma = [
  { name: "Checkbox", reason: "No Studio/Checkbox set in Figma" },
  { name: "Modal / Dialog", reason: "No Studio/Dialog set in Figma" },
  { name: "Tag / Chip", reason: "Covered by Badge for status chips" },
];

export function statusCounts(rows: ComponentStatusRow[]) {
  return rows.reduce(
    (acc, row) => {
      acc[row.status] += 1;
      return acc;
    },
    { stable: 0, beta: 0, draft: 0 } as Record<ComponentStatus, number>,
  );
}
