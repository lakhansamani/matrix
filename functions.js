
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

function traverseEast(m,n,l){
  var items=[[1,2,3],[4,5,6],[7,8,9]];
  var result=(items[m][n+l]);
  console.log(result);
  return result;
}

function traverseWest(m,n,l){
  var items=[[1,2,3],[4,5,6],[7,8,9]];
  var result=(items[m][n-l]);
  console.log(result);
  return result;
}

function traverseNorth(m,n,l){
  var items=[[1,2,3],[4,5,6],[7,8,9]];
  var result=(items[m-l][n]);
  console.log(result);
  return result;
}

function traverseSouth(m,n,l){
  var items=[[1,2,3],[4,5,6],[7,8,9]];
  var result=(items[m+l][n]);
  console.log(result);
  return result;
}

function traverseNorthEast(m,n,l){
  var items=[[1,2,3],[4,5,6],[7,8,9]];
  var result=(items[m-l][n+l]);
  console.log(result);
  return result;
}

function traverseNorthWest(m,n,l){
  var items=[[1,2,3],[4,5,6],[7,8,9]];
  var result=(items[m-l][n-l]);
  console.log(result);
  return result;
}

function traverseSouthWest(m,n,l){
  var items=[[1,2,3],[4,5,6],[7,8,9]];
  var result=(items[m+l][n-l]);
  console.log(result);
  return result;
}

function traverseSouthEast(m,n,l){
  var items=[[1,2,3],[4,5,6],[7,8,9]];
  var result=(items[m+l][n+l]);
  console.log(result);
  return result;
}
