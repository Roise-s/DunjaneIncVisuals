import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

type DialogBtnProps = {
  text: string;
};

export function DialogBtn({ text }: DialogBtnProps) {
  return (
    <Dialog>
      <form>
        <DialogTrigger asChild className="mt-4 h-[50px] w-[300px] block rounded-sm border border-indigo-600 bg-indigo-600 px-12 py-3 text-center text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:ring-3 focus:outline-hidden sm:mt-6">
          <Button >Book a Session</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Book a {text}</DialogTitle>
            <DialogDescription>
              Fill the form below to book a {text} session. 
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4">
            <div className="grid gap-3">
              <Label htmlFor="name-1">Name</Label>
              <Input id="name-1" name="Name" placeholder="Your name" />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="Email">Email</Label>
              <Input id="username-1" name="Email" placeholder="yourname@gmail.com" />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="Booking">Booking</Label>
              <Input id="username-1" name="username" defaultValue={`${text}`} placeholder="B" />
            </div>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button type="submit">Send</Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  )
}
