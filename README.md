# Poprotate
 the main features of the extension, which are blocking pop-up ads and rotating the IP address.


![image](https://user-images.githubusercontent.com/121487559/210559513-3e90dd63-6095-4919-9cb4-25573b8540c6.png)


This extension has a browser action that allows the user to toggle the pop-up blocker on and off. When the pop-up blocker is enabled, the extension uses the webRequest API to block pop-up requests. The extension also rotates the IP address using the fetch API and a IP address API, with the interval between rotations determined by the ipRotationInterval constant.

To use this extension, save it to a file (e.g. "Poprotate.js.js") and load it into Google Chrome as an unpacked extension. For more information on how to do this, see the Google Chrome documentation on loading unpacked extensions.
https://developer.chrome.com/extensions/getstarted#manifest



