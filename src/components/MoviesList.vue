<template>
<div>
    <div class="container text-center">
        <h2>Find Movies, TV shows and more</h2>
        <div class="row">
            <div class="col">
                <select class="form-select" aria-label="Default select example" id="genreList" v-on:change="getGenre">
                    <option selected>Genre</option>
                    <option value="28">Action</option>
                    <option value="12">Adventure</option>
                    <option value="16">Animation</option>
                    <option value="35">Comedy</option>
                    <option value="80">Crime</option>
                    <option value="99">Documentary</option>
                    <option value="18">Drama</option>
                    <option value="10751">Family</option>
                    <option value="14">Fantasy</option>
                    <option value="36">History</option>
                    <option value="27">Horror</option>
                    <option value="10402">Music</option>
                    <option value="9648">Mystery</option>
                    <option value="10749">Romance</option>
                    <option value="878">Science Fiction</option>
                    <option value="10770">TV Movie</option>
                    <option value="53">Thriller</option>
                    <option value="10752">War</option>
                    <option value="37">Western</option>
                </select>
            </div>
            <div class="col">
                <select class="form-select" aria-label="Default select example" id="yearList" v-on:change="getYear">
                    <option selected>Year</option>
                    <option value="1874">1874</option>
                    <option value="1875">1875</option>
                    <option value="1876">1876</option>
                    <option value="1877">1877</option>
                    <option value="1878">1878</option>
                    <option value="1879">1879</option>
                    <option value="1880">1880</option>
                    <option value="1881">1881</option>
                    <option value="1882">1882</option>
                    <option value="1883">1883</option>
                    <option value="1884">1884</option>
                    <option value="1885">1885</option>
                    <option value="1886">1886</option>
                    <option value="1887">1887</option>
                    <option value="1888">1888</option>
                    <option value="1889">1889</option>
                    <option value="1890">1890</option>
                    <option value="1891">1891</option>
                    <option value="1892">1892</option>
                    <option value="1893">1893</option>
                    <option value="1894">1894</option>
                    <option value="1895">1895</option>
                    <option value="1896">1896</option>
                    <option value="1897">1897</option>
                    <option value="1898">1898</option>
                    <option value="1899">1899</option>
                    <option value="1900">1900</option>
                    <option value="1901">1901</option>
                    <option value="1902">1902</option>
                    <option value="1903">1903</option>
                    <option value="1904">1904</option>
                    <option value="1905">1905</option>
                    <option value="1906">1906</option>
                    <option value="1907">1907</option>
                    <option value="1908">1908</option>
                    <option value="1909">1909</option>
                    <option value="1910">1910</option>
                    <option value="1911">1911</option>
                    <option value="1912">1912</option>
                    <option value="1913">1913</option>
                    <option value="1914">1914</option>
                    <option value="1915">1915</option>
                    <option value="1916">1916</option>
                    <option value="1917">1917</option>
                    <option value="1918">1918</option>
                    <option value="1919">1919</option>
                    <option value="1920">1920</option>
                    <option value="1921">1921</option>
                    <option value="1922">1922</option>
                    <option value="1923">1923</option>
                    <option value="1924">1924</option>
                    <option value="1925">1925</option>
                    <option value="1926">1926</option>
                    <option value="1927">1927</option>
                    <option value="1928">1928</option>
                    <option value="1929">1929</option>
                    <option value="1930">1930</option>
                    <option value="1931">1931</option>
                    <option value="1932">1932</option>
                    <option value="1933">1933</option>
                    <option value="1934">1934</option>
                    <option value="1935">1935</option>
                    <option value="1936">1936</option>
                    <option value="1937">1937</option>
                    <option value="1938">1938</option>
                    <option value="1939">1939</option>
                    <option value="1940">1940</option>
                    <option value="1941">1941</option>
                    <option value="1942">1942</option>
                    <option value="1943">1943</option>
                    <option value="1944">1944</option>
                    <option value="1945">1945</option>
                    <option value="1946">1946</option>
                    <option value="1947">1947</option>
                    <option value="1948">1948</option>
                    <option value="1949">1949</option>
                    <option value="1950">1950</option>
                    <option value="1951">1951</option>
                    <option value="1952">1952</option>
                    <option value="1953">1953</option>
                    <option value="1954">1954</option>
                    <option value="1955">1955</option>
                    <option value="1956">1956</option>
                    <option value="1957">1957</option>
                    <option value="1958">1958</option>
                    <option value="1959">1959</option>
                    <option value="1960">1960</option>
                    <option value="1961">1961</option>
                    <option value="1962">1962</option>
                    <option value="1963">1963</option>
                    <option value="1964">1964</option>
                    <option value="1965">1965</option>
                    <option value="1966">1966</option>
                    <option value="1967">1967</option>
                    <option value="1968">1968</option>
                    <option value="1969">1969</option>
                    <option value="1970">1970</option>
                    <option value="1971">1971</option>
                    <option value="1972">1972</option>
                    <option value="1973">1973</option>
                    <option value="1974">1974</option>
                    <option value="1975">1975</option>
                    <option value="1976">1976</option>
                    <option value="1977">1977</option>
                    <option value="1978">1978</option>
                    <option value="1979">1979</option>
                    <option value="1980">1980</option>
                    <option value="1981">1981</option>
                    <option value="1982">1982</option>
                    <option value="1983">1983</option>
                    <option value="1984">1984</option>
                    <option value="1985">1985</option>
                    <option value="1986">1986</option>
                    <option value="1987">1987</option>
                    <option value="1988">1988</option>
                    <option value="1989">1989</option>
                    <option value="1990">1990</option>
                    <option value="1991">1991</option>
                    <option value="1992">1992</option>
                    <option value="1993">1993</option>
                    <option value="1994">1994</option>
                    <option value="1995">1995</option>
                    <option value="1996">1996</option>
                    <option value="1997">1997</option>
                    <option value="1998">1998</option>
                    <option value="1999">1999</option>
                    <option value="2000">2000</option>
                    <option value="2001">2001</option>
                    <option value="2002">2002</option>
                    <option value="2003">2003</option>
                    <option value="2004">2004</option>
                    <option value="2005">2005</option>
                    <option value="2006">2006</option>
                    <option value="2007">2007</option>
                    <option value="2008">2008</option>
                    <option value="2009">2009</option>
                    <option value="2010">2010</option>
                    <option value="2011">2011</option>
                    <option value="2012">2012</option>
                    <option value="2013">2013</option>
                    <option value="2014">2014</option>
                    <option value="2015">2015</option>
                    <option value="2016">2016</option>
                    <option value="2017">2017</option>
                    <option value="2018">2018</option>
                    <option value="2019">2019</option>
                    <option value="2020">2020</option>
                    <option value="2021">2021</option>
                    <option value="2022">2022</option>
                </select>
            </div>
            <div class="col">
                <select class="form-select" aria-label="Default select example" id="ratingList" v-on:change="getRating">
                    <option selected>Rating</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                </select>
            </div>
            <div class="col-1">
                <button type="button" class="btn btn-primary" v-on:click="filter">Filter</button>
            </div>
        </div>
    </div>
    <h2> Popular </h2>
    <ul class="movielist">
        <li v-for="movie in movies" :key="movie.id">
            <Movie :movie="movie" />
        </li>
    </ul>
    <nav aria-label="Page navigation example">
        <ul class="pagination">
            <li class="page-item"><a class="page-link" href="#" @click.prevent="previousPage">Previous</a></li>
            <li class="page-item"><a class="page-link" href="#" @click.prevent="nextPage">Next</a></li>
        </ul>
    </nav>
</div>
</template>

<script>
import Movie from './Movie.vue'
export default {
    name: 'MoviesList',
    data() {
        return {
            movies: [],
            selectedGenre: '',
            selectedYear: '',
            selectedRating: '',
            pageNum: 1,
        }
    },
    created: function() {
        this.fetchData()
    },
    methods: {
        fetchData: async function() {
            try {
                const res = await fetch('https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=ab8356e075fc49f45bcecd2802a2c5dd' + '&page=' + this.pageNum)
                const movies = await res.json()
                this.movies = movies.results
                console.log(movies);
            } catch (e) {
                console.log(e)
            }
        },
        getGenre: function() {
            this.selectedGenre = document.getElementById("genreList").value;
            console.log(this.selectedGenre);
        },
        getYear: function() {
            this.selectedYear = document.getElementById("yearList").value;
            console.log(this.selectedYear);
        },
        getRating: function() {
            this.selectedRating = document.getElementById("ratingList").value;
            console.log(this.selectedRating);
        },
        filter: async function() {
            try {
                const res = await fetch('https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=ab8356e075fc49f45bcecd2802a2c5dd' + '&year=' + this.selectedYear + '&with_genres=' + this.selectedGenre + '&vote_average.lte=' + this.selectedRating)
                const movies = await res.json()
                this.movies = movies.results
                console.log(movies);
            } catch (e) {
                console.log(e)
            }
        },
        nextPage: function() {
            this.pageNum += 1;
            this.fetchData()
            console.log(this.pageNum);
        },
        previousPage: function() {
            if (this.pageNum !== 1) {
                this.pageNum -= 1;
                this.fetchData();
                }
            console.log(this.pageNum);
        }
    },
    components: {
        Movie
    }
}
</script>

<style scoped>
    h2 {
        padding-bottom: 10px;
        padding-left: 2rem;
        padding-right: 2rem;
    }
    .movielist {
        display: grid;
        list-style: none;
        padding: 1rem;
        margin: 0;
        grid-row-gap: 1rem;
        grid-template-columns: repeat(auto-fit, minmax(179px, 1fr));
        text-align: center;
    }
    .row {
        align-items: center;
        padding-bottom: 40px;
    }
    button {
        width: 100%;
    }
    .btn:hover {
        background: var(--bs-btn-hover-color);
        color: var(--bs-btn-hover-bg);
        border: none;
    }
    .pagination {
        display: flex;
        justify-content: center;
    }
    .page-link {
        background-color: var(--bs-pagination-color);
        color: #fff;
        border: none;
    }
</style>
