


    console.log("Started");
    scene = new THREE.Scene();
    renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,      
        autoRotationEnabled: true,
        autoRotationSpeed: 0.12,
        manualRotationEnabled: true,
        manualRotationSpeed: 0.12
    });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth / 2, window.innerHeight / 2);
    container = document.getElementById('container');
    var node = document.createElement("div");
    node.className = 'rendercanvas';
    node.appendChild(renderer.domElement);
    document.getElementById('bg-block').appendChild(node);

    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, .1, 1000);

    var geometry = new THREE.BoxGeometry(1, 1, 1);
    var material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    var cube = new THREE.Mesh(geometry, material);

// Make the Die
    var geo2 = new THREE.DodecahedronBufferGeometry(1, 0);
    var mat2 = new THREE.MeshStandardMaterial({ color: 0x00ff00})
    var die = new THREE.Mesh(geo2, mat2);
    die.castShadow = true;
    scene.add(die);

    // scene.add(cube);

    camera.position.z = 5;


function animate() {
	requestAnimationFrame( animate );
    renderer.render( scene, camera );
    die.rotation.y += 0.01;
    die.rotation.x += 0.01;
}
animate();


var light = new THREE.PointLight( 0xffffff, 1, 100 );
light.position.set( 10, 10, 10 );
scene.add( light );