let id=0


document.getElementById('submit').addEventListener('click', ()=>{console.log("Hi")})//This was just a little test to make sure everything was linked up and working. 

//Below listens for a click on my submit button and then creates a new row with the information from the text inputs. 
document.getElementById('submit').addEventListener('click', ()=>{
let table = document.getElementById('list')
let row=table.insertRow(1)
row.setAttribute('id',`item-${id}` );
row.insertCell(0).innerHTML=document.getElementById('name').value;//These and the other insert cells take whatever value of the form inputs were. 
row.insertCell(1).innerHTML=document.getElementById('hometown').value;
row.insertCell(2).innerHTML=document.getElementById('tourName').value;
row.insertCell(3).innerHTML=document.getElementById('tourDate').value;
row.insertCell(4).innerHTML=document.getElementById('comments').value;
let remove=row.insertCell(5);
remove.appendChild(takeAway(id++));
let edit=row.insertCell(6);
edit.appendChild(reDo(id++));
document.getElementById('name').value=''//These make it so that after the submit button is selected the text input clear. 
document.getElementById('hometown').value='';
document.getElementById('tourName').value='';
document.getElementById('tourDate').value='';
document.getElementById('comments').value='';
});

//The below was an attempt at creating an Edit button but unfortunately I just couldn't figure out how to do this. I think we will be covering this with week 12 and CRUD apps. 
function reDo(id){
    let btn1=document.createElement('button')
    btn1.className='btn btn-primary';
    btn1.id=id;
    btn1.innerHTML="Edit";
    btn1.onclick=()=>{
       console.log(`Editing row with id: item-${id}`)
    }
       
return btn1
    }

function takeAway(id){
    let btn = document.createElement('button');
    btn.className='btn btn-secondary';
    btn.id=id;
    btn.innerHTML='Delete'
    btn.onclick=()=>{
    console.log(`Deleting row with id: item-${id}`);
    let deletedElement=document.getElementById(`item-${id}`);
    deletedElement.parentNode.removeChild(deletedElement);
}
return btn
}