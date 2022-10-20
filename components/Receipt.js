import { Asset } from 'expo-asset';
import { manipulateAsync } from 'expo-image-manipulator';
const Receipt = async () => {
  const asset = Asset.fromModule(require('../assets/iconlong.png'));
  const image = await manipulateAsync(asset.localUri ?? asset.uri, [], { base64: true });
  const receipthtml = `
  <html>
  <head>
  <style>
  </style>
  </head>
    <body> 
    <img src="data:image/jpeg;base64,${image.base64}" style="width: 90px;height:60px"  alt="Biashara POS" /> 
  </body>
  </html>
  `
    return receipthtml;
}

export default Receipt