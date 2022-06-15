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

> [https://twinpeaks-api.herokuapp.com/api/characters/name/cooper](https://twinpeaks-api.herokuapp.com/api/characters/name/cooper)

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

