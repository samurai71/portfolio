import ContactInfor from "@/components/Contact";

export const metadata = {
  title: "Contact",
};

const Contact = () => {
  return (
    <main>
      <section className="container mx-auto px-2">
        <ContactInfor />
      </section>
    </main>
  );
};

export default Contact;
