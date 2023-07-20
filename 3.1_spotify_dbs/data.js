db.songs.drop();
db.artists.drop();
db.popular_songs.drop();

//Songs collection
songs = [
    {
        "title":"Believer",
        "artist":"Imagine Dragons",
        "album":"Evolve"
    },
    {
        "title":"Next To Me",
        "artist":"Imagine Dragons",
        "album":"Evolve"
    },
    {
        "title":"Whatever it Takes",
        "artist":"Imagine Dragons",
        "album":"Evolve"
    },
    {
        "title":"I Don't Know Why",
        "artist":"Imagine Dragons",
        "album":"Evolve"
    },
    {
        "title":"Walking The Wire",
        "artist":"Imagine Dragons",
        "album":"Evolve"
    },
    {
        "title":"Rise Up",
        "artist":"Imagine Dragons",
        "album":"Evolve"
    },
    {
        "title":"I'll Make it Up To You",
        "artist":"Imagine Dragons",
        "album":"Evolve"
    },
    {
        "title":"Next To Me",
        "artist":"Imagine Dragons",
        "album":"Evolve"
    },
    {
        "title":"Yesterday",
        "artist":"Imagine Dragons",
        "album":"Evolve"
    },
    {
        "title":"Mouth Of The River",
        "artist":"Imagine Dragons",
        "album":"Evolve"
    },
]

//Artists collection
artists = [
    {
        "name":"Dan Reynolds",
        "date_of_birth":"1987-7-14",
        "genre":["alternative rock","pop rock","electropop"]
    },
    {
        "name":"Ryan Tedder",
        "date_of_birth":"1979-6-26",
        "genre":["rock","pop rock","alternative rock"]
    },
    {
        "name":"Daniel John Mark Luke O'Donoghue",
        "date_of_birth":"1980-10-3",
        "genre":["soft rock","pop rock","alternative rock"]
    },
    {
        "name":"Austin Richard Post",
        "date_of_birth":"1995-7-4",
        "genre":["hip hop","pop rap","pop"]
    },
    {
        "name":"Ronnie Radke",
        "date_of_birth":"1983-12-15",
        "genre":["post-hardcore","metalcore","hard rock"]
    },
    {
        "name":"Nathan John Feuerstein",
        "date_of_birth":"1991-3-30",
        "genre":["hip hop","pop rap"]
    },
    {
        "name":"Oliver Sykes",
        "date_of_birth":"1986-11-20",
        "genre":["metalcore","alternative rock","alternative rock"]
    },
    {
        "name":"Eminem",
        "date_of_birth":"1972-10-17",
        "genre":["hip hop"]
    },
    {
        "name":"Adam Levine",
        "date_of_birth":"1979-3-18",
        "genre":["pop rock","pop","funk rock"]
    },
    {
        "name":"Bruno Mars",
        "date_of_birth":"1985-10-8",
        "genre":["pop","r&b","funk"]
    },
]

//Popular Songs
popular_songs = [
    {
        "title":"Beliver",
        "played":"15",
        "period_of_time":"2017"
    },
    {
        "title":"Next To me",
        "played":"12",
        "period_of_time":"2017"
    },
    {
        "title":"I Don't Know Why",
        "played":"10",
        "period_of_time":"2017"
    },
    {
        "title":"Whatever It Takes",
        "played":"8",
        "period_of_time":"2017"
    },
    {
        "title":"Walking The Wire",
        "played":"7",
        "period_of_time":"2017"
    },
    {
        "title":"Rise Up",
        "played":"6",
        "period_of_time":"2017"
    },
    {
        "title":"I'll Make It Up To You",
        "played":"5",
        "period_of_time":"2017"
    },
    {
        "title":"Yesterday",
        "played":"4",
        "period_of_time":"2017"
    },
    {
        "title":"Mouth Of The River",
        "played":"3",
        "period_of_time":"2017"
    },
    {
        "title":"Thunder",
        "played":"2",
        "period_of_time":"2017"
    },
]
db.songs.insertMany(songs)
db.artists.insertMany(artists)
db.popular_songs.insertMany(artists)
