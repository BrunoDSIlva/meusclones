const API_KEY = '0a72b847c53564ddc0a1b98bd421041c';
const API_BASE = 'https://api.themoviedb.org/3';


/*
Arquivo para filtrar tudo que pesquisar na API dos TMDB
 -originais da netflix
 -recomendados(treding)
 -em alta(top rated)
 -series
 -comédia
 -animações
 -documentarios
 -

*/ 

const basicFetch = async() =>{
    const req = await fetch(`$(API_BASE)$(endpoint)`);
    const json = await req.json();
    return json;
}
export default {
    getHomeList: async () => {
        return[
            {
                slug: 'originals',
                title: 'Originais do Netflix',
                items: await basicFetch(`/discover/tv?with_network=213&language=pt-BR&api_key=${API_key}`)
            },
            {
                slug: 'treding',
                title:'Recomendados para Você',
                items: await basicFetch(`/trending/all/week?language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'toprated',
                title:'Em Alta',
                items: await basicFetch(`/movie/top_rated?language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'action',
                title:'Ação',
                items: await basicFetch(`/discover/mobie?with_genres=2881language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'comedy',
                title:'Comédia',
                items:await basicFetch(`/discover/mobie?with_genres=3581language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'Animation',
                title:'Animações',
                items:await basicFetch(`/discover/mobie?with_genres=1681language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'documentary',
                title:'Documentário',
                items:await basicFetch(`/discover/mobie?with_genres=9981language=pt-BR&api_key=${API_KEY}`)
            },
        ];
    }


}