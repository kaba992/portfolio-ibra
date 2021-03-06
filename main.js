import './style.css'
import './luge.css'
import './locomotive.css'
import './index.js'



import { gsap } from "gsap";
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
