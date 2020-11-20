//slide up
async function slide(){
    var eleslide = document.querySelector(".slider");
    eleslide.classList.add("slider-move");
    await sleep(3000);
    eleslide.remove();
    
}


function sleep(ms){
        return new Promise(resolve => setTimeout(resolve,ms));
    }
