import preloader from '../../components/preloader/Preloader'

export const setImagePortfolio = (_target, _widthBlock, images = [], callback) => {
    let _image = document.createElement("img"); //create new <img>
    _target.innerHTML = preloader();

    _image.onload = () => { //add only this image to container
        _target?.replaceChildren(_image);
        callback(_target?.querySelector('img')) //return <img> after completely loaded. For preloader
        //return _target?.querySelector('img')
    }
   
    _image.src = images.find((image) => {
        return ((image.width >= _widthBlock?.offsetWidth) || (image.height >= _widthBlock?.offsetHeight))//find first image with 'width' more than 'container width'
    })?.image; //return this image as src for created <img>
}
