import { FileText, HeartHandshake, SearchCheck } from "lucide-react"

const STEPS = [
  {
    icon: FileText,
    title: "Report it",
    body: "Post a lost or found item in seconds with a category, location and description.",
  },
  {
    icon: SearchCheck,
    title: "Search & match",
    body: "Browse and filter local listings across Johannesburg to find a match fast.",
  },
  {
    icon: HeartHandshake,
    title: "Reconnect safely",
    body: "Message the owner or finder privately and arrange a safe hand-over.",
  },
]

export function HowItWorks() {
  return (
    <section id="how" className="border-y bg-muted/40">
      <div className="mx-auto w-full max-w-6xl px-4 py-12">
        <div className="flex flex-col items-center gap-2 text-center">
          <h2 className="text-2xl font-bold tracking-tight">How FindBack works</h2>
          <p className="max-w-prose text-muted-foreground">
            Three simple steps to reunite Johannesburg with its lost belongings.
          </p>
        </div>

        <ol className="mt-8 grid gap-4 sm:grid-cols-3">
          {STEPS.map((step, index) => (
            <li
              key={step.title}
              className="flex flex-col gap-3 rounded-xl border bg-card p-6 shadow-sm"
            >
              <div className="flex items-center justify-between">
                <span className="flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <step.icon className="size-5" />
                </span>
                <span className="text-3xl font-bold text-muted-foreground/30">
                  {index + 1}
                </span>
              </div>
              <h3 className="text-lg font-semibold">{step.title}</h3>
              <p className="text-sm text-muted-foreground">{step.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
