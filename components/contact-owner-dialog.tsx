"use client"

import * as React from "react"
import { Mail, Phone, ShieldCheck } from "lucide-react"
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
import { Textarea } from "@/components/ui/textarea"
import type { Item } from "@/lib/data"

export function ContactOwnerDialog({
  item,
  onOpenChange,
}: {
  item: Item | null
  onOpenChange: (open: boolean) => void
}) {
  const [message, setMessage] = React.useState("")
  const isLost = item?.type === "lost"
  const role = isLost ? "owner" : "finder"

  function handleSend(event: React.FormEvent) {
    event.preventDefault()
    toast.success(`Message sent to ${item?.contactName}. They'll be in touch soon.`)
    setMessage("")
    onOpenChange(false)
  }

  return (
    <Dialog open={item !== null} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Contact {role}</DialogTitle>
          <DialogDescription>
            {item
              ? `Send a secure message to ${item.contactName} about "${item.title}".`
              : ""}
          </DialogDescription>
        </DialogHeader>

        <div className="flex items-start gap-2 rounded-lg bg-accent/60 p-3 text-sm text-accent-foreground">
          <ShieldCheck className="mt-0.5 size-4 shrink-0" />
          <p>
            For your safety, contact details stay private. Meet in a public
            place and never share sensitive information.
          </p>
        </div>

        <form onSubmit={handleSend}>
          <FieldGroup>
            <Field>
              <FieldLabel htmlFor="message">Your message</FieldLabel>
              <Textarea
                id="message"
                rows={4}
                required
                placeholder={
                  isLost
                    ? "Hi, I think I found your item. Can you describe it?"
                    : "Hi, I believe this is mine. Here are some identifying details..."
                }
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </Field>
          </FieldGroup>

          <DialogFooter className="mt-4 sm:justify-between" showCloseButton>
            <Button type="submit">
              <Mail data-icon="inline-start" />
              Send message
            </Button>
          </DialogFooter>
        </form>

        <div className="flex items-center justify-center gap-1.5 text-xs text-muted-foreground">
          <Phone className="size-3" />
          Verified community members can also request a call-back.
        </div>
      </DialogContent>
    </Dialog>
  )
}
