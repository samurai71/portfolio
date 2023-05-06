const Footer = () => {
  return (
    <footer className="pt-3 mt-2 border-2">
      <p className="font-sans pb-3 text-center px-2 sm:text-xs md:text-sm">
        &copy; {new Date().getFullYear()} Mark Landeryou All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
