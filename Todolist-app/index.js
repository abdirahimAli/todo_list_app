let add_item_search_bar = document.getElementById('add_item');
let ul_task = document.getElementById('ul_tasks');
const image1=document.getElementById('img1');
const iconmoon=document.getElementById('icon-moon');
const toggleSwitch = document.querySelector('input[type="checkbox"]');
let Modeswitch = document.getElementById('Mode-switch');
let hellow = document.getElementById('hellow');


let itemsleft = document.getElementById('items-left');
let All = document.getElementById('All');
let Active = document.getElementById('Active');
let complet = document.getElementById('complet');
let Clearcompleted = document.getElementById('Clear-completed');
let k =0;


Clearcompleted.textContent = "Clear completed"

 /////////////////////////  Main function ///////////////////////////
function TOdo_item(){

  let itemtext = add_item_search_bar.value;


  if (itemtext &&  itemtext !=0){
   //  list creation   // 
    let newlist_item =  document.createElement("li");
    newlist_item.classList.add("element");   // element is a css class for styling the list item  
    ul_task.appendChild(newlist_item); 
    newlist_item.textContent = itemtext;
    add_item_search_bar.value = " ";

   // addEventListener //
    newlist_item.addEventListener('click', ()=>{
      newlist_item.classList.toggle('completed')
      if( newlist_item.classList.contains('completed')){
      k++;
      }
     else{k --;}
     itemsleft.textContent = ul_task.getElementsByTagName("li").length - k + " items left";
    })
    
     newlist_item.addEventListener('contextmenu', (e)=>{
          e.preventDefault();
          newlist_item.remove() 
     } ) 

} 

}

////////////////////////  Mode functions ///////////////////////
function image_Mode_D(){
  image1.src ="/Todolist-app/images/bg-desktop-light.jpg"

  
  iconmoon.src = "/Todolist-app/images/icon-moon.svg" 
  Modeswitch.textContent = "Light Mode";
}
function image_Mode_L(){

  image1.src ="/Todolist-app/images/bg-desktop-dark.jpg"
  iconmoon.src ="/Todolist-app/images/icon-sun.svg"
  Modeswitch.textContent = "Dark Mode";
}

function change_mode(e){
  if (e.target.checked) {
      document.documentElement.setAttribute('data-theme', 'dark');
       image_Mode_D();
    } else {
      document.documentElement.setAttribute('data-theme', 'light');
      
      image_Mode_L();
    }
}


/////////////////  Events Functions   //////////////////////

function display_All_tasks(){

  for (const n of ul_task.children) {
    if (n.classList.contains('removed')){
       n.style.display="none";  // the item is headen
      }
      else{n.style.display="block"}
    
  }
  }

function display_completed_tasks(){
  
  for (const n of ul_task.children) {
   
      if(n.classList.contains('completed')){
        
        n.style.display="block"
      }
      else{n.style.display="none"}
      
      if (n.classList.contains('removed')){
        n.style.display="none";  // the item is headen
       }
    
  }
}



function display_active_tasks() {
  display_All_tasks();
  for (const n of ul_task.children) {
    if (n.classList.contains('completed') | n.classList.contains('removed') ){
      n.style.display="none"; 
      }
    } 
}

function Clear_completed() {


for (const item of ul_task.children) {
  if (item.classList.contains('completed')){
    item.classList.add("removed")
    item.style.display="none";  
    }
  }

 
  }





////////////  addEventListener  /////////////////////

toggleSwitch.addEventListener('change',change_mode )


// add_item_search_bar.addEventListener('keypress', ()=> {
  
  
//   TOdo_item(); 
//   itemsleft.textContent = ul_task.getElementsByTagName("li").length -k + " items left";
 

// });


add_item_search_bar.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    TOdo_item(); 
  itemsleft.textContent = ul_task.getElementsByTagName("li").length -k + " items left";
 
    }
});
add_item_search_bar.addEventListener('focusout', ()=> {
  
  
  TOdo_item(); 
  itemsleft.textContent = ul_task.getElementsByTagName("li").length -k + " items left";
 

});





complet.addEventListener('click', ()=>{
  display_completed_tasks(); 
})


All.addEventListener('click', ()=>{
  display_All_tasks();
})

Active.addEventListener('click', ()=>{
  display_active_tasks();
})

Clearcompleted.addEventListener('click', ()=>{
  
  // const length = ul_task.getElementsByTagName("li").length;//// there is an issue /////
   Clear_completed();
})


