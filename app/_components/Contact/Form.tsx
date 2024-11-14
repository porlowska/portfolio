import toast, { Toaster } from "react-hot-toast";
import Input from "./form/Input";
import Textarea from "./form/Textarea";

const Form = () => {
  return (
    <form name="book-now" action="#" method="POST" className="px-6  lg:px-8 ">
      <input type="hidden" name="book-now" value="book-now" />
      <div className="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <Input inputLabel={"Your Name"} type={"text"} />
          <Input inputLabel={"Your Position"} type={"text"} />

          <Input inputLabel={"Email"} type={"email"} />

          <Input inputLabel={"Phone number"} type={"tel"} />

          <div className="sm:col-span-2">
            <Textarea
              textareaLabel={"Message"}
              rows={5}
              helperText="Drop  me a message here toget in touch"
            />
          </div>
        </div>
        <div className="mt-8 flex justify-center">
          <Toaster />
          <button
            disabled
            type="submit"
            className="rounded-md px-3.5 py-2.5 text-center text-sm font-semibold shadow-sm"
            onClick={(e) => {
              e.preventDefault();
              toast.error("Form under construction");
            }}
          >
            Send message
          </button>
        </div>
      </div>
    </form>
  );
};
export default Form;
