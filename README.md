# isFileInputSupported.js v1.0
### Detects if input type=file is supported on mobile browsers (and on desktop too…)


[isFileInputSupported.js](http://viljamis.com/blog/2012/file-upload-support-on-mobile/) is a tiny JS plugin which detects if input type=file is supported or not. It's using similar code as Modernizr does, but it also includes a separate user agent regexp to check against browsers that falsely report support. There are quite many of those false positives really, at least all Windows Phone devices running OS 7.0-8.0, Android devices running OS 1.0-2.2, Kindle devices running OS 1.0-3.0 and all WebOS devices running OS 1.0-3.0.5 (Although the latter ones being quite old already).

For a demo, check out [http://viljamis.com/filetest/](http://viljamis.com/filetest/) + [http://viljamis.com/blog/2012/file-upload-support-on-mobile/](http://viljamis.com/blog/2012/file-upload-support-on-mobile/)


License
======

Licensed under the MIT license.

Copyright (c) 2011-2012 Viljami Salminen, http://viljamis.com/

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
