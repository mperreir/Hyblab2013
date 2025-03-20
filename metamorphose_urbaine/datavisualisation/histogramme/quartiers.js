window.countries_data = {
  "type": {
    "_id": "/type/country",
    "name": "Countries",
    "properties": {
      "name": {"name": "Country Name", "type": "string" },
      "languages": {"name": "Languages spoken", "type": "string" },
      "population": { "name": "Population", "type": "number" },
      "gdp": { "name": "GDP per capita", "type": "number" }
    },
    "indexes": {
      "by_name": ["name"]
    }
  },
  "objects": [
    {
      "_id": "beaulieu1987",
      "name": "color",
      "languages": ["German", "Austrian"],
      "population": "color",
      "gdp": 527
    },
    {
      "_id": "beaulieu2013",
      "name": "Germany",
      "languages": ["German"],
      "population": 82,
      "gdp": 2124
    },
    {
      "_id": "mangin1987",
      "name": "United States of America",
      "languages": ["German", "English", "Spanish", "Chinese", "French"],
      "population": 311,
      "gdp": 740
    },
    {
      "_id": "mangin2013",
      "name": "United Kingdom",
      "languages": ["English", "Irish", "Scottish Gaelic"],
      "population": 62.3,
      "gdp": 2409
    },
    {
      "_id": "republique1987",
      "name": "Spain",
      "languages": ["Spanish"],
      "population": 30.6,
      "gdp": 556
    },
    {
      "_id": "republique2013",
      "name": "Greece",
      "languages": ["Greek"],
      "population": 11.0,
      "gdp": 2052
    },
    {
      "_id": "steanne1987",
      "name": "Canada",
      "languages": ["English", "French", "Spanish"],
      "population": 40.1,
      "gdp": 524
    },
    {
        "_id": "steanne2013",
        "name": "Greece",
        "languages": ["Greek"],
        "population": 11.0,
        "gdp": 3590
      }
  ]
};