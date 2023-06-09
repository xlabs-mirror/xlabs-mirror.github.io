var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

(function() {
    return;
    let camera, scene, renderer;

    let isUserInteracting = false,
        onPointerDownMouseX = 0,
        onPointerDownMouseY = 0,
        lon = new Date().getTime() / 100.0,
        onPointerDownLon = 0,
        lat = 0,
        onPointerDownLat = 0,
        phi = 0,
        theta = 0;

    // Image rendered by Slykuiper: https://slykuiper.com/
    const textures = [
        'https://i.imgur.com/eALPkl9.jpg',
        'https://i.imgur.com/0CXz7zd.jpg'
    ];

    // ugly but fuck it.
    $.holdReady(true);
    const resume = function() {
        $.holdReady(false);
    };

    const target = textures[Math.floor(Math.random() * textures.length)];
    const texture = new THREE.TextureLoader().load(target, resume, undefined, resume);

    $(document).ready(function() {
        init();
        animate();
    });

    function init() {
        const container = document.getElementById('panorama');

        camera = new THREE.PerspectiveCamera(70, container.clientWidth / container.clientHeight, 1, 1100);
        scene = new THREE.Scene();

        const geometry = new THREE.SphereBufferGeometry(500, 60, 40);
        // invert the geometry on the x-axis so that all of the faces point inward
        geometry.scale(-1, 1, 1);

        const material = new THREE.MeshBasicMaterial({ map: texture })
        const mesh = new THREE.Mesh(geometry, material);
        scene.add(mesh);

        renderer = new THREE.WebGLRenderer();
        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.setSize(container.clientWidth, container.clientHeight);
        container.appendChild(renderer.domElement);

        container.style.touchAction = 'none';
        container.addEventListener('pointerdown', onPointerDown, false);

        new ResizeObserver(function() {
            camera.aspect = container.clientWidth / container.clientHeight;
            camera.updateProjectionMatrix();

            renderer.setSize(container.clientWidth, container.clientHeight);
        }).observe(container);
    }

    function onPointerDown(event) {
        if (event.isPrimary === false) return;

        isUserInteracting = true;

        onPointerDownMouseX = event.clientX;
        onPointerDownMouseY = event.clientY;

        onPointerDownLon = lon;
        onPointerDownLat = lat;

        document.addEventListener('pointermove', onPointerMove, false);
        document.addEventListener('pointerup', onPointerUp, false);
    }

    function onPointerMove(event) {
        if (event.isPrimary === false) return;

        lon = (onPointerDownMouseX - event.clientX) * 0.1 + onPointerDownLon;
        lat = (event.clientY - onPointerDownMouseY) * 0.1 + onPointerDownLat;
    }

    function onPointerUp(event) {
        if (event.isPrimary === false) return;

        isUserInteracting = false;

        document.removeEventListener('pointermove', onPointerMove);
        document.removeEventListener('pointerup', onPointerUp);

    }

    function animate() {
        requestAnimationFrame(animate);
        update();
    }

    function update() {
        if (isUserInteracting === false) {
            lon += 0.1;
        }

        lat = Math.max(-85, Math.min(85, lat));
        phi = THREE.MathUtils.degToRad(90 - lat);
        theta = THREE.MathUtils.degToRad(lon);

        const x = 500 * Math.sin(phi) * Math.cos(theta);
        const y = 500 * Math.cos(phi);
        const z = 500 * Math.sin(phi) * Math.sin(theta);

        camera.lookAt(x, y, z);

        renderer.render(scene, camera);
    }
})();

}
/*
     FILE ARCHIVED ON 23:22:42 Apr 29, 2023 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 18:39:25 May 24, 2023.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 209.408
  exclusion.robots: 0.151
  exclusion.robots.policy: 0.139
  RedisCDXSource: 25.776
  esindex: 0.009
  LoadShardBlock: 167.188 (3)
  PetaboxLoader3.datanode: 451.224 (5)
  load_resource: 376.906 (2)
  PetaboxLoader3.resolve: 51.519 (2)
*/