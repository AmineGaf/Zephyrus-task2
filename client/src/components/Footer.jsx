import React from "react";

const Footer = () => (
  <footer className="bg-secondary text-gray-700 text-center py-4">
    <p className="text-sm">
      &copy; {new Date().getFullYear()} Task Manager Inc. All rights reserved.
    </p>
  </footer>
);

export default Footer;
