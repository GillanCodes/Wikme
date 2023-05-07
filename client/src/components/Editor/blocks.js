import axios from "axios";
import { genUId, isEmpty } from "../../utils";

var page = [];

function initPage(items)
{
    page = items;
}

function createTextBlock(type)
{
    switch(type)
    {
        case "title":
            page.push({
                UId: genUId(),
                type: "title",
                content: "Test !"
            });
            return;
        case "subtitle":
            page.push({
                UId: genUId(),
                type: "subtitle",
                content: "Test !"
            });
            return;
        default:
            page.push({
                UId: genUId(),
                type: "text",
                content: "Test !"
            });
            return;
    }
} 

function createCaptionBlock(right)
{    
    page.push({
        UId: genUId(),
        type: "caption",
        content: "Test !",
        caption: "/img_dev/caption2.jpg",
        isRight: right
    });
}

function createImageBlock(number)
{
    // if (isEmpty(images)) return "Empty images"
    // if (typeof images !== "object") return "Wrong type";
    var tempContent = [];
    for (let index = 0; index < number; index++) {
        tempContent.push("empty_content");
    }

    page.push({
        UId: genUId(),
        type: "images",
        content: tempContent
    });
}

function createBlock(type, pageId, imageSize)
{
    switch(type)
    {
        case 'text-only':
            createTextBlock();
            break;
        case 'title':
            createTextBlock('title');
            break;
        case 'subtitle':
            createTextBlock('subtitle');
            break;
        case 'caption':
            createCaptionBlock(false);
            break;
        case 'caption-right':
            createCaptionBlock(true);
            break;
        case "images":
            createImageBlock(imageSize);
            break;
        default:
            break;
    }
    save(pageId);
}

function deleteBlock(itemId, pageId) 
{
    var index = getBlock(itemId);
    page.splice(index, 1);
    save(pageId);
}

function getBlock(id)
{
    if (!isEmpty(page) && !isEmpty(id))
    {
        return page.map((x) => x.UId).indexOf(id);
    }
}

function changeBlock(type, id, changedContent) {
    var index = getBlock(id);
    switch(type)
    {
        case 'text':
            return page[index].content = changedContent;
        case 'caption':
            page[index].content = changedContent.text;
            page[index].caption = changedContent.image;
            return;
        default:
            break
    }
}

function setCaptionImage(id, path, pageId)
{
    var index = getBlock(id);
    page[index].caption = `${process.env.REACT_APP_CDN_URL}/uploads/${path}`
    save(pageId);
}

function setImages(id, path, pageId, key)
{
    var index = getBlock(id);
    page[index].content[key] = `${process.env.REACT_APP_CDN_URL}/uploads/${path}`;
    save(pageId);
}


var delay;
function save(pageId) {
    clearTimeout(delay);
    delay = setTimeout(() => {
        var doc = document.getElementById("editor").innerHTML;
        axios({
            method:"patch",
            withCredentials: true,
            url: `http://localhost:5050/api/wiki/${pageId}/page`,
            data: {
                content: page
            }
        });
    }, 500)
}

export {initPage, createBlock, deleteBlock, changeBlock, setCaptionImage, setImages, save};
