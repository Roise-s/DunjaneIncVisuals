// DialogBtn.tsx
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { DatePr } from "./Date";
import SuccessAlert3 from "./FormSent";
import "./styles/styles.css"

type DialogBtnProps = {
  text: string;
};

type Web3FormsResponse = {
  success: boolean;
  [key: string]: any;
};

export function DialogBtn({ text }: DialogBtnProps) {
  const apiKey = import.meta.env.VITE_ACCESS_KEY_HERE;
  const [selectedDate, setSelectedDate] = useState<Date | undefined>();
  const [isLoading, setIsLoading] = useState(false)
  const [EmailSent, setEmailSent] = useState(false)

 const countUpToThreeSeconds = () => {
     let seconds = 0;
    const timer = setInterval(() => {
      seconds++;
      console.log(seconds); // shows the count in the console

      if (seconds === 3) {
        setEmailSent(false)
        clearInterval(timer); // stop the timer
      }
    }, 1000); 
 }

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>): Promise<void> => {
    event.preventDefault();
    setIsLoading(true)

    const formData = new FormData(event.currentTarget);
    formData.append("access_key", apiKey);

    if (selectedDate) {
      formData.append("Date (Please know that if the date is 29 you should add 1 meaning that the date is 30)", selectedDate.toISOString());
    }

    const object = Object.fromEntries(formData.entries());
    const json = JSON.stringify(object);

    const res: Web3FormsResponse = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
      setIsLoading(false)
      setEmailSent(true)
    } else {
      console.log("Error", res);
    }
  };

  return (
    <Dialog>

      <div>
        <DialogTrigger asChild className="bookBtn mt-4 h-[50px] block rounded-sm border border-indigo-600 bg-indigo-600 px-12 py-3 text-center text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:ring-3 focus:outline-hidden sm:mt-6">
          <Button>Book a Session</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Book a {text}</DialogTitle>
            <DialogDescription>
              Fill the form below to book a {text} session. 
            </DialogDescription>
          </DialogHeader>
          <div className={EmailSent ? "" : "hidden"}>
            <SuccessAlert3 />
          </div>
          <form onSubmit={onSubmit}>
            <div className="grid gap-4">
              <div className="grid gap-3">
                <Label htmlFor="name-1">Name</Label>
                <Input id="name-1" name="Name" placeholder="Your name" />
              </div>
              <div className="grid gap-3">
                <Label htmlFor="Email">Email</Label>
                <Input id="email-1" name="Email" placeholder="yourname@gmail.com" />
              </div>
              <div className="grid gap-3">
                <Label htmlFor="Phone">Contacts</Label>
                <Input id="phone-1" name="Phone Number" placeholder="+27 71 234 5678" />
              </div>
              <div className="grid gap-3">
                <Label htmlFor="Booking">Booking</Label>
                <Input id="booking-1" name="Booking" defaultValue={`${text}`} />
              </div>
              <div className="grid gap-3">
                <Label htmlFor="Date">Which day will the Shoot be</Label>
                <DatePr onDateChange={setSelectedDate} />
              </div>
            </div>
            <DialogFooter>
              <DialogClose asChild>
                <Button variant="outline">Cancel</Button>
              </DialogClose>
              <button
                onClick={countUpToThreeSeconds}
                className="bg-black text-white w-1/4 rounded-2xl cursor-pointer hover:opacity-75"
                type="submit"
              >
                {isLoading ? "Sending..." : "Send"}
              </button>
            </DialogFooter>
          </form>
        </DialogContent>
      </div>
    </Dialog>
  );
}
