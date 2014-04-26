/*
Copyright 2014 hiromasa (https://github.com/h1romas4/pararaehon.js)

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

/**
 * PararaEhon Engine.
 * 
 * @author hiromasa
 * @version 0.8
 */
var PararaEhon = {};

/**
 * PararaEhon.Scene.
 *
 * for Modern Browser(include IE9) and
 *  iOS6(better Apple A4 higher), Android4(better Google Chrome).
 * 
 * My Device List:
 *  Windows   IE11             work
 *  Windows   IE10             work
 *  Windows   IE9              work
 *  Windows   IE8              not work
 *  Windows   Firefox          work
 *  Mac       Firefox          work
 *  Mac       Google Chrome    work
 *  Mac       Safari           work
 *  Linux     Firefox          work
 *  Linux     Chromium         work
 *  iOS7      iPhone5s         work
 *  iOS6      iPhone4s         work
 *  iOS6      iPod touch(4th)  slow
 *  iOS6      iPad2            slow
 *  iOS5      iPhone4S         not work
 *  Android4  default browser  work        GALAXY S4
 *  Android4  Firefox          slow        GALAXY S4
 *  Android4  Google Chrome    work        NVIDIA Tegra3
 *  Android4  default browser  slow        NVIDIA Tegra3
 *  Android4  Firfox           slow        NVIDIA Tegra3
 *  FireOS 3  Amazon Silk      work        Kindle Fire HDX 8.9
 *  FireOS 3  Firefox          slow        Kindle Fire HDX 8.9
 *  Android2  default browser  not work    GALAXY SII
 *  Android2  Firefox          slow        GALAXY SII
 */
PararaEhon.Scene = (function() {

    var ANIMATION_FPS = 60;
    var DEBUG = false;

    /**
     * Constructor.
     */
    var Scene = function(scene) {
        this.scene = scene;
        this.page = [];
        this.pixelRatio =
            window.devicePixelRatio ? window.devicePixelRatio : 1;
        this.vector = 1;
        this.beforeScrollTop = 0;
    };

    /**
     * hack codes.
     *  - Firefox for Android/Mobile (pixelRato patch)
     *  - debug view
     */
    Scene.prototype.hack = function() {
        var ua = navigator.userAgent;
        if(ua.indexOf('Android') > 0 && ua.indexOf('Firefox') > 0) {
            this.pixelRatio = 2;
        }
        window.addEventListener('keydown', function(e) {
            if(e.keyCode != 68) return; // key of d
            DEBUG = DEBUG ? false : true;
        }, false);
    };

    /**
     * Event initialize.
     */
    Scene.prototype.start = function() {
        this.hack();
        window.addEventListener('load', this.init.bind(this), false);
        window.addEventListener('resize', this.init.bind(this), false);
        window.addEventListener('orientationchange', this.init.bind(this), false);
        window.addEventListener('scroll', this.update.bind(this), false);
        window.setInterval(this.update.bind(this), 1000 / ANIMATION_FPS);
        this.render();
    };

    /**
     * Scene initialize.
     */
    Scene.prototype.init = function() {
        var child;
        var canvas;
        var deviceWidth;
        var deviceHeight;
        var scale;
        var windowHeight;

        // get screen attribute. (testing margin/padding:0 body)
        if(!this.parent) this.parent = document.getElementById(this.scene.id);
        this.pageWidth = this.parent.clientWidth;
        this.pageHeight = this.scene.height;
        deviceWidth = this.pageWidth;
        deviceHeight = this.pageHeight;
        this.devicePixelRatio = 1;

        // for HiDPI device
        scale = 1;
        this.scene.overWidth = this.scene.overWidth ? this.scene.overWidth : 1600;
        if(this.pixelRatio > 1) {
            if(deviceWidth * this.pixelRatio >= this.scene.overWidth) {
                this.devicePixelRatio = 1;
            } else {
                this.pageWidth = deviceWidth * this.pixelRatio;
                this.pageHeight = 
                    this.pageWidth * (this.scene.height / this.scene.width);
                deviceHeight = this.pageHeight / this.pixelRatio;
                scale = this.pageWidth / this.scene.width;
                if(scale > 1) {
                    this.pageHeight = this.pageHeight / scale;
                    deviceHeight = deviceHeight / scale;
                    scale = 1;
                }
                this.devicePixelRatio = this.pixelRatio;
            }
        }

        // create canvas objects.
        if(this.page.length === 0) {
            child = this.parent.children;
            canvas = [];
            for(var i = 0; i < child.length; i++) {
                if(child[i] instanceof HTMLCanvasElement) {
                    canvas.push(child[i]);
                }
            }
            for(var i = 0; i < this.scene.book.length; i++) {
                if(canvas.length < i) break;
                this.page.push(
                    new PararaEhon.Page(
                        canvas[i]
                        , this.scene.book[i]
                        , this.scene.width
                        , this.scene.height));
            }
        }

        // set canvas size. (for window resize and rotate)
        for(var i = 0; i < this.page.length; i++) {
            this.page[i].canvas.setAttribute("width" ,this.pageWidth);
            this.page[i].canvas.setAttribute("height" ,this.pageHeight);
            this.page[i].canvas.style.width = deviceWidth + "px";
            this.page[i].canvas.style.height = deviceHeight + "px";
            this.page[i].scale = scale;
        }

        // set canvas per scene. (for window resize and rotate)
        windowHeight = 
            window.innerHeight || document.documentElement.clientHeight;
        this.sceneHeight = this.parent.clientHeight * this.devicePixelRatio;
        this.scenePerPage = Math.ceil(windowHeight / deviceHeight);
        this.sceneTop = Math.ceil((windowHeight - this.pageHeight) / 2);
        if(this.sceneTop < 0) this.sceneTop = 0;

        // iOS canvas render hack.
        this.renderCount = 0;
    };

    /**
     * update.
     */
    Scene.prototype.update = function() {
        var base;
        // scroll vector.
        this.scrollTop =
            (document.documentElement.scrollTop || document.body.scrollTop) 
                * this.devicePixelRatio;
        if(this.scrollTop < 0) this.scrollTop = 0;
        if(this.scrollTop - this.beforeScrollTop > 0) {
            this.vector = 1;
        } else if(this.scrollTop != this.beforeScrollTop) {
            this.vector = -1;
        }
        this.beforeScrollTop = this.scrollTop;

        // every page.
        for(var i = 0; i < this.page.length; i++) {
            // calc base position.
            base = this.pageHeight - 
                (this.sceneTop + this.pageHeight + this.scrollTop - i * this.pageHeight);
            // update!
            this.page[i].update(base, this.vector);
        }
    };

    /**
     * render.
     */
    Scene.prototype.render = function() {
        requestAnimFrame(this.render.bind(this));
        // viewport range render.
        var start;
        var end;
        var topm;
        var topr;
        topm = this.scrollTop / this.pageHeight;
        topr = Math.ceil(this.scrollTop / this.pageHeight);
        if(topm === topr) {
            start = topr;
        } else {
            start = topr - 1;
        }
        end = start + this.scenePerPage + 1;
        if(end > this.page.length) {
            end = this.page.length;
        }
        // iOS canvas render hack. (full rendering)
        if(this.renderCount < 1) {
            start = 0;
            end = this.page.length;
            this.renderCount += 1;
        }
        // render!
        for(var i = start; i < end; i++) {
            this.page[i].render(this.pageWidth, this.pageHeight, DEBUG);
        }
    };

    /**
     * requestAnimationFrame wrapper.
     * context invalid?: Illegal operation on WrappedNative prototype object
     */
    window.requestAnimFrame = (function() {
        return window.requestAnimationFrame
        || window.webkitRequestAnimationFrame
        || window.mozRequestAnimationFrame
        || window.oRequestAnimationFrame
        || window.msRequestAnimationFrame
        || function(/* function */callback, /* DOMElement */element) {
            window.setTimeout(callback, 1000 / ANIMATION_FPS);
        };
    })();

    return Scene;
})();

/**
 * PararaEhon.Page.
 */
PararaEhon.Page = (function() {

    /**
     * Constructor.
     */
    var Page = function(canvas, page, width, height) {
        this.canvas = canvas;
        this.page = page;
        this.width = width;
        this.height = height;
        this.scale = 1;
        // set actor.
        this.actor = [];
        for(var name in page) {
            if(page.hasOwnProperty(name)) {
                this.actor.push(new PararaEhon.Actor(canvas.getContext('2d'), page[name]));
            }
        }
    };

    /**
     * update.
     */
    Page.prototype.update = function(base, vector) {
        var actor;
        this.base = base;
        this.vector = vector;
        for(var i = 0; i < this.actor.length; i++) {
            actor = this.actor[i];
            if(!actor.update) continue;
            if(actor.start instanceof Array) {
                actor.start = actor.start[0];
            }
            if(!actor.complete && actor.start >= base) {
                actor.tick += 1;
            } else if(vector < 0 && actor.start < base) {
                actor.complete = false;
                actor.tick -= 3;
            }
            if(actor.tick < 0) {
                actor.tick = 0;
            }
            actor.update();
        }
    };

    /**
     * render.
     */
    Page.prototype.render = function(pageWidth, pageHeight, debug) {
        var sx, sy, sw, sh, dx, dy, dw, dh;
        var actor;
        var baseX = (pageWidth - this.width * this.scale) / 2;
        var cv;
        for(var i = 0; i < this.actor.length; i++) {
            actor = this.actor[i];
            if(!actor.loaded) continue;
            sx = 0;
            sy = 0;
            sw = actor.width;
            sh = actor.height;
            dx = baseX + actor.x * this.scale;
            dy = actor.y * this.scale;
            dw = actor.width * this.scale;
            dh = actor.height * this.scale;
            // position flexible background image.
            if(actor.fixed) {
                cv = (pageWidth - actor.width) / 2;
                if(actor.width * this.scale < pageWidth) {
                    dx = cv;
                } else {
                    sx = -cv * this.scale;
                    sw = actor.width - sx;
                    dx = 0;
                    dw = (actor.width - sx) * this.scale;
                }
            }
            actor.draw(sx, sy, sw, sh, dx, dy, dw, dh);
            if(debug) {
                actor.debug(this.base, this.vector, dx, dy, dw);
            }
        }
    };

    return Page;
})();

/**
 * PararaEhon.Actor.
 */
PararaEhon.Actor = (function() {

    /**
     * Constructor.
     */
    var Actor = function(context, object) {
        var that = this;
        // set attribute.
        for(var name in object) {
            if(object.hasOwnProperty(name)) {
                this[name] = object[name];
            }
        }
        this.context = context;
        this.loaded = false;
        // image load.
        if(this.image) {
            this.img = new Image();
            this.img.src = this.image;
            this.img.addEventListener('load', function() {
                that.loaded = true;
                that.width = that.img.naturalWidth;
                that.height = that.img.naturalHeight;
            }, false);
        }
        // regular default attribute.
        this.x = this.x ? this.x : 0;
        this.y = this.y ? this.y : 0;
        this.fixed = this.fixed ? true : false;
        this.update = this.update ? object.update.bind(this) : null;
        this.effect = this.effect ? object.effect.bind(this) : null;
        this.clock = 0;
        this.tick = 0;
        if(this.start >= 0) {
            this.complete = false;
        } else {
            this.complete = true;
        }
    };

    /**
     * draw.
     */
    Actor.prototype.draw = function(sx, sy, sw, sh, dx, dy, dw, dh) {
        if(this.complete && this.vanish) return;
        this.context.save();
        if(this.alpha >= 0) this.context.globalAlpha = this.alpha;
        this.effect && this.effect();
        this.context.drawImage(this.img, sx, sy, sw, sh, dx, dy, dw, dh);
        this.context.restore();
    };

    /**
     * effectFeedIn.
     */
    Actor.prototype.effectFeedIn = function(speed, wait) {
        if(speed === undefined) speed = 30;
        if(wait === undefined) wait = 0;
        this.alpha = this.alpha ? this.alpha : 0;
        if(this.tick <= 0) this.alpha = 0;
        if(this.tick > wait) { 
            this.alpha = (this.tick - wait) * 2 / speed;
            if(this.tick > speed + wait) this.complete = true;
        }
    };

    /**
     * debug draw attribute.
     */
    Actor.prototype.debug = function(base, vector, sx, sy, sh) {
        this.context.font = "16px monospace";
        this.context.fillStyle = "#000000";
        if(this.fixed) {
            this.context.fillText("base : " + base + ":" + vector, 0, 20);
        }
        this.context.fillText("tick : " + this.tick, sx, sy + 40);
        this.context.fillText("stat : " + this.start, sx, sy + 60);
        this.context.fillText("x    : " + this.x, sx, sy + 80);
        this.context.fillText("y    : " + this.y, sx, sy + 100);
    };

    return Actor;
})();