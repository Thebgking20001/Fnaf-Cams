// Sets to null at start
/*
var gmlWallpaperEngineProperties = null;

function wallpaperEngineAudioGet() {
	return gmlWallpaperEngineProperties;
}

function wallpaperEngineAudioListener() {
    gmlWallpaperEngineProperties = document.visibilityState;
	gml_Script_gmcallback_wallpaperEngineAudioUpdate();
}

document.addEventListener("visibilitychange", wallpaperEngineAudioListener);
//window.wallpaperRegisterAudioListener(wallpaperEngineAudioListener);