# Documentation

This documentation provides the information about ```m x n``` matrix traversal using ```JavaScript``` ```2D-array```

### Available functions

#### 1) matrixCreator


```
matrixCreator(n_of_rows,n_of_columns);
```

Function to create matrix.


This function is used for dynamically creating a matrix with specified number of rows and columns. It takes value of each index through a user prompt input.<br/>
__Parameter Description:__<br/>
_n_of_rows_ - Number of rows in matrix<br/>
_n_of_columns_ - Number of column in matrix<br/>

__Return Value:__<br/>
Returns a 2D array

__Example:__
Creating 3x3 matrix

```
matrixCreator(3,3);
```

#### 2) traverseEast

```
traverseEast(m,n,l,arr);
```

Function to Traverse East

This function is used to traverse in east direction from the specific point in an array. The origin point of traversal is decided by ```m``` and ```n``` . It will traverse in east direction for number of elements passed as a value of ```l```.

__Parameters Description:__<br/>
_m_ - row index<br/>
_n_ - column index<br/>
_l_ - elements to traverse<br/>
_arr_ - array/matrix to traverse into<br/>

__Return Value:__<br/>
Returns an element at which traversing ends.

__Example__
Traversing 1 element towards east from (1,1)

```
var matrix=matrixCreator(3,3);
traverseEast(1,1,1,matrix);
```

#### 3) traverseWest

```
traverseWest(m,n,l,arr);
```
Function to Traverse West

This function is used to traverse in west direction from the specific point in an array. The origin point of traversal is decided by ```m``` and ```n``` . It will traverse in west direction for number of elements passed as a value of ```l```.

__Parameters Description:__<br/>
_m_ - row index<br/>
_n_ - column index<br/>
_l_ - elements to traverse<br/>
_arr_ - array/matrix to traverse into<br/>

__Return Value:__<br/>
Returns an element at which traversing ends.

__Example:__
Traversing 1 element towards west from (1,1)

```
var matrix=matrixCreator(3,3);
traverseWest(1,1,1,matrix);
```


#### 4) traverseNorth

```
traverseNorth(m,n,l,arr);
```
Function to Traverse North

This function is used to traverse in north direction from the specific point in an array. The origin point of traversal is decided by ```m``` and ```n```. It will traverse in north direction for number elements passed as a value of ```l```.

__Parameters Description:__<br/>
_m_ - row index<br/>
_n_ - column index<br/>
_l_ - elements to traverse<br/>
_arr_ - array/matrix to traverse into<br/>

__Return Value:__<br/>
Returns an element at which traversing ends.

__Example:__
Traversing 1 element towards north from (1,1)

```
var matrix=matrixCreator(3,3);
traverseNorth(1,1,1,matrix);
```

#### 5) traverseSouth

```
traverseSouth(m,n,l,arr);
```
Function to Traverse South

This function is used to traverse in south direction from the specific point in an array. The origin point of traversal is decided from the ```m``` and ```n``` passed as parameter. It will traverse in south direction for number of elements passed as a value of ```l``` in parameter.

__Parameters Description:__<br/>
_m_ - row index<br/>
_n_ - column index<br/>
_l_ - elements to traverse<br/>
_arr_ - array/matrix to traverse into<br/>

__Return Value:__<br/>
Returns an element at which traversing ends.

__Example:__
Traversing 1 element towards south from (1,1)

```
var matrix=matrixCreator(3,3);
traverseSouth(1,1,1,matrix);
```
#### 6) traverseNorthWest

```
traverseNorthWest(m,n,l,arr);
```
Function to Traverse North-West

This function is used to traverse in north-west direction from the specific point in an array. The origin point of traversal is decided by ```m``` and ```n```. It will traverse in north-west direction for number of elements passed as a value of ```l```.

__Parameters Description:__<br/>
_m_ - row index<br/>
_n_ - column index<br/>
_l_ - elements to traverse<br/>
_arr_ - array/matrix to traverse into<br/>

__Return Value:__<br/>
Returns an element at which traversing ends.

__Example:__
Traversing 1 element towards north-west from (1,1)

```
var matrix=matrixCreator(3,3);
traverseNorthWest(1,1,1,matrix);
```

#### 7) traverseNorthEast

```
traverseNorthEast(m,n,l,arr);
```

Function to Traverse North-East

This function is used to traverse in north-east direction from the specific point in an array. The origin point of traversal is decided by ```m``` and ```n```. It will traverse in north-east direction for number of elements passed as a value of ```l```.

__Parameters Description:__<br/>
_m_ - row index<br/>
_n_ - column index<br/>
_l_ - elements to traverse<br/>
_arr_ - array/matrix to traverse into<br/>

__Return Value:__<br/>
Returns an element at which traversing ends.

__Example:__
Traversing 1 element towards north-east from (1,1)

```
var matrix=matrixCreator(3,3);
traverseNorthEast(1,1,1,matrix);
```

#### 8) traverseSouthEast

```
traverseSouthEast(m,n,l,arr);
```

Function to Traverse South-East

This function is used to traverse in south-east direction from the specific point in an array. The origin point of traversal is decided from the ```m``` and ```n```. It will traverse in south-east direction for number of elements passed as a value of ```l```.

__Parameters Description:__<br/>
_m_ - row index<br/>
_n_ - column index<br/>
_l_ - elements to traverse<br/>
_arr_ - array/matrix to traverse into<br/>

__Return Value:__<br/>
Returns an element at which traversing ends.

__Example:__
Traversing 1 element towards south-east from (1,1)

```
var matrix=matrixCreator(3,3);
traverseSouthEast(1,1,1,matrix);
```

#### 9) traverseSouthWest

```
traverseSouthWest(m,n,l,arr);
```
Function to Traverse South-West

This function is used to traverse in south-west direction from the specific point in an array. The origin point of traversal is decided from the ```m``` and ```n```. It will traverse in south-west direction for number of elements passed as a value of ```l```.

__Parameters Description:__<br/>
_m_ - row index<br/>
_n_ - column index<br/>
_l_ - elements to traverse<br/>
_arr_ - array/matrix to traverse into<br/>

__Return Value:__<br/>
Returns an element at which traversing ends.

__Example:__
Traversing 1 element towards south-west from (1,1)

```
var matrix=matrixCreator(3,3);
traverseSouthWest(1,1,1,matrix);
```
