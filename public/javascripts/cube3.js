   // revolutions per second
      var angularSpeed = 0.1; 
      var lastTime = 0;
		var scaleState = 1; 
		
		var currentColorCode = '0000ff';
				
		
      // this function is executed on each animation frame
      function animate(){
        // render
        renderer.render(scene, camera);
 
        // request new frame
        requestAnimationFrame(function(){
            animate();
        });
        controls.update();
      }
 
      // renderer
      var renderer = new THREE.WebGLRenderer();
      renderer.setSize(window.innerWidth, window.innerHeight);
      document.body.appendChild(renderer.domElement);
		renderer.setClearColor( 0x7ec0ee, 1); 
 
      // camera
      var camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 6000);
      camera.position.z = 3000;
 
		controls = new THREE.TrackballControls(camera);
		controls.addEventListener('change', render);
 
      // scene
      var scene = new THREE.Scene();
          
		var geometry = new THREE.SphereGeometry( 100, 32, 32 ); 
		var material = new THREE.MeshBasicMaterial( {color: 0xffff00} ); 
	
		
		var sphere = new THREE.Mesh( geometry, material ); 
		sphere.position.x = 400;
		sphere.position.y = 400;
		sphere.position.z = 400;
		scene.add( sphere );          

		
      var stone_material = new THREE.MeshLambertMaterial({
        map: THREE.ImageUtils.loadTexture('images/stone.jpg')
       });	                
              
  
       var texture = THREE.ImageUtils.loadTexture( "images/grass.jpg" );
       texture.wrapS = THREE.RepeatWrapping; 
       texture.wrapT = THREE.RepeatWrapping; 
       texture.repeat.set( 20, 20 );
       
       var grass_material = new THREE.MeshLambertMaterial({
       	map: texture
       });	
      // cube
      /*
      var cube = new THREE.Mesh(new THREE.BoxGeometry(200, 200, 200), new THREE.MeshLambertMaterial({
        color: '#' + currentColorCode 
      }));
*/

		var ground = new THREE.Mesh(new THREE.BoxGeometry(10000, 10000, 10), grass_material)
		ground.position.y=-200;		
		//scene.add(ground);
      var cube = new THREE.Mesh(new THREE.BoxGeometry(200, 200, 200), stone_material);
      cube.overdraw = true;
      cube.rotation.x = Math.PI * 0.1;
      scene.add(cube);
		
      // add subtle blue ambient lighting
      var ambientLight = new THREE.AmbientLight(0x000044);
      scene.add(ambientLight);
      
      // directional lighting
      var directionalLight = new THREE.DirectionalLight(0xffffff);
      directionalLight.position.set(1, 1, 1).normalize();
      scene.add(directionalLight);
 
      // start animation
      animate();
      
      KeyboardJS.on('a', function(){
      		cube.applyMatrix( new THREE.Matrix4().makeTranslation(-200*scaleState, 0, 0) );
      	}, 
      	function(){
      	
      	});
      	
      	KeyboardJS.on('s', function(){
      		cube.applyMatrix( new THREE.Matrix4().makeTranslation(0, -187*scaleState, -61) );
      	}, 
      	function(){
     		
      	});
      	
      	KeyboardJS.on('w', function(){
      		cube.applyMatrix( new THREE.Matrix4().makeTranslation(0, 187*scaleState, 61) );
      	}, 
      	function(){
     		
      	});
      	
      	KeyboardJS.on('d', function(){
      		cube.applyMatrix( new THREE.Matrix4().makeTranslation(200*scaleState, 0, 0) );
      	}, 
      	function(){
     		
      	});
      	
      	KeyboardJS.on('x', function(){
      		cube.applyMatrix( new THREE.Matrix4().makeTranslation(0, -61, 187*scaleState) );
      	}, 
      	function(){
     		
      	});
      	
      	KeyboardJS.on('z', function(){
      		cube.applyMatrix( new THREE.Matrix4().makeTranslation(0, 61, -187*scaleState) );
      	}, 
      	function(){
     		
      	});
      	
      	KeyboardJS.on('[', function(){
      		cube.applyMatrix( new THREE.Matrix4().multiplyScalar(2) );
      		cube.applyMatrix( new THREE.Matrix4().makeTranslation(50*scaleState, 50*scaleState, 50*scaleState) );
      		scaleState= scaleState*2;
      		
      	}, 
      	function(){
     		
      	});
      	
      	KeyboardJS.on(']', function(){
      		cube.applyMatrix( new THREE.Matrix4().multiplyScalar(0.5) );
      		cube.applyMatrix( new THREE.Matrix4().makeTranslation(100*scaleState, 100*scaleState, 100*scaleState) );
      		scaleState = scaleState*0.5;
      		
      	}, 
      	function(){
     		
      	});
      	
      	KeyboardJS.on('k', function(){
      		
     	// cube
    	 var cube2 = new THREE.Mesh(new THREE.BoxGeometry(
    	 2*cube.geometry.vertices[0].x*scaleState, 
    	 2*cube.geometry.vertices[0].y*scaleState, 
    	 2*cube.geometry.vertices[0].z*scaleState), 
    	// new THREE.MeshLambertMaterial({
   	//     color: '#' + currentColorCode
   	//   }));
   	stone_material);
      cube2.position.x = cube.position.x;
      cube2.position.y = cube.position.y;
      cube2.position.z = cube.position.z;
      cube2.overdraw = true;
      cube2.rotation.x = Math.PI * 0.1;
      scene.add(cube2);

      	}, 
      	function(){
     		
      	});
		
			function render(){
				renderer.render(scene, camera);	
			}
     