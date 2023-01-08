// import arr from "../constants/tableData";
import arr from "./constants/tableData.js";
import convertDate from "./helper/convertDate.js";
let arrData = arr;
const tbody = document.getElementsByClassName("table__container--body")[0];
//if beginDate and endDate both are empty, then put the data in table body without filter
//if beginDate and endDate both are there, then filter the data, clear the body and insert the data

//getting begin date
const beginDate = document.getElementById("begin-date");

//onchange function call
beginDate.onchange = function (e) {
  if (beginDate.value.length !== 0 && endDate.value.length !== 0)
    loadData(beginDate.value, endDate.value);
};

//getting end date
const endDate = document.getElementById("end-date");

//onchange function call
endDate.onchange = function (e) {
  console.log(convertDate(e.target.valueAsDate));

  if (beginDate.value.length !== 0 && endDate.value.length !== 0)
    loadData(beginDate.value, endDate.value);
};

//on reload the data is loaded
window.onload = loadData();
