let pokemonRepository = (function () {
  let modalContainer = document.querySelector('#modal-container');
  let pokemonList = []
  let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';

  function add(pokemon) {
    if (typeof pokemon === "object" &&
    "name" in pokemon &&
    "detailsUrl" in pokemon
    ) {
    pokemonList.push(pokemon);
  } else {
    console.log("pokemon is not correct");
  } 
  }

  function getAll() {
    return pokemonList;
  }

  function addListItem(pokemon) {
<<<<<<< HEAD
    pokemonRepository.loadDetails(pokemon).then(function () {
      let row = $(".row");

      let card = $(
        '<div class="card mt-5" style="width: 18rem; margin:13px;"></div>'
      );
      let image = $('<img class="card-img-top mx-auto" style="width:80%;" alt="...">');
      let title = $('<h5 class="card-title" style="color:white;">' + pokemon.name + "</h5>");
      image.attr("src", pokemon.imageUrlAnimated);
      let body = $('<div class="card-body" style="text-align: center;"></div>');
      let button = $(
        '<button type="button" class="btn" style="background-color: blue; color: white" data-toggle="modal" data-target="#myModal">See profile</button>'
      );

      row.append(card);
      card.append(image);
      card.append(body);
      body.append(title);
      body.append(button);

      button.on("click", function (event) {
        showDetails(pokemon);
      });
    });
  }

  function showDetails(pokemon) {
    loadDetails(pokemon).then(function(){
      console.log(pokemon);
      showModal(pokemon)
=======
    let pokeItem = document.querySelector(".pokelist");
    // let ul = document.createElement("ul");
    // ul.classList.add("pokelist");
    let listItem = document.createElement("li");
    pokeItem.appendChild(listItem);
    listItem.classList.add('list-i');
    let button = document.createElement('button');
    button.classList.add('btnclass');
    button.innerText = pokemon.name;
    // console.log(button);
    // document.body.appendChild(ul);
    button.addEventListener('click', function(){
      showDetails(pokemon);
>>>>>>> parent of e9144ad... Task 1.10
    })
    listItem.appendChild(button);
    
  }

<<<<<<< HEAD
  function showModal(pokemon) {
    let modalTitle = $(".modal-title");
    modalTitle.empty();
    let modalHeader = $(".modal-header");
    let pokemonName = $('<h1 style="color: white;">' + pokemon.name + "</h1>");
    let modalBody = $(".modal-body");
    modalBody.empty();
    let imageFront = $(
      '<img class="modal-img" alt="..." style="width: 50%; padding: 30px;">'
    );
    imageFront.attr("src", pokemon.imageUrl);
       
    let pokemonHeight = $(
      "<p>" + "<strong>Height</strong>: " + pokemon.height + '"' + "</p>"
    );
    let pokemonTypes = $(
      "<p>" + "<strong>Type</strong>: " + pokemon.types + "</p>"
    );
    
    modalTitle.append(pokemonName);
    modalBody.append(imageFront);
    modalBody.append(pokemonHeight);
    modalBody.append(pokemonTypes);
    
    if (pokemon.types.includes("grass")) {
      $(".modal-header").css("background-color", "green");
    } else if (pokemon.types.includes("fire")) {
      $(".modal-header").css("background-color", "rgb(240, 128, 48)");
    } else if (pokemon.types.includes("poison")) {
      $(".modal-header").css("background-color", "rgb(168, 144, 240)");
    } else if (pokemon.types.includes("water")) {
      $(".modal-header").css("background-color", "rgb(104, 144, 240)");
    } else if (pokemon.types.includes("bug")) {
      $(".modal-header").css("background-color", "rgb(168, 184, 32)");
    } else if (pokemon.types.includes("water")) {
      $(".modal-header").css("background-color", "rgb(69, 120, 237)");
    } else if (pokemon.types.includes("ice")) {
      $(".modal-header").css("background-color", "rgb(66, 174, 174)");
    } else if (pokemon.types.includes("electric")) {
      $(".modal-header").css("background-color", "rgb(252, 234, 161)");
    } else if (pokemon.types.includes("ground")) {
      $(".modal-header").css("background-color", "rgb(219, 181, 77)");
    } else if (pokemon.types.includes("fairy")) {
      $(".modal-header").css("background-color", "rgb(232, 120, 144)");
    } else if (pokemon.types.includes("ghost")) {
      $(".modal-header").css("background-color", "rgb(100, 78, 136)");
    } else if (pokemon.types.includes("normal")) {
      $(".modal-header").css("background-color", "rgb(156, 156, 99)");
    }
  }
    
=======
>>>>>>> parent of e9144ad... Task 1.10
  function loadList() {
    return fetch(apiUrl).then(function (response) {
      return response.json();
    }).then(function (json) {
      json.results.forEach(function (item) {
        let pokemon = {
          name: item.name,
          detailsUrl: item.url
        };
        add(pokemon);
      });
    }).catch(function (e) {
      console.error(e);
    })
  }

  function loadDetails(item) {
    let url = item.detailsUrl;
    return fetch(url).then((response) => {
      return response.json();
    }).then(function (details) {
<<<<<<< HEAD
      item.imageUrl = details.sprites.other.dream_world.front_default;
      item.imageUrlAnimated = details.sprites.versions["generation-v"]["black-white"].animated.front_default;
=======
      item.imageUrl = details.sprites.front_default;
>>>>>>> parent of e9144ad... Task 1.10
      item.height = details.height;
      item.types = details.types;
      //ask about displayiing types in loop
    }).catch(function (e) {
      console.error(e);
    });
  }

  function showDetails(pokemon) {
    loadDetails(pokemon).then(function () {
      showModal(pokemon);
    });
  }


  function showModal(pokemon) {
    modalContainer.innerHTML = '';

    let modal = document.createElement('div');
    modal.classList.add('modal');

    let closeButtonElement = document.createElement('button');
    closeButtonElement.classList.add('modal-close');
    closeButtonElement.innerText = 'X';
    closeButtonElement.addEventListener('click', hideModal);

    let titleElement = document.createElement('h1');
    titleElement.innerText = pokemon.name;

    let contentElement = document.createElement('p');
    contentElement.innerText = 'Height: ' + pokemon.height;

    let container = document.querySelector('#image-container');
    let myImage = document.createElement('img');
    myImage.src = pokemon.imageUrl;

    modal.appendChild(closeButtonElement);
    modal.appendChild(titleElement);
    modal.appendChild(contentElement);
    modal.appendChild(myImage);
    modalContainer.appendChild(modal);
    
    modalContainer.classList.add('is-visible');
  }

  function hideModal() {
    modalContainer.classList.remove('is-visible');
  }
  document.querySelector('#show-modal').addEventListener('click', () => {
    showModal('Modal Title', 'this is modal content');
  });

<<<<<<< HEAD
function search() {
  var input, filter, ul, li, a, i, txtValue;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  ul = document.getElementById("myUL");
  li = ul.querySelectorAll(".card");
  console.log(li)
  for (i = 0; i < li.length; i++) {
    a = li[i].querySelector(".card-body").querySelector(".card-title");
    console.log(a.innerText);
    txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
=======
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalContainer.classList.contains ('is-visible')) {
      hideModal();
>>>>>>> parent of e9144ad... Task 1.10
    }
  });

modalContainer.addEventListener('click', (e) => {
  let target = e.target;
  if (target === modalContainer) {
    hideModal();
  }
});


return {
  getAll: getAll,
  add: add,
  addListItem: addListItem,
  loadList: loadList,
  loadDetails: loadDetails,
  showDetails: showDetails,
  showModal: showModal,
  hideModal: hideModal
}

})();

// console.log(pokemonRepository.getAll());

pokemonRepository.loadList().then(function() {
  pokemonRepository.getAll().forEach(function(pokemon){
    pokemonRepository.addListItem(pokemon);
  });
});