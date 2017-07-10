var num1 = 1;

var favoriteArray = [];

$(document).ready(function(){
  $("#formFavorite").submit(function(event){

    var nextItem = $("#favorite").val();
    favoriteArray.push(nextItem);

    var arraySize = favoriteArray.length;
    if(arraySize === 0){
      alert("empty array");
    } else if(arraySize <= 2){
      alert("add a few more items");
    } else {
      $("#firstItem").text(favoriteArray[arraySize-3]);
      $("#secondItem").text(favoriteArray[arraySize-2]);
      $("#thirdItem").text(favoriteArray[arraySize-1]);
    }
    event.preventDefault();
  });
});
