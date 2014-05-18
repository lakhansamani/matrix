
function matrixCreator(row,column){
  var matrix=new Array();
  for(var i=0;i<row;i++){
    matrix[i]=new Array();
    for(var y=0;y<column;y++){
      matrix[i][y]=prompt("Enter the elements for matrix row wise");
    }
  }
  return matrix;
}
