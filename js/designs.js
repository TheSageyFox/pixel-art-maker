$('#sizePicker').submit(function(event){
  event.preventDefault();
  let height=$('#inputHeight').val();
  let width=$('#inputWidth').val();
  makeGrid(height,width);
}); //uses the input height and width to create grid/table

function makeGrid(row,col) {
  $('table').empty(); //clears table
   for(r=1; r <= row; r++){
    $('table').append('<tr></tr>');
   } //creates rows
   for(c=1; c <= col; c++){
    $('tr').append('<td></td>');
   } //creates columns within the rows
};

$('table').on('click', 'td', function addColor(){
  let color=$('#colorPicker').val();
  $(this).attr('style', 'background-color:' + color);
}); // creates colored blocks within the grid

$('table').on('contextmenu', 'td', function removeColor(event){
  event.preventDefault();
  $(this).removeAttr('style');
}); //uses right-click to remove color from blocks in the grid



