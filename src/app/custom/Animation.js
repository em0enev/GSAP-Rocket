import { MotionPathPlugin } from "gsap/all";
import gsap from "gsap/gsap-core";
import config from "../../config";

export default class Animation {
    constructor() {
        this._rocketElement = document.querySelector('.rocket');
        this._backgroundElement = document.querySelector('.background');
        this._svgPath = config.svgPath;
        this._rocketTween = null;
        this._isEventKilled = false;
        gsap.registerPlugin(MotionPathPlugin);
    }

    async start() {
        this._backgroundElement.addEventListener('click', () => {
            if (this._isEventKilled) {
                this._runEvent();
            } else {
                this._killTween();
            }
        })

        this._rocketTween = gsap.to(this._rocketElement, { motionPath: { path: this._svgPath, autoRotate: true }, duration: 10 })
            .repeat(-1)
    }

    _killTween() {
        this._rocketTween.kill()
        this._rocketTween = null;
        this._isEventKilled = true;
    }

    _runEvent() {
        this._rocketTween = gsap.to(this._rocketElement, { motionPath: { path: this._svgPath, autoRotate: true }, duration: 10 })
            .repeat(-1)
        this._isEventKilled = false;
    }
}