// status 0 draft; 1 pending;  2 paid
const invoices = [
  {
    _id: "RTX3080",
    price: 1800.9,
    due: "19 Jan 2022",
    buyer: "Connor Zhu",
    status: "Paid",
  },
  {
    _id: "RTX3090TI",
    price: 2100,
    due: "2 Feb 2022",
    buyer: "Darren Ye",
    status: "Pending",
  },
  {
    _id: "6700XT",
    price: 799.99,
    due: "2 Feb 2022",
    buyer: "Connor Zhu",
    status: "Draft",
  },
  {
    _id: "5700XT",
    price: 599.99,
    due: "19 Aug 2021",
    buyer: "Darren Ye",
    status: "Paid",
  },
];

export default invoices;
