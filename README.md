# Graphql Service

# INSTRUCTIONS:
* Make sure that you have v16 LTS Node installed on your computer
* Clone or download this repo https://github.com/ed9n/Graphql
* Open your newly created folder with your code editor
* Checkout dev branch
* Using "npm i"

# How to use Graphql Service
Starting Graphql Service
1. Copy and rename env.example to .env
2. The application is run in development mode: "npm run start:dev": start on "http://localhost:4000/"
3. Need register user: Mutation -> register
4. Need take JWT Token: Query -> jwt(add register data)
5. Need add JWT Token in Headers: open Headers and add in left input: Authorization and right input: Bearer JWT Token

# Implementation details

# Queries:

* artist
* artists
* genre
* enres
* track
* tracks
* band
* bands
* album
* albums
* jwt
* user
* favourites (available only for logged in user)

#  Mutations:

* Artists:
 - createArtist
 - deleteArtist
 - updateArtist

* Genres
 - createGenre
 - deleteGenre
 - updateGenre

* Bands
 - createBand
 - deleteBand
 - updateBand

* Tracks
 - createTrack
 - deleteTrack
 - updateTrack

* Albums
 - createAlbum
 - deleteAlbum
 - updateAlbum

* Users
 - register

* Favourites
 - addTrackToFavourites
 - addBandToFavourites
 - addArtistToFavourites
 - addGenreToFavourites
