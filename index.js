/*  alfa-log

usage:
    var log = require('alfa-log')('myModuleName');

usage 2:
    var log = require('alfa-log')('myModuleName', 'info', 'module loaded');

    moduleName - name of the module
    level - log, info, warn, error
    txt - message
    options - {bright:true} - add Bright to all colors

    allowed - if null, no restriction; restrict logging to items in the list
*/
'use strict';
module.exports = function (moduleName, level, txt, options) {
    
    var allowed = null;// ='e,w,i,l,t,te';  // ='';
   
    options = options || {};

    //if (location.href.indexOf('alfadebug') > -1) { allowed = true; }
    var mode;
    moduleName = moduleName ? '[' + moduleName + ']' : '';
    if (level) { mode=level.substr(0,1); if (isAllowed()) { console[level](moduleName, txt); } return; }

    var color=colorEnum();
    
    return {

        l: function(){ if(isOn('l')){ console.log.apply(this, args.apply(this, arguments)); }},
        i: function(){ if(isOn('i')){ console.log.apply(this, args.apply(this, arguments)); }},
        w: function(){ if(isOn('w')){ console.log.apply(this, args.apply(this, arguments)); }},
        e: function(){ if(isOn('e')){ console.log.apply(this, args.apply(this, arguments)); }},

        g: function(){ if(isOn('g')){ console.log.apply(this, args.apply(this, arguments)); }},
        m: function(){ if(isOn('m')){ console.log.apply(this, args.apply(this, arguments)); }},
        c: function(){ if(isOn('c')){ console.log.apply(this, args.apply(this, arguments)); }},
        
        L: function(){ if(isOn('L')){ console.log.apply(this, args.apply(this, arguments)); }},
        I: function(){ if(isOn('I')){ console.log.apply(this, args.apply(this, arguments)); }},
        W: function(){ if(isOn('W')){ console.log.apply(this, args.apply(this, arguments)); }},
        E: function(){ if(isOn('E')){ console.log.apply(this, args.apply(this, arguments)); }},
        ERR: function(){ if(isOn('ERR')){ console.log.apply(this, args.apply(this, arguments)); }},

        G: function(){ if(isOn('G')){ console.log.apply(this, args.apply(this, arguments)); }},
        M: function(){ if(isOn('M')){ console.log.apply(this, args.apply(this, arguments)); }},
        C: function(){ if(isOn('C')){ console.log.apply(this, args.apply(this, arguments)); }},

        t: function (txt) { if(isOn('t')){console.time(   moduleName ? moduleName + ' ' + txt : txt);  }},
        te:function (txt) { if(isOn('te')){console.timeEnd(moduleName ? moduleName + ' ' + txt : txt);  }}

    };
    
    function isOn(m){
        mode=m;
        if (allowed===null) return true;
        if (allowed.indexOf(mode.toLowerCase())>-1) return true;
        return false;
    }

   function args(){
       //if (!isAllowed()) return null; // --- >

        var selectedColor;

        switch (mode){
            case 'l': 
            case 'L': break;
            case 'i': 
            case 'I': selectedColor= color.FgBlue; break;
            case 'w': 
            case 'W': selectedColor= color.FgYellow; break;
            case 'e': 
            case 'E':
            case 'ERR': selectedColor= color.FgRed; break;

            case 'g': 
            case 'G': selectedColor= color.FgGreen; break;
            case 'm': 
            case 'M': selectedColor= color.FgMagenta; break;
            case 'c': 
            case 'C': selectedColor= color.FgCyan; break;
            default: console.log('[alfa-log] unknown mode:', mode); return null;
        }
        if (mode.toUpperCase()===mode || options.bright) {selectedColor = selectedColor ? selectedColor+color.Bright : color.Bright;}

        var argsArr = Array.prototype.slice.call(arguments);

        if (selectedColor) { argsArr.unshift(selectedColor +'\b'); }
        if (moduleName)    {
            if (mode==='ERR') {argsArr.unshift(color.FgRed+color.Reverse + moduleName + color.Reset);}
            else              {argsArr.unshift(color.FgGrey + moduleName + color.Reset);}
        }
        if (selectedColor) { argsArr.push(color.Reset); selectedColor = null;} 

        return argsArr;
    }
    function isAllowed(){
        if (typeof allowed === 'boolean' && allowed) return true;
        if (mode.toUpperCase()===mode) return true;
        if ('ewil'.indexOf(mode) > -1) {
            if (allowed.indexOf(mode) > -1) { return true; }
            else { return false; }
        }
        return true;
    }

    function argsT(txt) { txt = moduleName ? moduleName + ' ' + txt : txt; return txt; }

    function colorEnum(){
        return{
            FgBlack: "\x1b[30m",
            FgRed: "\x1b[31m",
            FgGreen: "\x1b[32m",
            FgYellow: "\x1b[33m",
            FgBlue: "\x1b[34m",
            FgMagenta: "\x1b[35m",
            FgCyan: "\x1b[36m",
            FgWhite: "\x1b[37m",

            FgGrey: "\x1b[30m\x1b[1m",
            
            BgBlack: "\x1b[40m",
            BgRed: "\x1b[41m",
            BgGreen: "\x1b[42m",
            BgYellow: "\x1b[43m",
            BgBlue: "\x1b[44m",
            BgMagenta: "\x1b[45m",
            BgCyan: "\x1b[46m",
            BgWhite: "\x1b[47m",

            Reset: "\x1b[0m",
            Bright: "\x1b[1m",
            Dim: "\x1b[2m",
            Underscore: "\x1b[4m",
            Blink: "\x1b[5m",
            Reverse: "\x1b[7m",
            Hidden: "\x1b[8m",
        };
    }
};