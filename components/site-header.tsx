"use client"

import { MapPinned, PlusCircle } from "lucide-react"

import { Button } from "@/components/ui/button"

export function SiteHeader({ onReportFound }: { onReportFound: () => void }) {
  return (
    <header className="sticky top-0 z-40 border-b bg-background/80 backdrop-blur supports-backdrop-filter:bg-background/60">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-4 py-3">
        <a href="#top" className="flex items-center gap-2">
          <span className="flex size-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <MapPinned className="size-5" />
          </span>
          <span className="text-lg font-bold tracking-tight">
            Find<span className="text-primary">Back</span>
          </span>
        </a>

        <nav className="hidden items-center gap-6 text-sm font-medium text-muted-foreground md:flex">
          <a href="#listings" className="transition-colors hover:text-foreground">
            Browse
          </a>
          <a href="#how" className="transition-colors hover:text-foreground">
            How it works
          </a>
        </nav>

        <Button size="sm" onClick={onReportFound}>
          <PlusCircle data-icon="inline-start" />
          Report an item
        </Button>
      </div>
    </header>
  )
}
