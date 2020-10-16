(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{21:function(e,t,o){e.exports=o(32)},26:function(e,t,o){},31:function(e,t,o){},32:function(e,t,o){"use strict";o.r(t);var n,i,a=o(1),r=o.n(a),s=o(8),c=o.n(s),l=o(16),u=(o(26),o(39)),d=o(2),h=o(0),p=o(4),m=o(10),f=o.n(m),b=o(11),g=o(15),v=o(12);!function(e){e.Camera="CAMERA",e.CameraAmbientLight="CAMERA_AMBIENT_LIGHT",e.CameraPointLight="CAMERA_POINT_LIGHT",e.Globe="GLOBE",e.GlobeBackground="GLOBE_BACKGROUND",e.GlobeClouds="GLOBE_CLOUDS",e.GlobeGlow="GLOBE_GLOW",e.GlobeSphere="GLOBE_SPHERE",e.MarkerObjects="MARKER_OBJECTS",e.Scene="SCENE"}(n||(n={})),function(e){e.Bar="bar",e.Dot="dot"}(i||(i={}));var y=Math.PI,w=[29.8683,121.544],O=["Cubic","In"],C={autoRotateSpeed:.1,distanceRadiusScale:3,enableAutoRotate:!0,enableRotate:!0,enableZoom:!0,maxDistanceRadiusScale:4,maxPolarAngle:y,minPolarAngle:0,rotateSpeed:.2,zoomSpeed:1},k={animationDuration:1e3,distanceRadiusScale:1.5,easingFunction:["Cubic","Out"],enableDefocus:!0},E={backgroundTexture:"https://raw.githubusercontent.com/chrisrzhou/react-globe/master/textures/background.png",cloudsOpacity:.3,cloudsTexture:"https://raw.githubusercontent.com/chrisrzhou/react-globe/master/textures/clouds.png",enableBackground:!0,enableClouds:!0,enableGlow:!0,glowCoefficient:.1,glowColor:"#d1d1d1",glowPower:3,glowRadiusScale:.1,texture:"./globe_dark.jpg"},S={ambientLightColor:"white",ambientLightIntensity:.8,pointLightColor:"white",pointLightIntensity:1,pointLightPositionRadiusScales:[-2,1,-1]},M={activeScale:1.3,enableGlow:!0,enableTooltip:!0,enterAnimationDuration:1e3,enterEasingFunction:["Linear","None"],exitAnimationDuration:500,exitEasingFunction:["Cubic","Out"],getTooltipContent:function(e){return JSON.stringify(e.coordinates)},glowCoefficient:0,glowPower:2,glowRadiusScale:1,radiusScaleRange:[.005,.02],type:i.Dot},j=(i.Bar,M),G=function(){return(G=Object.assign||function(e){for(var t,o=1,n=arguments.length;o<n;o++)for(var i in t=arguments[o])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)};var x=function(){function e(e){this.div=e,this.instance=Object(g.a)(this.div,{animation:"scale",theme:"tomato"})}return e.prototype.destroy=function(){console.log("Tooltip destroy"),this.instance.destroy()},e.prototype.hide=function(){document.body.style.cursor="inherit",this.div.style.position="fixed",this.div.style.left="0",this.div.style.top="0",this.instance.hide()},e.prototype.show=function(e,t,o){document.body.style.cursor="pointer",this.div.style.position="fixed",this.div.style.left=e+10+"px",this.div.style.top=t+10+"px",this.instance.setContent(o),this.instance.show()},e}();function R(e,t){var o=e[0],n=e[1],i=o*Math.PI/180,a=(n-180)*Math.PI/180;return[-t*Math.cos(i)*Math.cos(a),t*Math.sin(i),t*Math.cos(i)*Math.sin(a)]}function L(e){return e.coordinates.toString()}function F(e,t){var o=0;return e.forEach((function(e){t(e)>o&&(o=t(e))})),o}function P(e,t){var o=1/0;return e.forEach((function(e){t(e)<o&&(o=t(e))})),o}function B(e,t,o,n,i,a){new d.Tween(e).to(t,o).easing(d.Easing[n[0]][n[1]]).on("update",i).on("complete",a).start()}var A=function(){},T={onClickMarker:A,onDefocus:A,onMouseOutMarker:A,onMouseOverMarker:A,onTextureLoaded:A},D={camera:C,globe:E,focus:k,marker:j,light:S},z=function(){function e(e,t){var o=this,i=new h.WebGLRenderer({alpha:!0,antialias:!0,canvas:e}),a=new h.PerspectiveCamera,r=new h.AmbientLight("white"),s=new h.PointLight("white"),c=new h.Group,l=new h.Mesh,u=new h.Mesh,d=new h.Mesh,p=new h.Group,m=new f.a(a,i.domElement),g=new h.Scene,v=new x(t);a.name=n.Camera,r.name=n.CameraAmbientLight,s.name=n.CameraPointLight,c.name=n.Globe,l.name=n.GlobeBackground,u.name=n.GlobeClouds,d.name=n.GlobeSphere,p.name=n.MarkerObjects,g.name=n.Scene,a.add(r),a.add(s),c.add(l),c.add(u),c.add(d),g.add(p),g.add(a),g.add(c),new b.a(i,g,a),g.on("mousemove",(function(e){if(!o.isFocusing()&&o.activeMarker){var t=o.options.marker.activeScale,n=[t,t,t];B(n,[1,1,1],100,O,(function(){var e;o.activeMarkerObject&&(e=o.activeMarkerObject.scale).set.apply(e,n)}),(function(){o.activeMarker=void 0,o.activeMarkerObject=void 0})),o.callbacks.onMouseOutMarker(o.activeMarker,o.activeMarkerObject,e.data.originalEvent),o.tooltip.hide()}}));var y=function(e){console.log(e),o.orbitControls.autoRotate=!0,console.log("handleClick"),o.tooltip.hide(),o.isFocusing()||(console.log("enableDefocus",o.options.focus.enableDefocus),console.log("preFocusPosition",o.preFocusPosition),o.options.focus.enableDefocus&&o.preFocusPosition&&(o.callbacks.onDefocus(o.focus,e.data.originalEvent),o.updateFocus(void 0,o.options.focus)))};g.on("click",y),g.on("touchstart",y),this.activeMarker=void 0,this.activeMarkerObject=void 0,this.animationFrameId=void 0,this.callbacks=T,this.camera=a,this.focus=void 0,this.globe=c,this.isFrozen=!1,this.markerObjects=p,this.options=D,this.orbitControls=m,this.preFocusPosition=void 0,this.renderer=i,this.scene=g,this.tooltip=v,this.updateCallbacks(),this.updateCamera(),this.updateFocus(),this.updateGlobe({enableBackground:!1,enableClouds:!1}),this.updateLights(),this.updateMarkers(),this.updateSize()}return e.prototype.animate=function(){this.render(),this.animationFrameId=requestAnimationFrame(this.animate.bind(this))},e.prototype.animateClouds=function(){var e=this.getObjectByName(n.GlobeClouds);["x","y","z"].forEach((function(t){e.rotation[t]+=Math.random()/1e4}))},e.prototype.applyAnimations=function(e){var t=this,o=this.focus,n=this.options.focus,i=0,a=[];return e.forEach((function(e){var o=e.animationDuration,n=e.coordinates,r=e.distanceRadiusScale,s=e.easingFunction,c=setTimeout((function(){t.updateFocus(n,{animationDuration:o,distanceRadiusScale:r,easingFunction:s},!0)}),i);a.push(c),i+=o})),function(){a.forEach((function(e){clearTimeout(e)})),t.updateFocus(o,n)}},e.prototype.destroy=function(){cancelAnimationFrame(this.animationFrameId),this.tooltip.destroy()},e.prototype.enableOrbitControls=function(e,t){void 0===t&&(t=e),this.orbitControls.enabled=e,this.orbitControls.autoRotate=t},e.prototype.freeze=function(){this.isFrozen=!0,this.enableOrbitControls(!1),cancelAnimationFrame(this.animationFrameId)},e.prototype.getObjectByName=function(e){return this.scene.getObjectByName(e)},e.prototype.isFocusing=function(){return!this.orbitControls.enabled},e.prototype.render=function(){this.renderer.sortObjects=!1,this.renderer.render(this.scene,this.camera),this.animateClouds(),this.orbitControls.update(),Object(d.update)()},e.prototype.updateCallbacks=function(e){var t=this;void 0===e&&(e={}),Object.keys(T).forEach((function(o){t.callbacks[o]=e[o]||T[o]}))},e.prototype.updateCamera=function(e,t){void 0===e&&(e=w),void 0===t&&(t={}),this.updateOptions(t,"camera");var o=this.options.camera,n=o.autoRotateSpeed,i=o.distanceRadiusScale,a=o.enableAutoRotate,r=o.enableRotate,s=o.enableZoom,c=o.maxDistanceRadiusScale,l=o.maxPolarAngle,u=o.minPolarAngle,d=o.rotateSpeed,h=o.zoomSpeed;if(this.initialCoordinates!==e){var p=R(e,300*i),m=p[0],f=p[1],b=p[2];this.camera.position.set(m,f,b),this.initialCoordinates=e}console.log("STOP3",t),this.camera.far=3e4,this.camera.fov=45,this.camera.near=1,this.orbitControls.autoRotate=a,this.orbitControls.autoRotateSpeed=n,this.orbitControls.dampingFactor=.1,this.orbitControls.enableDamping=!0,this.orbitControls.enablePan=!1,this.orbitControls.enableRotate=r,this.orbitControls.enableZoom=s,this.orbitControls.maxDistance=300*c,this.orbitControls.maxPolarAngle=l,this.orbitControls.minDistance=330,this.orbitControls.minPolarAngle=u,this.orbitControls.rotateSpeed=d,this.orbitControls.zoomSpeed=h},e.prototype.updateFocus=function(e,t,o){var n=this;void 0===t&&(t={}),void 0===o&&(o=!1),this.updateOptions(t,"focus"),this.focus=e;var i=this.options.focus,a=i.animationDuration,r=i.distanceRadiusScale,s=i.easingFunction;if(!this.isFrozen)if(this.focus){var c=[this.camera.position.x,this.camera.position.y,this.camera.position.z],l=R(this.focus,300*r);this.preFocusPosition=this.preFocusPosition||function(){for(var e=0,t=0,o=arguments.length;t<o;t++)e+=arguments[t].length;t=0;for(var n=Array(e),i=0;t<o;t++)for(var a=arguments[t],r=0,s=a.length;r<s;r++,i++)n[i]=a[r];return n}(c),B(c,l,a,s,(function(){var e;n.enableOrbitControls(!1),(e=n.camera.position).set.apply(e,c)}),(function(){o&&(n.focus=void 0,n.preFocusPosition=void 0),n.enableOrbitControls(!0,o)}))}else if(this.preFocusPosition){var u=[this.camera.position.x,this.camera.position.y,this.camera.position.z];l=this.preFocusPosition,B(u,l,a,s,(function(){var e;n.enableOrbitControls(!1),(e=n.camera.position).set.apply(e,u)}),(function(){n.preFocusPosition=void 0,n.enableOrbitControls(!0)}))}},e.prototype.updateGlobe=function(e){var t=this;void 0===e&&(e={}),this.updateOptions(e,"globe");var o=this.options.globe,i=o.backgroundTexture,a=o.cloudsOpacity,r=o.cloudsTexture,s=o.enableBackground,c=o.enableClouds,l=o.enableGlow,u=o.glowColor,d=o.glowCoefficient,m=o.glowPower,f=o.glowRadiusScale,b=o.texture,g=this.getObjectByName(n.GlobeBackground),v=this.getObjectByName(n.GlobeClouds),y=this.getObjectByName(n.GlobeSphere);(new h.TextureLoader).load(b,(function(e){if(y.geometry=new h.SphereGeometry(300,50,50),y.material=new h.MeshLambertMaterial({map:e}),l){y.remove(t.getObjectByName(n.GlobeGlow));var o=Object(p.a)(y.geometry,{backside:!0,color:u,coefficient:d,power:m,size:300*f});o.name=n.GlobeGlow,y.add(o)}t.callbacks.onTextureLoaded()})),s&&(new h.TextureLoader).load(i,(function(e){g.geometry=new h.SphereGeometry(3e3,50,50),g.material=new h.MeshBasicMaterial({map:e,side:h.BackSide})})),c&&(new h.TextureLoader).load(r,(function(e){v.geometry=new h.SphereGeometry(301,50,50),v.material=new h.MeshLambertMaterial({map:e,transparent:!0}),v.material.opacity=a}))},e.prototype.updateLights=function(e){void 0===e&&(e={}),this.updateOptions(e,"light");var t=this.options.light,o=t.ambientLightColor,i=t.ambientLightIntensity,a=t.pointLightColor,r=t.pointLightIntensity,s=t.pointLightPositionRadiusScales,c=this.getObjectByName(n.CameraAmbientLight),l=this.getObjectByName(n.CameraPointLight);c.color=new h.Color(o),c.intensity=i,l.color=new h.Color(a),l.intensity=r,l.position.set(300*s[0],300*s[1],300*s[2])},e.prototype.updateMarkers=function(e,t){var o=this;void 0===e&&(e=[]),void 0===t&&(t={}),this.updateOptions(t,"marker");var n=this.options.marker,a=n.activeScale,r=n.enableGlow,s=n.enableTooltip,c=n.enterAnimationDuration,l=n.enterEasingFunction,d=n.exitAnimationDuration,m=n.exitEasingFunction,f=n.getTooltipContent,b=n.glowCoefficient,g=n.glowPower,v=n.glowRadiusScale,y=n.offsetRadiusScale,w=n.radiusScaleRange,C=n.renderer,k=n.type,E=Object(u.a)().domain([P(e,(function(e){return e.value})),F(e,(function(e){return e.value}))]).range([300*w[0],300*w[1]]),S=new Set(e.map(L)),M=new Set(this.markerObjects.children.map((function(e){return e.name})));e.forEach((function(e){var t,n,u=e.coordinates,d=e.value,m=L(e),w=E(d);if(!M.has(m)){if(void 0!==C)n=C(e);else{var S=e.color||"gold",j={size:0},G={size:w},x=new h.Mesh;B(j,G,c,l,(function(){switch(k){case i.Bar:x.geometry=new h.BoxGeometry(3,3,j.size),x.material=new h.MeshLambertMaterial({color:S});break;case i.Dot:default:if(x.geometry=new h.SphereGeometry(j.size,10,10),x.material=new h.MeshBasicMaterial({color:S}),r){var e=Object(p.a)(x.geometry.clone(),{backside:!1,color:S,coefficient:b,power:g,size:j.size*v});x.children=[],x.add(e)}}})),n=x}var F=R(u,300+(void 0!==y?300*y:k===i.Dot?w*(1+v)/2:0));(t=n.position).set.apply(t,F),n.lookAt(new h.Vector3(0,0,0)),n.name=m,o.markerObjects.add(n)}var P=function(t){t.stopPropagation();var n=t.data.originalEvent,i=n.clientX||n.targetTouches[0].clientX,a=n.clientY||n.targetTouches[0].clientY;s&&o.tooltip.show(i,a,f(e)),this.orbitControls.autoRotate=!1,console.log("STOP")};(n=o.markerObjects.getObjectByName(m)).on("click",P.bind(o)),n.on("touchstart",P.bind(o)),n.on("mousemove",(function(e){if(o.isFocusing())o.tooltip.hide();else{e.stopPropagation();var t=n.scale.toArray();B(t,[a,a,a],100,O,(function(){var e;n&&(e=n.scale).set.apply(e,t)}))}}))})),this.markerObjects.children.filter((function(e){return!S.has(e.name)})).forEach((function(e){var t=e.scale.toArray();B(t,[0,0,0],d,m,(function(){var o;e&&(o=e.scale).set.apply(o,t)}),(function(){o.markerObjects.remove(e)}))}))},e.prototype.updateOptions=function(e,t){var o;this.options=G(G({},D),((o={})[t]=G(G({},D[t]),e),o))},e.prototype.updateSize=function(e){if(e){var t=e[0],o=e[1];this.renderer.setSize(t,o),this.camera.aspect=t/o}this.camera.updateProjectionMatrix()},e.prototype.unfreeze=function(){this.isFrozen&&(this.isFrozen=!1,this.enableOrbitControls(!0),this.animate())},e}();function N(e){var t=e.animations,o=e.cameraOptions,n=e.focus,i=e.focusOptions,s=e.globeOptions,c=e.lightOptions,l=e.initialCoordinates,u=e.markers,d=e.markerOptions,h=e.onClickMarker,p=e.onDefocus,m=e.onMouseOutMarker,f=e.onMouseOverMarker,b=e.onGetGlobeInstance,g=e.onTextureLoaded,y=e.size,w=Object(a.useRef)(),O=Object(a.useRef)(),C=Object(a.useRef)(),k=Object(a.useRef)(),E=function(e,t){var o=Object(a.useState)([0,0]),n=o[0],i=o[1];return Object(a.useEffect)((function(){var o=e.current,n=0,a=0;t?(n=t[0],a=t[1]):(n=o.offsetWidth,a=o.offsetHeight),i([n,a]);var r=new v.a((function(e){if(e&&e.length&&void 0===t){var o=e[0].contentRect,n=o.width,a=o.height;i([n,a])}}));return r.observe(o),function(){r.unobserve(o)}}),[t,e]),n}(C,y);return Object(a.useEffect)((function(){var e=C.current,t=new z(w.current,k.current);return e.appendChild(t.renderer.domElement),t.animate(),O.current=t,b&&b(t),function(){e.removeChild(t.renderer.domElement),t.destroy()}}),[]),Object(a.useEffect)((function(){O.current.updateCallbacks({onClickMarker:h,onDefocus:p,onMouseOutMarker:m,onMouseOverMarker:f,onTextureLoaded:g})}),[h,p,m,f,g]),Object(a.useEffect)((function(){O.current.updateCamera(l,o)}),[o,l]),Object(a.useEffect)((function(){O.current.updateFocus(n,i)}),[n,i]),Object(a.useEffect)((function(){O.current.updateGlobe(s)}),[s]),Object(a.useEffect)((function(){O.current.updateLights(c)}),[c]),Object(a.useEffect)((function(){O.current.updateMarkers(u,d)}),[d,u]),Object(a.useEffect)((function(){return O.current.applyAnimations(t)}),[t]),Object(a.useEffect)((function(){O.current.updateSize(E)}),[E]),r.a.createElement("div",{ref:C,style:{height:"100%",width:"100%"}},r.a.createElement("canvas",{ref:w,style:{display:"block"}}),r.a.createElement("div",{ref:k}))}N.defaultProps={animations:[],cameraOptions:C,focusOptions:k,globeOptions:E,lightOptions:S,initialCoordinates:w,markers:[],markerOptions:j};var I=N,_=o(17),H=[{id:1,city:"Ningbo",year:"-2006 | ",activity:"Just a kid",coordinates:[29.8683,121.544],value:100,color:"white"},{id:2,city:"Tianjin",year:"2006-2011 | ",activity:"Student, Tianjin University",coordinates:[39.3434,117.3616],value:100,color:"white"},{id:3,city:"Boston",year:"2011-2015 | ",activity:"Student/Researcher, Harvard University",coordinates:[42.3601,-71.0589],value:100,color:"white"},{id:4,city:"Singapore",year:"2015-2019 | ",activity:"UX Designer, Grab/MING Labs",coordinates:[1.3521,103.8198],value:100,color:"white"},{id:5,city:"Berlin",year:"2019- | ",activity:"Product Designer, Delivery Hero",coordinates:[52.52,13.405],value:100,color:"white"}];o(28),o(29);var J=function(){var e=Object(a.useState)(0),t=Object(l.a)(e,2),o=t[0],n=t[1];return r.a.createElement("div",{className:"App",onMouseDown:function(){return n(!o)}},r.a.createElement(_.a,{fluid:!0},r.a.createElement("div",{className:"row",style:{height:"100vh"}},r.a.createElement("div",{className:"col-xl-6 index-text",style:{padding:"0"}},r.a.createElement("div",{style:{width:"75%"}},r.a.createElement("h1",{className:"index-header"},"This is Jian He."),r.a.createElement("p",{className:"index-body"},"Wanderlust.",r.a.createElement("br",null),"Born in China, lived and worked in Boston, Singapore and now in Berlin.",r.a.createElement("br",null),"Always interested in trying new tools and methods to solve different problems.",r.a.createElement("br",null),"Keep on learning and getting inspired.",r.a.createElement("br",null),"Never stop exploring."),r.a.createElement("a",{className:"index-link",href:"https://www.linkedin.com/in/jian-he-3a6056119/"},"Get connected  \u2192"))),r.a.createElement("div",{className:"col-xl-6",style:{display:"flex",alignItems:"center"}},r.a.createElement("div",{style:{height:"50%",width:"100%"}},r.a.createElement(I,{globeOptions:{enableBackground:!1,enableClouds:!1,enableGlow:!1,cloudsTexture:null},cameraOptions:{autoRotateSpeed:1,enableZoom:!0,clickedOut:o},markers:H,markerOptions:{glowCoefficient:.25,activeScale:1,enableTooltip:!0,getTooltipContent:function(e){return"".concat(e.year," ").concat(e.city,"\n").concat(e.activity)},radiusScaleRange:[.001,.045]}}))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o(30),o(31);c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(J,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[21,1,2]]]);
//# sourceMappingURL=main.1fbcf7cb.chunk.js.map