import { createContext } from "react";
import * as Print from "expo-print";
import  Receipt from "../components/Receipt";
export const PrintReceiptContext = createContext();

export const PrintReceiptContextProvider = ({ children }) => {
  const dynamicreceipt = Receipt();
  const print = async () => {
    const html = await dynamicreceipt;
    await Print.printAsync({
      html: html,
      height: 1754,
      width: 1240,
    });
  };

  return (
    <PrintReceiptContext.Provider value={{ print }}>
      {children}
    </PrintReceiptContext.Provider>
  );
};
