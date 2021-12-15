import { useReverseENSLookUp } from './ensLookup';
function ShortAddress({address} : {address: string}) {
  const shortAddress = address && [address.substr(0, 4), address.substr(38, 4)].join('...');
  const ens = useReverseENSLookUp(address);
  return (
    <>
      {
        ens ? ens : shortAddress
      }
    </>
  );
}

export default ShortAddress;
