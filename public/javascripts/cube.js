	 var scene = new THREE.Scene(); var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 ); 
	 var renderer = new THREE.WebGLRenderer(); 
	 renderer.setSize( window.innerWidth, window.innerHeight ); 
	 document.body.appendChild( renderer.domElement );
	 
      // add subtle blue ambient lighting
      var ambientLight = new THREE.AmbientLight(0x000044);
      scene.add(ambientLight);
      
      // directional lighting
      var directionalLight = new THREE.DirectionalLight(0xffffff);
      directionalLight.position.set(1, 1, 1).normalize();
      scene.add(directionalLight);
	 
	 var geometry = new THREE.BoxGeometry(1,1,1); 
	 var material = new THREE.MeshBasicMaterial( { color: 0x0000ff } ); 
	 var cube = new THREE.Mesh( geometry, material ); 
	 
	 scene.add( cube ); 
	 camera.position.z = 5;
	 
	 function render() {
	 	requestAnimationFrame(render); 
		//cube.rotation.x += 0.1; 
		cube.rotation.y += 0.1;	 	
	 	renderer.render(scene, camera); 
	 } 
	 render();