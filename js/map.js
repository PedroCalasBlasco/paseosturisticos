function getColor(data)  {
    return data == 1 ? 'red' :
           data == 2 ? 'blue' :
           data == 3 ? 'purple' :
           data == 4 ? 'green' :
           data == 5 ? 'darkred' :
           data == 6 ? 'cadetblue' :
           data == 7 ? 'darkpurple' :
           data == 8 ? 'orange' :
           data == 9 ? 'darkgreen' :  '#FEB24C';
}

function getIcon(data)  {
    return data == 1 ? L.icon({iconUrl: './assets/img/logos/uno.png', iconSize: [38, 44]}) :
        data == 2 ? L.icon({iconUrl: './assets/img/logos/dos.png', iconSize: [38, 44]}) :
        data == 3 ? L.icon({iconUrl: './assets/img/logos/tres.png', iconSize: [38, 44]}) :
        data == 4 ? L.icon({iconUrl: './assets/img/logos/cuatro.png', iconSize: [38, 44]}) :
        data == 5 ? L.icon({iconUrl: './assets/img/logos/cinco.png', iconSize: [38, 44]}) :
        data == 6 ? L.icon({iconUrl: './assets/img/logos/seis.png', iconSize: [38, 44]}) :
        data == 7 ? L.icon({iconUrl: './assets/img/logos/siete.png', iconSize: [38, 44]}) :
        data == 8 ? L.icon({iconUrl: './assets/img/logos/ocho.png', iconSize: [38, 44]}) :
        data == 9 ? L.icon({iconUrl: './assets/img/logos/nueve.png', iconSize: [38, 44]}) :
        data == 10 ? L.icon({iconUrl: './assets/img/logos/diez.png', iconSize: [38, 44]}) :
        data == 11 ? L.icon({iconUrl: './assets/img/logos/once.png', iconSize: [38, 44]}) :
        data == 12 ? L.icon({iconUrl: './assets/img/logos/doce.png', iconSize: [38, 44]}) :
        data == 13 ? L.icon({iconUrl: './assets/img/logos/trece.png', iconSize: [38, 44]}) :
        data == 14 ? L.icon({iconUrl: './assets/img/logos/catorce.png', iconSize: [38, 44]}) :
        data == 15 ? L.icon({iconUrl: './assets/img/logos/quince.png', iconSize: [38, 44]}) :
        data == 16 ? L.icon({iconUrl: './assets/img/logos/dieciseis.png', iconSize: [38, 44]}) :
        data == 17 ? L.icon({iconUrl: './assets/img/logos/diecisiete.png', iconSize: [38, 44]}) :
        data == 18 ? L.icon({iconUrl: './assets/img/logos/dieciocho.png', iconSize: [38, 44]}) :
        data == 19 ? L.icon({iconUrl: './assets/img/logos/diecinueve.png', iconSize: [38, 44]}) : L.icon({iconUrl: '../assets/img/logos/ball1.png', iconSize: [38, 44]});
}

function getIconHover(data)  {
    return data == 1 ? L.icon({iconUrl: './assets/img/logos/unohover.png', iconSize: [38, 44]}) :
        data == 2 ? L.icon({iconUrl: './assets/img/logos/doshover.png', iconSize: [38, 44]}) :
        data == 3 ? L.icon({iconUrl: './assets/img/logos/treshover.png', iconSize: [38, 44]}) :
        data == 4 ? L.icon({iconUrl: './assets/img/logos/cuatrohover.png', iconSize: [38, 44]}) :
        data == 5 ? L.icon({iconUrl: './assets/img/logos/cincohover.png', iconSize: [38, 44]}) :
        data == 6 ? L.icon({iconUrl: './assets/img/logos/seishover.png', iconSize: [38, 44]}) :
        data == 7 ? L.icon({iconUrl: './assets/img/logos/sietehover.png', iconSize: [38, 44]}) :
        data == 8 ? L.icon({iconUrl: './assets/img/logos/ochohover.png', iconSize: [38, 44]}) :
        data == 9 ? L.icon({iconUrl: './assets/img/logos/nuevehover.png', iconSize: [38, 44]}) :
        data == 10 ? L.icon({iconUrl: './assets/img/logos/diezhover.png', iconSize: [38, 44]}) :
        data == 11 ? L.icon({iconUrl: './assets/img/logos/oncehover.png', iconSize: [38, 44]}) :
        data == 12 ? L.icon({iconUrl: './assets/img/logos/docehover.png', iconSize: [38, 44]}) :
        data == 13 ? L.icon({iconUrl: './assets/img/logos/trecehover.png', iconSize: [38, 44]}) :
        data == 14 ? L.icon({iconUrl: './assets/img/logos/catorcehover.png', iconSize: [38, 44]}) :
        data == 15 ? L.icon({iconUrl: './assets/img/logos/quincehover.png', iconSize: [38, 44]}) :
        data == 16 ? L.icon({iconUrl: './assets/img/logos/dieciseishover.png', iconSize: [38, 44]}) :
        data == 17 ? L.icon({iconUrl: './assets/img/logos/diecisietehover.png', iconSize: [38, 44]}) :
        data == 18 ? L.icon({iconUrl: './assets/img/logos/dieciochohover.png', iconSize: [38, 44]}) :
        data == 19 ? L.icon({iconUrl: './assets/img/logos/ball1.png', iconSize: [38, 44]}) : L.icon({iconUrl: '../assets/img/logos/ball1.png', iconSize: [38, 44]});
}

function getZoom(data)  {
    return data == 1 ? 18 :
        data == 2 ? 17 : 
        data == 3 ? 16 : 
        data == 4 ? 16 :
        data == 5 ? 17 : 
        data == 6 ? 18 : 
        data == 7 ? 16 :
        data == 8 ? 18 : 
        data == 9 ? 15 : 13
}

function getCoordinates(data)  {
    return data == 1 ? [-31.657462, -60.71049] :
        data == 2 ? [-31.657462, -60.71049] : 
        data == 3 ? [-31.6390, -60.6869] : 
        data == 4 ? [-31.6332, -60.6797] :
        data == 5 ? [-31.6493, -60.70736] : 
        data == 6 ? [-31.6578, -60.70986] : 
        data == 7 ? [-31.6501, -60.70048]  :
        data == 8 ? [-31.6161, -60.7189]  : 
        data == 9 ? [-31.6517, -60.7068]  : [-31.657462, -60.71049]
}


var map;


//     map.on('zoomend', function() {
//         console.log("HOLA")
//         if (map.getZoom() <12){
//             map.removeLayer(puntosTuristicos);//1st geoJSON layer
//         }
//         else {
//             map.addLayer(puntosTuristicos);

//         } //all layers are to be switched on, when zoom level reach 10
//    });




const featureSelected = (e) => {

    const welcomeDiv = document.querySelector("#welcome");
    welcomeDiv.style.display = "none";
    
    const mapDiv = document.querySelector("#map");
    mapDiv.style.display = "block";

    const rightSectionDiv = document.querySelector("#rightsection");
    rightSectionDiv.style.display = "block";

    if(map != undefined || map != null){
        map.remove();
    }
       
    map = L.map('map').setView([-31.657462, -60.71049], 13);

    map.options.minZoom = 9;
    map.options.maxZoom = 18;

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    var greenIcon = L.icon({
        iconUrl: '../assets/img/logos/ball1.png',
        iconSize:     [38, 44], 
        // iconAnchor:   [2, 2], 
        // popupAnchor:  [-3, -3] 
    });


    fetch("assets/json/puntos_turisticos.geojson")
    .then(res => res.json())
    .then(data => {
        puntosTuristicos = L.geoJson(data,{
            onEachFeature: function(feature, layer) {
                
                    layer.bindPopup(`<h5 class='text-left' style='color:#13b990;'> ${feature.properties.nombre} </h5><button class='btn' style='background-color:rgb(85,86,85);color:white;' onClick="openSidebar('${feature.properties.nombre}', '${feature.properties.direccion}', '${feature.properties.des}', '${feature.properties.img1}', '${feature.properties.img2}', '${feature.properties.img3}', '${feature.properties.audio}')">+INFO</button>`);
                    //layer.bindPopup(`<h5 class='text-center'> ${feature.properties.nombre} </h5><button class='btn btn-success' onClick="openSidebar('${feature.properties.nombre}', '${feature.properties.direccion}', '${feature.properties.des}')">+INFO</button>`);

                // layer.setIcon(L.AwesomeMarkers.icon({ icon: getIcon(feature.properties.tipo), prefix:'fa', markerColor: getColor(feature.properties.circuito)}));
                layer.setIcon(getIcon(feature.properties.id2));
                layer.on('mouseover', function (event) {
                    
                    layer.setIcon(getIconHover(event.target.feature.properties.id2));
                });
                layer.on('mouseout', function (event) {
                    layer.setIcon(getIcon(event.target.feature.properties.id2));
                });   
            },
            filter: function(feature) {
                if (feature.properties.circuito == parseInt(e)) {
                    map.flyTo(getCoordinates(feature.properties.circuito), getZoom(feature.properties.circuito));
                    return true;
                }
            },
        }).addTo(map);
    })
    .catch(err => console.error(err));
        //
        
        

    fetch("assets/json/recorridos.geojson")
        .then(res => res.json())
        .then(data => {
            recorridosTuristicos = L.geoJson(data,{
                style: function(feature) {
                    return {
                      color: 'rgb(85,86,85)',
                      weight: 3,
                      dashArray: '10, 10', 
                      dashOffset: '0'
                    };
                },
                filter: function(feature) {
                    if (feature.properties.id == parseInt(e)) {
                        return true;
                    }
                },
        }).addTo(map);
    })
    .catch(err => console.error(err));







}


const welcomeClicked = () => {
    const welcomeDiv = document.querySelector("#welcome");
    welcomeDiv.style.display = "block";

    const mapDiv = document.querySelector("#map");
    mapDiv.style.display = "none";

    const rightSectionDiv = document.querySelector("#rightsection");
    rightSectionDiv.style.display = "none";
}



