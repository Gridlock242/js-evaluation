// ÉTAPE 1 : CRÉATION DES DONNÉES

// L'instance de classe Animal
// L'espèce animal se dit qu'au pluriel en anglais .. j'ai mis type du coup

class Animal {
    constructor(name, description, type, url) {
        this.name = name;
        this.description = description;
        this.type = type;
        this.url = url;
    }
};

// Les quelques instances de la classe Animal

const cat = new Animal(
    'Cat',
    'Superior to dogs',
    'Feline',
    'https://i1.sndcdn.com/artworks-DI2zsJyKTCyatNA0-DEaq6A-t1080x1080.jpg',
);

const tiger = new Animal(
    'Tiger',
    'Cat with stripes',
    'Feline',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7aqgFEy2W-tHyBjsGBW1bOdBG0_S5Iy6RPg&s',
);

const dog = new Animal(
    'Dog',
    'Inferior to cats',
    'Canid',
    'https://cdn.i-scmp.com/sites/default/files/d8/images/canvas/2023/08/21/c080045a-e333-40c5-aee8-17c42ce9b47e_65e19817.jpg',
);

const wolf = new Animal(
    'Wolf',
    'Dog but bigger',
    'Canid',
    'https://ih1.redbubble.net/image.4564533238.0563/raf,360x360,075,t,fafafa:ca443f4786.jpg',
);

const ferret = new Animal(
    'Ferret',
    'Chaos incarnate',
    'Weasel',
    'https://images.squarespace-cdn.com/content/v1/5a01e2deace86448e1314168/4d1b57ae-afff-459d-980e-d129dd53dc12/294596905_530031635478728_6749548886996135164_n.jpg',
);

const animals = [cat, tiger, dog, wolf, ferret];

console.log(animals);



// ÉTAPE 2 : AFFICHAGE DES DONNÉES

function displayAnimals(e) {
    const animalsDisplay = document.getElementById("animals");

    // Va vider le tableau pour pas dupliquer
    animalsDisplay.innerHTML = '';

    e.forEach(animal => {
        const animalCard = document.createElement('div');
        animalCard.classList.add('animalCard');

        const animalName = document.createElement('h2');
        animalName.textContent = animal.name;

        const animalType = document.createElement('p');
        animalType.textContent = `From the family of ${animal.type}`;
        animalType.classList.add('animalType');

        const animalDescription = document.createElement('p');
        animalDescription.textContent = animal.description;
        animalDescription.classList.add('animalDescription');

        const animalUrl = document.createElement('img');
        animalUrl.src = animal.url;
        animalUrl.alt = `${animal.name}`;
        animalUrl.classList.add('animalUrl');

        animalCard.appendChild(animalName);
        animalCard.appendChild(animalType);
        animalCard.appendChild(animalDescription);
        animalCard.appendChild(animalUrl);

        animalsDisplay.appendChild(animalCard);
    });
}

displayAnimals(animals);


// ÉTAPE 3 : FILTRAGE DES DONNÉES

const animalFilter = document.getElementById('animalFilter');

if (animalFilter) {
    animalFilter.addEventListener('change', function (e) {
        console.log(animalFilter.value);

        let filteredAnimals = [];

        if (animalFilter.value === 'all') {
            filteredAnimals = animals;
        } else if (animalFilter.value === '1') {
            filteredAnimals = animals.filter((animal) => animal.type === "Feline");
        } else if (animalFilter.value === '2') {
            filteredAnimals = animals.filter((animal) => animal.type === "Canid");
        } else if (animalFilter.value === '3') {
            filteredAnimals = animals.filter((animal) => animal.type === "Weasel");
        }

        displayAnimals(filteredAnimals);
    });
}

displayAnimals(animals);

// ÉTAPE 4 : AJOUT DES DONNÉES 

const animalForm = document.getElementById('animalAddForm');

animalForm.addEventListener('submit', function (e) {
  e.preventDefault();

  let nameInput = document.getElementById('nameInput');
  let descriptionInput = document.getElementById('descriptionInput');
  let typeInput = document.getElementById('typeInput');
  let urlInput = document.getElementById('urlInput');

  let errors = [];

  if (nameInput.value.trim().length <= 0) {
    errors.push('Name cannot be empty');
  }

  if (descriptionInput.value.trim().length <= 0) {
    errors.push('Description cannot be empty');
  }

  if (typeInput.value.trim().length <= 0) {
  errors.push('Type cannot be empty');
} else if (!currentTypes.includes(typeInput.value.trim())) {
  errors.push('Unknown category');
}

  if (urlInput.value.trim().length <= 0) {
    errors.push('URL cannot be empty');
  }

  if (errors.length === 0) {
    document.getElementById('errors').innerHTML = '';

    let newAnimal = new Animal(
      nameInput.value,
      descriptionInput.value,
      typeInput.value,
      urlInput.value
    );

    animals.push(newAnimal);
    console.log('Form sent', animals);
    displayAnimals(animals);
  } else {
    document.getElementById('errors').innerHTML = errors.reduce(
      (a, c) => c + ' ' + a
    );
  }
});

// ÉTAPE 5 : VALIDATION DES DONNÉES

const currentTypes = ['Feline', 'Canid', 'Weasel'];
// et modif à partir de la ligne 147
