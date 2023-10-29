export default class UI {
  // static loadHomePage() {
  // }

  static getFal() {
    fetch('https://one-api.ir/hafez/?token=683257:653d1f979f1f3', {mode: 'cors'})
    .then(function(response) {
      console.log(response.json());
    })
}
}