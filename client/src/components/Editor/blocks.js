import axios from "axios";

const id = "editor";

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
    text.contentEditable = true;

    captionBlock.appendChild(imageContent);
    captionBlock.appendChild(text);
    
    return captionBlock;
}

function createBlock(type, pageId)
{
    const el = document.getElementById(id);
    switch(type)
    {
        case 'text-only':
            el.appendChild(createTextBlock());
            // el.insertBefore(createTextBlock(), el.children[el.children.length - 1]);
            break;
        case 'caption':
            el.appendChild(createCaptionBlock(false));
            // el.insertBefore(createCaptionBlock(false), el.children[el.children.length - 1]);
            break
        case 'caption-right':
            el.appendChild(createCaptionBlock(true));
            // el.insertBefore(createCaptionBlock(true), el.children[el.children.length - 1]);
            break
        default:
            break;
    }
    save(pageId);
}

function deleteBlock() 
{

}

var delay;

function save(pageId)
{
    clearTimeout(delay);
    delay = setTimeout(() => {
        var doc = document.getElementById("editor").innerHTML;
        axios({
            method:"patch",
            withCredentials: true,
            url: `http://localhost:5050/api/wiki/${pageId}/page`,
            data: {
                content: doc
            }
        });
    }, 500)
    
   
}

function displayWiki(page)
{

    document.getElementById(id).innerHTML = page.content
    // axios({
    //     method:"get",
    //     withCredentials: true,
    //     url: `http://localhost:5050/api/wiki/644d542d802921b371e5a01a/page`,
    // }).then((data) => {
    //     var doc = data.data[0].content;
        
    //     document.getElementById('wiki').innerHTML = doc;
    // })
}

export {createBlock, deleteBlock, save, displayWiki};
