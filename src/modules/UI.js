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
    const falTitle = document.querySelector('.fal-title');
    const falPar = document.querySelector('.fal-paragraph');
    const falNum = document.querySelector('.fal-number');
    const falMeaning = document.querySelector('.fal-meaning');
    fetch('https://one-api.ir/hafez/?token=683257:653d1f979f1f3', { mode: 'cors' })
      .then((response) => response.json())
      .then((response) => {
        falTitle.textContent = response.result.TITLE;
        falPar.textContent = response.result.RHYME;
        falMeaning.textContent = response.result.MEANING;
        falNum.textContent = response.result.SHOMARE;
      });
  }
}
