import './style.css'
import './luge.css'
import './base.css'
import './index.js'
import './locomotive.min.js'
import luge from '@waaark/luge'
import { gsap } from "gsap";

console.log(gsap);
console.log(luge);
luge.settings({ preloader: { duration: 3 } });
luge.settings({ loader: { duration: 1.5 } });

// import { Application } from '@splinetool/runtime';

// const canvas = document.getElementById('canvas3d');
// const app = new Application(canvas);
// app.load('https://prod.spline.design/n47SWpCNFv0OPbN6/scene.splinecode');
import { Application } from '@splinetool/runtime';
const canvas = document.getElementById('canvas3d');
const app = new Application(canvas);
app.load('https://prod.spline.design/n47SWpCNFv0OPbN6/scene.splinecode');



// const canvasContact = document.getElementById('canvas3d-2');
// const appContact = new Application(canvasContact);
// appContact.load('https://prod.spline.design/MhGQIm2Y3yWRRD-C/scene.splinecode');

const canvasContact = document.getElementById('canvas3d-2');
const appContact = new Application(canvasContact);
appContact.load('https://prod.spline.design/MhGQIm2Y3yWRRD-C/scene.splinecode');
