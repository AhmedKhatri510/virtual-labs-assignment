import arr from "../constants/tableData.js";

export default function filterOnDate(beginDate = "", endDate = "") {
  let arrData = [];
  if (beginDate.length !== 0 && endDate.length !== 0) {
    arrData = arr.filter(
      (data) =>
        new Date(beginDate) <= new Date(data.date) &&
        new Date(endDate) >= new Date(data.dueDate)
    );
  }

  return arrData;
}
