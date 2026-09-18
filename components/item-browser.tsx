"use client"

import * as React from "react"
import { PackageSearch, Search, SlidersHorizontal, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import { ItemCard } from "@/components/item-card"
import {
  CATEGORIES,
  LOCATIONS,
  type Item,
  type ItemType,
} from "@/lib/data"

type TypeFilter = ItemType | "all"

export function ItemBrowser({
  items,
  onContact,
}: {
  items: Item[]
  onContact: (item: Item) => void
}) {
  const [query, setQuery] = React.useState("")
  const [type, setType] = React.useState<TypeFilter>("all")
  const [category, setCategory] = React.useState<string>("all")
  const [location, setLocation] = React.useState<string>("all")

  const filtered = React.useMemo(() => {
    const q = query.trim().toLowerCase()
    return items.filter((item) => {
      if (type !== "all" && item.type !== type) return false
      if (category !== "all" && item.category !== category) return false
      if (location !== "all" && item.location !== location) return false
      if (q) {
        const haystack =
          `${item.title} ${item.description} ${item.category} ${item.location}`.toLowerCase()
        if (!haystack.includes(q)) return false
      }
      return true
    })
  }, [items, query, type, category, location])

  const hasActiveFilters =
    query !== "" || type !== "all" || category !== "all" || location !== "all"

  function clearFilters() {
    setQuery("")
    setType("all")
    setCategory("all")
    setLocation("all")
  }

  return (
    <section id="listings" className="mx-auto w-full max-w-6xl px-4 py-10">
      <div className="flex flex-col gap-2">
        <h2 className="text-2xl font-bold tracking-tight">Community listings</h2>
        <p className="text-muted-foreground">
          Browse lost and found items reported across Johannesburg.
        </p>
      </div>

      <div className="mt-6 flex flex-col gap-4 rounded-xl border bg-card p-4 shadow-sm">
        <div className="relative">
          <Search className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search by keyword, e.g. 'iPhone', 'keys', 'Sandton'..."
            className="h-11 pl-9"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            aria-label="Search listings"
          />
        </div>

        <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
          <ToggleGroup
            value={type}
            onValueChange={(value) => setType((value as TypeFilter) || "all")}
            variant="outline"
            className="w-full sm:w-auto"
          >
            <ToggleGroupItem value="all" className="flex-1 sm:flex-none">
              All
            </ToggleGroupItem>
            <ToggleGroupItem value="lost" className="flex-1 sm:flex-none">
              Lost
            </ToggleGroupItem>
            <ToggleGroupItem value="found" className="flex-1 sm:flex-none">
              Found
            </ToggleGroupItem>
          </ToggleGroup>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <SlidersHorizontal className="size-4" />
              <span className="hidden sm:inline">Filters</span>
            </div>

            <Select value={category} onValueChange={setCategory}>
              <SelectTrigger className="h-9 w-full sm:w-44" aria-label="Filter by category">
                <SelectValue>
                  {(value) => (value === "all" ? "All categories" : value)}
                </SelectValue>
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="all">All categories</SelectItem>
                  {CATEGORIES.map((c) => (
                    <SelectItem key={c} value={c}>
                      {c}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>

            <Select value={location} onValueChange={setLocation}>
              <SelectTrigger className="h-9 w-full sm:w-48" aria-label="Filter by location">
                <SelectValue>
                  {(value) => (value === "all" ? "All locations" : value)}
                </SelectValue>
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="all">All locations</SelectItem>
                  {LOCATIONS.map((l) => (
                    <SelectItem key={l} value={l}>
                      {l}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>

            {hasActiveFilters && (
              <Button
                variant="ghost"
                size="sm"
                onClick={clearFilters}
                className="text-muted-foreground"
              >
                <X data-icon="inline-start" />
                Clear
              </Button>
            )}
          </div>
        </div>
      </div>

      <p className="mt-4 text-sm text-muted-foreground" aria-live="polite">
        Showing <span className="font-semibold text-foreground">{filtered.length}</span>{" "}
        {filtered.length === 1 ? "item" : "items"}
      </p>

      {filtered.length > 0 ? (
        <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((item) => (
            <ItemCard key={item.id} item={item} onContact={onContact} />
          ))}
        </div>
      ) : (
        <div className="mt-4 flex flex-col items-center gap-3 rounded-xl border border-dashed py-16 text-center">
          <span className="flex size-12 items-center justify-center rounded-full bg-muted text-muted-foreground">
            <PackageSearch className="size-6" />
          </span>
          <p className="font-medium">No items match your search</p>
          <p className="max-w-sm text-sm text-muted-foreground">
            Try adjusting your filters or search terms. New items are reported
            every day.
          </p>
          <Button variant="outline" size="sm" onClick={clearFilters}>
            Clear all filters
          </Button>
        </div>
      )}
    </section>
  )
}
