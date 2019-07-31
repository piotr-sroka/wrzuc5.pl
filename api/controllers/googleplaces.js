import fetch from "node-fetch";

class Places {
  search(req, res) {
    const placeToFind = req.body.placeToFind;
    let googlePlacesUrl = `https://maps.googleapis.com/maps/api/place/autocomplete/${process.env.GOOGLE_PLACES_OUTPUT_FORMAT}?key=${process.env.GOOGLE_PLACES_API_KEY}&input=${placeToFind}&types=geocode&language=pl`;

    fetch(googlePlacesUrl)
      .then(response => {
        return response.json();
      })
      .then(result => {
        res.send(result);
      })
      .catch(err => {
        console.log(err);
      });
  }
  findByPlaceId(req, res) {
    const placeId = req.body.placeId;
    let googlePlacesUrl = `https://maps.googleapis.com/maps/api/place/details/json?placeid=${placeId}&key=${process.env.GOOGLE_PLACES_API_KEY}&language=pl`;

    fetch(googlePlacesUrl)
      .then(response => {
        return response.json();
      })
      .then(result => {
        res.send(result);
      })
      .catch(err => {
        console.log(err);
      });
  }
}

export default Places;
