const Footer = () => {
  return (
    <footer className="py-6 md:px-8 md:py-0 bg-black text-white border-t border-gray-800">
      <div className="flex items-center md:h-24">
        <p className="text-balance text-center text-sm leading-loose md:text-left">
          Built by &nbsp;
          <a href="#" target="_blank" className="font-medium underline underline-offset-4">
            Shahinur Rahman Shahin
          </a>
          . The source code is avaiable on &nbsp;
          <a href="#" target="_blank" rel="noreferrer" className="font-medium underline underline-offset-4">
            Github
          </a>
          .
        </p>
      </div>
    </footer>
  );
};
export default Footer;
