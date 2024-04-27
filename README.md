# Kevin Kelly's Unsolicited Advice

A simple web page that shows a random unsolicited advice from Kevin Kelly, also available as a simple API.

#### API usage

`GET /api/advice` - Returns a random advice

`GET /api/advice/all` - Returns all advice

`GET /api/advice/:id` - Returns a specific advice based on id (1 to 371)

Example:

Get advice with id = 7 by sending a GET request to `/api/advice/7` will return the following JSON:

```
"id": 7,
"advice": "Gratitude will unlock all other virtues and is something you can get better at.",
"source": "https://kk.org/thetechnium/68-bits-of-unsolicited-advice/"
```

#### Source:

Note that some of the advice has been removed but are still available in `archive.org`.

- https://kk.org/thetechnium/68-bits-of-unsolicited-advice/
- https://kk.org/thetechnium/99-additional-bits-of-unsolicited-advice/
- https://kk.org/thetechnium/103-bits-of-advice-i-wish-i-had-known/
- https://kk.org/thetechnium/101-additional-advices/
