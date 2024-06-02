"use client";
import {
    Button,
    Label,
    Textarea,
    TextInput,
    
  } from "flowbite-react";


const Form = () => {
    return (
    <form className=" p-10 min-w-[350px] md:min-w-[500px] md:max-w-[500px]"
      method="POST" 
            data-netlify="true"
            name="contact"
    >

<input type="hidden" name="form-name" value="contact" />
      <div>
        <div className="mb-2 block">
          <Label htmlFor="fullName" value="Full Name" className="text-primary ml-3"/>
        </div>
        <TextInput id="fullName" type="text" placeholder="Full name" required />
      </div>
      
      
        
      <div>
        <div className="mb-2 block">
          <Label htmlFor="email" value="Your email" className="text-primary ml-3" />
        </div>
        <TextInput id="email" type="email" placeholder="your e-mail" required />
      </div>
      

        
      <div>
        <div className="mb-2 block">
          <Label htmlFor="number" value="Phone number" className="text-primary ml-3"/>
        </div>
        <TextInput id="number" type="number" placeholder="phone number with country code" />
      </div>
      
      <div>
      <div className="mb-2 block">
        <Label htmlFor="comment" value="Your message" className="text-primary ml-3"/>
      </div>
      <Textarea id="comment" placeholder="Your message..." required rows={3} />
    </div>
      <Button type="submit" className="text-background bg-white my-5 mx-auto" >Submit</Button>
    </form>

    );
  }
  export default Form;