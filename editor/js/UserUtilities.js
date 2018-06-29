// UserUtilities.js

function toggleControls(){
    if (controls.enabled) 
        disableControls();
    else 
        enableControls();
}

function enableControls(){
    controls.enabled = true;
    document.getElementById("pauser").style.display = "none";
}

function disableControls(){
    controls.enabled = false;
}

function toggleVisible(object){
    object.visible = !object.visible;
}

function toggleSkydome(){
    if (skydome) skydome.visible = !skydome.visible;
    if (groundHelper) groundHelper.visible = !skydome.visible;
    if (axisCustomHelper) axisCustomHelper.visible = !skydome.visible;
    if (originAxisHelper) originAxisHelper.visible = !skydome.visible;
}
















