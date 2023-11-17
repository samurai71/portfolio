import "src/styles/privacy.module.css";

export const metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for Mark Landeryou's personal portfolio",
};

function privacy() {
  return (
    <main>
      <section className="container mx-auto px-2 py-3">
        <h1 className="title">Privacy Policy</h1>
        {/* <p className="py-2">
        At{" "}
        <a href="https://marklanderyou.ca" className="text-blue-500 underline">
          marklaneryou.ca
        </a>
        , I value your privacy and take it seriously. I do not collect any
        personal information from users, including but not limited to names,
        email addresses, and other contact information.
      </p>
      <p className="py-2">
        I do keep track of visitor count for certain pages (blogs) on the
        website, but this information is not linked to any specific user and is
        used for internal analytics purposes only.
      </p>
      <p className="py-2">
        I use{" "}
        <a
          href="https://substack.com/"
          target="_blank"
          className="text-blue-500 underline"
        >
          Substack
        </a>{" "}
        to send newsletters to my subscribers. When you subscribe to my
        newsletter, your email address is stored on Substack&apos;s servers and
        listed as part of my subscribers under my substack account. This email
        address is used solely for the purpose of sending future newsletters
        that I publish.
      </p>
      <p className="py-2">
        I don&apos;t share any information collected through this website or
        newsletter with any third parties, except as required by law.
      </p>
      <p className="py-2">
        I reserve the right to update this Privacy Policy at any time, and will
        notify you of any changes by posting the updated policy.
      </p>
      <p className="py-2">
        If you have any questions or concerns about the Privacy Policy, please
        contact met at{" "}
        <a
          href="mailto:marklanderyou@hotmail.com"
          className="text-blue-500 underline"
        >
          marklanderyou@hotmail.com
        </a>{" "}
        .
      </p> */}
        <h2 className="title">
          Privacy Policy for Mark Landeryou&apos;s Portfolio
        </h2>

        <p className="py-3">Last updated: November 16th, 2023</p>

        <p className="py-3">
          This Privacy Policy describes how Mark Landeryou&apos;s Personal
          Portfolio (&#34;we,&#34; &#34;us,&#34; or &#34;our&#34;) collects,
          uses, and shares personal information when you visit and interact with
          our website. Please review this policy carefully.
        </p>

        <h3 className="py-3 font-bold tracking-widest text-violet-800">
          1. Information We Collect
        </h3>

        <p>
          <span className="font-bold">Personal Information:</span> We may
          collect personal information, including but not limited to, your name,
          email address, postal address, and phone number when you provide it
          voluntarily.
        </p>
        <br />

        <p className="pb-3">
          <span className="font-bold">Usage Data:</span> We collect information
          about how you use our website, such as your IP address, browser type,
          and operating system.
        </p>

        <h3 className="py-3 font-bold tracking-widest text-violet-800">
          2. How We Use Your Information
        </h3>

        <p>We use the collected information for the following purposes:</p>
        <br />

        <p className="px-8 pb-3">
          To provide you with the products or services you request.{" "}
          <p>To improve and optimize our website.</p>{" "}
          <p>
            To communicate with you, respond to inquiries, and provide customer
            support.
          </p>{" "}
          To send newsletters or marketing materials if you have consented to
          receive them.{" "}
          <p>
            To comply with legal obligations, including those outlined in the{" "}
            <span className="italic">
              Personal Information Protection and Electronic Documents Act
              (PIPEDA)
            </span>
            .
          </p>
        </p>

        <h3 className="py-3 font-bold tracking-widest text-violet-800">
          3. Sharing Your Information
        </h3>

        <p>
          We may share your personal information in the following circumstances:
        </p>
        <br />

        <p className="px-8 pb-3">
          With service providers who help us operate our website.{" "}
          <p>With your explicit consent.</p> In response to legal requests or to
          protect our rights.
        </p>

        <h3 className="py-3 font-bold tracking-widest text-violet-800">
          4. Cookies and Tracking Technologies
        </h3>

        <p className="pb-3">
          We may use cookies and similar tracking technologies to enhance your
          browsing experience and collect data about your usage patterns. You
          can manage your cookie preferences.
        </p>

        <h3 className="py-3 font-bold tracking-widest text-violet-800">
          5. Your Privacy Rights
        </h3>

        <p className="pb-3">
          You have the right to access, update, or delete your personal
          information in accordance with PIPEDA. To exercise these rights or for
          any privacy-related inquiries, please contact us at{" "}
          <a
            href="mailto:marklanderyou@hotmail.com"
            className="text-blue-800 underline"
          >
            marklanderyou@hotmail.com
          </a>
          .
        </p>

        <h3 className="py-3 font-bold tracking-widest text-violet-800">
          6. Security
        </h3>

        <p className="pb-3">
          We take measures to protect your personal information but cannot
          guarantee absolute security. By using our website, you acknowledge and
          accept the associated risks.
        </p>

        <h3 className="py-3 font-bold tracking-widest text-violet-800">
          7. Changes to This Privacy Policy
        </h3>

        <p className="pb-3">
          We may update this Privacy Policy to reflect changes in our practices
          or legal requirements, including any updates to PIPEDA. We will post
          the updated policy on our website with the revised effective date.
        </p>

        <h3 className="py-3 font-bold tracking-widest text-violet-800">
          8. Contact Information
        </h3>

        <p className="pb-3">
          If you have questions or concerns about this Privacy Policy, please
          contact us at{" "}
          <a
            href="mailto:marklanderyou@hotmail.com"
            className="text-blue-800 underline"
          >
            marklanderyou@hotmail.com
          </a>
          .
        </p>
        <br />

        <p className="pb-3 text-center">
          This revision emphasizes PIPEDA compliance and your commitment to
          respecting the privacy rights of your users in accordance with
          Canadian privacy laws.
        </p>
      </section>
    </main>
  );
}

export default privacy;
