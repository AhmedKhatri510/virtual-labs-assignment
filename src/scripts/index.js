// import arr from "../constants/tableData";
import loadData from "./helper/loadData.js";

import filterAndLoad from "./helper/filterAndLoad.js";

//getting begin date
const beginDate = document.getElementById("begin-date");

//getting end date
const endDate = document.getElementById("end-date");

//getting status
const statusOfPayment = document.getElementById("status");

//getting client type
const clientType = document.getElementById("client-type");

//if beginDate and endDate both are empty, then put the data in table body without filter
//if beginDate and endDate both are there, then filter the data, clear the body and insert the data

//onchange function call
beginDate.onchange = function (e) {
  if (beginDate.value.length !== 0 && endDate.value.length !== 0) {
    filterAndLoad(beginDate, endDate, statusOfPayment, clientType);
  }

  if (beginDate.value.length === 0 && endDate.value.length === 0) {
    filterAndLoad(beginDate, endDate, statusOfPayment, clientType);
  }
};

//onchange function call
endDate.onchange = function (e) {
  if (beginDate.value.length !== 0 && endDate.value.length !== 0) {
    filterAndLoad(beginDate, endDate, statusOfPayment, clientType);
  }

  if (beginDate.value.length === 0 && endDate.value.length === 0) {
    filterAndLoad(beginDate, endDate, statusOfPayment, clientType);
  }
};

statusOfPayment.onchange = function (e) {
  filterAndLoad(beginDate, endDate, statusOfPayment, clientType);
};

clientType.onchange = function (e) {
  filterAndLoad(beginDate, endDate, statusOfPayment, clientType);
};

//on reload the data is loaded
window.onload = loadData();
