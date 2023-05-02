import axios from "axios";
import { genUId, isEmpty } from "../../utils";

const id = "editor";

function createTextBlock()
{
    const textBlock = document.createElement("div")
    textBlock.id = genUId();
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
    captionBlock.id = genUId();
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

function deleteBlock(itemId, pageId) 
{
    document.getElementById(itemId).remove();
    save(pageId);
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
    if (!isEmpty(page.content))
    {
        document.getElementById(id).innerHTML = page.content
    }
}


function createControl()
{
    const controlBox = document.createElement('div');
    controlBox.classList.add('control-box');

    const delBtn = document.createElement('button');
    delBtn.classList.add('button');
    delBtn.value = "Delete Block";

    controlBox.appendChild(delBtn);

    return controlBox;
}

function control()
{
    const el = document.getElementById("controls");
    const els = document.getElementById(id).childNodes;
    var i = [];
    els.forEach(child => {
        i.push(child);
    });
    console.log(i);
    return i;
}

export {createBlock, deleteBlock, save, displayWiki, control};
