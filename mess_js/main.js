secimarray= document.querySelectorAll(".box");
secimarray.forEach(function (item,index){
console.log(index+" . element -> "+ item.innerHTML);
});
const selectedSeats=[];
const contain= document.querySelector('.container');
var seats=[];
var items=document.querySelectorAll('.box');
items.forEach(function(item){
seats.push(item);
});
if (contain){
contain.addEventListener("click",function(e){
console.log(e.target.classList);
if(e.target.classList.contains('box'))
 { 
e.target.classList.toggle("clicked");
} 
writetodatabase(); 
});
} else {
alert("seems null");
}
function writetodatabase()
{
seats.forEach(function(item,index){
if (item.classList.contains("clicked"))
{
selectedSeats.push(index);
};
});
localStorage.setItem("selecteditems",JSON.stringify(selectedSeats));
localStorage.setItem("bgColor","white");
}
function getfromlocalstorage()
{
if(localStorage.getItem("selecteditems") != undefined)
{
const selectedItems=JSON.parse(localStorage.getItem("selecteditems"));
if (selectedItems!=null && selectedItems.length>0)
{
selectedItems.forEach(function(item,index)
{
seats[item].classList.add("clicked");
});
}
}
else
{
alert("seems null");
}
}
