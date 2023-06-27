import ContactInfor from "@/components/Contact";

export const metadata = {
  title: "Contact",
};

const Contact = () => {
  return (
    <section className="container mx-auto px-2">
      <h2>Contact Me</h2>
      <ContactInfor />
    </section>
  );
};

export default Contact;
