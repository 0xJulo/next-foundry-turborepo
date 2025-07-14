# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Structure

This is a Turborepo monorepo with the following structure:

- **apps/contracts/**: Foundry-based smart contract development
- **apps/web/**: Next.js web application with shadcn/ui components
- **packages/eslint-config/**: Shared ESLint configurations
- **packages/typescript-config/**: Shared TypeScript configurations
- **packages/ui/**: Shared React component library

## Common Commands

### Package Manager
This project uses **Bun** as the package manager (specified in package.json).

### Build System
The project uses Turborepo for coordinating builds across the monorepo:

- `bun run build` - Build all apps and packages
- `bun run dev` - Start development servers for all apps
- `bun run lint` - Run linting across all workspaces
- `bun run check-types` - Run TypeScript type checking
- `bun run format` - Format code with Prettier

### Filtering Commands
Use Turbo filters to work with specific packages:
- `turbo build --filter=web` - Build only the web app
- `turbo dev --filter=web` - Start dev server for web app only
- `turbo lint --filter=contracts` - Lint only the contracts package

### Smart Contract Development
The contracts are in `apps/contracts/` and use Foundry:
- `forge build` - Compile contracts
- `forge test` - Run contract tests
- `forge script` - Run deployment scripts

## Architecture Notes

### Monorepo Configuration
- Uses Turborepo for task orchestration and caching
- Shared packages provide common configurations and components
- Each app maintains its own dependencies while sharing common tooling

### Smart Contract Integration
- Foundry is integrated as a separate app within the monorepo
- Contract artifacts are built to `out/` directory
- Deployment scripts use `broadcast/` for transaction logs

### Development Workflow
- All TypeScript applications share common tsconfig configurations
- ESLint configs are shared across Next.js apps
- UI components are shared through the `@repo/ui` package
- Development uses Turbo's task parallelization for optimal performance

### UI Components (shadcn/ui)
- **Web app includes 43+ shadcn/ui components** pre-installed and configured
- **Tailwind CSS v4** is configured for styling
- **Components location**: `apps/web/src/components/ui/`
- **Import path**: `@/components/ui/[component-name]`
- **Utility functions**: Available at `@/lib/utils`

#### Available Components
All core shadcn/ui components are installed:
- **Layout**: Accordion, Card, Collapsible, Drawer, Aspect Ratio, Resizable, Separator, Sheet
- **Navigation**: Breadcrumb, Navigation Menu, Menubar, Pagination
- **Form Controls**: Button, Input, Checkbox, Form, Radio Group, Select, Slider, Switch, Textarea, Toggle
- **Data Display**: Avatar, Badge, Chart, Table, Progress, Skeleton
- **Feedback**: Alert, Alert Dialog, Hover Card, Tooltip, Sonner (Toast)
- **Overlays**: Dialog, Popover, Context Menu, Dropdown Menu
- **Advanced**: Command, Scroll Area, Tabs

#### Usage Examples
```tsx
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function MyComponent() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Example Card</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex gap-2">
          <Button>Click me</Button>
          <Badge variant="secondary">New</Badge>
        </div>
      </CardContent>
    </Card>
  );
}
```

#### Adding New Components
To add additional shadcn/ui components (e.g., calendar):
```bash
cd apps/web
bunx shadcn@latest add [component-name]
```

**Note**: The calendar component was intentionally excluded from the template due to its complexity. Add it when needed.

## Key Dependencies

- **Turborepo**: Monorepo build system
- **Next.js**: Web applications framework
- **Foundry**: Smart contract development toolkit
- **TypeScript**: Type checking across all packages
- **ESLint**: Code linting
- **Prettier**: Code formatting
- **shadcn/ui**: UI component library with 44+ components
- **Tailwind CSS v4**: Utility-first CSS framework
- **Radix UI**: Headless UI primitives for accessibility