const closeSidebar = () => { 
    const sidebar = document.querySelector("#sidebar1");
    sidebar.style.display = 'none'; 

    const rightSectionDiv = document.querySelector("#rightsection");
    rightSectionDiv.style.display = "block";
}


const openSidebar = ((nombre, direccion, descripcion, img1, img2, img3, audio) => { 
//const openSidebar = (() => { 

    const rightSectionDiv = document.querySelector("#rightsection");
    rightSectionDiv.style.display = "none";


    const sidebar = document.querySelector("#sidebar1");
    sidebar.style.display = 'block'; 
   
    const sidebarContent = document.querySelector("#sidebarContent");  

    sidebarContent.innerHTML = ``;

    sidebarContent.innerHTML = 

        `
        <div>
            <a onClick="closeSidebar()">X</a>
        </div>
        <div class="sidebarContentEncabezado">
            <h2 class="mt-2 ml-5 pl-4 pr-4">${nombre}</h2>
            <h4 class="mt-2">${direccion}</h4>
        </div>
        <div class="sidebarContentAudio">
            <div class="row">
                <div class="col col-6 pt-2 pb-2">
                    <span>hacé click para reproducir la audioguía</span>
                    <iframe width="90%" height="70" frameborder="no" allow="autoplay" src="${audio}"></iframe>
                </div>
                <div class="col col-6 text-end pt-3 pb-2">
                    <span>o escuchala en nuestro canal de Spotify</span>
                    <img src="${img3}" class="img-fluid w-20" alt="...">
                </div>
            </div>
        </div>
        <div class="sidebarContentCuerpo">
            <h5 class="text-justify mt-3">${descripcion}</h5> 
        </div>
        <div id="carouselExampleControls" class="carousel slide sidebarContentCarousel" data-bs-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src="${img1}" class="img-fluid w-100" alt="...">
                </div>
                <div class="carousel-item">
                    <img src="${img2}" class="img-fluid w-100" alt="..."> 
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>   
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
        <div class="mt-5 text-center">
        
        </div> 
        `;


})      












