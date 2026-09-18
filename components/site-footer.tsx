import { MapPinned } from "lucide-react"

export function SiteFooter() {
  return (
    <footer className="border-t bg-background">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-4 py-8 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-2">
          <span className="flex size-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <MapPinned className="size-5" />
          </span>
          <div className="flex flex-col">
            <span className="font-bold">
              Find<span className="text-primary">Back</span>
            </span>
            <span className="text-xs text-muted-foreground">
              Community lost &amp; found · Johannesburg
            </span>
          </div>
        </div>
        <p className="text-sm text-muted-foreground">
          Built for the ASA 19 community showcase. &copy;{" "}
          {new Date().getFullYear()} FindBack.
        </p>
      </div>
    </footer>
  )
}
