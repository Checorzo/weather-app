export function isCloudy(cloud, isDay) {
  const d = document;
  let sky, icon;
  if (cloud < 12.5) {
    if (isDay) {
      sky = "Sunny";
      icon = "wi wi-day-sunny";
    } else {
      sky = "Clear";
      icon = "wi wi-night-clear";
    }
  } else if (cloud < 49) {
    sky = "Few cloudy";
    if (isDay) {
      icon = "wi wi-day-sunny";
    } else {
      sky = "Clear";
      icon = "wi wi-night-clear";
    }
  } else if (cloud < 62.6) {
    sky = "Partly cloudy";
    if (isDay) {
      icon = "wi wi-day-overcast";
    } else {
      icon = "wi wi-night-partly-cloudy";
    }
  } else if (cloud < 87.5) {
    sky = "Mostly cloudy";
    if (isDay) {
      icon = "wi wi-day-cloudy";
    } else {
      icon = "wi wi-night-cloudy";
    }
  } else {
    sky = "Cloudy";
    if (isDay) {
      icon = "wi wi-day-cloudy";
    } else {
      icon = "wi wi-night-cloudy";
    }
  }
  return { sky, icon };
}
