"use client";
import { createContext, useState, useContext } from "react";

// إنشاء الـ Context
const PackageContext = createContext();

// إنشاء الـ Provider لتوفير البيانات
export function PackageProvider({ children }) {
  const [selectedPackage, setSelectedPackage] = useState(null);

  return (
    <PackageContext.Provider value={{ selectedPackage, setSelectedPackage }}>
      {children}
    </PackageContext.Provider>
  );
}

// استخدام الـ Context في المكونات
export function usePackage() {
  return useContext(PackageContext);
}
