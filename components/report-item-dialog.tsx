"use client"

import * as React from "react"
import { toast } from "sonner"

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import {
  CATEGORIES,
  LOCATIONS,
  type Category,
  type Item,
  type ItemType,
} from "@/lib/data"

export function ReportItemDialog({
  open,
  onOpenChange,
  type,
  onSubmit,
}: {
  open: boolean
  onOpenChange: (open: boolean) => void
  type: ItemType
  onSubmit: (item: Item) => void
}) {
  const [title, setTitle] = React.useState("")
  const [category, setCategory] = React.useState<Category | "">("")
  const [location, setLocation] = React.useState("")
  const [date, setDate] = React.useState("")
  const [description, setDescription] = React.useState("")
  const [contactName, setContactName] = React.useState("")

  const isLost = type === "lost"

  React.useEffect(() => {
    if (open) {
      setTitle("")
      setCategory("")
      setLocation("")
      setDate(new Date().toISOString().slice(0, 10))
      setDescription("")
      setContactName("")
    }
  }, [open])

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault()
    if (!title || !category || !location || !date || !contactName) {
      toast.error("Please complete all required fields.")
      return
    }
    onSubmit({
      id: crypto.randomUUID(),
      type,
      status: "active",
      title: title.trim(),
      category: category as Category,
      location,
      date,
      description: description.trim() || "No additional details provided.",
      contactName: contactName.trim(),
    })
    toast.success(
      isLost
        ? "Lost item reported. We'll notify you of matches."
        : "Thank you! Your found item is now listed.",
    )
    onOpenChange(false)
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-h-[calc(100dvh-2rem)] overflow-y-auto sm:max-w-md">
        <DialogHeader>
          <DialogTitle>
            {isLost ? "Report a lost item" : "Report a found item"}
          </DialogTitle>
          <DialogDescription>
            {isLost
              ? "Share the details so the Johannesburg community can help you find it."
              : "Help reunite someone with their belongings. Keep the item safe."}
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit}>
          <FieldGroup>
            <Field>
              <FieldLabel htmlFor="title">Item title</FieldLabel>
              <Input
                id="title"
                placeholder="e.g. Black iPhone 14 Pro"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </Field>

            <Field>
              <FieldLabel htmlFor="category">Category</FieldLabel>
              <Select
                value={category}
                onValueChange={(v) => setCategory(v as Category)}
              >
                <SelectTrigger id="category" className="w-full">
                  <SelectValue placeholder="Select a category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    {CATEGORIES.map((c) => (
                      <SelectItem key={c} value={c}>
                        {c}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
            </Field>

            <Field>
              <FieldLabel htmlFor="location">Location</FieldLabel>
              <Select value={location} onValueChange={setLocation}>
                <SelectTrigger id="location" className="w-full">
                  <SelectValue placeholder="Where in Johannesburg?" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    {LOCATIONS.map((l) => (
                      <SelectItem key={l} value={l}>
                        {l}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
            </Field>

            <Field>
              <FieldLabel htmlFor="date">
                {isLost ? "Date lost" : "Date found"}
              </FieldLabel>
              <Input
                id="date"
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </Field>

            <Field>
              <FieldLabel htmlFor="description">Description</FieldLabel>
              <Textarea
                id="description"
                rows={3}
                placeholder="Colour, brand, distinctive marks, and any other helpful details."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </Field>

            <Field>
              <FieldLabel htmlFor="contactName">Your name</FieldLabel>
              <Input
                id="contactName"
                placeholder="e.g. Thabo Mokoena"
                value={contactName}
                onChange={(e) => setContactName(e.target.value)}
              />
            </Field>
          </FieldGroup>

          <DialogFooter className="mt-4" showCloseButton>
            <Button type="submit">
              {isLost ? "Report lost item" : "Report found item"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
