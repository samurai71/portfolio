import FooterNav from "./FooterNav";

const Footer = () => {
  return (
    <footer className="container mx-auto mt-2 border-t pt-3">
      <FooterNav />
      <p className="px-2 pb-3 text-center font-sans sm:text-xs md:text-sm">
        &copy; {new Date().getFullYear()} Mark Landeryou All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
