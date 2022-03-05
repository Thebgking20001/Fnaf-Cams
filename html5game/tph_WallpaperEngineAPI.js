// Sets to null at start
var gmlWallpaperEngineProperties = null;

function rescaleCanvas() {
  canvas.width  = window.innerWidth;
  canvas.height = window.innerHeight;
  return 0;
}

function wallpaperEngineGetValue() {
	return gmlWallpaperEngineProperties.value;
}

function wallpaperEngineGetKey() {
	return gmlWallpaperEngineProperties.key;
}

function wallpaperEngineGetType() {
	return gmlWallpaperEngineProperties.type;
}

function wallpaperEngineInit() {
	window.wallpaperPropertyListener = {
		applyUserProperties: function(_properties) {
			gmlWallpaperEngineProperties = Object.values(_properties)[0];
			gml_Script_gmcallback_wallpaperEngineUpdateProperties();
		}
	};
}