// these exports could be used inside client script which runs in browser
// do not add something related to node js in exports like `fs` package
// if you do this - you get an error in browser because no node js in browsers
import renderClient from "./build/entries/client/helpers/renderClient";
export { renderClient };
