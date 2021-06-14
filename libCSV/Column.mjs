import Row from "./Row.mjs";

/**
 * The Column class is a specialized case of the Row class.
 */

class Column extends Row {
  constructor(index, values) {
    super(index, values);
    this.length = values.length;
    return;
  }
  /**
   * Wraps the getCell method of the super class.
   * @param index
   * @returns The value of the coulm specified by index.
   */
  getColumn(index) {
    return this.getCell(index);
  }
  /**
   * Wraps the setCell method of the Row class.
   * @param index, specify what cell to set
   * @param value, the value to set the cell too.
   * @returns void
   */
  setColumn(index, value) {
    this.setCell(index, value);
    return;
  }
}

export default Column;
