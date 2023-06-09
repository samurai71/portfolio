import FooterNav from "./FooterNav";

const Footer = () => {
  return (
    <footer className="pt-3 mt-2 container mx-auto border-t">
      <FooterNav />
      <p className="font-sans pb-3 text-center px-2 sm:text-xs md:text-sm">
        &copy; {new Date().getFullYear()} Mark Landeryou All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
