<template>
    <div class="movie-wrapper" :style="styles">
        <div class="movie-info">
            <h1>
                {{movie.title}}
            </h1>
            <h3>Release Date: {{movie.release_date}}</h3>
            <p>{{movie.overview}}</p>
        </div>
    </div>
</template>

<script>
    const BACKDROP_PATH = "http://image.tmdb.org/t/p/w1280"
    export default {
        data() {
            return {
                movie: {}
            }
        },
        created: function() {
        this.fetchData()
        },
        computed: {
            styles(){
                return {
                background: `url(${BACKDROP_PATH}/${this.movie.backdrop_path}) center no-repeat`
                }
            }
        },
        methods: {
            fetchData: async function() {
                try {
                    const res = await fetch(`https://api.themoviedb.org/3/movie/${this.$route.params.id}?api_key=ab8356e075fc49f45bcecd2802a2c5dd`)
                    const movie = await res.json()
                    this.movie = movie
                } catch (e) {
                    console.log(e)
                }
            }
        },
    }
</script>

<style scoped>
    .movie-wrapper {
        position: relative;
        padding-top: 50vh;
        background-size: cover;
    }
    .movie-info {
        background: white;
        color: #222;
        padding: 2rem 10%;
    }
</style>
