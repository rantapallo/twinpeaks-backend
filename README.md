# Twin Peaks API
A simple API to fetch Twin Peaks quotes and character data

## Website
https://twinpeaks-api.herokuapp.com

## Usage

To get the list of characters

### `GET /api/characters`

> [https://twinpeaks-api.herokuapp.com/api/characters](https://twinpeaks-api.herokuapp.com/api/characters)

To find a specific character by name

### `GET /api/characters/search/{name}`

> [https://twinpeaks-api.herokuapp.com/api/characters/search/cooper](https://twinpeaks-api.herokuapp.com/api/characters/search/cooper)

To find a specific character by id

### `GET /api/characters/{charid}`

> [https://twinpeaks-api.herokuapp.com/api/characters/2](https://twinpeaks-api.herokuapp.com/api/characters/2)

To get a random quote

### `GET /api/quotes`

> [https://twinpeaks-api.herokuapp.com/api/quotes](https://twinpeaks-api.herokuapp.com/api/quotes)

	[
	  {
		"quote": "I have no idea where this will lead us, but I have a definite feeling it will be a place both wonderful and strange.",
		"character": "Dale Cooper"
      }
	]
  
To get a random quote by a specific character

### `GET /api/quotes/char/{charid}`

> [https://twinpeaks-api.herokuapp.com/api/quotes/char/10](https://twinpeaks-api.herokuapp.com/api/quotes/char/10)

	[
	  {
		"quote": "My Log Does Not Judge.",
		"character": ""Log Lady"
      }
	]

To get the list of episodes

### `GET /api/episodes`

> [https://twinpeaks-api.herokuapp.com/api/episodes](https://twinpeaks-api.herokuapp.com/api/episodes)

To get the list of episodes of specific season

### `GET /api/episodes/{season}`

> [https://twinpeaks-api.herokuapp.com/api/episodes/season/3](https://twinpeaks-api.herokuapp.com/api/episodes/season/3)

To get details of a specific episode using number of episode

### `GET /api/episodes/episode/{no}`

> [https://twinpeaks-api.herokuapp.com/api/episodes/episode/35](https://twinpeaks-api.herokuapp.com/api/episodes/episode/35)

To get details of a specific episode using season/episode

### `GET /api/episodes/season/{season}/episode/{episode}`

> [https://twinpeaks-api.herokuapp.com/api/episodes/season/2/episode/4](https://twinpeaks-api.herokuapp.com/api/episodes/season/2/episode/4)

To get the list of movies

### `GET /api/movies`

> [https://twinpeaks-api.herokuapp.com/api/movies](https://twinpeaks-api.herokuapp.com/api/episodes/movies)

To get a specific movie

### `GET /api/movies/{no}`

> [https://twinpeaks-api.herokuapp.com/api/movies/1](https://twinpeaks-api.herokuapp.com/api/episodes/movies/1)