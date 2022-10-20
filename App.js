import Checkout from './Checkout';
import { PrintReceiptContextProvider } from './context/PrintReceiptContext';

export default function App() {
  return (
    <PrintReceiptContextProvider>
      <Checkout/>
    </PrintReceiptContextProvider>
  );
}


