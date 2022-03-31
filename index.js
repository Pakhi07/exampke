var i=5;
function button1(){
    window.localStorage.setItem("food","pizza");
}  

function button3(){
    var bg=["https://wallpaperaccess.com/full/1976717.jpg","https://wallpaper.dog/large/20398905.jpg","https://wallpaperaccess.com/full/1976747.jpg","https://wallpaper.dog/large/20398908.jpg"]
    var index=Math.floor(Math.random() * 4);
    var im= bg[index];
    if(i==im)
    {
        button3()
    }
     document.body.style.backgroundImage = "url("+im+")";
     document.body.style.backgroundRepeat = "no-repeat";
     document.body.style.backgroundSize = "cover";
     i=im;
}
    

function button6(){
    console.log("I did it");
} 
