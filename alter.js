"use strict";
function alter(element_s, parameters={}) {
    // Initialize Element(s)
    if(element_s instanceof Window || element_s instanceof Element || element_s instanceof Document){
        element_s = [element_s]
    } else if(typeof element_s==="string" || element_s instanceof String){
        let element_s = document.querySelectorAll(element_s)
        if(element_s.length===0) { return }
        else { element_s = Array.from(element_s) }
    } else if(!(element_s instanceof HTMLCollection) && !(element_s instanceof NodeList)) { return }
    // Apply parameters
    if(typeof parameters['duration']==="number"){
        const options = {}
        const keyframes = parameters.keyframes
        for (const key in parameters) {
            if (key !== 'keyframes') {
                options[key] = parameters[key]
            }
        }
        if(keyframes instanceof Array){
            for(let i=0; i<element_s.length; i++) {
                if(isNativeAnimateFunction(element_s[i])){
                    element_s[i].animate(keyframes, options)
                }
            }
        }
    } else {
        const styles = parameters?.styles || parameters?.keyframes?.[parameters?.keyframes?.length-1]
        if(styles){
            for(let i=0; i<element_s.length; i++) {
                if(isNativeStyleProperty(element_s[i])){
                    Object.assign(element_s[i].style, styles);
                }
            }
        }
    }
    // return element(s)
    return element_s;

    // Helper function
    function isNativeAnimateFunction (element) {
        return Element.prototype.animate.toString() === element?.animate?.toString?.();
    }
    function isNativeStyleProperty(element) {
        return element?.style instanceof CSSStyleDeclaration && element?.__proto__ === Element.prototype;
    }
}