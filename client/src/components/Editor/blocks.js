function createTextBlock()
{
    const textBlock = document.createElement("div")
    textBlock.classList = ['block', 'text'];

    const textContent = document.createElement('p')
    textContent.innerHTML = "New Block !";
    textContent.contentEditable = true;

    textBlock.appendChild(textContent);

    return textBlock;
    // console.log(typeof textBlock);
} 

function createCaptionBlock(right)
{
    const captionBlock = document.createElement('div');
    captionBlock.classList = ['block caption']
    if (right) {
        captionBlock.classList.add('is-right');
    }

    const image = document.createElement('img');
    image.src = `${process.env.PUBLIC_URL}/img_dev/caption2.jpg`;
    image.className = 'caption-image';
    image.alt = "Caption"
    
    const imageContent = document.createElement('div')
    imageContent.className = 'image-content';
    imageContent.appendChild(image);

    const text = document.createElement('p');
    text.classList.add('text-caption');
    text.innerHTML = "Caption text !";

    captionBlock.appendChild(imageContent);
    captionBlock.appendChild(text);
    
    return captionBlock;
}

function createBlock(type, id)
{
    const el = document.getElementById(id);
    switch(type)
    {
        case 'text-only':
            el.insertBefore(createTextBlock(), el.children[el.children.length - 1]);
            break;
        case 'caption':
            el.insertBefore(createCaptionBlock(false), el.children[el.children.length - 1]);
            break
        case 'caption-right':
            el.insertBefore(createCaptionBlock(true), el.children[el.children.length - 1]);
            break
        default:
            break;

    }
}

function deleteBlock() 
{

}

function getWiki(id)
{
    var doc = document.getElementById(id).childNodes;

    return doc;
}

function displayWiki()
{
    var els = getWiki('wiki');
    
    console.log(els);

    for (let index = 0; index < els.length; index++) {
        document.getElementById('wiki').appendChild(els[index]);
    }

}

export {createBlock, deleteBlock, getWiki, displayWiki};
