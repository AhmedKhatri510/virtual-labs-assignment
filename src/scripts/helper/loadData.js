import arr from "../constants/tableData.js";

//if beginDate and endDate both are empty, then put the data in table body without filter
//if beginDate and endDate both are there, then filter the data, clear the body and insert the data
export default function loadData(arrData = arr) {
  //getting table body element

  const tbody = document.getElementsByClassName("table__container--body")[0];
  //checking if both begin and end dates are there

  //when arr is empty, no data found
  if (arrData.length === 0) {
    const elementH3 = document.createElement("h3");
    elementH3.innerHTML = "No Data Found";
    elementH3.style.display = "flex";
    elementH3.style.justifyContent = "center";
    elementH3.style.alignItems = "center";
    elementH3.style.height = "100%";
    tbody.innerHTML = "";
    tbody.appendChild(elementH3);
    return;
  }

  tbody.innerHTML = "";

  //adding rows and cell data into the table
  let row, cell;

  for (let i = 0; i < arrData.length; i++) {
    row = tbody.insertRow();

    for (let [key, value] of Object.entries(arrData[i])) {
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
    }
  }
}
