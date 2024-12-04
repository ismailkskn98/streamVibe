import React from "react";
import WelcomeSupport from "./WelcomeSupport";
import SupportForm from "./SupportForm";

const Contact = () => {
  return (
    <section className="flex items-center gap-4">
      <WelcomeSupport />
      <SupportForm />
    </section>
  );
};

export default Contact;
