// let screen=document.getElementById("screen")
// buttons=document.querySelectorAll("button")
// let screenValue=''
// for(item of buttons){
//     item.addEventListener('click',(e)=>{
//         buttonText=e.target.innerText;
//         console.log("buttonText",buttonText);
//         if(buttonText=="X"){
//             buttonText="*";
//             screenValue+=buttonText
//             screen.value=screenValue
//         }
//         else if(buttonText=="+"){
//             screenValue+=buttonText
//             screen.value=screenValue
//         }
//         else if(buttonText=="-"){
//             screenValue+=buttonText
//             screen.value=screenValue
//         }
//         else if(buttonText=="/"){
//             screenValue+=buttonText
//             screen.value=screenValue
//         }
//         else if(buttonText=="."){
//             screenValue+=buttonText
//             screen.value=screenValue
//         }else if(buttonText=="%"){
//             screenValue+=buttonText
//             screen.value=screenValue
//         }
//         else if(buttonText=='c'){
//             screenValue=""
//             screen.value = screenValue;
//         }
//         else if(buttonText=='='){
//             screen.value= eval(screenValue);
//         }
//         else if(buttonText=="1"){
//             screenValue+=buttonText
//             screen.value=screenValue
//         }
//         else if(buttonText=="2"){
//             screenValue+=buttonText
//             screen.value=screenValue
//         }
//         else if(buttonText=="3"){
//             screenValue+=buttonText
//             screen.value=screenValue
//         }
//         else if(buttonText=="4"){
//             screenValue+=buttonText
//             screen.value=screenValue
//         }
//         else if(buttonText=="5"){
//             screenValue+=buttonText
//             screen.value=screenValue
//         }
//         else if(buttonText=="6"){
//             screenValue+=buttonText
//             screen.value=screenValue
//         }
//         else if(buttonText=="7"){
//             screenValue+=buttonText
//             screen.value=screenValue
//         }
//         else if(buttonText=="8"){
//             screenValue+=buttonText
//             screen.value=screenValue
//         }
//         else if(buttonText=="9"){
//             screenValue+=buttonText
//             screen.value=screenValue
//         }
//         else if(buttonText=="0"){
//             screenValue+=buttonText
//             screen.value=screenValue
//         }
//         else{
//             screenValue+=buttonText;
//             Screen.value=screenValue;
//         }
//     })
// }

function disply(val){
    document.getElementById("output").value+=val
}
function compute()
{
    let x=document.getElementById("output").value
    let y=eval(x);
    document.getElementById("output").value=y
}
function ac(){
    let text=document.getElementById("output").value;
    text=text.slice(0,-1);
    document.getElementById('output').value=text;
}
function c(){
    document.getElementById("output").value=""
}
function solve(){
    let exp=document.getElementById('output').value;
    let solu=eval(exp);
    document.getElementById('output').value=solu;
}
function percent(){
    num=document.getElementById('output').value;
    per=eval(num/100);
    document.getElementById('output').value=per;
}