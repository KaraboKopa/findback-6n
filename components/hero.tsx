"use client"

import Image from "next/image"
import { MapPin, PlusCircle, Search, ShieldCheck } from "lucide-react"

import { Button } from "@/components/ui/button"

export function Hero({
  stats,
  onReportLost,
  onReportFound,
}: {
  stats: { active: number; returned: number; locations: number }
  onReportLost: () => void
  onReportFound: () => void
}) {
  return (
    <section className="relative overflow-hidden border-b bg-gradient-to-b from-primary/10 via-background to-background">
      <div className="mx-auto grid w-full max-w-6xl gap-8 px-4 py-10 sm:py-14 lg:grid-cols-2 lg:items-center lg:py-20">
        <div className="flex flex-col gap-5">
          <span className="inline-flex w-fit items-center gap-1.5 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
            <MapPin className="size-3.5" />
            Proudly serving Johannesburg communities
          </span>

          <h1 className="text-pretty text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Lost something in Joburg?{" "}
            <span className="text-primary">FindBack</span> reunites you with
            what matters.
          </h1>

          <p className="max-w-prose text-pretty text-base text-muted-foreground sm:text-lg">
            A trusted community lost-and-found for Johannesburg. Report items,
            search local listings, and safely connect with neighbours from
            Sandton to Soweto.
          </p>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Button size="lg" className="h-11 px-5" onClick={onReportLost}>
              <Search data-icon="inline-start" />
              Report Lost Item
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="h-11 border-success/40 px-5 text-success hover:bg-success/10 hover:text-success"
              onClick={onReportFound}
            >
              <PlusCircle data-icon="inline-start" />
              Report Found Item
            </Button>
          </div>

          <dl className="mt-2 grid grid-cols-3 gap-3 border-t pt-5">
            <div className="flex flex-col">
              <dt className="text-xs text-muted-foreground">Active listings</dt>
              <dd className="text-2xl font-bold text-primary">{stats.active}</dd>
            </div>
            <div className="flex flex-col">
              <dt className="text-xs text-muted-foreground">Items returned</dt>
              <dd className="text-2xl font-bold text-success">
                {stats.returned}
              </dd>
            </div>
            <div className="flex flex-col">
              <dt className="text-xs text-muted-foreground">Suburbs covered</dt>
              <dd className="text-2xl font-bold">{stats.locations}</dd>
            </div>
          </dl>
        </div>

        <div className="relative">
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border shadow-lg">
            <Image
              src="/images/joburg-hero.png"
              alt="Illustration of the Johannesburg skyline representing the FindBack community"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 560px"
              className="object-cover"
            />
          </div>
          <div className="absolute -bottom-4 left-4 flex items-center gap-2 rounded-xl border bg-card px-4 py-3 shadow-md">
            <span className="flex size-9 items-center justify-center rounded-full bg-success/15 text-success">
              <ShieldCheck className="size-5" />
            </span>
            <div className="flex flex-col">
              <span className="text-sm font-semibold leading-tight">
                Safe & community-verified
              </span>
              <span className="text-xs text-muted-foreground">
                Private, secure contact
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
