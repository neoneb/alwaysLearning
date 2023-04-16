// 1.
const whereAmI = function (lat, lng) {
  //2.
  return (
    fetch(
      `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}&localityLanguage=en`
    )
      .then(res => {
        // 5.
        if (!res.ok) throw new Error(`problem with geocoding ${res.status}`);
        return res.json();
      })

      .then(data => {
        // 3.
        console.log(`You are in ${data.city}, ${data.countryName}!`);

        return fetch(`https://restcountries.com/v2/name/${data.countryName}`);
      })
      .then(res => {
        if (!res.ok) throw new Error(`Country not found (${response.status})`);

        return res.json();
      })
      .then(data => renderCountry(data[0]))
      // 4.
      .catch(err => console.log(`${err.message} ERROR!`))
  );
};
whereAmI();
whereAmI(52.508, 13.381);
whereAmI(19.037, 72.873);
whereAmI(-33.933, 18.474);
