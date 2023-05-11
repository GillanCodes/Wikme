import axios from "axios";
import { genUId, isEmpty } from "../../../utils";
import { updateContent } from "../../../actions/page.actions";
import store from "../../../index";

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
                content: "New title"
            });
            return;
        case "subtitle":
            page.push({
                UId: genUId(),
                type: "subtitle",
                content: "New subtitle"
            });
            return;
        case "code":
            page.push({
                UId: genUId(),
                type: "code",
                lang: "none",
                content: "var empty = true;\n<br>if(empty)\n<br>{\n<br>&nbsp;&nbsp;&nbsp;&nbsp; this.code().fill();\n<br>}\n<br>return this.code();"
            });
            return;
        default:
            page.push({
                UId: genUId(),
                type: "text",
                content: "New text block"
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
        caption: "",
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
        case 'code':
            createTextBlock('code');
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
    saveNoDelay(pageId);
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
        case 'code':
            page[index].content = changedContent.content;
            page[index].lang = changedContent.lang;
            return;
        default:
            break
    }
}

function setCaptionImage(id, path, pageId)
{
    var index = getBlock(id);
    page[index].caption = `${process.env.REACT_APP_CDN_URL}/uploads/${path}`
    saveNoDelay(pageId);
}

function setImages(id, path, pageId, key)
{
    var index = getBlock(id);
    page[index].content[key] = `${process.env.REACT_APP_CDN_URL}/uploads/${path}`;
    saveNoDelay(pageId);
}

function swapElements (array, key, newplace)
{
    let temp = array[key];
    array[key] = array[newplace];
    array[newplace] = temp;
}


function blockUp(key, pageId)
{
    swapElements(page, key, key-1);
    saveNoDelay(pageId);
}

function blockDown(key, pageId)
{
    swapElements(page, key, key+1);
    saveNoDelay(pageId);
}

function deleteBlock(itemId, pageId) 
{
    var index = getBlock(itemId);
    page.splice(index, 1);
    saveNoDelay(pageId);
}

var delay;
function save(pageId) {
    clearTimeout(delay);
    delay = setTimeout(() => {
        return axios({
            method:"patch",
            withCredentials: true,
            url: `http://localhost:5050/api/wiki/${pageId}/page`,
            data: {
                content: page
            }
        });
    }, 500)
}

function saveNoDelay(pageId) {
    store.dispatch(updateContent(pageId, page));
}

export {initPage, createBlock, deleteBlock, changeBlock, setCaptionImage, setImages, blockUp, blockDown, save};
