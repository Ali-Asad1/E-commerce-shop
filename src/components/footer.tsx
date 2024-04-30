const Footer = () => {
  return (
    <div className="border-t bg-white">
      <div className="mx-auto py-10">
        <p className="text-center text-xs text-black">&copy; {new Date().getFullYear()}. All rights reserved</p>
      </div>
    </div>
  );
};
export default Footer;
