export default function filterOnStatus(arrData, statusValue) {
  if (arrData.length === 0 || statusValue.toLowerCase().includes("any"))
    return arrData;

  arrData = arrData.filter((data) =>
    data.status.toLowerCase().includes(statusValue.toLowerCase())
  );

  return arrData;
}
