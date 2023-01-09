export default function filterOnStatus(arrData, statusValue) {
  console.log(arrData, statusValue);
  if (arrData.length === 0 || statusValue.toLowerCase().includes("any"))
    return arrData;
  console.log("hello i am here");
  arrData = arrData.filter((data) =>
    data.status.toLowerCase().includes(statusValue.toLowerCase())
  );

  return arrData;
}
