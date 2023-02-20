const baseURL='https://api.themoviedb.org/3'
const ACCESS_TOKEN=`eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkYmFjZmVlMmFkNTA1ZGQ5YzM2ZjkxMzExM2JhMTdhNCIsInN1YiI6IjYzZjM0MThiYTI0YzUwMDA4MDBjYmVhYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ACr3KuZtGUscGpKfOi-CLV-o1WPU_EFGINV_zK4qTlc`

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
    baseURL,urls,ACCESS_TOKEN,
}