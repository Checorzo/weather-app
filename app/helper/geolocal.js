export async function getGeo() {
  try {
    const coords = await geo;
    localStorage.setItem("latitude", coords.latitude);
    localStorage.setItem("longitude", coords.longitude);
    // geolocation2();

    if (!coords) throw new Error(coords);
    else return coords;
  } catch (error) {
    console.log(`Error: ${error.message}`);
  }
}
const geo = new Promise((resolver, rechazar) => {
  navigator.geolocation.getCurrentPosition(
    (pos) => {
      resolver(pos.coords);
    },
    (error) => {
      rechazar(error);
    },
    {
      enableHighAccuracy: true,
      timeout: 10000,
      maximumAge: 0,
    }
  );
});
// Next lines is a better way turning a callback Api on Promise
// function Geo(options) {
//   return new Promise((resolver, rechazar, options) => {
//     navigator.geolocation.getCurrentPosition(
//       (pos) => {
//         resolver(pos.coords);
//       },
//       (error) => {
//         rechazar(error);
//       },
//       options
//     );
//   });
// }

// const localitation = Geo({
//   enableHighAccuracy: true,
//   timeout: 10000,
//   maximumAge: 0,
// });

// async function geolocation2() {
//   try {
//     const res = await localitation;
//     console.log(res);
//     if (!res) throw new Error(rep);
//     else return res;
//   } catch (error) {
//     console.log(error);
//   }
// }
