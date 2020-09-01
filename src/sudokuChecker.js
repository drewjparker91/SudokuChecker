import { TestScheduler } from "jest";

export default function Checker() {
  this.row = [1,2,3,4,5,6,7,8,9];
  this.column = [1,2,3,4,5,6,7,8,9];
  // this.box = box;
  this.check = []
}
Checker.prototype.rowCheck = function() {
  let total = 0;
  for (let i=0; i < this.row.length; i++){
  total += this.row[i];
  }
  // const rowValues = rows.values();
  return total;
}

Checker.prototype.columnCheck = function() {
  let total = 0;
  for (let i=0; i < this.column.length; i++){
  total += this.column[i];
  }
  // const rowValues = rows.values();
  return total;
}

Checker.prototype.numCheck = function() {
  for (let i=0; i <this.check.length; i++){
    if (i=0 === 1 || 2 ||) {
    return true;
    } else if (i=1 === 1 || 2 || 3 );
    {

    }
  }
}


  
//   Test("should check if the value of a single row is 45 and return true")
//   const row1 = new Checker[1,2,3,4,5,6,7,8,9];
//   expect(row1.row === 45).toBe(true)

//   expect(Checker.column === 45).toBe(true)

//   expect(Checker.box === 45).toBe(true)
  
// }
// const rows = [];
//user input and put into row array




// const row1 = [1,2,3,4,5,6,7,8,9];



// Checker.prototype.Row = function() {

// }

// Checker.prototype.Column = function() {

// }

// Checker.prototype.Box = function() {

// }

// a row contain numbers 1-9 no repeats
// a column contains numbers 1-9 no repeats
//a box contains numbers 1-9 no repeats
// const values = Object.values()

// function RowColumn() {
//   this.RowColumn = [];
// }

// RowColumn.prototype.Row = function (row)
//   const rowValues = Object.values(row);
//   for (let i=0; < rowValues.length; i++) {
//     if rowValues[i] 
//   