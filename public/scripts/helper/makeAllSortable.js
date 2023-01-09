function sortTable(table, col, reverse) {
  var tb = table.tBodies[0], // use `<tbody>` to ignore `<thead>` and `<tfoot>` rows
    tr = Array.prototype.slice.call(tb.rows, 0), // put rows into array
    i;

  reverse = -(+reverse || -1);
  tr = tr.sort(function (a, b) {
    if (col === 0) {
      let compVar = 0;
      if (
        Number(a.cells[col].textContent) - Number(b.cells[col].textContent) <
        0
      )
        compVar = -1;

      if (
        Number(a.cells[col].textContent) - Number(b.cells[col].textContent) >
        0
      )
        compVar = 1;

      return (
        reverse * compVar // `-1 *` if want opposite order
      );
    } else {
      return (
        reverse * // `-1 *` if want opposite order
        a.cells[col].textContent
          .trim() // using `.textContent.trim()` for test
          .localeCompare(b.cells[col].textContent.trim())
      );
    }
  });
  for (i = 0; i < tr.length; ++i) tb.appendChild(tr[i]); // append each row in order
}

function makeSortable(table) {
  var th = table.tHead,
    i;
  th && (th = th.rows[0]) && (th = th.cells);

  if (th) i = th.length;
  else return; // if no `<thead>` then do nothing
  while (--i >= 0)
    (function (i) {
      var dir = 1;
      th[i].addEventListener("click", function () {
        console.log(th[i].children[0].innerText);
        sortTable(table, i, (dir = 1 - dir));
      });
    })(i);
}

export default function makeAllSortable(parent) {
  parent = parent || document.body;
  var t = parent.getElementsByTagName("table"),
    i = t.length;
  while (--i >= 0) makeSortable(t[i]);
}
