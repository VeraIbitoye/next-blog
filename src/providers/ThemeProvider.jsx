"use client";
// import React, { useClient } from 'react';
import { ThemeContext } from "@/context/ThemeContext";
import React, { useContext, useEffect, useState } from "react";

const ThemeProvider = ({ children }) => {
  const { theme } = useContext(ThemeContext);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Check if component is mounted, then return the themed content
  if (mounted) {
    return <div className={theme}>{children}</div>;
  }

  // Return null if the component is not yet mounted
  return null;
};

export default ThemeProvider;

