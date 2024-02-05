let coors;
navigator.geolocation.getCurrentPosition(
  (pos) => {
    console.log(pos.coords);
    coors = pos.coors;
    return pos.coors;
  },
  () => {
    console.log("No se pudo acceder a tu ubicación");
  },
  {
    enableHighAccuracy: true,
    maximumAge: 30000,
    timeout: 27000,
  }
);
export { coors };

// const cordenadas =  geolocal();
// console.log(`Latitud: ${cordenadas.latitude}`);
// console.log(`Longitud: ${cordenadas.longitude}`);
// console.log(`Más o menos ${cordenadas.acurracy} metros`);

//Funccion para obtenerls ubicacion por gps. La funcion recibe 3 parametros.
//La primera es una funccion para el caso de exito, a esta asu vez se le pasa un
//objeto que contine toda la informacion con respecto a la informacion
//solicitada. El segundo argumento es una funcion en caso de fracaso. Tambien se
//le pasa un objeto con informacion del error de peticion. El tercer argumento
//es un objeto que tiene 3 propiedades.
