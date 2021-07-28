var sections= document.querySelectorAll(".nav-men a");

for(var i=0;i<sections.length;i++){
    sections[i].addEventListener("click",function(event){
        event.preventDefault();
        var secname = this.textContent.trim().toLowerCase();
        //console.log(secname);
        var targetsec = document.getElementById(secname);
        //console.log(targetsec);

        var scroll=setInterval(function(){
            var cord=targetsec.getBoundingClientRect();  
            if(targetsec == contact &&  cord.top + cord.height <= screen.availHeight){
                clearInterval(scroll);
                return;
            }  
            if(cord.bottom <=cord.height ){
                clearInterval(scroll);
                return;
            }    
            window.scrollBy(0,10);
        },7);
    });
}