function ar_init(config){
	AFRAME.registerComponent('markers_start', {
		init: function () {
			console.log('Add markers to the scene');

			var sceneEl = document.querySelector('a-scene');
			var assetEl = document.querySelector('a-assets');
			
			for (var k = 0; k < config.length; k++) {
				var markerEl = document.createElement('a-marker');
				markerEl.setAttribute('type', 'pattern');
				markerEl.setAttribute('url', config[k]['marker_url']);
				markerEl.setAttribute('id', config[k]['marker_name']);

				markerEl.setAttribute('registerevents', '');
				sceneEl.appendChild(markerEl);

				//Adding text to each marker
				// var textEl = document.createElement('a-entity');

				// textEl.setAttribute('id', 'text');
				// textEl.setAttribute('text', {
				// 	color: 'red',
				// 	align: 'center',
				// 	value: config[k]['marker_name'],
				// 	width: '5.5'
				// });
				// textEl.object3D.position.set(0, 0.7, 0);
				// textEl.object3D.rotation.set(-90, 0, 0);
				var assetItem = document.createElement('a-asset-item');
	
				assetItem.setAttribute('id', config[k]['marker_name']);
				assetItem.setAttribute('src', config[k]['model_url']);
				assetEl.appendChild(assetItem);
				
				var obj3d = document.createElement('a-entity');
				obj3d.setAttribute('id', 'bowser-model');
				obj3d.setAttribute('gltf-model', `#${config[k]['marker_name']}`);
				// obj3d.setAttribute('scale', '0.5 0.5 0.5');
				obj3d.setAttribute('class', 'clickable');
				obj3d.setAttribute('gesture-handler', "minScale: 0.5; maxScale: 6");
				obj3d.setAttribute('raycaster', 'objects: .clickable');
				// obj3d.setAttribute('cursor', 'fuse: false; rayOrigin: mouse;"');
				obj3d.object3D.scale.set(0.5, 0.5, 0.5);
				// obj3d.object3D.rotation.set(-90, 0, 0);
				// console.log('ah', obj3d)
				// console.log(config[k]['model_url'])
				markerEl.appendChild(obj3d);
			}
		}
	});


	//Detect marker found and lost
	AFRAME.registerComponent('registerevents', {
		init: function () {
			const marker = this.el;

			marker.addEventListener("markerFound", () => {
				var markerId = marker.id;
				console.log('Marker Found: ', markerId);
			});

			marker.addEventListener("markerLost", () => {
				var markerId = marker.id;
				console.log('Marker Lost: ', markerId);
			});
		},
	});

}