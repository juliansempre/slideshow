let count = 0;
document.getElementById("radio1").checked = true;

nextImage();
var ir = setInterval(function(){ nextImage(); }, 3000);
 

function nextImage(){
 
count++;
if(count>4){
count = 1;
}
document.getElementById("radio" +count).checked = true;
}

function vo(){
    if(count<1){
        count = 5;
        }
    count--;
    document.getElementById("radio" +count).checked = true;
    }
