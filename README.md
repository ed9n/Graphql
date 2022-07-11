# Graphql Service

# INSTRUCTIONS:
* Make sure that you have v16 LTS Node installed on your computer
* Clone or download this repo https://github.com/ed9n/Graphql
* Open your newly created folder with your code editor
* Checkout dev branch
* Using "npm i"
* npm install -g ts-node

# How to use Graphql Service
Starting Graphql Service
1. Copy and rename env.example to .env
2. The application is run in development mode: "npm run start:dev": start on "http://localhost:4000/"
3. Need register user: Mutation -> register
4. Need take JWT Token: Query -> jwt(add register data)
5. Need add JWT Token in Headers: open Headers and add in Left Input: Authorization, Right Input: Bearer JWT Token

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

* Artists(available only for logged in user):
 - createArtist
 - deleteArtist
 - updateArtist

* Genres(available only for logged in user):
 - createGenre
 - deleteGenre
 - updateGenre

* Bands(available only for logged in user):
 - createBand
 - deleteBand
 - updateBand

* Tracks(available only for logged in user):
 - createTrack
 - deleteTrack
 - updateTrack

* Albums(available only for logged in user):
 - createAlbum
 - deleteAlbum
 - updateAlbum

* Users:
 - register

* Favourites(available only for logged in user):
 - addTrackToFavourites
 - addBandToFavourites
 - addArtistToFavourites
 - addGenreToFavourites
