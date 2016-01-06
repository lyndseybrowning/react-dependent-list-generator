(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var multiplyObj = {
  multiply: function multiply(x, y) {
    return x * y;
  },
  showX: function showX() {
    return "Lyndsey";
  },
  doY: function doY() {
    return "you are...";
  },
  doZ: function doZ() {
    return "my name is " + this.showX();
  }
};

exports.default = multiplyObj;

},{}],2:[function(require,module,exports){
'use strict';

var _helpers = require('./helpers');

var _helpers2 = _interopRequireDefault(_helpers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

console.log(_helpers2.default.multiply(1, 2));
console.log(_helpers2.default.showX());

var myName = 'Lyndsey';

console.log(myName);
console.log(_helpers2.default.doY());
console.log(_helpers2.default.doZ());

},{"./helpers":1}]},{},[2])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJqc1xcaGVscGVycy5qcyIsImpzXFxtYWluLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUNBQSxJQUFJLFdBQVcsR0FBRztBQUVoQixVQUFRLG9CQUFDLENBQUMsRUFBQyxDQUFDLEVBQUU7QUFDWixXQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7R0FDZDtBQUVELE9BQUssbUJBQUc7QUFDTixXQUFPLFNBQVMsQ0FBQztHQUNsQjtBQUVELEtBQUcsaUJBQUc7QUFDSixXQUFPLFlBQVksQ0FBQztHQUNyQjtBQUVELEtBQUcsaUJBQUc7QUFDSixXQUFPLGFBQWEsR0FBRyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7R0FDckM7Q0FFRixDQUFDOztrQkFFYSxXQUFXOzs7Ozs7Ozs7OztBQ2xCMUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxrQkFBUSxRQUFRLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDbkMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxrQkFBUSxLQUFLLEVBQUUsQ0FBQyxDQUFDOztBQUU3QixJQUFNLE1BQU0sR0FBRyxTQUFTLENBQUM7O0FBRXpCLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDcEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxrQkFBUSxHQUFHLEVBQUUsQ0FBQyxDQUFDO0FBQzNCLE9BQU8sQ0FBQyxHQUFHLENBQUMsa0JBQVEsR0FBRyxFQUFFLENBQUMsQ0FBQyIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJsZXQgbXVsdGlwbHlPYmogPSB7XHJcblxyXG4gIG11bHRpcGx5KHgseSkge1xyXG4gICAgcmV0dXJuIHggKiB5O1xyXG4gIH0sXHJcblxyXG4gIHNob3dYKCkge1xyXG4gICAgcmV0dXJuIFwiTHluZHNleVwiO1xyXG4gIH0sXHJcblxyXG4gIGRvWSgpIHtcclxuICAgIHJldHVybiBcInlvdSBhcmUuLi5cIjtcclxuICB9LFxyXG5cclxuICBkb1ooKSB7XHJcbiAgICByZXR1cm4gXCJteSBuYW1lIGlzIFwiICsgdGhpcy5zaG93WCgpO1xyXG4gIH1cclxuXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBtdWx0aXBseU9iajtcclxuIiwiaW1wb3J0IGhlbHBlcnMgZnJvbSAnLi9oZWxwZXJzJztcclxuXHJcbmNvbnNvbGUubG9nKGhlbHBlcnMubXVsdGlwbHkoMSwyKSk7XHJcbmNvbnNvbGUubG9nKGhlbHBlcnMuc2hvd1goKSk7XHJcblxyXG5jb25zdCBteU5hbWUgPSAnTHluZHNleSc7XHJcblxyXG5jb25zb2xlLmxvZyhteU5hbWUpO1xyXG5jb25zb2xlLmxvZyhoZWxwZXJzLmRvWSgpKTtcclxuY29uc29sZS5sb2coaGVscGVycy5kb1ooKSk7XHJcbiJdfQ==
