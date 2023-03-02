var markersURLArray=[];
var markersNameArray=[];

AFRAME.registerComponent('markers_start',{
  init:function(){
    console.log('Add markers to the scene');
    var sceneEl = document.querySelector('a-scene');
    
    //lists of the markers
    for(var i=1; i<5; i++)
    {
      var url="resources/markers/pattern-Individual_Blocks-"+i+".patt";
      markersURLArray.push(url);
      markersNameArray.push('Marker_'+i);      
    }

    for(var k=0; k<5; k++)
    {
      var markerEl = document.createElement('a-marker');
      markerEl.setAttribute('type','pattern');
      markerEl.setAttribute('url',markersURLArray[k]);
      markerEl.setAttribute('id',markersNameArray[k]);

      markerEl.setAttribute('registerevents','');
      sceneEl.appendChild(markerEl);

     // Creating animation element
       var animationEl = document.createElement('a-entity');
      
     // Setting the attributes for the animation
       animationEl.setAttribute('gltf-model', 'assets/animation' + (k+1) + '.glb');
       animationEl.setAttribute('animation', {property: 'rotation', to: '360 360 360', loop: 'repeat', dur: '10000'});
       animationEl.setAttribute('animation', {property: 'scale', to: '3 3 3'});
       animationEl.setAttribute('animation-mixer', '');
       
      

     // Setting the position of the animation
       animationEl.object3D.position.set(0, 0, 0);

     // Adding the animation to the marker
       markerEl.appendChild(animationEl);
    }
  }
});

AFRAME.registerComponent('registerevents', {
    init: function () {
      const marker = this.el;
      marker.addEventListener("markerFound", ()=> {
        var markerId = marker.id;
        console.log('Marker Found: ', markerId);
      });
      marker.addEventListener("markerLost",() =>{
        var markerId = marker.id;
        console.log('Marker Lost: ', markerId);
      });
    }
});

 
