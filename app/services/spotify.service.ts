import {Injectable} from '@angular/core';
import {Http,Headers} from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class SpotifyService{
    searchUrl : string;
    artistUrl : string;
    albumsUrl : string;
    albumUrl : string;
    
    constructor(private _http:Http ){
    }
    
    searchMusic(searchStr: string,type='artist'){
        this.searchUrl = `https://api.spotify.com/v1/search?q=${searchStr}&type=${type}&offset=0&limit=20`;
        
        return this._http.get(this.searchUrl)
                    .map(res => res.json());
    };

    getArtist(id : string){
        this.artistUrl = `https://api.spotify.com/v1/artists/${id}`;
        
        return this._http.get(this.artistUrl)
                    .map(res => res.json());
    };

     getAlbums(artistid : string){
        this.albumsUrl = `https://api.spotify.com/v1/artists/${artistid}/albums`;
        
        return this._http.get(this.albumsUrl)
                    .map(res => res.json());
    };

     getAlbum(albumId : string){
        this.albumUrl = `https://api.spotify.com/v1/albums/${albumId}`;
        
        return this._http.get(this.albumUrl)
                    .map(res => res.json());
    };
}