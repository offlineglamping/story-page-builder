import { useState, type FormEvent } from "react";
import { toast } from "sonner";
import { SectionLabel } from "./SectionLabel";

const projectTypes = [
  "Kitchen",
  "Whole-home interior",
  "Custom cabinetry",
  "Shabbat / holiday systems",
  "Other",
];

export function Contact() {
  const [submitting, setSubmitting] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    const form = e.currentTarget;
    setTimeout(() => {
      toast.success("Thank you — we'll be in touch shortly.");
      form.reset();
      setSubmitting(false);
    }, 400);
  }

  return (
    <section id="contact" className="py-24 lg:py-32 border-t border-border">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-12 gap-12 lg:gap-20">
        <div className="lg:col-span-5">
          <SectionLabel number="05" label="Contact" />
          <h2 className="font-serif text-4xl md:text-5xl leading-tight text-foreground">
            Create a home that understands your life.
          </h2>
          <p className="mt-6 text-muted-foreground leading-relaxed max-w-md">
            Tell us a little about your home, your family and the project you have in
            mind. We work with clients in close collaboration, from first conversation
            through to the final hinge.
          </p>
          <dl className="mt-10 space-y-4 text-sm text-muted-foreground">
            <div>
              <dt className="text-[11px] tracking-[0.28em] uppercase text-foreground mb-1">Studio</dt>
              <dd>By appointment</dd>
            </div>
            <div>
              <dt className="text-[11px] tracking-[0.28em] uppercase text-foreground mb-1">Email</dt>
              <dd>studio@chava.design</dd>
            </div>
          </dl>
        </div>

        <form onSubmit={onSubmit} className="lg:col-span-7 grid sm:grid-cols-2 gap-6">
          <Field label="Name" name="name" required />
          <Field label="Email" name="email" type="email" required />
          <Field label="Location" name="location" placeholder="City, country" />
          <div className="flex flex-col">
            <label className="text-[11px] tracking-[0.28em] uppercase text-muted-foreground mb-2">
              Type of project
            </label>
            <select
              name="type"
              className="h-11 bg-transparent border-b border-border text-foreground focus:outline-none focus:border-foreground transition-colors"
              defaultValue=""
            >
              <option value="" disabled>
                Select —
              </option>
              {projectTypes.map((t) => (
                <option key={t}>{t}</option>
              ))}
            </select>
          </div>
          <div className="sm:col-span-2 flex flex-col">
            <label className="text-[11px] tracking-[0.28em] uppercase text-muted-foreground mb-2">
              Message
            </label>
            <textarea
              name="message"
              rows={5}
              className="bg-transparent border-b border-border text-foreground py-2 focus:outline-none focus:border-foreground transition-colors resize-none"
              placeholder="Tell us about your home and what you would like to create."
            />
          </div>
          <div className="sm:col-span-2 flex justify-end pt-4">
            <button
              type="submit"
              disabled={submitting}
              className="inline-flex items-center justify-center h-12 px-8 bg-foreground text-background text-sm tracking-wide hover:bg-foreground/90 transition-colors rounded-sm disabled:opacity-60"
            >
              {submitting ? "Sending…" : "Send enquiry"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <div className="flex flex-col">
      <label className="text-[11px] tracking-[0.28em] uppercase text-muted-foreground mb-2">
        {label}
        {required && <span className="text-accent ml-1">*</span>}
      </label>
      <input
        type={type}
        name={name}
        required={required}
        placeholder={placeholder}
        className="h-11 bg-transparent border-b border-border text-foreground focus:outline-none focus:border-foreground transition-colors"
      />
    </div>
  );
}
