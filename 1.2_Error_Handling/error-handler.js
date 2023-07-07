/*
    Lets assume that we have a Song shema with this format
    { title: “song title”, artists: [{ name: “artist name 1”}], duration: 200 }

    Create a function that
    1. Accept a promise of Song list
    2. Print an error message if the promise rejected.
    3. Print all songs list if the promise is fulfilled
    In 2 version (Promise and async/await)
*/

const song = [
    { 
        title: "A", 
        artists: [{ name: "John"}], 
        duration: 200 
    },
    { 
        title: "B", 
        artists: [{ name: "Joni"}], 
        duration: 180 
    },
];

const songPromise = new Promise((resolve, reject) => {
    if(song !== undefined){
        resolve(song)
    }else{
        reject("Promise Reject"); 
    }
})

function processSongPromise(songPromise) {
    songPromise
      .then(song => {
        console.log(song)
      })
      .catch(error => {
        console.error(error)
      })

    return songPromise
}

// processSongPromise(songPromise);

async function asyncPromise() {
    const songAsync = await processSongPromise(songPromise);
    console.log(songAsync);
}
  
asyncPromise();
