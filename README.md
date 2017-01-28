# ng-mouse-sprite
An angular module for manipulating sprite on mouse move among other mouse event. Also do simple sprite animation

##Usage
    install via npm
    npm install ng-mouse-sprite

    then include this in your html, ejs( or as suppose in your template, may be jade...) as follow. Please note path configuration for public files
        <script src="/ng-mouse-sprite/ng-mouse-sprite.js"></script>

    also include this as dependency in your app

        ```javascript
        angular.module('app', ['ngMouseSprite'])
        ```

    then you can use this on a canvas as follow

    ###1. to just animate Sprite
    ```html
        <div>
            <canvas nga-sprite nga-img-src="/img/prite-animation.png"></canvas>
        </div>
     ```

    ###2. to animating sprite on mouse movement over the canvas
        ```html
        <div>
            <canvas nga-sprite nga-img-src="/img/sprite-animation.png"></canvas>
        </div>
        ```


    ###optional attributes for configurations are
    ```
        `nga-img-src`     // This is the sprite image source. Check how to create a sprite here
        `nga-frame-width`     The width of the frame, default is 100.
        `nga-frame-height`    The height of the frame, default is 100. It is advisable to make this to be the same height as image height
        `nga-img-height`      This is the sprite image height. Default is 100.
        `nga-img-width`       This is the sprite image width. Default is 1000.
        `ngaNoOfFrame`        This is the number of frame in a sprite sheet. You can specify a less frame than images you have to cut the frames short. This is calculated by default as floor function of nga-img-width/nga-frame-width
        `ngaFramesDelay`      This is the delay in between frames. The lesser the delay, the faster the frames animations. The default is 3
    ```


    ### Sample usage with options
        ```html
        <canvas nga-mouse-sprite=""
            nga-img-src="/img/sprite-animation.png"
            nga-frame-width="100"
            nga-frame-height="100"
            nga-img-height="100"
            nga-img-width="1000"
            nga-no-of-frame="10"
            nga-frames-delay="3">
        </canvas>
        ```


    Please check how to create a sprite sheet image here + [https://www.codeandweb.com/texturepacker/tutorials/how-to-create-a-sprite-sheet](here)



All issues and pull request should be submitted to [ng-mouse-sprite](https://github.com/olyjosh/ng-mouse-sprite)

## Author
### Joshua Aroke (Olyjosh)

Inspired by javascript work here
+ [http://www.williammalone.com/articles/create-html5-canvas-javascript-sprite-animation/](http://www.williammalone.com/articles/create-html5-canvas-javascript-sprite-animation/)



```
MIT License

Copyright (c) 2017 olyjosh

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

