

const loadRightSection = (value) =>  { 

    fetch("assets/json/recorridos.geojson")
        .then(res => res.json())
        .then(data => {
            const rightSection = document.querySelector("#rightsection");

            rightSection.innerHTML = ``;
            
            rightSection.innerHTML = `
                <div class="container fluid mt-4">
                    <div class="row mt-4">
                        <div class="col col-12 mt-2 pl-2 paddigs"> <h2>${data.features[value-1].properties.nombre}</h2></div>
                        <div class="col col-12 mt-3 paddigs"><h6>${data.features[value-1].properties.descripcion}</h6></div>
                        <div class="col col-12 mt-2 text-center paddigs"><img src="${data.features[value-1].properties.img1}" width="100%" class="img-fluid"></div> 
                        <div class="col col-12 paddigs">
                            <div class="row mt-4 rightSectionProp">
                                <div class="col col-4">
                                    <img src="assets/img/logos/sidelogo1.png" class="pt-2 pb-2" width="16%" ><span class="pl-1 pt-4" style="margin-left: 9px;font-size: 0.9rem;">${data.features[value-1].properties.recorrido}</span>
                                </div>
                                <div class="col col-4">
                                    <img src="assets/img/logos/sidelogo2.png" class="pt-2 pb-2" width="16%"><span class="pt-3" style="margin-left: 9px;font-size: 0.9rem;"> ${data.features[value-1].properties.duracion}</span>
                                </div>
                                <div class="col col-4">
                                    <img src="assets/img/logos/sidelogo3.png" class="pt-2 pb-2" width="16%"><span class="pt-3" style="margin-left: 9px;font-size: 0.9rem;">Recorridos a Pie</span>
                                </div>
                            </div>
                        </div>
                        <div class="col col-12 pt-2 pb-2 mt-2 paddigs text-center">
                            <span>hacé click para reproducir la audioguía</span>
                            <iframe width="90%" height="70" scrolling="no" frameborder="no" allow="autoplay" src=${data.features[value-1].properties.audio}"></iframe>
                            
                        </div>
                        <div class="col col-12 pt-2 pb-2 mt-1 paddigs text-center">
                            <span>o escuchala en nuestro canal de Spotify</span>
                            <img src="${data.features[value-1].properties.img2}" width="40%" class="img-fluid"> 
                        </div>
                        <div class="col col-12 text-end rightSectionEnd mt-4">
                            <p>MUNICIPALIDAD DE SANTA FE</p>
                        </div>
                    </div>
                </div>
            `;

            

            const titlePaseosResponsive = document.querySelector("#titlePaseosResponsive");

            titlePaseosResponsive.innerHTML = ``;

            titlePaseosResponsive.innerHTML = `
                <div class="row">
                    <div class="col col-12 mt-2 text-end"> <h2>${data.features[value-1].properties.nombre}</h2></div>
                </div>
            `;


            const bodyPaseosResponsive = document.querySelector("#bodyPaseosResponsive");

            bodyPaseosResponsive.innerHTML = ``;

            bodyPaseosResponsive.innerHTML = `
                <div class="row">
                    <div class="col col-12 mt-3 paddigs"><h6>${data.features[value-1].properties.descripcion}</h6></div>
                    <div class="col col-12 mt-3 text-center paddigs"><img src="${data.features[value-1].properties.img1}" width="100%" class="img-fluid"></div> 
                    <div class="col col-12 paddigs">
                        <div class="row mt-4 rightSectionProp">
                            <div class="col col-4">
                                <img src="assets/img/logos/sidelogo1.png" class="pt-2" width="20%"><span class="pl-1 pt-4">${data.features[value-1].properties.recorrido}</span>
                            </div>
                            <div class="col col-4">
                                <img src="assets/img/logos/sidelogo2.png" class="pt-2" width="20%"><span class="pt-3"> ${data.features[value-1].properties.duracion}</span>
                            </div>
                            <div class="col col-4">
                                <img src="assets/img/logos/sidelogo3.png" class="pt-2" width="20%"><span class="pt-3">Recorridos a Pie</span>
                            </div>
                        </div>
                    </div>
                    <div class="col col-12 pt-2 pb-2 mt-2 paddigs">
                        <audio controls width="250" height="32"><source src="#" type="audio/mpeg">Your browser does not support the audio element.</audio>
                    </div>
                    <div class="col col-12 pt-2 pb-2 mt-2 paddigs">
                        <img src="${data.features[value-1].properties.img2}" width="40%" class="img-fluid"> 
                    </div>
                    <div class="col col-12 text-end rightSectionEnd mt-2">
                            <p>MUNICIPALIDAD DE SANTA FE</p>
                    </div>
                </div>
            `;


        })
        .catch(err => console.error(err));


}
