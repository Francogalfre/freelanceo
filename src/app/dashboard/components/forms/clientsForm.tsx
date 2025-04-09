"use client";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useState } from "react";

import { toast } from "sonner";
import { CheckCircle2, XCircle } from "lucide-react";

import { z } from "zod";

const clientFormSchema = z.object({
  name: z.string().min(1, "Full Name is required").max(60, "Name must be less than 60 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().optional(),
  country: z.string().optional(),
  company: z.string().optional(),
  notes: z.string().max(400, "Notes must be less than 400 characters").optional(),
});

type FormErrors = {
  [key: string]: string;
};

const ClientsForm = () => {
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(event.currentTarget);
    const rawData = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      phone: formData.get("phone") as string,
      country: formData.get("country") as string,
      company: formData.get("company") as string,
      notes: formData.get("notes") as string,
    };

    const parsedData = clientFormSchema.safeParse(rawData);

    if (!parsedData.success) {
      const formattedErrors: FormErrors = {};
      const errorMap = parsedData.error.flatten().fieldErrors;

      Object.entries(errorMap).forEach(([key, value]) => {
        if (value && value[0]) {
          formattedErrors[key] = value[0];
        }
      });

      setErrors(formattedErrors);
      setIsSubmitting(false);

      toast.error("Form validation failed", {
        description: "Please check the form for errors",
        icon: <XCircle className="h-5 w-5" />,
        duration: 4000,
        style: { backgroundColor: "#ff0301", border: "1px solid red", color: "white" },
      });

      return;
    }

    try {
      console.log("Valid data to send:", parsedData.data);

      event.currentTarget.reset();

      toast.success("Client added successfully", {
        description: "The client information has been saved to the database",
        icon: <CheckCircle2 className="h-5 w-5" />,
        duration: 4000,
        style: { backgroundColor: "#22c55e", border: "1px solid #22c55e", color: "white" },
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      setErrors({ submit: "Failed to add client. Please try again." });

      toast.error("Failed to add client", {
        description: "There was an error saving the client information",
        icon: <XCircle className="h-5 w-5" />,
        duration: 4000,
        style: { backgroundColor: "#ff0301", border: "1px solid red", color: "white" },
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form className="max-w-full flex flex-col gap-6 pt-4" onSubmit={handleSubmit}>
      <div className="grid gap-3 text-start">
        <Label className="text-md">
          Full Name <span className="text-red-500">*</span>
        </Label>
        <Input
          id="name"
          type="text"
          name="name"
          placeholder="John Doe"
          className={`h-12 ${errors.name ? "border-red-500" : ""}`}
        />
        {errors.name && <p className="text-sm text-red-500">{errors.name}</p>}
      </div>

      <div className="grid gap-3 text-start">
        <Label className="text-md">
          Email<span className="text-red-500">*</span>
        </Label>
        <Input
          id="email"
          type="email"
          name="email"
          placeholder="johndoe@gmail.com"
          className={`h-12 ${errors.email ? "border-red-500" : ""}`}
        />
        {errors.email && <p className="text-sm text-red-500">{errors.email}</p>}
      </div>

      <div className="grid gap-3 text-start">
        <Label className="text-md">Phone Number</Label>
        <Input
          id="phone"
          type="tel"
          name="phone"
          placeholder="(342) 123 4567"
          className={`h-12 ${errors.phone ? "border-red-500" : ""}`}
        />
        {errors.phone && <p className="text-sm text-red-500">{errors.phone}</p>}
      </div>

      <div className="grid gap-3 text-start">
        <Label className="text-md">Location</Label>
        <Input
          id="country"
          type="text"
          name="country"
          placeholder="Argentina, Buenos Aires"
          className={`h-12 ${errors.country ? "border-red-500" : ""}`}
        />
        {errors.country && <p className="text-sm text-red-500">{errors.country}</p>}
      </div>

      <div className="grid gap-3 text-start">
        <Label className="text-md">Company</Label>
        <Input
          id="company"
          type="text"
          name="company"
          placeholder="Acme Inc."
          className={`h-12 ${errors.company ? "border-red-500" : ""}`}
        />
        {errors.company && <p className="text-sm text-red-500">{errors.company}</p>}
      </div>

      <div className="grid gap-3 text-start">
        <Label className="text-md">Notes</Label>
        <Textarea
          id="notes"
          name="notes"
          placeholder="Additional Information about this client..."
          className={`h-24 resize-none ${errors.notes ? "border-red-500" : ""}`}
        />
        {errors.notes && <p className="text-sm text-red-500">{errors.notes}</p>}
      </div>

      {errors.submit && <p className="text-sm text-red-500">{errors.submit}</p>}

      <Button
        type="submit"
        className="h-14 text-md bg-blue-600 hover:bg-blue-700 transition-colors cursor-pointer"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Adding Client..." : "Add New Client Information"}
      </Button>
    </form>
  );
};

export default ClientsForm;
