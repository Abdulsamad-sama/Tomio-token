import React from "react";

type Props = {};

const Footer = (props: Props) => {
  const date = new Date();
  return (
    <footer className="flex flex-col items-center justify-center gap-4 p-4 bg-gray-200 text-gray-700">
      <h2>Tomio.</h2>
      <p>Copyright @{date.getFullYear()} Tomio. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
