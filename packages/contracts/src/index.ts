export type PricingType =
  | "free"
  | "freemium"
  | "paid"
  | "contact";

export type PlatformType =
  | "web"
  | "ios"
  | "android"
  | "desktop"
  | "chrome-extension"
  | "api";

export type SortMode =
  | "hot"
  | "latest"
  | "rating"
  | "name";

export type ViewMode = "card" | "list";

export interface AccessFlags {
  mainlandAccessible: boolean;
  requiresLogin: boolean;
  supportsChinese: boolean;
  supportsFreeTrial: boolean;
}

export interface FacetOption {
  label: string;
  value: string;
  count: number;
}

export interface Pagination {
  page: number;
  pageSize: number;
  total: number;
  totalPages: number;
}

export interface ToolTag {
  slug: string;
  name: string;
}

export interface ToolSummary {
  slug: string;
  name: string;
  tagline: string;
  logoPath: string;
  category: string;
  categorySlug: string;
  tags: ToolTag[];
  pricingLabel: string;
  pricingType: PricingType;
  platforms: PlatformType[];
  rating: number;
  reviewCount: number;
  hotScore?: number;
  recommendReason?: string;
}

export interface ReviewPreview {
  id: string;
  authorName: string;
  authorAvatar?: string;
  rating: number;
  title: string;
  content: string;
  createdAt: string;
}

export interface ToolDetail extends ToolSummary {
  description: string;
  officialUrl: string;
  developer?: string;
  region?: string;
  languages: string[];
  useCases: string[];
  pros: string[];
  cons: string[];
  accessFlags: AccessFlags;
  reviewPreview: ReviewPreview[];
  relatedTools: ToolSummary[];
  updatedAt?: string;
}

export interface ScenarioSummary {
  slug: string;
  title: string;
  summary: string;
  queryHint?: string;
  categoryHint?: string;
}

export interface RankingItem {
  rank: number;
  reason: string;
  tool: ToolSummary;
}

export interface RankingSection {
  slug: string;
  title: string;
  summary: string;
  items: RankingItem[];
}

export interface ToolsListRequest {
  keyword?: string;
  category?: string;
  tags?: string[];
  pricing?: string[];
  platforms?: string[];
  language?: string[];
  sort?: SortMode;
  view?: ViewMode;
  page?: number;
  pageSize?: number;
}

export interface ToolsListResponse {
  results: ToolSummary[];
  facets: {
    categories: FacetOption[];
    tags: FacetOption[];
    pricing: FacetOption[];
    platforms: FacetOption[];
    languages: FacetOption[];
  };
  pagination: Pagination;
}

export interface AiIntent {
  summary: string;
  category?: string;
  pricing?: string[];
  platforms?: string[];
  language?: string[];
}

export interface AiPanel {
  title: string;
  summary: string;
  suggestions: string[];
}

export interface AiSearchRequest {
  query: string;
  page?: number;
  pageSize?: number;
}

export interface AiSearchResponse {
  intent: AiIntent;
  aiPanel: AiPanel;
  results: ToolSummary[];
  facets: ToolsListResponse["facets"];
  pagination: Pagination;
}

export interface ReviewRecord {
  id: string;
  toolSlug: string;
  authorName: string;
  authorAvatar?: string;
  rating: number;
  title: string;
  content: string;
  createdAt: string;
}

export interface ScoreRecord {
  toolSlug: string;
  overallScore: number;
  hotScore: number;
  aiScore: number;
  editorialScore: number;
}

export interface CreateReviewRequest {
  rating: number;
  title: string;
  content: string;
}

export interface CreateRatingRequest {
  rating: number;
}

