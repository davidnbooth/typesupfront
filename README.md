# Types Up Front

Javascript is better with types.  Typescript is great, but sometimes it can be a little too much to have to install everything and set up the build process.  

We can do pretty well without writing actual Typescript: VSCode can use the Typescript engine behind the scenes to check your JS.  It also supports JSDoc-style notation.  This means that you can do this kind of thing:
```
/** 
 * @param {string} input
 */
fooFunc(input) {...}

fooFunc(2)  // VSCode shows a type error because the parameter is not a string
```  

Very cool.  Unfortunately this can get tricky in the frontend, where you are grabbing elements or data from the DOM and your code doesn't know what it will get.  

Consider the following code, which is simply looking at the values of a couple of DOM elements:
```
1    const fooField = document.getElementById("foo-field")    // type - HTMLElement
2    if (document.getElementById("foo-checkbox").checked) {
3        const bar = fooField.value                           // type - string | number | function
4        ...
5    }
```
The comments show the types of the declared variables.
Both line 2 and line 3 will show type errors, because HTMLElement does not have a "checked" property, and fooField doesn't have a "value" property.  We will probably have type errors later if we try to do anything with ```bar```, because the IDE doesn't really know what type it is.

Of course, if the elements *are* \<input\> elements, then they should be just fine.  But your IDE doesn't know what kinds of elements these are, and actually neither do you!

The solution is to be assertive!
```
1    const fooField = assertInputElement(document.getElementById("foo-field"), "text")                // type - HTMLInputElement
2    const fooCheckbox = assertInputElement(document.getElementById("foo-checkbox"), "checkbox")      // type - HTMLInputElement
3    if (fooCheckbox.checked) {    
4        const bar = fooField.value                                                                   // type - string
5        ...
6    }
```  

Imagine we have some "assert" functions, which are (almost) no-op functions that simply re-cast the types that the IDE is reading.  If the values are all of the expected types, these assert functions do nothing at all.  However, if the values are *not* of the expected type, they will throw an exception.  This keeps your code type-safe: everything is what you expect it to be, and if it is not, you fail *immediately*.  This makes it easy to debug and prevents you from passing bad data further down the line.  Now you do know what types your variables are and because we can use JSdoc-style comments to declare the return types of these functions the IDE will know too!  

That is what this library does.  It provides two sets of these assert functions: one for normal JS types, and one for DOM elements.

There is also a bit of additional functionality: with input elements we can get fancy and provide an optional second argument, the type of field.  In our example, on line 1 we specify that fooField is a text input, and on line 2 we specify that fooCheckbox is a check box.  This does two things:  
 1. The validation is stricter - the assert function will throw an error if the input element is not of the specified kind.
 2. We mess around with the getters and setters for the .value property of the element, to make them strictly deal with only the correct type.  

Install Types Up Front (TUF) now, put types at the forefront of your front-end code, and next time someone says "hey you should be using Typescript" you can say "well TUF, I don't need it!".


## Getting Started:  
All the code is in `typesUpFront.js` and there are no dependencies.  You can simply import that file if you would like.  The following should all work:

```
// In some code which is being webpacked/browserified:
const {types, domTypes} = require("typesUpFront")  
const {types, domTypes} = require("/path/to/folder/typesUpFront.js")


// In html
<!-- adds typesUpFront as a property of the global Window object -->
<script src="/path/typesUpFront.js">
```
It should also work fine when bundled with other code.  I don't know if it will work with the ES6 `import` module syntax.


## Changelog:  
0.0.3:  Support for different ways of including the library.  Readme updates.
0.0.2:  Added functions for all HTML Element types.  Pushed to github.  
0.0.1:  Initial commit.  


## Compatibility:  
Untested but probably very good.  `let`, `const`, and method shorthand syntax have all been avoided, and the assertBigInt function does not actually require the browser to support BigInt.
