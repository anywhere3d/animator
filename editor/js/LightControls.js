//  LIGHTS CONTROLS.

switchLight = function(i){
    event.preventDefault();
    if (!scene) return false;
    
    if (sceneLights.length > i) {
        sceneLights[i].visible = !sceneLights[i].visible;
        
        getNodeListAsArray( document, "#" + event.currentTarget.id )
        .forEach(function(button, index) {
        
            if ( sceneLights[i].visible ) {
                button.style.backgroundImage = "url(/icons/yellow-light-bulb.png)";
                button.style.backgroundSize = "contain";
                button.style.backgroundPosition = "50% 50%";
                button.style.backgroundRepeat = "no-repeat";
                button.style.opacity = 1;
            } else {
                button.style.backgroundImage = "url(/icons/white-light-bulb.png)";
                button.style.backgroundSize = "contain";
                button.style.backgroundPosition = "50% 50%";
                button.style.backgroundRepeat = "no-repeat";
                button.style.opacity = 0.5;
            }
        });
    }
    
    return false;
}



















