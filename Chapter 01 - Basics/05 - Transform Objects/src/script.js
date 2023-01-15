import './style.css'
import * as THREE from 'three'

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

// Group
const group = new THREE.Group()
scene.add(group)

const cube1 = new THREE.Mesh(
    new THREE.BoxGeometry(1,1,1),
    new THREE.MeshBasicMaterial({ color: "blue"})
)
group.add(cube1)

const cube2 = new THREE.Mesh(
    new THREE.BoxGeometry(0.5,2,1),
    new THREE.MeshBasicMaterial({ color: "green"})
)
cube2.position.x = 1
group.add(cube2)

group.scale.y = 0.5;

/** 
 * Objects
 */
const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })
const mesh = new THREE.Mesh(geometry, material)
/*mesh.position.z = 0.7
mesh.position.x = -0.6
mesh.position.y = 1*/
mesh.position.set(0.7, -0.6, 1)
scene.add(mesh)

// Axes helper
const axesHelper = new THREE.AxesHelper()
scene.add(axesHelper)

// Scale
/*mesh.scale.x = 0.5
mesh.scale.y = 2
mesh.scale.z = 1*/
mesh.scale.set(2, 0.5, 0.5)

// Rotation
mesh.rotation.reorder('YXZ')
mesh.rotation.y = Math.PI * 0.25
mesh.rotation.x = Math.PI * 0.25

/**
 * Sizes
 */
const sizes = {
    width: 800,
    height: 600
}

/**
 * Camera
 */
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 3
scene.add(camera)

camera.lookAt(mesh.position)

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.render(scene, camera)