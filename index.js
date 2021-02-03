let input = document.querySelector('#todo');
let btn = document.querySelector('#btn');
let clear = document.querySelector('#Clear-all');
let list = document.querySelector('#list');
let el = document.getElementsByTagName('li');
const Time = document.getElementById('Time');
    
const currentTime = new Date();
const display = Time.innerText = currentTime.toDateString();
    
// let's add the elements 
     
function Items (){
   btn.addEventListener('click', ()=>{
      let text = input.value;
      if(text === ""){
         alert('You must enter a value below');
      }else {
         // Create Item
         let Li = document.createElement("li");
         list.insertBefore(Li, list.childNodes[0]);
         input.value ="";
         console.log(list.childNodes);
         
         //  Create a text container element
          const textContainer = document.createElement('text');
          textContainer.innerText = text; 
          Li.appendChild(textContainer);

         //  Add a delete button
         const deleteButton = document.createElement("i");
         deleteButton.classList.add("fa","fa-trash");
         Li.appendChild(deleteButton);
         deleteButton.addEventListener('click', function (){
            Li.remove();
         });
               // Add a check button 
      const checkbutton = document.createElement("i");
      checkbutton.classList.add("fa","fa-check");
      Li.appendChild(checkbutton);
      checkbutton.addEventListener('click', function (){
         Li.classList.toggle("done");
      });
         // // Add a checkbox for the strike through
         // const checkbox = document.createElement("input");
         // checkbox.type= "checkbox";
         // deleteButton.classList.add("fa", "fa-trash");
         // Li.prepend(checkbox);
         // checkbox.addEventListener('change', function(){
         //    if(checkbox.checked) Li.classList.add("done");
         //    else Li.classList.remove("done");
         // });
      }
   })
}
Items();

// clear all function 
clear.onclick = ()=>{
   list.innerHTML = "";
}
 
input.addEventListener('keyup', function(e){
   if (e.keyCode === 13){
   let text = input.value;
   if(text === ""){
      alert('You must enter a value below');
   }else {
      // Create Item
      let Li = document.createElement("li");
      list.insertBefore(Li, list.childNodes[0]);
      input.value ="";
      
      //  Create a text container element
       const textContainer = document.createElement('text');
       textContainer.innerText = text; 
       Li.appendChild(textContainer);

      //  Add a delete button
      const deleteButton = document.createElement("i");
      deleteButton.classList.add("fa","fa-trash");
      Li.appendChild(deleteButton);
      deleteButton.addEventListener('click', function (){
         Li.remove();
      });
      // Add a check button 
      const checkbutton = document.createElement("i");
      checkbutton.classList.add("fa","fa-check");
      Li.appendChild(checkbutton);
      checkbutton.addEventListener('click', function (){
         Li.classList.toggle("done");
      });
      // Add a checkbox for the strike through
      // const checkbox = document.createElement("input");
      // checkbox.type= "checkbox";
      // deleteButton.classList.add("fa", "fa-trash");
      // Li.prepend(checkbox);
      // checkbox.addEventListener('change', function(){
      //    if(checkbox.checked) Li.classList.add("done");
      //    else Li.classList.remove("done");
      // });
   }
}
});





   
   





