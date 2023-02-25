var screen = document.getElementById('screen');
function buttonclick(value){
    screen.value+=value;
}
function clearit()
{
    screen.value="";
}
function result()
{
    var text=screen.value;
    var result=eval(text);
   screen.value=result;  
}
