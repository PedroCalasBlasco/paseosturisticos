

const closeButtonSidebar = () => { 
    const buttonSidebar = document.querySelector("#buttonSidebar");
    buttonSidebar.style.display = 'none'; 
}

let cont = 0;

const openButtonSidebar = () => { 

    const buttonSidebar = document.querySelector("#buttonSidebar");
    
    if(cont % 2 == 0){ 
        buttonSidebar.style.display = 'block'; 
    }else{
        buttonSidebar.style.display = 'none';
    }

    cont++;
    
    

}