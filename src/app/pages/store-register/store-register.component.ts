import { Component, OnInit, ViewChild } from '@angular/core';
import { MapInfoWindow, GoogleMap, MapMarker } from '@angular/google-maps';
import { FormGroup, FormControl } from '@angular/forms';
import { StoreCategoryService } from '../../_service/store-category.service';
import { StoreCategory } from '../../_model/storeCategory';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

import { AngularFireStorage } from '@angular/fire/storage';
import { database } from 'firebase';

@Component({
  selector: 'app-store-register',
  templateUrl: './store-register.component.html',
  styleUrls: ['./store-register.component.css']
})
export class StoreRegisterComponent implements OnInit {

  zoom = 15;
  center: google.maps.LatLngLiteral;
  options: google.maps.MapOptions = {
    mapTypeId: 'roadmap',
    zoomControl: true,
    scrollwheel: false,
    disableDoubleClickZoom: true,
    maxZoom: 17,
    minZoom: 8,
  };
  
  @ViewChild(GoogleMap, { static: false }) map: GoogleMap
  @ViewChild(MapInfoWindow, { static: false }) info: MapInfoWindow

  markers = []
  infoContent = ''

  form: FormGroup;
  myControlCategory: FormControl = new FormControl();
  storeCategories: StoreCategory[] = [];
  categorySelected: StoreCategory;


  uploadPercent: Observable<number>;

  constructor(private storeCategoryService: StoreCategoryService, private storage: AngularFireStorage) { }

  uploadFile(event) {
    
    const file = event.target.files[0];
    


    var rightNow = new Date();
  	var res = rightNow.toISOString().replace(/-/g,"").replace(/:/g,"").replace('.',"");
    const filePath = '/'+ res + file.name;
    const fileRef = this.storage.ref(filePath);
    var task = this.storage.upload(filePath, file); //no se xq sale error en esa linea, igual funciona
    
    task.snapshotChanges().subscribe(data =>{
      if (data.metadata != null){
        console.log(data)
      }
    });;
    this.uploadPercent = task.percentageChanges();
  
  }

  ngOnInit(): void {
    this.initMap();
    this.clearForm();
    this.getStoreCategories();
  }

  clearForm(){
    this.form = new FormGroup({
      'name': new FormControl(''),
      'description': new FormControl(''),
      'delivery': new FormControl(false),
      'address': new FormControl(''),
      'infoAddress': new FormControl(''),
      'category': this.myControlCategory
      
    });
  }

  operar() {
    console.info(this.form)
  }


  //MARK : Categories
  private getStoreCategories() {
    this.storeCategoryService.getStoreCategories().subscribe(categories =>{
        this.storeCategories = categories;
    })
  }
  //MARK: Fn MAPS

  private initMap(){
    navigator.geolocation.getCurrentPosition(position => {
      this.center = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      }
    });
  }
  addMarker(latLng : google.maps.LatLng){
    this.markers = [];
    this.markers.push({
      position: {
        lat: latLng.lat(),
        lng:  latLng.lng(),
      },
    
      title: 'Ubicación',
      info: '',
      options:{

        icon :"https://img.icons8.com/bubbles/50/000000/map-pin.png"
      },
      
    });
    this.map.center = latLng;
  
  }

  mapClicked(event: google.maps.MouseEvent) {
    this.addMarker(event.latLng);
    
  }

  openInfo(marker: MapMarker, content) {
    this.infoContent = content
    this.info.open(marker)
  }
}
