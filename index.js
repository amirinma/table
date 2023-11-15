let tab = document.querySelector("table")

for (let i = 0, row; row = tab.rows[i]; i++){
  //console.log(row)
  for (let j = 0, col; col = row.cells[j]; j++){
    console.log(col)
  }
}

