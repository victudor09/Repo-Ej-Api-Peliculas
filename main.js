
//'https://api.themoviedb.org/3/search/movie?query=Jack+Reacher&api_key=a0ce20ba12de04e9aebb11d4f231abd3'
const API_URL = 'https://api.themoviedb.org/3/search/movie?query=';
const apiKey = 'a0ce20ba12de04e9aebb11d4f231abd3';
const accessToken = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMGNlMjBiYTEyZGUwNGU5YWViYjExZDRmMjMxYWJkMyIsInN1YiI6IjY2NGUyYjlmYmMyMjhiZWI5MjA2MTU4MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.33Ep1nyYESdxxfc6XMSRMDJYVDQ8Ym-n2fsc_ahFfiA';
const moviesContainer = document.querySelector('#movieNames')
const formSearch = document.getElementById('form')
const searchInput = document.getElementById('searchId')

const searchMovie = async (event) => {
    event.preventDefault()
    try {
        const search = searchInput.value
        const res = await axios.get(`${API_URL}${search}&api_key=${apiKey}`)
        const movies = res.data.results //data es todo el JSON donde se encuentra almacenada la respuesta de la query; En '.results' está la info de la peli
        console.log(movies);
        showMovies(movies)
    }
    catch (error) {
    console.error(error)
    }
}

const showMovies = (movieList) => {
    moviesContainer.innerHTML = '' //inicializo y limpio cada vez que ejecute showMovies...
    movieList.forEach((elemento_movie) => {
    moviesContainer.innerHTML += `
        <div class="card col-lg-3 col-xs-12 col-md-6 m-2">
        <img src="${elemento_movie.poster_path}" alt="${elemento_movie.title}">
        <div class="card-body">
        <h3 class="card-header">${elemento_movie.title}</h3>
        <h5 class="card-title">${elemento_movie.vote_average}</h5>
        <p class="card-title">${elemento_movie.overview}</p>
        </div>
        </div>
        `
    })
}

formSearch.addEventListener('submit', searchMovie)


/* const apiKey = 'a0ce20ba12de04e9aebb11d4f231abd3'; // Reemplaza con tu clave de API de TMDB
const accessToken = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMGNlMjBiYTEyZGUwNGU5YWViYjExZDRmMjMxYWJkMyIsInN1YiI6IjY2NGUyYjlmYmMyMjhiZWI5MjA2MTU4MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.33Ep1nyYESdxxfc6XMSRMDJYVDQ8Ym-n2fsc_ahFfiA'; // Reemplaza con tu token de autenticación de TMDB

document.getElementById('search-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const query = document.getElementById('search-input').value;
    fetchMovies(query);
});

async function fetchMovies(query) {
    try {
        const response = await fetch(`https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(query)}`, {
            headers: {
                'Authorization': `Bearer ${accessToken}`,
                'Content-Type': 'application/json;charset=utf-8'
            }
        });

        if (!response.ok) {
            throw new Error('Error en la solicitud de la API');
        }

        const data = await response.json();
        displayMovies(data.results);
    } catch (error) {
        console.error('Error:', error);
    }
}

function displayMovies(movies) {
    const movieList = document.getElementById('movie-list');
    movieList.innerHTML = `
    <div class="card col-lg-3 col-xs-12 col-md-6 m-2">
    <img src="${movies.poster_path}" alt="${movies.name}">
    <div class="card-body">
    <h3 class="card-header">${movies.name}</h3>
    </div>
    </div>
    `;

    movies.forEach(movie => {
        const listItem = document.createElement('li');
        listItem.textContent = movie.title;
        movieList.appendChild(listItem);
    });
} */