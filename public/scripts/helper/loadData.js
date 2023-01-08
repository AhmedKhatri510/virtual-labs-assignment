import arr from "../constants/tableData.js";

const tbody = document.getElementsByClassName("table__container--body")[0];

//if beginDate and endDate both are empty, then put the data in table body without filter
//if beginDate and endDate both are there, then filter the data, clear the body and insert the data
export default function loadData(arrData = arr, beginDate = "", endDate = "") {
  //getting table body element

  //checking if both begin and end dates are there
  if (beginDate.length !== 0 && endDate.length !== 0) {
    arrData = arr.filter((data) => {
      console.log(new Date(beginDate), new Date(data.date));
      console.log(
        new Date(beginDate) <= new Date(data.date) &&
          new Date(endDate) >= new Date(data.dueDate)
      );

      return (
        new Date(beginDate) <= new Date(data.date) &&
        new Date(endDate) >= new Date(data.dueDate)
      );
    });

    console.log(arrData);

    tbody.innerHTML = "";
  }

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
