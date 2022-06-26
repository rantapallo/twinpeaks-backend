# Twin Peaks API
A simple API to fetch Twin Peaks quotes and character data

## Website
https://twinpeaks-api.herokuapp.com

## Usage

To get the list of characters

### `GET /api/characters`

> [https://twinpeaks-api.herokuapp.com/api/characters](https://twinpeaks-api.herokuapp.com/api/characters)

[
	{
		"charid": 1,
		"character": "Dale Cooper",
		"portrayed": "Kyle MacLachlan",
		"img": "https://vignette.wikia.nocookie.net/twinpeaks/images/8/81/Dale_Cooper_(2010s).jpg",
		"partof": "FBI",
		"occupation": "FBI Special Agent",
		"aka": "Coop",
		"born": "1954-04-19T00:00:00.000Z"
	}
]

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

	[
	  {
		"episode": 1,
		"season": 1,
		"no_in_season": 1,
		"title": "Pilot",
		"title_additional": "Northwest Passage",
		"directed": [
			"David Lynch"
		],
		"written": [
			"Mark Frost",
			"David Lynch"
		],
		"original_air_date": "1990-04-08T00:00:00.000Z",
		"summary": "In February 1989 in Twin Peaks, Washington, homecoming queen Laura Palmer is discovered murdered near a riverbank. Soon after, Laura's classmate Ronette Pulaski is found beaten in a fugue state, prompting idiosyncratic FBI Agent Dale Cooper to travel to Twin Peaks to assist Sheriff Harry S. Truman in the investigation. Finding a piece of paper under Laura's fingernail bearing the letter \"R\", Cooper suspects a serial killer responsible for a similar murder one year earlier may have struck again. Discerning from Laura's diary and her best friend Donna Hayward that Laura was having an affair and was a cocaine addict, Cooper suspects more sinister goings-on in Twin Peaks than meet the eye. Truman arrests Laura's boyfriend, Bobby Briggs, who is having an affair with married woman Shelly Johnson. Deputies Andy Brennan and Tommy \"Hawk\" Hill discover the crime scene: an abandoned railway car containing half a locket and \"Fire walk with me\" written in blood. Overhearing her parents talking with Truman, Donna realizes that James Hurley, Laura’s secret lover, has the other half of the locket and persuades him to bury it. Laura's mother Sarah Palmer has a nightmare depicting an unseen figure unearthing the locket."
      }
	]

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

> [https://twinpeaks-api.herokuapp.com/api/movies](https://twinpeaks-api.herokuapp.com/api/movies)

[
	{
		"no": 2,
		"title": "Twin Peaks: The Missing Pieces",
		"directed": [
    	"David Lynch"
		],
		"written": [
  		"David Lynch",
    	"Robert Engels"
		],
		"release_date": "2014-07-16T00:00:00.000Z",
		"summary": "Twin Peaks before Twin Peaks (1990) and at the same time not always and entirely in the same place as Twin Peaks: Fire Walk with Me (1992). A feature film which presents deleted scenes from Twin Peaks: Fire Walk with Me (1992) assembled together for the first time in an untold portion of the story's prequel."
	}
]

To get a specific movie

### `GET /api/movies/{no}`

> [https://twinpeaks-api.herokuapp.com/api/movies/1](https://twinpeaks-api.herokuapp.com/api/movies/1)