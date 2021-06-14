import Row from "./Row.mjs";
import Column from "./Column.mjs";
import fs from "fs";

class CSV {
  // TODO: Should we be passing every instance of 'this' that we are utilizing as arguments within the constructor's paranthesis?
  constructor(file) {
    this.file = file;
    this.columns = null;
    this.rows = [];
    this.getFileContents();
  }
  /**
   * open the file for reading it's contents
   */
  getFileContents() {
    var contents = fs.readFileSync(this.file, "utf-8");

    let lines = contents.split("\n");
    // I want to have the contents broken down into its constituent parts and represented as javascript class objects.

    this.columns = new Column(-1, lines.slice(0)[0].split(","));

    let rows = lines.slice(1, lines.length);

    for (var i = 0; i < rows.length; i++) {
      this.rows.push(new Row(i, rows[i].split(",")));
    }
  }

  findCell(row, column) {
    // find the index of the specific Row you are selecting
    var specificRow = this.rows[row];

    // find the specific Cell you are looking for
    var specificCell = specificRow.getCell(column);

    return specificCell;
  }
  /**
   * Return rows as a string, with a new line between each row
   */
  // TODO: Should we abstract the stringify method found in the Row component inside of the function body below or create it's own unique ability to Stringify the CSV file?
  stringifyCSV() {
    let s = "";
    s += this.columns.stringify();
    s += "\n";
    for (let i = 0; i < this.rows.length; i++) {
      s += this.rows[i].stringify();
      if (i == this.rows.length - 1) {
      } else {
        s += "\n";
      }
    }
    return s;
  }
  /**
   * Write out the contents of this CSV to a file.
   * @param file The file path and name.
   * @returns nothing
   */
  writeCSVFile(file) {
    fs.writeFileSync(file, this.stringifyCSV());
    return;
  }
}

export default CSV;
