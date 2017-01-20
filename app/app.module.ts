import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {routing} from  './app.router';
import {FormsModule  } from '@angular/forms';
import {Http,Headers} from '@angular/http';
import {HttpModule} from '@angular/http';

import { AppComponent }  from './app.component';
import {NavBarComponent} from './components/navbar/navbar.component';
import {AboutComponent} from './components/about/about.component';
import {SearchComponent} from './components/search/search.component';
import {ArtistComponent} from './components/artist/artist.component';
import {AlbumComponent} from './components/album/album.component';

@NgModule({
  imports:      [ BrowserModule,routing,FormsModule,HttpModule ],
  declarations: [ AppComponent,NavBarComponent,AboutComponent,SearchComponent,ArtistComponent,AlbumComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
