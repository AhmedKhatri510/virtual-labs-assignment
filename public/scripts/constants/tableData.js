// ### Create a Json array of 15 rows and store following information about 15 invoice:

import convertDate from "../helper/convertDate.js";

// Invoice id.
// Client name
// Client type (in-state / out-state)
// Date
// Due Date
// Total
// Balance
// Status (draft, paid, partial payment).

//         Assume the suitable data to create an array.

const arr = [
  {
    invoiceId: 1,
    clientName: "Thomas Lynial",
    clientType: "in-state",
    date: convertDate("8/1/2023"),
    dueDate: convertDate("9/1/2023"),
    total: 657,
    balance: 657,
    status: "Draft",
  },
  {
    invoiceId: 2,
    clientName: "Jason Jornal",
    clientType: "out-state",
    date: convertDate("8/1/2023"),
    dueDate: convertDate("9/1/2023"),
    total: 657,
    balance: 657,
    status: "Paid",
  },
  {
    invoiceId: 3,
    clientName: "Michael Strikes",
    clientType: "in-state",
    date: convertDate("8/1/2023"),
    dueDate: convertDate("9/1/2023"),
    total: 657,
    balance: 657,
    status: "Partial Payment",
  },
  {
    invoiceId: 4,
    clientName: "Ahmed",
    clientType: "out-state",
    date: convertDate("8/1/2023"),
    dueDate: convertDate("9/1/2023"),
    total: 657,
    balance: 657,
    status: "Paid",
  },
  {
    invoiceId: 5,
    clientName: "Raza",
    clientType: "in-state",
    date: convertDate("8/1/2023"),
    dueDate: convertDate("9/1/2023"),
    total: 657,
    balance: 657,
    status: "Partial Payment",
  },
  {
    invoiceId: 6,
    clientName: "Lynial",
    clientType: "in-state",
    date: convertDate("8/1/2023"),
    dueDate: convertDate("9/1/2023"),
    total: 657,
    balance: 657,
    status: "Draft",
  },
  {
    invoiceId: 7,
    clientName: "Thomas",
    clientType: "in-state",
    date: convertDate("8/1/2023"),
    dueDate: convertDate("9/1/2023"),
    total: 657,
    balance: 657,
    status: "Paid",
  },
  {
    invoiceId: 8,
    clientName: "Michael",
    clientType: "out-state",
    date: convertDate("8/1/2023"),
    dueDate: convertDate("9/1/2023"),
    total: 657,
    balance: 657,
    status: "Draft",
  },
  {
    invoiceId: 9,
    clientName: "Strikes",
    clientType: "in-state",
    date: convertDate("8/1/2023"),
    dueDate: convertDate("9/1/2023"),
    total: 657,
    balance: 657,
    status: "Paid",
  },
  {
    invoiceId: 10,
    clientName: "Jason",
    clientType: "out-state",
    date: convertDate("8/1/2023"),
    dueDate: convertDate("9/1/2023"),
    total: 657,
    balance: 657,
    status: "Draft",
  },
  {
    invoiceId: 11,
    clientName: "Jornal",
    clientType: "in-state",
    date: convertDate("8/1/2023"),
    dueDate: convertDate("9/1/2023"),
    total: 657,
    balance: 657,
    status: "Partial Payment",
  },
  {
    invoiceId: 12,
    clientName: "Jenson",
    clientType: "in-state",
    date: convertDate("8/1/2023"),
    dueDate: convertDate("9/1/2023"),
    total: 657,
    balance: 657,
    status: "Paid",
  },
  {
    invoiceId: 13,
    clientName: "Clark",
    clientType: "in-state",
    date: convertDate("8/1/2023"),
    dueDate: convertDate("9/1/2023"),
    total: 657,
    balance: 657,
    status: "Paid",
  },
  {
    invoiceId: 14,
    clientName: "Thomas Lynial",
    clientType: "out-state",
    date: convertDate("8/1/2023"),
    dueDate: convertDate("9/1/2023"),
    total: 657,
    balance: 657,
    status: "Partial Payment",
  },
  {
    invoiceId: 15,
    clientName: "Peter",
    clientType: "in-state",
    date: convertDate("8/1/2023"),
    dueDate: convertDate("9/1/2023"),
    total: 657,
    balance: 657,
    status: "Draft",
  },
];

export default arr;
