
const input=document.querySelector(".add-input input");
const inputBtn=document.querySelector(".add-input button");
const list= document.querySelector(".list");


input.onkeyup=()=>{
    let userData=input.value;
    if(userData.trim()!=0){
        inputBtn.classList.add("active");
    }else{
        inputBtn.classList.remove("active");
    }
}
showTasks();
inputBtn.onclick=()=>{
   let userData=input.value;
   let getLocalStorage=localStorage.getItem("NovaLista");
   if(getLocalStorage==null){
    arrList=[];
   }else{
    arrList=JSON.parse(getLocalStorage);
   }
   arrList.push(userData);
   localStorage.setItem("NovaLista",JSON.stringify(arrList));
  showTasks();
}; //call the showTasks function

function showTasks(){
    let getLocalStorage=localStorage.getItem("NovaLista");
    if(getLocalStorage==null){
        arrList=[];
       }else{
        arrList=JSON.parse(getLocalStorage);
       }
       const pendingNum=document.querySelector(".pandingNum");
       pendingNum.textContent=arrList.length;
       
       let newLiTag = "";
  arrList.forEach((element, index) => {
    newLiTag += `<li>${element}<button class="but" onclick="deleteTask(${index})"><i class="fas fa-trash"></i></button></li>`;
  });
  list.innerHTML = newLiTag; //adding new li tag inside ul tag
  input.value = ""; //on
}
function deleteTask(index){
    let getLocalStorageData = localStorage.getItem("NovaLista");
    arrList = JSON.parse(getLocalStorageData);
    arrList.splice(index, 1); //delete or remove the li
    localStorage.setItem("NovaLista", JSON.stringify(arrList));
    showTasks(); //call the showTasks function
  }