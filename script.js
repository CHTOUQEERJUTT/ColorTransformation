var rect = document.querySelector("#center");
function mousemove(){
    
rect.addEventListener("mousemove",function(details){
    var rectlocation =rect.getBoundingClientRect();
   var insiderectval =  details.clientX-rectlocation.left;
    if(insiderectval<rectlocation.width/2){
        var redcolor = gsap.utils.mapRange(0,rectlocation.width/2,255,0,insiderectval)
        gsap.to(rect,{
            backgroundColor:`rgb(${redcolor},0,0)`,
            ease:Power3
        })

        

    }else{
       var bluecolor =  gsap.utils.mapRange(rectlocation.width/2,rectlocation.width,0,255,insiderectval)
        gsap.to(rect,{
            backgroundColor:`rgb(0,0,${bluecolor})`,
            ease:Power3
        })
    }


})
}
function mouseleave(){
    rect.addEventListener("mouseleave",function(){
        gsap.to(rect,{
            backgroundColor:"white",
    })
    })
}
mousemove();
mouseleave();