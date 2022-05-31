
;(function () {
    //////////   Figure out where/how this code is being used (totally cribbed from lodash)   //////////

    /** Detect free variable `global` from Node.js. */
    var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

    /** Detect free variable `self`. */
    var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

    /** Used as a reference to the global object. */
    var root = freeGlobal || freeSelf || Function('return this')();

    /** Detect free variable `exports`. */
    var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

    /** Detect free variable `module`. */
    var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;



    //////////   typesUpFront Type Assertion Functions   //////////

    var types = {
        /**
         * returns input if it is a number, otherwise throws
         * @param {*} input 
         * @returns {number}
         */
        assertNumber: function (input) {
            if (typeof input !== "number") throw new Error("Expected number value is not a number!")
            else return input
        },

        /**
         * returns input if it is a number without anything after the decimal, otherwise throws
         * @param {*} input 
         * @returns {number}
         */
        assertInt: function (input) {
            if (typeof input !== "number" || !Number.isInteger(input)) throw new Error("Expected integer value is not a integer!")
            else return input
        },

        /**
         * returns input if it is a string, otherwise throws
         * @param {*} input 
         * @returns {string}
         */
        assertString: function (input) {
            if (typeof input !== "string") throw new Error("Expected string value is not a string!")
            else return input
        },

        /**
         * returns input if it is a boolean, otherwise throws
         * @param {*} input 
         * @returns {boolean}
         */
        assertBoolean: function (input) {
            if (typeof input !== "boolean") throw new Error("Expected boolean value is not a boolean!")
            else return input
        },

        /**
         * returns input if it is a bigint, otherwise throws
         * @param {*} input 
         * @returns {bigint}
         */
        assertBigInt: function (input) {
            if (typeof input !== "bigint") throw new Error("Expected bigint value is not a bigint!")
            else return input
        },

        /**
         * returns input if it is a symbol, otherwise throws
         * @param {*} input 
         * @returns {symbol}
         */
        assertSymbol: function (input) {
            if (typeof input !== "symbol") throw new Error("Expected symbol value is not a symbol!")
            else return input
        },

        /**
         * returns input if it is a undefined, otherwise throws
         * @param {*} input 
         * @returns {undefined}
         */
        assertUndefined: function (input) {
            if (typeof input !== "undefined") throw new Error("Expected undefined value is not undefined!")
            else return input
        },

        /**
         * returns input if it is a function, otherwise throws
         * @param {*} input 
         * @returns {function}
         */
        assertFunction: function (input) {
            if (typeof input !== "function") throw new Error("Expected function value is not a function!")
            else return input
        },

        /**
         * returns input if it is a undefined, otherwise throws
         * @param {*} input 
         * @returns {undefined}
         */
        assertObject: function (input) {
            if (typeof input !== "object") throw new Error("Expected object value is not object!")
            else return input
        }
    }

    var domTypes = {
        /**
         * returns input if it is an HTMLAnchorElement, otherwise throws
         * @param {*} el
         * @returns {HTMLAnchorElement}
         */
        assertAnchorElement: function(el) {
            if (!(el instanceof HTMLAnchorElement)) throw new Error("Expected HTMLAnchorElement is not an HTMLAnchorElement")
            else return el
        },

        /**
         * returns input if it is an HTMLAreaElement, otherwise throws
         * @param {*} el
         * @returns {HTMLAreaElement}
         */
        assertAreaElement: function(el) {
            if (!(el instanceof HTMLAreaElement)) throw new Error("Expected HTMLAreaElement is not an HTMLAreaElement")
            else return el
        },

        /**
         * returns input if it is an HTMLAudioElement, otherwise throws
         * @param {*} el
         * @returns {HTMLAudioElement}
         */
        assertAudioElement: function(el) {
            if (!(el instanceof HTMLAudioElement)) throw new Error("Expected HTMLAudioElement is not an HTMLAudioElement")
            else return el
        },

        /**
         * returns input if it is an HTMLBaseElement, otherwise throws
         * @param {*} el
         * @returns {HTMLBaseElement}
         */
        assertBaseElement: function(el) {
            if (!(el instanceof HTMLBaseElement)) throw new Error("Expected HTMLBaseElement is not an HTMLBaseElement")
            else return el
        },

        /**
         * returns input if it is an HTMLBodyElement, otherwise throws
         * @param {*} el
         * @returns {HTMLBodyElement}
         */
        assertBodyElement: function(el) {
            if (!(el instanceof HTMLBodyElement)) throw new Error("Expected HTMLBodyElement is not an HTMLBodyElement")
            else return el
        },

        /**
         * returns input if it is an HTMLBRElement, otherwise throws
         * @param {*} el
         * @returns {HTMLBRElement}
         */
        assertBRElement: function(el) {
            if (!(el instanceof HTMLBRElement)) throw new Error("Expected HTMLBRElement is not an HTMLBRElement")
            else return el
        },

        /**
         * returns input if it is an HTMLButtonElement, otherwise throws
         * @param {*} el
         * @returns {HTMLButtonElement}
         */
        assertButtonElement: function(el) {
            if (!(el instanceof HTMLButtonElement)) throw new Error("Expected HTMLButtonElement is not an HTMLButtonElement")
            else return el
        },

        /**
         * returns input if it is an HTMLCanvasElement, otherwise throws
         * @param {*} el
         * @returns {HTMLCanvasElement}
         */
        assertCanvasElement: function(el) {
            if (!(el instanceof HTMLCanvasElement)) throw new Error("Expected HTMLCanvasElement is not an HTMLCanvasElement")
            else return el
        },

        /**
         * returns input if it is an HTMLDataElement, otherwise throws
         * @param {*} el
         * @returns {HTMLDataElement}
         */
        assertDataElement: function(el) {
            if (!(el instanceof HTMLDataElement)) throw new Error("Expected HTMLDataElement is not an HTMLDataElement")
            else return el
        },

        /**
         * returns input if it is an HTMLDataListElement, otherwise throws
         * @param {*} el
         * @returns {HTMLDataListElement}
         */
        assertDataListElement: function(el) {
            if (!(el instanceof HTMLDataListElement)) throw new Error("Expected HTMLDataListElement is not an HTMLDataListElement")
            else return el
        },

        /**
         * returns input if it is an HTMLDialogElement, otherwise throws
         * @param {*} el
         * @returns {HTMLDialogElement}
         */
        assertDialogElement: function(el) {
            if (!(el instanceof HTMLDialogElement)) throw new Error("Expected HTMLDialogElement is not an HTMLDialogElement")
            else return el
        },

        /**
         * returns input if it is an HTMLDivElement, otherwise throws
         * @param {*} el
         * @returns {HTMLDivElement}
         */
        assertDivElement: function(el) {
            if (!(el instanceof HTMLDivElement)) throw new Error("Expected HTMLDivElement is not an HTMLDivElement")
            else return el
        },

        /**
         * returns input if it is an HTMLDListElement, otherwise throws
         * @param {*} el
         * @returns {HTMLDListElement}
         */
        assertDListElement: function(el) {
            if (!(el instanceof HTMLDListElement)) throw new Error("Expected HTMLDListElement is not an HTMLDListElement")
            else return el
        },

        /**
         * returns input if it is an HTMLElement, otherwise throws
         * @param {*} el
         * @returns {HTMLElement}
         */
        assertElement: function(el) {
            if (!(el instanceof HTMLElement)) throw new Error("Expected HTMLElement is not an HTMLElement")
            else return el
        },

        /**
         * returns input if it is an HTMLEmbedElement, otherwise throws
         * @param {*} el
         * @returns {HTMLEmbedElement}
         */
        assertEmbedElement: function(el) {
            if (!(el instanceof HTMLEmbedElement)) throw new Error("Expected HTMLEmbedElement is not an HTMLEmbedElement")
            else return el
        },

        /**
         * returns input if it is an HTMLFieldSetElement, otherwise throws
         * @param {*} el
         * @returns {HTMLFieldSetElement}
         */
        assertFieldSetElement: function(el) {
            if (!(el instanceof HTMLFieldSetElement)) throw new Error("Expected HTMLFieldSetElement is not an HTMLFieldSetElement")
            else return el
        },

        /**
         * returns input if it is an HTMLFormControlsCollection, otherwise throws
         * @param {*} el
         * @returns {HTMLFormControlsCollection}
         */
        assertFormControlsCollection: function(el) {
            if (!(el instanceof HTMLFormControlsCollection)) throw new Error("Expected HTMLFormControlsCollection is not an HTMLFormControlsCollection")
            else return el
        },

        /**
         * returns input if it is an HTMLFormElement, otherwise throws
         * @param {*} el
         * @returns {HTMLFormElement}
         */
        assertFormElement: function(el) {
            if (!(el instanceof HTMLFormElement)) throw new Error("Expected HTMLFormElement is not an HTMLFormElement")
            else return el
        },

        /**
         * returns input if it is an HTMLFrameSetElement, otherwise throws
         * @param {*} el
         * @returns {HTMLFrameSetElement}
         */
        assertFrameSetElement: function(el) {
            if (!(el instanceof HTMLFrameSetElement)) throw new Error("Expected HTMLFrameSetElement is not an HTMLFrameSetElement")
            else return el
        },

        /**
         * returns input if it is an HTMLHeadElement, otherwise throws
         * @param {*} el
         * @returns {HTMLHeadElement}
         */
        assertHeadElement: function(el) {
            if (!(el instanceof HTMLHeadElement)) throw new Error("Expected HTMLHeadElement is not an HTMLHeadElement")
            else return el
        },

        /**
         * returns input if it is an HTMLHeadingElement, otherwise throws
         * @param {*} el
         * @returns {HTMLHeadingElement}
         */
        assertHeadingElement: function(el) {
            if (!(el instanceof HTMLHeadingElement)) throw new Error("Expected HTMLHeadingElement is not an HTMLHeadingElement")
            else return el
        },

        /**
         * returns input if it is an HTMLHRElement, otherwise throws
         * @param {*} el
         * @returns {HTMLHRElement}
         */
        assertHRElement: function(el) {
            if (!(el instanceof HTMLHRElement)) throw new Error("Expected HTMLHRElement is not an HTMLHRElement")
            else return el
        },

        /**
         * returns input if it is an HTMLHtmlElement, otherwise throws
         * @param {*} el
         * @returns {HTMLHtmlElement}
         */
        assertHtmlElement: function(el) {
            if (!(el instanceof HTMLHtmlElement)) throw new Error("Expected HTMLHtmlElement is not an HTMLHtmlElement")
            else return el
        },

        /**
         * returns input if it is an HTMLIFrameElement, otherwise throws
         * @param {*} el
         * @returns {HTMLIFrameElement}
         */
        assertIFrameElement: function(el) {
            if (!(el instanceof HTMLIFrameElement)) throw new Error("Expected HTMLIFrameElement is not an HTMLIFrameElement")
            else return el
        },

        /**
         * returns input if it is an HTMLImageElement, otherwise throws
         * @param {*} el
         * @returns {HTMLImageElement}
         */
        assertImageElement: function(el) {
            if (!(el instanceof HTMLImageElement)) throw new Error("Expected HTMLImageElement is not an HTMLImageElement")
            else return el
        },

        /**
         * returns input if it is an HTMLInputElement, otherwise throws
         * @param {*} el
         * @returns {HTMLInputElement}
         */
        assertInputElement: function(el) {
            if (!(el instanceof HTMLInputElement)) throw new Error("Expected HTMLInputElement is not an HTMLInputElement")
            else return el
        },

        /**
         * returns input if it is an HTMLLabelElement, otherwise throws
         * @param {*} el
         * @returns {HTMLLabelElement}
         */
        assertLabelElement: function(el) {
            if (!(el instanceof HTMLLabelElement)) throw new Error("Expected HTMLLabelElement is not an HTMLLabelElement")
            else return el
        },

        /**
         * returns input if it is an HTMLLegendElement, otherwise throws
         * @param {*} el
         * @returns {HTMLLegendElement}
         */
        assertLegendElement: function(el) {
            if (!(el instanceof HTMLLegendElement)) throw new Error("Expected HTMLLegendElement is not an HTMLLegendElement")
            else return el
        },

        /**
         * returns input if it is an HTMLLIElement, otherwise throws
         * @param {*} el
         * @returns {HTMLLIElement}
         */
        assertLIElement: function(el) {
            if (!(el instanceof HTMLLIElement)) throw new Error("Expected HTMLLIElement is not an HTMLLIElement")
            else return el
        },

        /**
         * returns input if it is an HTMLLinkElement, otherwise throws
         * @param {*} el
         * @returns {HTMLLinkElement}
         */
        assertLinkElement: function(el) {
            if (!(el instanceof HTMLLinkElement)) throw new Error("Expected HTMLLinkElement is not an HTMLLinkElement")
            else return el
        },

        /**
         * returns input if it is an HTMLMapElement, otherwise throws
         * @param {*} el
         * @returns {HTMLMapElement}
         */
        assertMapElement: function(el) {
            if (!(el instanceof HTMLMapElement)) throw new Error("Expected HTMLMapElement is not an HTMLMapElement")
            else return el
        },

        /**
         * returns input if it is an HTMLMediaElement, otherwise throws
         * @param {*} el
         * @returns {HTMLMediaElement}
         */
        assertMediaElement: function(el) {
            if (!(el instanceof HTMLMediaElement)) throw new Error("Expected HTMLMediaElement is not an HTMLMediaElement")
            else return el
        },

        /**
         * returns input if it is an HTMLMetaElement, otherwise throws
         * @param {*} el
         * @returns {HTMLMetaElement}
         */
        assertMetaElement: function(el) {
            if (!(el instanceof HTMLMetaElement)) throw new Error("Expected HTMLMetaElement is not an HTMLMetaElement")
            else return el
        },

        /**
         * returns input if it is an HTMLMeterElement, otherwise throws
         * @param {*} el
         * @returns {HTMLMeterElement}
         */
        assertMeterElement: function(el) {
            if (!(el instanceof HTMLMeterElement)) throw new Error("Expected HTMLMeterElement is not an HTMLMeterElement")
            else return el
        },

        /**
         * returns input if it is an HTMLModElement, otherwise throws
         * @param {*} el
         * @returns {HTMLModElement}
         */
        assertModElement: function(el) {
            if (!(el instanceof HTMLModElement)) throw new Error("Expected HTMLModElement is not an HTMLModElement")
            else return el
        },

        /**
         * returns input if it is an HTMLObjectElement, otherwise throws
         * @param {*} el
         * @returns {HTMLObjectElement}
         */
        assertObjectElement: function(el) {
            if (!(el instanceof HTMLObjectElement)) throw new Error("Expected HTMLObjectElement is not an HTMLObjectElement")
            else return el
        },

        /**
         * returns input if it is an HTMLOListElement, otherwise throws
         * @param {*} el
         * @returns {HTMLOListElement}
         */
        assertOListElement: function(el) {
            if (!(el instanceof HTMLOListElement)) throw new Error("Expected HTMLOListElement is not an HTMLOListElement")
            else return el
        },

        /**
         * returns input if it is an HTMLOptGroupElement, otherwise throws
         * @param {*} el
         * @returns {HTMLOptGroupElement}
         */
        assertOptGroupElement: function(el) {
            if (!(el instanceof HTMLOptGroupElement)) throw new Error("Expected HTMLOptGroupElement is not an HTMLOptGroupElement")
            else return el
        },

        /**
         * returns input if it is an HTMLOptionElement, otherwise throws
         * @param {*} el
         * @returns {HTMLOptionElement}
         */
        assertOptionElement: function(el) {
            if (!(el instanceof HTMLOptionElement)) throw new Error("Expected HTMLOptionElement is not an HTMLOptionElement")
            else return el
        },

        /**
         * returns input if it is an HTMLOptionsCollection, otherwise throws
         * @param {*} el
         * @returns {HTMLOptionsCollection}
         */
        assertOptionsCollection: function(el) {
            if (!(el instanceof HTMLOptionsCollection)) throw new Error("Expected HTMLOptionsCollection is not an HTMLOptionsCollection")
            else return el
        },

        /**
         * returns input if it is an HTMLOutputElement, otherwise throws
         * @param {*} el
         * @returns {HTMLOutputElement}
         */
        assertOutputElement: function(el) {
            if (!(el instanceof HTMLOutputElement)) throw new Error("Expected HTMLOutputElement is not an HTMLOutputElement")
            else return el
        },

        /**
         * returns input if it is an HTMLParagraphElement, otherwise throws
         * @param {*} el
         * @returns {HTMLParagraphElement}
         */
        assertParagraphElement: function(el) {
            if (!(el instanceof HTMLParagraphElement)) throw new Error("Expected HTMLParagraphElement is not an HTMLParagraphElement")
            else return el
        },

        /**
         * returns input if it is an HTMLPictureElement, otherwise throws
         * @param {*} el
         * @returns {HTMLPictureElement}
         */
        assertPictureElement: function(el) {
            if (!(el instanceof HTMLPictureElement)) throw new Error("Expected HTMLPictureElement is not an HTMLPictureElement")
            else return el
        },

        /**
         * returns input if it is an HTMLPreElement, otherwise throws
         * @param {*} el
         * @returns {HTMLPreElement}
         */
        assertPreElement: function(el) {
            if (!(el instanceof HTMLPreElement)) throw new Error("Expected HTMLPreElement is not an HTMLPreElement")
            else return el
        },

        /**
         * returns input if it is an HTMLProgressElement, otherwise throws
         * @param {*} el
         * @returns {HTMLProgressElement}
         */
        assertProgressElement: function(el) {
            if (!(el instanceof HTMLProgressElement)) throw new Error("Expected HTMLProgressElement is not an HTMLProgressElement")
            else return el
        },

        /**
         * returns input if it is an HTMLQuoteElement, otherwise throws
         * @param {*} el
         * @returns {HTMLQuoteElement}
         */
        assertQuoteElement: function(el) {
            if (!(el instanceof HTMLQuoteElement)) throw new Error("Expected HTMLQuoteElement is not an HTMLQuoteElement")
            else return el
        },

        /**
         * returns input if it is an HTMLScriptElement, otherwise throws
         * @param {*} el
         * @returns {HTMLScriptElement}
         */
        assertScriptElement: function(el) {
            if (!(el instanceof HTMLScriptElement)) throw new Error("Expected HTMLScriptElement is not an HTMLScriptElement")
            else return el
        },

        /**
         * returns input if it is an HTMLSelectElement, otherwise throws
         * @param {*} el
         * @returns {HTMLSelectElement}
         */
        assertSelectElement: function(el) {
            if (!(el instanceof HTMLSelectElement)) throw new Error("Expected HTMLSelectElement is not an HTMLSelectElement")
            else return el
        },

        /**
         * returns input if it is an HTMLSourceElement, otherwise throws
         * @param {*} el
         * @returns {HTMLSourceElement}
         */
        assertSourceElement: function(el) {
            if (!(el instanceof HTMLSourceElement)) throw new Error("Expected HTMLSourceElement is not an HTMLSourceElement")
            else return el
        },

        /**
         * returns input if it is an HTMLSpanElement, otherwise throws
         * @param {*} el
         * @returns {HTMLSpanElement}
         */
        assertSpanElement: function(el) {
            if (!(el instanceof HTMLSpanElement)) throw new Error("Expected HTMLSpanElement is not an HTMLSpanElement")
            else return el
        },

        /**
         * returns input if it is an HTMLStyleElement, otherwise throws
         * @param {*} el
         * @returns {HTMLStyleElement}
         */
        assertStyleElement: function(el) {
            if (!(el instanceof HTMLStyleElement)) throw new Error("Expected HTMLStyleElement is not an HTMLStyleElement")
            else return el
        },

        /**
         * returns input if it is an HTMLTableCaptionElement, otherwise throws
         * @param {*} el
         * @returns {HTMLTableCaptionElement}
         */
        assertTableCaptionElement: function(el) {
            if (!(el instanceof HTMLTableCaptionElement)) throw new Error("Expected HTMLTableCaptionElement is not an HTMLTableCaptionElement")
            else return el
        },

        /**
         * returns input if it is an HTMLTableCellElement, otherwise throws
         * @param {*} el
         * @returns {HTMLTableCellElement}
         */
        assertTableCellElement: function(el) {
            if (!(el instanceof HTMLTableCellElement)) throw new Error("Expected HTMLTableCellElement is not an HTMLTableCellElement")
            else return el
        },

        /**
         * returns input if it is an HTMLTableColElement, otherwise throws
         * @param {*} el
         * @returns {HTMLTableColElement}
         */
        assertTableColElement: function(el) {
            if (!(el instanceof HTMLTableColElement)) throw new Error("Expected HTMLTableColElement is not an HTMLTableColElement")
            else return el
        },

        /**
         * returns input if it is an HTMLTableElement, otherwise throws
         * @param {*} el
         * @returns {HTMLTableElement}
         */
        assertTableElement: function(el) {
            if (!(el instanceof HTMLTableElement)) throw new Error("Expected HTMLTableElement is not an HTMLTableElement")
            else return el
        },

        /**
         * returns input if it is an HTMLTableRowElement, otherwise throws
         * @param {*} el
         * @returns {HTMLTableRowElement}
         */
        assertTableRowElement: function(el) {
            if (!(el instanceof HTMLTableRowElement)) throw new Error("Expected HTMLTableRowElement is not an HTMLTableRowElement")
            else return el
        },

        /**
         * returns input if it is an HTMLTableSectionElement, otherwise throws
         * @param {*} el
         * @returns {HTMLTableSectionElement}
         */
        assertTableSectionElement: function(el) {
            if (!(el instanceof HTMLTableSectionElement)) throw new Error("Expected HTMLTableSectionElement is not an HTMLTableSectionElement")
            else return el
        },

        /**
         * returns input if it is an HTMLTextAreaElement, otherwise throws
         * @param {*} el
         * @returns {HTMLTextAreaElement}
         */
        assertTextAreaElement: function(el) {
            if (!(el instanceof HTMLTextAreaElement)) throw new Error("Expected HTMLTextAreaElement is not an HTMLTextAreaElement")
            else return el
        },

        /**
         * returns input if it is an HTMLTemplateElement, otherwise throws
         * @param {*} el
         * @returns {HTMLTemplateElement}
         */
        assertTemplateElement: function(el) {
            if (!(el instanceof HTMLTemplateElement)) throw new Error("Expected HTMLTemplateElement is not an HTMLTemplateElement")
            else return el
        },

        /**
         * returns input if it is an HTMLTimeElement, otherwise throws
         * @param {*} el
         * @returns {HTMLTimeElement}
         */
        assertTimeElement: function(el) {
            if (!(el instanceof HTMLTimeElement)) throw new Error("Expected HTMLTimeElement is not an HTMLTimeElement")
            else return el
        },

        /**
         * returns input if it is an HTMLTitleElement, otherwise throws
         * @param {*} el
         * @returns {HTMLTitleElement}
         */
        assertTitleElement: function(el) {
            if (!(el instanceof HTMLTitleElement)) throw new Error("Expected HTMLTitleElement is not an HTMLTitleElement")
            else return el
        },

        /**
         * returns input if it is an HTMLTrackElement, otherwise throws
         * @param {*} el
         * @returns {HTMLTrackElement}
         */
        assertTrackElement: function(el) {
            if (!(el instanceof HTMLTrackElement)) throw new Error("Expected HTMLTrackElement is not an HTMLTrackElement")
            else return el
        },

        /**
         * returns input if it is an HTMLUListElement, otherwise throws
         * @param {*} el
         * @returns {HTMLUListElement}
         */
        assertUListElement: function(el) {
            if (!(el instanceof HTMLUListElement)) throw new Error("Expected HTMLUListElement is not an HTMLUListElement")
            else return el
        },

        /**
         * returns input if it is an HTMLUnknownElement, otherwise throws
         * @param {*} el
         * @returns {HTMLUnknownElement}
         */
        assertUnknownElement: function(el) {
            if (!(el instanceof HTMLUnknownElement)) throw new Error("Expected HTMLUnknownElement is not an HTMLUnknownElement")
            else return el
        },

        /**
         * returns input if it is an HTMLVideoElement, otherwise throws
         * @param {*} el
         * @returns {HTMLVideoElement}
         */
        assertVideoElement: function(el) {
            if (!(el instanceof HTMLVideoElement)) throw new Error("Expected HTMLVideoElement is not an HTMLVideoElement")
            else return el
        },
    }

    var typesUpFront = {types, domTypes}



    //////////   Export typesUpFront either as a module or to the global object (copied from lodash)   //////////

    if (freeModule) {
        // Export for Node.js.
        (freeModule.exports = typesUpFront).typesUpFront = typesUpFront;
        // Export for CommonJS support.
        freeExports.typesUpFront = typesUpFront;
    } else {
        // Export to the global object.
        root.typesUpFront = typesUpFront;
    }
}.call(this));
