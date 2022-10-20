import { Button, View } from "react-native";
import React, { useContext } from "react";
import { PrintReceiptContext } from "./context/PrintReceiptContext";

const Checkout = () => {
  const { print } = useContext(PrintReceiptContext);
  return (
    <View style={{ flex: 1,justifyContent:"center"}}>
      <Button onPress={print} title="print" />
    </View>
  );
};

export default Checkout;
