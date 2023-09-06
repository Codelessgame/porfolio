function opentabGeneric(elementId, suffix, linkElements, contentElements, linkStyle, contentStyle) {
    for (linkElement of linkElements) {
        linkElement.classList.remove(linkStyle)
    }
    for (contentElement of contentElements) {
        contentElement.classList.remove(contentStyle)
    }
    event.currentTarget.classList.add(linkStyle)
    addStyleSafe(document.getElementById(elementId), contentStyle)
    if (suffix) {
        addStyleSafe(document.getElementById(elementId+suffix), contentStyle)
    }
}

function addStyleSafe(element, style) {
    if (element) {
        element.classList.add(style)
    }
}

const opentab = (() => {
    const tablinks = document.getElementsByClassName("tab-links")
    const tabcontents = document.getElementsByClassName("tab-contents")

    return (elkmentId) => opentabGeneric(elkmentId, null, tablinks, tabcontents, "active-link", "active-tab")
})()

const opentab2 = (() => {
    const pagelinks = document.getElementsByClassName("page-links")
    const pagecontents = document.getElementsByClassName("page-contents")

    return (elkmentId) => opentabGeneric(elkmentId, "-header", pagelinks, pagecontents, "active-page-link", "active-page")
})()




function add(numberofimg,currentElement ){
    linktoimages = "art_work/";value;".jpg"
    for (i of numberofimg){
        const img = document.createElement('img');
        img.innerText = linktoimages
        value+=1
    }
    
}

