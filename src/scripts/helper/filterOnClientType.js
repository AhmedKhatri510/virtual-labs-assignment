export default function filterOnClientType(arrData, clientTypeValue) {
  console.log(arrData, clientTypeValue);
  if (arrData.length === 0 || clientTypeValue.toLowerCase().includes("any"))
    return arrData;

  arrData = arrData.filter((data) =>
    data.clientType.toLowerCase().includes(clientTypeValue.toLowerCase())
  );

  return arrData;
}
