//  HTTP UTILITIES.

//  Download local resource without server.

    function downloadLocalResource( data, filename, mimeType ) {
        filename = filename || "download";
        mimeType = mimeType || "application/octet-stream";
        var blob = new Blob([data], { type: mimeType });
        var link = document.createElement("a");
        link.download = filename;
        link.href= window.URL.createObjectURL(blob);
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };
    
//  DataURL to blob.
    
    function dataURLtoBlob( dataurl ) {
        var t = Date.now();
        var arr = dataurl.split(','), mime = arr[0].match(/:(.*?);/)[1],
            bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n);
        while(n--){
            u8arr[n] = bstr.charCodeAt(n);
        }
        console.log( "dataURL to blob:", Date.now() - t, "msec.");
        return new Blob([u8arr], {type:mime});
    }
    
//  Blob to dataURL.
    
    function blobToDataURL( blob, callback ) {
        var t = Date.now();
        var a = new FileReader();
        a.onload = function(e) {
            callback(e.target.result);
            console.log( "blob to dataURL:", Date.now() - t, "msec.");
        }
        a.readAsDataURL(blob);
    }

//  Download file.

    function downloadFile( file ) {
        var link = document.createElement("a");
        link.download = file.name || "download";
        link.href= window.URL.createObjectURL( file );
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }










