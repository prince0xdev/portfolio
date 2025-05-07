import React from 'react'
import { BlurFade } from './magicui/blur-fade'
import { Separator } from './ui/separator'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
 
function ContactSection() {
  return (
    <section className=''>
      <BlurFade>
        <h1 className='text-xl pb-4'>Get In Touch</h1>
      </BlurFade>
      <Separator className='h-2 mb-4'/>
      <Sheet>
        <SheetTrigger asChild>
            <Button variant="outline">Open</Button>
        </SheetTrigger>
        <SheetContent  className="max-h-screen overflow-y-auto px-6">
            <SheetHeader>
            <SheetTitle>Get In Touch</SheetTitle>
            <SheetDescription>
                Fill in the form below to send me a message.
            </SheetDescription>
            </SheetHeader>
            <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="name" className="text-right">
                        Your Name
                    </Label>
                    <Input id="name"  className="col-span-3" />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="subject" className="text-right">
                        Subject
                    </Label>
                    <Input id="subject" value="Subject" className="col-span-3" />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="email" className="text-right">
                        Your Email
                    </Label>
                    <Input id="email" value="princeekpinse@gmail.com" className="col-span-3" />
                </div>
                <div>
                    <Label htmlFor="message" className="text-right">
                        Your message
                    </Label>
                    <Textarea id="message" value="Type your message here" className="col-span-3" />
                </div>
            </div>
            <SheetFooter>
            <SheetClose asChild>
                <Button type="submit">Save changes</Button>
            </SheetClose>
            </SheetFooter>
        </SheetContent>
      </Sheet>
    </section>
  )
}

export default ContactSection
