# [uScroll] v1.0.0

A javascript plugin that show you a custum scrollbar in different position.

Demo available here : 

## Usage

jQuery __is not necessary__ for this library. 
Include the uScroll's script and stylesheet to your page :

```html
<link rel="stylesheet" href="css/uscroll.min.css" />
<script src=js/uscroll.min.js"></script>
```

Then, bind any element with a title attribute :

```js
uScroll.bind('position', 'customBackground', showScrollbar?);
```

## 3 Options
* __position__:  Specifie the scrollbar's position. Default : `right`
* __customBackground__: Add a beautiful gradient color to the scrollbar. Default: `null`
* __showScrollbar__: Show the original scrollbar. Default: `false`

## Custom CSS class available

The uscrollbar is a `<div>` element with the class name `uscroll__custom`. Its default styles appear first in the document and can be overridden by rules that come later.

__Note:__ : You need to set the __customBackground__ option to `null` (Default value) or empty.

For example, the following code will result in a green uscrollbar:

```js
uScroll.bind();
```

```css
.uscroll__custom {
  background-color: green;
}
```

## Backgrounds available

* orange
* blue
* pink

## Exemple 

```js
uScroll.bind('top', 'blue', 'true');
```

```js
uScroll.bind('bottom');
```

## Contribute

Any contributions and/or pull requests would be welcome.

Bug fixes are greatly appreciated.

## License

uScroll is licensed under the [MIT](http://www.opensource.org/licenses/mit-license.php) license:

Copyright (C) 2017 Victor de la Fouchardiere

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

## Author
[Victor de la Fouchardière](http://www.victor-de-la-fouchardiere.fr/)
