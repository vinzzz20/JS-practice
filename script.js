let movies = [
    { title: "The Shawshank", year: 1999, genre: "mystery", rating: 9.3 },
    { title: "Railwayman", year: 2000, genre: "comdey", rating: 9.0 },
    { title: "Manifest", year: 2001, genre: "action", rating: 8.3 },
    { title: "One-day", year: 20002, genre: "documentry", rating: 7.2 },
    { title: "Narcos", year: 2000, genre: "action", rating: 5.0 },
    { title: "The Watcher ", year: 2000, genre: "mystery", rating: 1.3 }
]
console.log("Original Movies Array", movies);

// 2. **Adding and Removing Movies:**


let addMovie = movies.push({ title: "Formula-1", year: 2023, genre: "Thriller", rating: 10.0 });
console.log("Movie Added", movies);
let removeMovie = movies.pop();
console.log("Movie Removed", movies);


// 3. **Finding Movies by Genre:**

function findMoviesByGenre(genre) {
    return movies.filter(movie => movie.genre === genre);
}
let mysteryMovies = findMoviesByGenre("mystery");
console.log("Mystery movies", mysteryMovies);

//--------------------OR----------------------------------
let actionMovies = movies.filter((item) => item.genre === "action")
console.log("Action Movies", actionMovies);

// **Filtering Movies by Year:**
let movieByYear = movies.filter((item) => item.year === 2000)
console.log("Movies of year 2000", movieByYear);