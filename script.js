const table = [
    "M", "Abu", "19", 1, 1,
    "F", "Sarah", "42", 2, 1,
    "M", "Jamal", "41", 3, 1,
    "F", "Ramuni", "22", 4, 1,
    "M", "Salim", "10", 5, 1,
    "F", "Jawina", "12", 6, 1,
    "M", "Salman", "14", 7, 1,
    "F", "Omarina", "15", 8, 1,
    "M", "Fatihi", "18", 9, 1,
    "F", "Nirmala", "20", 10, 1,
    "M", "Salmi", "22", 11, 1,
    "F", "Manima", "24", 12, 1,
    "F", "Alisha", "26", 13, 1,
    "M", "Fakhri", "28", 14, 1,
    "F", "Palmah", "30", 15, 1,
    "M", "Yani", "32", 16, 1,
    "F", "Cinta", "35", 17, 1,
    "M", "Arimugam", "39", 18, 1,
    "M", "Afiq", "19", 1, 2,
    "F", "Sarah", "42", 2, 2,
    "M", "Tariq", "41", 3, 2,
    "F", "Bella", "22", 4, 2,
    "M", "Banny", "10", 5, 2,
    "F", "Cinderl", "12", 6, 2,
    "M", "Naim", "14", 7, 2,
    "F", "Ofina", "15", 8, 2,
    "M", "Firdaus", "18", 9, 2,
    "F", "Nia", "20", 10, 2,
    "M", "Sikh", "22", 11, 2,
    "F", "Mamnun", "24", 12, 2,
    "F", "Adila", "26", 13, 2,
    "M", "Samdol", "28", 14, 2,
    "F", "Petrah", "30", 15, 2,
    "M", "Sachin", "32", 16, 2,
    "F", "Chloe", "35", 17, 2,
    "M", "Arish", "39", 18, 2,
    "M", "Abe", "19", 1, 3,
    "F", "Sarashi", "42", 2, 3,
    "M", "Linda", "41", 3, 3,
    "F", "Syiqin", "22", 4, 3,
    "M", "Nikmat", "10", 5, 3,
    "F", "Ain", "12", 6, 3,
    "M", "Nilam", "14", 7, 3,
    "F", "Oyishi", "15", 8, 3,
    "M", "Faris", "18", 9, 3,
    "F", "Nila", "20", 10, 3,
    "M", "Sariman", "22", 11, 3,
    "F", "Munirah", "24", 12, 3,
    "F", "Alanda", "26", 13, 3,
    "M", "Siman", "28", 14, 3,
    "F", "Phootong", "30", 15, 3,
    "M", "Suliman", "32", 16, 3,
    "F", "Calida", "35", 17, 3,
    "M", "Aman", "39", 18, 3,
    "M", "Amin", "19", 1, 4,
    "F", "Sitta", "42", 2, 4,
    "M", "Leman", "41", 3, 4,
    "F", "Bintash", "22", 4, 4,
    "M", "Billu", "10", 5, 4,
    "F", "Carmila", "12", 6, 4,
    "M", "Naish", "14", 7, 4,
    "F", "Olisha", "15", 8, 4,
    "M", "Haikal", "18", 9, 4,
    "F", "Nabila", "20", 10, 4,
    "M", "Harudin", "22", 11, 4,
    "F", "Yana", "24", 12, 4,
    "F", "Akila", "26", 13, 4,
    "M", "Sidan", "28", 14, 4,
    "F", "Tihah", "30", 15, 4,
    "M", "Addin", "32", 16, 4,
    "F", "Cumi", "35", 17, 4,
    "M", "Adi", "39", 18, 4,
    "M", "Anan", "19", 1, 5,
    "F", "Hanna", "42", 2, 5,
    "M", "Talim", "41", 3, 5,
    "F", "Resha", "22", 4, 5,
    "M", "Bijan", "10", 5, 5,
    "F", "Crisha", "12", 6, 5,
    "M", "Yaman", "14", 7, 5,
    "F", "Yashi", "15", 8, 5,
    "M", "Flineq", "18", 9, 5,
    "F", "Nera", "20", 10, 5,
    "M", "Agus", "22", 11, 5,
    "F", "Aminah", "24", 12, 5,
    "F", "Ashila", "26", 13, 5,
    "M", "Kovalan", "28", 14, 5,
    "F", "Pija", "30", 15, 5,
    "M", "Aigi", "32", 16, 5,
    "F", "Cila", "35", 17, 5,
    "M", "Arana", "39", 18, 5,
    "M", "Abu", "19", 1, 6,
    "F", "Sarah", "42", 2, 6,
    "M", "Jamal", "41", 3, 6,
    "F", "Ramuni", "22", 4, 6,
    "M", "Salim", "10", 5, 6,
    "F", "Jawina", "12", 6, 6,
    "M", "Salman", "14", 7, 6,
    "F", "Omarina", "15", 8, 6,
    "M", "Fatihi", "18", 9, 6,
    "F", "Nirmala", "20", 10, 6,
    "M", "Salmi", "22", 11, 6,
    "F", "Manima", "24", 12, 6,
    "F", "Alisha", "26", 13, 6,
    "M", "Fakhri", "28", 14, 6,
    "F", "Palmah", "30", 15, 6,
    "M", "Yani", "32", 16, 6,
    "F", "Cinta", "35", 17, 6,
    "M", "Arimugam", "39", 18, 6,
    "M", "Afiq", "19", 1, 7,
    "F", "Sarah", "42", 2, 7,
    "M", "Tariq", "41", 3, 7,
    "F", "Bella", "22", 4, 7,
    "M", "Banny", "10", 5, 7,
    "F", "Cinderl", "12", 6, 7,
    "M", "Naim", "14", 7, 7,
    "F", "Ofina", "15", 8, 7,
    "M", "Firdaus", "18", 9, 7,
    "F", "Nia", "20", 10, 7,
    "M", "Sikh", "22", 11, 7,
    "F", "Mamnun", "24", 12, 7,
    "F", "Adila", "26", 13, 7,
    "M", "Samdol", "28", 14, 7,
    "F", "Petrah", "30", 15, 7,
    "M", "Sachin", "32", 16, 7,
    "F", "Chloe", "35", 17, 7,
    "M", "Arish", "39", 18, 7,
    "M", "Abe", "19", 1, 8,
    "F", "Sarashi", "42", 2, 8,
    "M", "Linda", "41", 3, 8,
    "F", "Syiqin", "22", 4, 8,
    "M", "Nikmat", "10", 5, 8,
    "F", "Ain", "12", 6, 8,
    "M", "Nilam", "14", 7, 8,
    "F", "Oyishi", "15", 8, 8,
    "M", "Faris", "18", 9, 8,
    "F", "Nila", "20", 10, 8,
    "M", "Sariman", "22", 11, 8,
    "F", "Munirah", "24", 12, 8,
    "F", "Alanda", "26", 13, 8,
    "M", "Siman", "28", 14, 8,
    "F", "Phootong", "30", 15, 8,
    "M", "Suliman", "32", 16, 8,
    "F", "Calida", "35", 17, 8,
    "M", "Aman", "39", 18, 8,
    "M", "Amin", "19", 1, 9,
    "F", "Sitta", "42", 2, 9,
    "M", "Leman", "41", 3, 9,
    "F", "Bintash", "22", 4, 9,
    "M", "Billu", "10", 5, 9,
    "F", "Carmila", "12", 6, 9,
    "M", "Naish", "14", 7, 9,
    "F", "Olisha", "15", 8, 9,
    "M", "Haikal", "18", 9, 9,
    "F", "Nabila", "20", 10, 9,
    "M", "Harudin", "22", 11, 9,
    "F", "Yana", "24", 12, 9,
    "F", "Akila", "26", 13, 9,
    "M", "Sidan", "28", 14, 9,
    "F", "Tihah", "30", 15, 9,
    "M", "Addin", "32", 16, 9,
    "F", "Cumi", "35", 17, 9,
    "M", "Adi", "39", 18, 9,

];

let camera, scene, renderer, controls, composer;
var hblur, vblur;
let targets = {simple: [], table: [], sphere: [], helix: [], grid: [], cone: []};

init();
animate();

function init() {

    initCamera();

    initScene();

    initObjects();

    addClickListeners();

    initRenderer();

    initTrackbarControls();

    transform(targets.table, 2000);

    window.addEventListener('resize', onWindowResize, false);

}

function initCamera() {

    camera = new THREE.PerspectiveCamera(40, window.innerWidth / window.innerHeight, 1, 10000);
    camera.position.z = 3000;

}

function initScene() {

    scene = new THREE.Scene();

}

function initRenderer() {

    renderer = new THREE.CSS3DRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.getElementById('container').appendChild(renderer.domElement);
}

function initObjects() {

    simpleObjectsLayout();
    generateGeometricLayouts();

}

function addClickListeners() {

    addClickListener(targets.table, 'table');
    addClickListener(targets.sphere, 'sphere');
    addClickListener(targets.helix, 'helix');
    addClickListener(targets.grid, 'grid');
	addClickListener(targets.cone, 'cone');

}

function simpleObjectsLayout() {

    for (let i = 0; i < table.length; i += 5) {

        let object = new THREE.CSS3DObject(htmlElement(table, i));
        object.position.x = Math.random() * 4000 - 2000;
        object.position.y = Math.random() * 4000 - 2000;
        object.position.z = Math.random() * 4000 - 2000;

        scene.add(object);
        targets.simple.push(object);
        tableLayout(table, i);

    }

}

function htmlElement(table, i) {
    let element = document.createElement('div');
    element.className = 'element';
    if (table[i] == 'F') {
        element.style.backgroundColor = 'rgba(255,20,147' + (Math.random() * 0.5 + 0.25) + ')';
    } else {
        element.style.backgroundColor = 'rgba(0,0,255' + (Math.random() * 0.5 + 0.25) + ')';
    }

    let number = document.createElement('div');
    number.className = 'number';
    number.textContent = (i / 5) + 1;
    element.appendChild(number);

    let symbol = document.createElement('div');
    symbol.className = 'symbol';
    symbol.textContent = table[i];
    element.appendChild(symbol);

    let details = document.createElement('div');
    details.className = 'details';
    details.innerHTML = table[i + 1] + '<br>' + table[i + 2];
    element.appendChild(details);

    element.addEventListener('click', ()=>elementClickHandler(i), false);

    return element;
}

function elementClickHandler(i){

    transform(targets.table,1000);

    new TWEEN.Tween(targets.simple[i / 5].position)
        .to({
            x: 0,
            y: 0,
            z: 2500
            
        }, Math.random() * 2000 + 2000)
        .easing(TWEEN.Easing.Exponential.InOut)
        .start();

    new TWEEN.Tween(this)
        .to({}, 2000 * 2)
        .onUpdate(render)
        .start();
}

function tableLayout(table, index) {

    let object = new THREE.Object3D();

    object.position.x = (table[index + 3] * 140) - 1330;
    object.position.y = -(table[index + 4] * 180) + 990;
    targets.table.push(object);

}

function addClickListener(target, elementId) {

    const button = document.getElementById(elementId);

    button.addEventListener('click', function () {
        transform(target, 2000);
    }, false);

}

function initTrackbarControls() {
    controls = new THREE.TrackballControls(camera, renderer.domElement);
    controls.rotateSpeed = 0.5;
    controls.minDistance = 500;
    controls.maxDistance = 6000;
    controls.addEventListener('change', render);
}

function generateGeometricLayouts() {

    let sphereVector = new THREE.Vector3();
    let helixVector = new THREE.Vector3();
	let coneVector = new THREE.Vector3();

    for (let i = 0, l = targets.simple.length; i < l; i++) {
        addSphereObject(sphereVector, i, l);
        addHelixObject(helixVector, i);
        addGridObject(i);
		addConeObject(coneVector, i);
    }

}

function addSphereObject(sphereVector, index, length) {

    const phi = Math.acos(-1 + (2 * index) / length);
    const theta = Math.sqrt(length * Math.PI) * phi;
    let object = new THREE.Object3D();

    object.position.setFromSphericalCoords(800, phi, theta);

    sphereVector.copy(object.position).multiplyScalar(2);

    object.lookAt(sphereVector);

    targets.sphere.push(object);
}

function addHelixObject(helixVector, index) {

    const theta = index * 0.175 + Math.PI;
    const y = -(index * 8) + 450;
    let object = new THREE.Object3D();

    object.position.setFromCylindricalCoords(900, theta, y);

    helixVector.x = object.position.x * 2;
    helixVector.y = object.position.y;
    helixVector.z = object.position.z * 2;

    object.lookAt(helixVector);

    targets.helix.push(object);
}

function addGridObject(index) {

    let object = new THREE.Object3D();
    object.position.x = ((index % 5) * 400) - 800;
    object.position.y = (-(Math.floor(index / 5) % 5) * 400) + 800;
    object.position.z = (Math.floor(index / 25)) * 1000 - 2000;
    targets.grid.push(object);

}

function addConeObject(coneVector, index) {

    var theta = index * 4 + Math.PI;

    var object = new THREE.Object3D();

    object.position.x = 9*index*Math.cos(theta);
    object.position.y = -(index * 15) + 450;
    object.position.z = 9*index*Math.sin(theta);

    coneVector.x = object.position.x*2 ;
    coneVector.y = object.position.y;
    coneVector.z = object.position.z*2;

    object.lookAt(coneVector);

    targets.cone.push(object);
}

function transform(target, duration) {

    TWEEN.removeAll();

    for (let i = 0; i < targets.simple.length; i++) {
        let object = targets.simple[i];
        let targetObject = target[i];
        transformObjectPosition(object, targetObject, duration);
        transformObjectRotation(object, targetObject, duration);
    }

    new TWEEN.Tween(this)
        .to({}, duration * 2)
        .onUpdate(render)
        .start();

}

function transformObjectPosition(object, targetObject, duration) {

    new TWEEN.Tween(object.position)
        .to({
            x: targetObject.position.x,
            y: targetObject.position.y,
            z: targetObject.position.z
        }, Math.random() * duration + duration)
        .easing(TWEEN.Easing.Exponential.InOut)
        .start();

}

function transformObjectRotation(object, targetObject, duration) {

    new TWEEN.Tween(object.rotation)
        .to({
            x: targetObject.rotation.x,
            y: targetObject.rotation.y,
            z: targetObject.rotation.z
        }, Math.random() * duration + duration)
        .easing(TWEEN.Easing.Exponential.InOut)
        .start();

}

function onWindowResize() {

    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
    render();

}

function render() {

    renderer.render(scene, camera);

}

function animate() {

    requestAnimationFrame(animate);
    TWEEN.update();
    controls.update();
    composer.render();
}