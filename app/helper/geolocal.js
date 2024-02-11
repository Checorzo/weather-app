export async function getGeo() {
  try {
    const coords = await geo;
    localStorage.setItem("latitude", coords.latitude);
    localStorage.setItem("longitude", coords.longitude);
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
