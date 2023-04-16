const allConstelaions = document.querySelectorAll('.constellation');
const choosenConstellation = document.querySelector('.choosen-horoscope');
const horoscopeMenu = document.querySelector('#horoscope');


// Si je clique sur une constellation, je veux que celle ci apparaisse au millieu de l'ecran dans la div choosenConstellation

allConstelaions.forEach(constellation => {
    constellation.addEventListener('click', () => {
        choosenConstellation.innerHTML = constellation.innerHTML;
        horoscopeMenu.value = constellation.dataset.id;
    });
});


if (horoscopeMenu) {
    horoscopeMenu.addEventListener('change', () => {
        const constellation = document.querySelector(`.constellation[data-id="${horoscopeMenu.value}"]`);
        choosenConstellation.innerHTML = constellation.innerHTML;
    });
}