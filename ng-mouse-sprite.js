/**
 * Created by olyjosh on 21/01/2017.
 */

(function () {
    'use strict';
    var isStart = false;
    var auto = false;
    var src = '';
    var cWidth = 100;
    var cHeight = 100;
    var imgWidth = 1000;
    var imgHeigth = 100;
    var loop = true;
    var noOfFrames = 10;
    var delay = 4;


    var app = angular.module('ngMouseSprite', []);
    app.service('sprite', spriteService);
    app.directive('ngaMouseSprite', function (sprite) {  // directive for animating sprite on mouse movement
        return {
            restrict: 'AE',
            link: function ($scope, element, attrs) {

                element.ready(function () {
                    if(!isStart)sprite.start(element);
                })

                element.bind('mousemove', function () {
                    if(!isStart)sprite.start(element);
                    sprite.update();

                });
            }
        };
    });

    app.directive('ngaSprite', function (sprite) {  // directive for animating sprite
        return {
            restrict: 'AE',
            link: function ($scope, element, attrs) {
                element.ready(function () {
                    auto = true;
                    sprite.start(element);
                    sprite.update();
                })
            }
        };
    });

    app.directive('ngaFrameWidth', function () {  // directive for animating sprite

        return {
            restrict: 'A',
            link: function ($scope, element, attrs) {
                cWidth = attrs.ngaFrameWidth;
            }
        };
    });

    app.directive('ngaFrameHeight', function () {  // directive for animating sprite
        return {
            restrict: 'A',
            link: function ($scope, element, attrs) {
                cHeight = attrs.ngaCanvasHeight;
            }
        };
    });

    app.directive('ngaImgWidth', function () {  // directive for animating sprite
        return {
            restrict: 'A',
            link: function ($scope, element, attrs) {
                imgWidth = attrs.ngaImgWidth;
            }
        };
    });

    app.directive('ngaImgHeight', function () {  // directive for animating sprite
        return {
            restrict: 'A',
            link: function ($scope, element, attrs) {
                imgHeigth = attrs.ngaImgHeight;
            }
        };
    });

    app.directive('ngaImgSrc', function () {  // directive for animating sprite
        return {
            restrict: 'A',
            link: function ($scope, element, attrs) {
                src = attrs.ngaImgSrc;
            }
        };
    });

    app.directive('ngaNoOfFrame', function () {  // directive for animating sprite
        return {
            restrict: 'A',
            link: function ($scope, element, attrs) {
                noOfFrames = attrs.ngaNoOfFrame;
            }
        };
    });

    app.directive('ngaFramesDelay', function () {  // directive for animating sprite
        return {
            restrict: 'A',
            link: function ($scope, element, attrs) {
                delay = attrs.ngaFramesDelay;
            }
        };
    });


    function spriteService() {
        // var self = this;
        var spr, sprImage,
            canvas;

        this.update = function () {
            spr.update()
        }


        this.start = function (element) {
            // Get canvas
            canvas = element[0];
            canvas.width = cWidth;
            canvas.height = cHeight;

            // Create sprite sheet
            sprImage = new Image();

            // Create sprite
            spr = sprite({
                context: canvas.getContext("2d"),
                width: imgWidth,
                height: imgHeigth,
                image: sprImage,
                numberOfFrames: noOfFrames,
                ticksPerFrame: delay
            });

            // Load sprite sheet
            sprImage.addEventListener("load", gameLoop);
            sprImage.src = src;
            isStart = true;
        }


        function gameLoop() {
            window.requestAnimationFrame(gameLoop);

            spr.render();
            if (auto==true)spr.update();
            // spr.update();

        }

        function sprite(options) {

            var that = {},
                frameIndex = 0,
                tickCount = 0,
                ticksPerFrame = options.ticksPerFrame || 0,
                numberOfFrames = options.numberOfFrames || 1;

            that.context = options.context;
            that.width = options.width;
            that.height = options.height;
            that.image = options.image;

            that.update = function () {

                tickCount += 1;

                if (tickCount > ticksPerFrame) {
                    tickCount = 0;

                    // If the current frame index is in range
                    if (frameIndex < numberOfFrames - 1) {
                        // Go to the next frame
                        frameIndex += 1;
                    } else {
                        frameIndex = 0;
                    }
                }
            };

            that.render = function () {
                // Clear the canvas
                that.context.clearRect(0, 0, that.width, that.height);

                // Draw the animation
                that.context.drawImage(
                    that.image,
                    frameIndex * that.width / numberOfFrames,
                    0,
                    that.width / numberOfFrames,
                    that.height,
                    0,
                    0,
                    that.width / numberOfFrames,
                    that.height);
            };

            return that;
        }

    }

})();