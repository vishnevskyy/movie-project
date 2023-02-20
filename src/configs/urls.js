const baseURL='https://api.themoviedb.org/3'
const urls={
    discover: '/discover',
    movie: '/movie',
    genre: '/genre',
    list: '/list',
    tv: '/tv',
    trending: '/trending',
    search:'/search',
    multi:'/multi',
    day:'/day',
    now_playing:'/now_playing',
    videos:'/videos',
    similar:'/similar',
    account:'/account',
    watchlist:'/watchlist',
    favorite:'/favorite',
    movies:'/movies',
    credits:'/credits',
    auth:{
        authentication:'/authentication',
        token:'/token',
        session:'/session',
        new:'/new',
        validate_with_login:'/validate_with_login'
    }
}
export {
    baseURL,
    urls
}