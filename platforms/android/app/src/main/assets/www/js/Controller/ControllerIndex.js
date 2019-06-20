$(document).ready(function () {
    $('.tabs').tabs();
});
function Tab1(){
    alert("Este es uno")
}
function Tab2(){
    alert("Este es dos")
}
function Tab3(){
    alert("Este es tres")
}
function convertCelsius(farenheit){
    let content ='';
    var Celsius = (parseInt(farenheit)-32)*5/9;
    content = `
       <div class="card z-depth-2">
            <div class="card-content">
                <span class="card-title">Celsius resultante = ${Celsius}</span>
            </div>
       </div> 
    `;
    $('#result').html(content);
}
function Operate(){
    var Farenheit = $('#Farenheit').val();
    
    if(CheckDecimal(Farenheit)){
        convertCelsius(Farenheit);
    }
    else{
        alert("no es decimal")
    }
}

document.getElementById("ButtonClick").addEventListener("click", Operate);
document.getElementById("Tab1").addEventListener("click", Tab1);
document.getElementById("Tab2").addEventListener("click", Tab2);
document.getElementById("Tab3").addEventListener("click", Tab3);