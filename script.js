let camera
let scene
let render 
let material
let mouseX = 0
let mouseY = 0
let windowHalfX = window.innerWidth / 2
let windowHalfY = window.innerHeight / 2

init()
animate()

function init () {
    camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 5, 2000)
    camera.position.z = 500

    scene = new THREE.Scene()
    scene.fog = new THREE.FogExp2(0x0000ff, 0.001)
    

}
