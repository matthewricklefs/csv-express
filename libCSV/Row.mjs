import Cell from "./Cell.mjs";

/**
 * Rows are collections of cells.
 */
class Row {
  /**
   * Constructor for a row class
   * @param values An array of values that will be transformed into cells
   * @returns void
   */
  constructor(index, values) {
    this.index = index;
    this.cells = [];
    for (var i = 0; i < values.length; i++) {
      this.cells.push(new Cell(values[i]));
    }
    return;
  }

  /**
   * Return the position of this row in the CSV file
   * @param index
   * @returns
   */
  getIndex() {
    return this.index;
  }
  /**
   * Return the cell within this row at the specified cell index
   * @param index
   */
  getCell(index) {
    return this.cells[index];
  }
  /**
   * Set the value of a cell at the specified cell index
   * @param index
   * @param value
   * @returns
   */
  setCell(index, value) {
    this.cells[index].setValue(value);
    return;
  }
  /**
   *
   * @returns return the value of a row as a string
   */
  stringify() {
    var s = "";
    for (var i = 0; i < this.cells.length; i++) {
      s += this.getCell(i).getValue();
      if (i == this.cells.length - 1) {
        // do nothing
      } else {
        s += ",";
      }
    }
    return s;
  }
}

export default Row;
