///<reference path="../../../../node_modules/@types/googlemaps/index.d.ts"/>

import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-mapa-nativo',
  templateUrl: './mapa-nativo.component.html',
  styleUrls: ['./mapa-nativo.component.css']
})
export class MapaNativoComponent implements OnInit {

  @ViewChild('divMap') divMap: ElementRef;

  mapa: google.maps.Map;
  markers: google.maps.Marker[];
   constructor() {
     this.markers=[];
    }

  
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    
  }

  ngAfterViewInit(): void {

    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition(position=>{
        this.cargarMapa(position);
        
        this.cargarAutocomplete();
      })
      
    }else{
      console.log('Navegador no compatible')
    }

  }

  cargarMapa(position){
    const opciones={
      center: new google.maps.LatLng(position.coords.latitude,position.coords.longitude),
      zoom: 17,
      mapTypeId: google.maps.MapTypeId.HYBRID
    }
    this.mapa= new google.maps.Map(this.divMap.nativeElement, opciones)

    const icon={
      url:"https://images.alphacoders.com/872/thumbbig-872870.jpg",
      scaledSize:new google.maps.Size(80,80)
    }
    const markerPosition = new google.maps.Marker({
      position: this.mapa.getCenter(),
      animation:google.maps.Animation.DROP,
      icon: icon
    })

    markerPosition.setMap(this.mapa);

    google.maps.event.addListener(this.mapa,'click',(event:google.maps.MouseEvent)=>{
      const marker = new google.maps.Marker({
        position: event.latLng,
        animation: google.maps.Animation.BOUNCE
  
      });
      marker.setDraggable(true);
      marker.setMap(this.mapa);

      this.markers.push(marker);

      google.maps.event.addListener(marker,'click',event=>{
        marker.setMap(null);
      })

      google.maps.event.addListener(marker,'mouseover', event=>{
        marker.setAnimation(google.maps.Animation.DROP)
      })
      google.maps.event.addListener(marker,'mouseout', event=>{
        marker.setAnimation(google.maps.Animation.BOUNCE)
      })
    })

  }
  borrarMarcadores(){
    for(let marker of this.markers){
      marker.setMap(null);
    }
  }

  cargarAutocomplete(){
    const autocomplete = new google.maps.places.Autocomplete(
      document.querySelector('#inputPlaces')
      );
  google.maps.event.addListener(autocomplete,'place_changed',event=>{
    const place=autocomplete.getPlace();
    console.log(place);

    // this.mapa.setCenter(place.geometry.location)

    // const marker = new google.maps.Marker({
    //   position:place.geometry.location
    // })
    // marker.setMap(this.mapa)
    this.calcularRuta(this.mapa.getCenter(),place.geometry.location,google.maps.TravelMode.WALKING)

    })
  }
  calcularRuta(
    pOrigen: string | google.maps.LatLng,
    pDestino: string | google.maps.LatLng,
    pModoViaje: google.maps.TravelMode = google.maps.TravelMode.DRIVING
  ){
    const directionsService = new google.maps.DirectionsService
    const directionRenderer = new google.maps.DirectionsRenderer
    
    directionRenderer.setMap(this.mapa);

    directionsService.route({
      origin: pOrigen,
      destination: pDestino,
      travelMode: pModoViaje
    }, result=>{
      directionRenderer.setDirections(result);
    })

  }
  }


