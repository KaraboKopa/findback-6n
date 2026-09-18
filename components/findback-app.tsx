"use client"

import * as React from "react"

import { ContactOwnerDialog } from "@/components/contact-owner-dialog"
import { Hero } from "@/components/hero"
import { HowItWorks } from "@/components/how-it-works"
import { ItemBrowser } from "@/components/item-browser"
import { ReportItemDialog } from "@/components/report-item-dialog"
import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"
import { LOCATIONS, SAMPLE_ITEMS, type Item, type ItemType } from "@/lib/data"

export function FindBackApp() {
  const [items, setItems] = React.useState<Item[]>(SAMPLE_ITEMS)
  const [reportType, setReportType] = React.useState<ItemType | null>(null)
  const [contactItem, setContactItem] = React.useState<Item | null>(null)

  const stats = React.useMemo(() => {
    const active = items.filter((i) => i.status === "active").length
    const returned = items.filter((i) => i.status === "returned").length
    return { active, returned, locations: LOCATIONS.length }
  }, [items])

  function handleAddItem(item: Item) {
    setItems((prev) => [item, ...prev])
  }

  return (
    <div id="top" className="flex min-h-dvh flex-col">
      <SiteHeader onReportFound={() => setReportType("found")} />

      <main className="flex-1">
        <Hero
          stats={stats}
          onReportLost={() => setReportType("lost")}
          onReportFound={() => setReportType("found")}
        />
        <HowItWorks />
        <ItemBrowser items={items} onContact={setContactItem} />
      </main>

      <SiteFooter />

      <ReportItemDialog
        open={reportType !== null}
        onOpenChange={(open) => setReportType(open ? reportType : null)}
        type={reportType ?? "lost"}
        onSubmit={handleAddItem}
      />

      <ContactOwnerDialog
        item={contactItem}
        onOpenChange={(open) => setContactItem(open ? contactItem : null)}
      />
    </div>
  )
}
