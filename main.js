import './style.css'
import './index.js'
import luge from '@waaark/luge'
console.log(luge);
luge.settings({ preloader: { duration: 3 } });
luge.settings({ loader: { duration: 1.5 } });

import { Application } from '@splinetool/runtime';

const canvas = document.getElementById('canvas3d');
const app = new Application(canvas);
app.load('https://prod.spline.design/n47SWpCNFv0OPbN6/scene.splinecode');
