import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'My favorite photos!';
  image1 = 'https://www.launchcode.org/assets/icons/target-00c7a0bc7776901e3c5cdc4c36c465f19e41a249bc7267a595f0bfa14ab944b7.png';
  image2 = 'https://ih1.redbubble.net/image.261306418.4788/raf,750x1000,075,t,FFFFFF:97ab1c12de.u2.jpg';
  image3 = 'https://static01.nyt.com/images/2018/12/14/arts/14spiderman/14spiderman-superJumbo.jpg';

  constructor() { }

  ngOnInit() {
  }

}