import filterOnClientType from "./filterOnClientType.js";
import filterOnDate from "./filterOnDate.js";
import filterOnStatus from "./filterOnStatus.js";
import loadData from "./loadData.js";

//filter data based on input
export default function filterAndLoad(
  beginDate,
  endDate,
  statusOfPayment,
  clientType
) {
  const filteredOnDate = filterOnDate(beginDate.value, endDate.value);

  const statusValue =
    statusOfPayment.options[statusOfPayment.selectedIndex].value;
  console.log(statusValue, filteredOnDate);

  const filteredOnStatus = filterOnStatus(filteredOnDate, statusValue);

  const clientTypeValue = clientType.options[clientType.selectedIndex].value;
  const filteredOnClientType = filterOnClientType(
    filteredOnStatus,
    clientTypeValue
  );
  loadData(filteredOnClientType);
}
