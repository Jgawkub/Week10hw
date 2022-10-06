let id=0


document.getElementById('submit').addEventListener('click', ()=>{console.log("Hi")})


document.getElementById('submit').addEventListener('click', ()=>{
let table = document.getElementById('list')
let row=table.insertRow(1)
row.setAttribute('id',`item-${id}` );
row.insertCell(0).innerHTML=document.getElementById('name').value;
row.insertCell(1).innerHTML=document.getElementById('hometown').value;
row.insertCell(2).innerHTML=document.getElementById('tourName').value;
row.insertCell(3).innerHTML=document.getElementById('tourDate').value;
row.insertCell(4).innerHTML=document.getElementById('comments').value;

});