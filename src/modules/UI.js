export default class UI {
  static loadHomePage() {
    UI.initFal();
    UI.getFal();
  }

  static initFal() {
    const falBtn = document.querySelector('.fal-btn');
    falBtn.addEventListener('click', () => UI.getFal());
  }

  static getFal() {
    const falPage = document.querySelector('.fal p');
    fetch('https://one-api.ir/hafez/?token=683257:653d1f979f1f3', { mode: 'cors' })
      .then((response) => response.json())
      .then((response) => {
        falPage.textContent = response.result.RHYME;
      });
  }
}
