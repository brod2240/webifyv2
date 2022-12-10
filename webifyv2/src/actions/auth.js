
export const spotifyAuth = () => {

    console.log("in auth function");

    const CLIENT_ID="554e30d906e84b3c9ef9e034c656721d"
    const REDIRECT_URL="http://localhost:3000/"
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