"use client";
import {
    Button,
    Label,
    Textarea,
    TextInput,
    
  } from "flowbite-react";


const Form = () => {
    return (
    <form className="flex  flex-1 max-w-md flex-col gap-4">


      <div>
        <div className="mb-2 block">
          <Label htmlFor="fullName" value="Full Name" />
        </div>
        <TextInput id="fullName" type="text" placeholder="Full name" required />
      </div>
      

        
      <div>
        <div className="mb-2 block">
          <Label htmlFor="email" value="Your email" />
        </div>
        <TextInput id="email" type="email" placeholder="name@flowbite.com" required />
      </div>
      

        
      <div>
        <div className="mb-2 block">
          <Label htmlFor="number" value="Phone number " />
        </div>
        <TextInput id="number" type="number" placeholder="name@flowbite.com" />
      </div>
      
      <div className="max-w-md">
      <div className="mb-2 block">
        <Label htmlFor="comment" value="Your message" />
      </div>
      <Textarea id="comment" placeholder="Your message..." required rows={4} />
    </div>
      <Button type="submit">Submit</Button>
    </form>

    );
  }
  export default Form;