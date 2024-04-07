import { cn } from "../lib/utls";
import { Button } from "./button";
import { Form } from "./form";

const CustomForm = ({ children, className, buttonName, form, onSubmit }) => {
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className={cn("space-y-4 lg:space-y-6", className)}
      >
        {children}
        <Button className={buttonName} type="submit">
          Login
        </Button>
      </form>
    </Form>
  );
};

export default CustomForm;
