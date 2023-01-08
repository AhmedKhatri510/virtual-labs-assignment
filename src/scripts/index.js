// import arr from "../constants/tableData";
import arr from "./constants/tableData.js";

console.log(arr);

window.onload = function () {
  const tbody = document.getElementsByClassName("table__container--body")[0];
  console.log(tbody);
  let row, cell;

  for (let i = 0; i < arr.length; i++) {
    row = tbody.insertRow();

    for (let [key, value] of Object.entries(arr[i])) {
      if (key === "clientType") continue;
      cell = row.insertCell();

      if (String(value).toLowerCase().includes("draft")) {
        cell.id = "draft";
      }
      if (String(value).toLowerCase().includes("paid")) {
        cell.id = "paid";
      }
      if (String(value).toLowerCase().includes("partial payment")) {
        cell.id = "partial-payment";
      }

      if (
        key.toLowerCase().includes("total") ||
        key.toLowerCase().includes("balance")
      ) {
        value = `$${value}`;
      }
      cell.innerHTML = value;

      console.log(cell);
    }
  }

  // row = tbody.insertRow();
  // cell = row.insertCell();
  // cell.innerHTML = "The first cell";
};
