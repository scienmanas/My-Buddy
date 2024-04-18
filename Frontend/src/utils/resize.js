
export const resizeBase64Img=(base64, width, height)=> {
    return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = base64;
        img.onload = function() {
            const canvas = document.createElement('canvas');
            const ctx = canvas.getContext('2d');
            canvas.width = width;
            canvas.height = height;
            ctx.drawImage(img, 0, 0, width, height);
            resolve(canvas.toDataURL());
        };
        img.onerror = function(err) {
            reject(err);
        };
    });
}
