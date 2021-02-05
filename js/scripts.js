let pokemonRepository = (function () {

  let pokemonList = [];
  let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=151';


  function add(pokemon) {
      pokemonList.push(pokemon);
  }

  function getAll() {
      return pokemonList;
  }


let spinner = document.querySelector('#spinner');

  function showLoadingSpinner() {
    spinner.removeAttribute('hidden');
  }

  function hideLoadingSpinner() {
    spinner.setAttribute('hidden', '');
  }


  function addListItem(pokemon)  {
    let pokemonList = document.querySelector('.list-group');
    let button = document.createElement('button');
    button.innerText = pokemon.name;
    button.classList.add('list-group-item');
    button.classList.add('pokemonButtonStyle');
    button.setAttribute('type', 'button');
    button.classList.add('btn');
    button.classList.add('btn-primary');
    button.setAttribute('data-target', '#pokemon-modal');
    button.setAttribute('data-toggle', 'modal');
    pokemonList.appendChild(button);

    button.addEventListener('click', function () {
      showDetails(pokemon);
    });
  }


  function showDetails(pokemon) {
    loadDetails(pokemon).then(function  ()  {
      showModal(pokemon);
    });
  }

  function typeLength (pokemon) {
    return pokemon.types.length > 1
     ? 'Types: ' + pokemon.types.join(', ')
      : 'Type: ' + pokemon.types
  }

  function showModal(pokemon)  {
    let modalBody = $('.modal-body');
    let modalTitle = $('.modal-title');

    modalTitle.empty();
    modalBody.empty();

    let pokemonName = $('<h1>' + pokemon.name + '  #' + pokemon.id + '</h1>');

    let pokeImage = $('<img class=\'modal-img\' style=\'width:75%\'>');
    pokeImage.attr('src', pokemon.imageUrl);

    let pokemonHeight = $('<p>' + 'Height: ' + pokemon.height / 0.1 + ' cm' + '</p>');

    let pokemonWeight = $('<p>' + 'Weight: ' + pokemon.weight / 10 + ' kg' + '</p>');

    let pokemonTypes = $('<p>' + typeLength(pokemon) + '</p>');

    modalBody.append(pokeImage);
    modalTitle.append(pokemonName);
    modalBody.append(pokemonHeight);
    modalBody.append(pokemonWeight);
    modalBody.append(pokemonTypes);
  }


  function loadList() {
    showLoadingSpinner();
    return fetch(apiUrl).then(function (response) {
      return response.json();
    }).then(function (json) {
      hideLoadingSpinner();
      json.results.forEach(function (item) {
        let pokemon = {
          name: item.name,
          detailsUrl: item.url
        };
        add(pokemon);
      });
    }).catch(function (e) {
      hideLoadingSpinner();
      console.error(e);
    })
  }

  function loadDetails(item) {
    showLoadingSpinner();
    let url = item.detailsUrl;
    return fetch(url).then(function (response) {
      return response.json();
    }).then(function (details) {
      hideLoadingSpinner();
      item.id = details.id;
      item.imageUrl = details.sprites.other['official-artwork'].front_default;
      item.height = details.height;
      item.weight = details.weight;
      item.types = [];
      details.types.forEach(function (pokeType) {
          item.types.push(pokeType.type.name);
      })
    }).catch(function (e) {
      console.error(e);
      hideLoadingSpinner();
    });
  }

  return  {
      add: add,
      getAll: getAll,
      addListItem: addListItem,
      loadList: loadList,
      loadDetails: loadDetails,
      showDetails: showDetails
  };

})();


$(document).ready(function()  {
  $('#pokemon-search').on('keyup', function() {
    let name = $(this).val().toLowerCase();
    $('.list-group-item').filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(name) > -1);
    });
  });
  $('#pokemon-search').on('search', function() {
    let name = $(this).val().toLowerCase();
    $('.list-group-item').filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(name) > -1);
    });
  });
  $('#pokemon-search').on('keydown', function(e) {
      if (e.keyCode == 13) {
          return false;
      }
  });
});

pokemonRepository.loadList().then(function() {
  pokemonRepository.getAll().forEach(function(pokemon)  {
    pokemonRepository.addListItem(pokemon);
  });
});
