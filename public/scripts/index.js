import convertDate from "./helper/convertDate.js";
import loadData from "./helper/loadData.js";

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
