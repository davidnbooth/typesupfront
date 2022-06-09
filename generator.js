// automatically generates the code for the domTypes object, from a list of HTML element types

const fs = require("fs")

const htmlElements = [
    "HTMLAnchorElement",
    "HTMLAreaElement",
    "HTMLAudioElement",
    "HTMLBaseElement",
    "HTMLBodyElement",
    "HTMLBRElement",
    "HTMLButtonElement",
    "HTMLCanvasElement",
    "HTMLDataElement",
    "HTMLDataListElement",
    "HTMLDialogElement",
    "HTMLDivElement",
    "HTMLDListElement",
    "HTMLElement",
    "HTMLEmbedElement",
    "HTMLFieldSetElement",
    "HTMLFormControlsCollection",
    "HTMLFormElement",
    "HTMLFrameSetElement",
    "HTMLHeadElement",
    "HTMLHeadingElement",
    "HTMLHRElement",
    "HTMLHtmlElement",
    "HTMLIFrameElement",
    "HTMLImageElement",
    "HTMLInputElement",
    "HTMLLabelElement",
    "HTMLLegendElement",
    "HTMLLIElement",
    "HTMLLinkElement",
    "HTMLMapElement",
    "HTMLMediaElement",
    "HTMLMetaElement",
    "HTMLMeterElement",
    "HTMLModElement",
    "HTMLObjectElement",
    "HTMLOListElement",
    "HTMLOptGroupElement",
    "HTMLOptionElement",
    "HTMLOptionsCollection",
    "HTMLOutputElement",
    "HTMLParagraphElement",
    "HTMLPictureElement",
    "HTMLPreElement",
    "HTMLProgressElement",
    "HTMLQuoteElement",
    "HTMLScriptElement",
    "HTMLSelectElement",
    "HTMLSourceElement",
    "HTMLSpanElement",
    "HTMLStyleElement",
    "HTMLTableCaptionElement",
    "HTMLTableCellElement",
    "HTMLTableColElement",
    "HTMLTableElement",
    "HTMLTableRowElement",
    "HTMLTableSectionElement",
    "HTMLTextAreaElement",
    "HTMLTemplateElement",
    "HTMLTimeElement",
    "HTMLTitleElement",
    "HTMLTrackElement",
    "HTMLUListElement",
    "HTMLUnknownElement",
    "HTMLVideoElement"
]


/*******************
 *  domTypes code  *
 *******************/

let domTypesOutputText = ""

for (const elemName of htmlElements) {
    domTypesOutputText += "    /**\n" +
                          `     * returns input if it is an ${elemName}, otherwise throws\n` +
                          "     * @param {*} el\n" +
                          `     * @returns {${elemName}}\n` +
                          "     */\n" +
                          `    assert${elemName.split("HTML")[1]}: function (el) {\n` +
                          `        if (!(el instanceof ${elemName})) throw new Error("Expected ${elemName} is not an ${elemName}")\n` +
                          "        else return el\n" +
                          "    },\n\n"
}

fs.writeFileSync("domTypesCode.js", domTypesOutputText)



/*******************
 *  domTypes code  *
 *******************/

 let domTypesTypescriptDefs = ""

 for (const elemName of htmlElements) {
    domTypesTypescriptDefs += `    assert${elemName.split("HTML")[1]}(el: *): ${elemName};\n`
 }
 
 fs.writeFileSync("domTypesTypescriptDefs.ts", domTypesTypescriptDefs)
