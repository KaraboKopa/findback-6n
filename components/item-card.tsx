"use client"

import { CalendarDays, MapPin, Tag, CheckCircle2, MessageCircle } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import type { Item } from "@/lib/data"

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-ZA", {
    day: "numeric",
    month: "short",
    year: "numeric",
  })
}

export function ItemCard({
  item,
  onContact,
}: {
  item: Item
  onContact: (item: Item) => void
}) {
  const isReturned = item.status === "returned"

  return (
    <Card className="flex h-full flex-col overflow-hidden transition-shadow hover:shadow-md">
      <CardHeader>
        <div className="flex items-center justify-between gap-2">
          <div className="flex flex-wrap items-center gap-1.5">
            {item.type === "lost" ? (
              <Badge className="bg-primary text-primary-foreground">Lost</Badge>
            ) : (
              <Badge className="bg-success text-success-foreground">Found</Badge>
            )}
            {isReturned && (
              <Badge className="gap-1 bg-accent text-accent-foreground">
                <CheckCircle2 className="size-3.5" />
                Returned
              </Badge>
            )}
          </div>
          <Badge variant="outline" className="gap-1 text-muted-foreground">
            <Tag className="size-3" />
            {item.category}
          </Badge>
        </div>
        <CardTitle className="text-pretty text-base leading-snug">
          {item.title}
        </CardTitle>
      </CardHeader>

      <CardContent className="flex flex-1 flex-col gap-3">
        <p className="line-clamp-3 text-sm text-muted-foreground">
          {item.description}
        </p>
        <div className="mt-auto flex flex-col gap-1.5 text-sm">
          <span className="flex items-center gap-2 text-foreground/80">
            <MapPin className="size-4 shrink-0 text-primary" />
            {item.location}
          </span>
          <span className="flex items-center gap-2 text-foreground/80">
            <CalendarDays className="size-4 shrink-0 text-primary" />
            {formatDate(item.date)}
          </span>
        </div>
      </CardContent>

      <CardFooter>
        <Button
          variant={isReturned ? "outline" : "default"}
          className="w-full"
          disabled={isReturned}
          onClick={() => onContact(item)}
        >
          {isReturned ? (
            <>
              <CheckCircle2 data-icon="inline-start" />
              Reunited with owner
            </>
          ) : (
            <>
              <MessageCircle data-icon="inline-start" />
              Contact {item.type === "lost" ? "owner" : "finder"}
            </>
          )}
        </Button>
      </CardFooter>
    </Card>
  )
}
