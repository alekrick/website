# Code Review Based on rules.mdc

## 🔴 Critical Issues

### 1. Component Size Violations
**Rule**: Components < 200 lines (unless justified)

**Violations**:
- `app/product-management/page.tsx`: **1,350 lines** ❌
- `app/sushitime/page.tsx`: **809 lines** ❌
- `app/homepage/page.tsx`: **776 lines** ❌

**Action Required**: Split these components into smaller, logical sub-components following the feature structure:
```
features/<page>/
  index.tsx
  components/
  helpers.ts
  constants.ts
  types.ts
```

### 2. Inline Styles Found
**Rule**: No inline styles & no logic inside JSX

**Violations**:
- `app/sushitime/page.tsx:75` - `style={{ transform: ..., willChange: ... }}`
- `app/sushitime/page.tsx:213` - `style={{ backgroundImage: "url(...)" }}`
- `app/homepage/page.tsx:187` - inline style
- `app/product-management/page.tsx:75` - inline style
- `app/graphic-design/page.tsx:114` - inline style

**Action Required**: Move all styles to Tailwind classes or CSS variables.

### 3. Component Signature Violations
**Rule**: Use arrow functions for all components & helpers. Component signature: `(props: Props): JSX.Element`

**Violations**: All components use `export default function` instead of arrow functions:
- `app/sushitime/page.tsx:24` - `export default function SushiTime()`
- `app/homepage/page.tsx:136` - `export default function Home()`
- `app/product-management/page.tsx:24` - `export default function ProductManagement()`
- `app/graphic-design/page.tsx:24` - `export default function GraphicDesign()`
- `app/about/page.tsx:24` - `export default function About()`
- `app/layout.tsx:17` - `export default function RootLayout()`

**Action Required**: Convert to arrow functions with explicit return types:
```typescript
const SushiTime = (): JSX.Element => { ... }
export default SushiTime;
```

### 4. Missing Explicit Return Types
**Rule**: Explicit argument + return types for all helpers

**Violations**:
- `constants/urls.ts:60` - `getEmailLink` missing return type

**Action Required**:
```typescript
export const getEmailLink = (email: string): string => `mailto:${email}`;
```

### 5. Constants Naming Convention
**Rule**: Constants → UPPER_SNAKE_CASE

**Violations**:
- `constants/urls.ts:6` - `URLs` should be `URLS` or `URL_CONSTANTS`

**Action Required**: Rename to follow UPPER_SNAKE_CASE convention.

### 6. Component Props Types
**Rule**: Component signature: `(props: Props): JSX.Element`

**Violations**:
- `app/sushitime/page.tsx:10` - Section component uses inline type definition

**Action Required**: Extract to separate Props type:
```typescript
type SectionProps = {
  children: React.ReactNode;
  className?: string;
};

const Section = ({ children, className = "" }: SectionProps): JSX.Element => { ... }
```

## 🟡 Medium Priority Issues

### 7. Folder Structure
**Rule**: Should follow `src/` structure with `features/` organization

**Current Structure**:
```
app/
  sushitime/page.tsx
  homepage/page.tsx
  ...
```

**Recommended Structure**:
```
src/
  app/
  features/
    sushitime/
      index.tsx
      components/
      helpers.ts
      constants.ts
      types.ts
  constants/
  ...
```

**Note**: This is a major refactor. Consider if migration is needed now or can be planned.

### 8. TypeScript Config
**Rule**: `noImplicitAny: true`, `strictNullChecks: true` explicitly set

**Current**: `strict: true` is set, which should cover these, but rules specify explicit setting.

**Action Required**: Add explicit flags to `tsconfig.json`:
```json
{
  "compilerOptions": {
    "strict": true,
    "noImplicitAny": true,
    "strictNullChecks": true,
    ...
  }
}
```

### 9. Image Format & Performance
**Rule**: Use .webp format. Above-the-fold images must have priority.

**Violations**:
- All images are `.png` format
- Hero images don't have `priority` prop
- No preload for LCP images

**Action Required**:
- Convert images to `.webp` format
- Add `priority` to hero/above-the-fold images:
```typescript
<Image
  src="/images/image31.webp"
  priority
  ...
/>
```

### 10. Missing Metadata
**Rule**: Metadata goes in layout (title, description, OG, Twitter). Add organization schema (JSON-LD).

**Current**: Basic metadata exists, but missing:
- Open Graph tags
- Twitter Card tags
- JSON-LD organization schema

**Action Required**: Add comprehensive metadata to `app/layout.tsx`.

### 11. Missing Test IDs
**Rule**: Add data-testid for important elements

**Violations**: No `data-testid` attributes found in components.

**Action Required**: Add test IDs to interactive and important elements:
```typescript
<button data-testid="mobile-menu-toggle">...</button>
```

## 🟢 Low Priority / Recommendations

### 12. All Components are Client Components
**Rule**: Avoid `use client` unless required. Use Server Components when possible.

**Current**: All pages use `"use client"` directive.

**Recommendation**: Consider which parts can be Server Components. Static content, metadata, and initial data fetching should be Server Components.

### 13. No Error Boundaries
**Rule**: Use error boundaries for runtime safety

**Current**: Only `app/error.tsx` exists (Next.js error boundary), but no custom error boundaries for component-level errors.

### 14. No Sitemap/Robots
**Rule**: Add sitemap.xml, robots.txt, llms.txt

**Action Required**: Create these files in `public/` or `app/` directory.

## ✅ What's Already Good

1. ✅ No `React.FC` usage
2. ✅ No `any` types found
3. ✅ No `console.log` statements
4. ✅ No `useMemo`, `useCallback`, or `memo` usage
5. ✅ Using Next.js `<Image>` component
6. ✅ Using Next.js `<Link>` component
7. ✅ TypeScript strict mode enabled
8. ✅ Tailwind CSS for styling (mostly)
9. ✅ No barrel imports
10. ✅ Constants file created and organized

## Summary

**Critical Issues**: 6
**Medium Priority**: 5
**Low Priority**: 3

**Priority Actions**:
1. Split large components (< 200 lines)
2. Remove inline styles
3. Convert to arrow functions with explicit types
4. Fix constants naming
5. Add explicit return types to helpers

