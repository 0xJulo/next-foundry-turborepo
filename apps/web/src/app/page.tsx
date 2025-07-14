import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8 bg-background">
      <main className="flex flex-col items-center gap-8 max-w-2xl w-full">
        <Card className="w-full">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl font-bold">
              Ethereum Next-Foundry Monorepo
            </CardTitle>
            <CardDescription className="text-lg">
              A modern template combining Next.js frontend with Foundry smart contract development
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div className="space-y-2">
                <h3 className="font-semibold text-primary">Frontend Stack</h3>
                <ul className="space-y-1 text-muted-foreground">
                  <li>• Next.js 15 with App Router</li>
                  <li>• Tailwind CSS v4 with OKLCH colors</li>
                  <li>• 43+ shadcn/ui components</li>
                  <li>• TypeScript & ESLint configured</li>
                </ul>
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold text-primary">Smart Contracts</h3>
                <ul className="space-y-1 text-muted-foreground">
                  <li>• Foundry development toolkit</li>
                  <li>• Example Counter contract</li>
                  <li>• Testing & deployment scripts</li>
                  <li>• Forge build system</li>
                </ul>
              </div>
            </div>
            
            <div className="pt-4 border-t border-border">
              <p className="text-center text-sm text-muted-foreground">
                Get started by editing{" "}
                <code className="bg-muted px-2 py-1 rounded text-xs font-mono">
                  apps/web/src/app/page.tsx
                </code>
              </p>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
