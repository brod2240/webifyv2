import axios from 'axios';


export const spotifyAuth = () => {

    const CLIENT_ID="554e30d906e84b3c9ef9e034c656721d"
    const REDIRECT_URL="http://localhost:3000/home"
    const API_URL="http://accounts.spotify.com/authorize"

    const scope = ['user-read-email', // the scopes are in the spotify
        'user-read-private', //developers website, which show users
        'user-modify-playback-state', //what webify will be accessing from their profile
        'user-read-playback-state', 
        'user-read-currently-playing', 
        'user-top-read', 
        'ugc-image-upload'
    ];

    window.location.href = `${API_URL}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URL}&scope=${scope.join(" ")}&response_type=token&show_dialog=true`;

}

export const getTopArtists = async (token)  => {
 
    try {
        const res = await axios.get(
            "https://api.spotify.com/v1/me/top/artists",
    
            {
                params: { limit: 10, offset: 0, time_range: "short_term" },
                headers: {
                    Authorization: "Bearer " + token,
                    "Content-Type" : "application/json",
                },
            }
        );
        
        const items  = res.data.items;
        const artists = items.map(({ name, id, images }) => {
            return { name, id, images };
        });

        return artists;
    
    } catch (err) {
       console.log(err);
    }

   
}