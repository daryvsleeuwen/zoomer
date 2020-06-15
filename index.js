function zoomer (){
    this.zoomImage = function(image, zoommultiplier){
        let width = parseFloat(getComputedStyle(image).getPropertyValue('width'));
        let height = parseFloat(getComputedStyle(image).getPropertyValue('height'));

        image.style.width = width * zoommultiplier + 'px';
        image.style.height = height * zoommultiplier + 'px';
    }
}


modules.exports.zoomer = zoomer;