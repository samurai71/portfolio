export const metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for Mark Landeryou's personal portfolio",
};

function privacy() {
  return (
    <section className="container mx-auto px-2 py-3">
      <h1 className="uppercase tracking-widest">Privacy Policy</h1>
      <p className="py-2">
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
      </p>
    </section>
  );
}

export default privacy;
