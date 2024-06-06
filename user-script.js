// Copyright 2023 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

function addButtonStyle(){
	var styles = `
		.cbtn {
		  position: absolute;
		  font: bold 11px Arial;
		  text-decoration: none;
		  background-color: #FF0000;
		  color: #FFFFFF;
		  padding: 2px 6px 2px 6px;
		  border-top: 1px solid #CCCCCC;
		  border-right: 1px solid #333333;
		  border-bottom: 1px solid #333333;
		  border-left: 1px solid #CCCCCC;
		  z-index : 9999;
		}
	`;

	var styleSheet = document.createElement("style");
	styleSheet.innerText = styles;
	document.head.appendChild(styleSheet);
}

function getVideoInfo(){
	var videoTags = document.getElementsByTagName('video');
	for( var i = 0; i < videoTags.length; i++ ){
		if(videoTags.item(i).currentSrc.indexOf('.mp4') > -1){
			//alert("1");
			//var parent1 = videoTags.item(i).parentNode;
			//var parent2 = parent1.parentNode;
			
			var origin = videoTags.item(i);
			var a = document.createElement('a');
			var linkText = document.createTextNode("Video Download (Cloudflare = Save as)");
			a.appendChild(linkText);
			a.className = "cbtn";
			a.title = "Video Download (Cloudflare = Save as)";
			a.href = videoTags.item(i).currentSrc;
			//a.href = "#";
			a.setAttribute('download', '000.mp4');
			a.setAttribute('type', 'video/mp4');
			a.setAttribute('target', '_blank');
			//a.setAttribute('onclick', 'download("'+videoTags.item(i).currentSrc+'", "000.mp4");');
			
			//var iframe = document.createElement("iframe");
			//iframe.style.display = "none";
			//iframe.src = videoTags.item(i).currentSrc;
			
			//alert("11");
			//var stage = 0;
			document.body.insertBefore(a, document.body.firstChild);
			//try { var parent1 = origin.parentNode; parent1.prepend(a); } catch { } finally { clearInterval(timerId); }
			//try { parent1.append(a); } catch { } finally { clearInterval(timerId); }
			//parent = parent.parentNode;
			//try { var parent2 = origin.parentNode.parentNode; parent2.prepend(a); } catch { } finally { stage=1; }
			//try { parent2.append(a); } catch { } finally { clearInterval(timerId); }
			
			//try { parent2.append(iframe); } catch { } finally { }
			
			//insertButton(1, a);
			//insertButton(2, a);
			
			addButtonStyle();
			//alert(videoTags.item(i).currentSrc);
			clearInterval(timerId);
			
		}
	}
}

/*
function insertButton(var stage, var tag){
	var videoTags = document.getElementsByTagName('video');
	for( var i = 0; i < videoTags.length; i++ ){
		if(videoTags.item(i).currentSrc.indexOf('.mp4') > -1){
			var origin = videoTags.item(i);
			var parents = origin.parentNode;
			for( var i = 1; i < stage; i++){
				parents = parents.parentNode;
			}
			parents.prepend(tag);
		}
	}
}
*/

function getVideoInfo1(){
	var videoTags = document.getElementsByTagName('video');
	for( var i = 0; i < videoTags.length; i++ ){
		if(videoTags.item(i).currentSrc.indexOf('.mp4') > -1){
			//alert("1");
			//var parent1 = videoTags.item(i).parentNode;
			//var parent2 = parent1.parentNode;
			
			var origin = videoTags.item(i);
			var a = document.createElement('a');
			var linkText = document.createTextNode("Video Download");
			a.appendChild(linkText);
			a.className = "cbtn";
			a.title = "Video Download";
			a.href = videoTags.item(i).currentSrc;
			//a.href = "#";
			a.setAttribute('download', '000.mp4');
			a.setAttribute('type', 'video/mp4');
			a.setAttribute('target', '_blank');
			//a.setAttribute('onclick', 'download("'+videoTags.item(i).currentSrc+'", "000.mp4");');
			
			//var iframe = document.createElement("iframe");
			//iframe.style.display = "none";
			//iframe.src = videoTags.item(i).currentSrc;
			
			//alert("11");
			//var stage = 0;
			//document.body.insertBefore(a, document.body.firstChild);
			try { var parent1 = origin.parentNode; parent1.prepend(a); } catch { } finally { clearInterval(timerId1); }
			//try { parent1.append(a); } catch { } finally { clearInterval(timerId); }
			//parent = parent.parentNode;
			//try { var parent2 = origin.parentNode.parentNode; parent2.prepend(a); } catch { } finally { stage=1; }
			//try { parent2.append(a); } catch { } finally { clearInterval(timerId); }
			
			//try { parent2.append(iframe); } catch { } finally { }
			
			//insertButton(1, a);
			//insertButton(2, a);
			
			addButtonStyle();
			//alert(videoTags.item(i).currentSrc);
			//clearInterval(timerId);
			
		}
	}
}

function getVideoInfo2(){
	var videoTags = document.getElementsByTagName('video');
	for( var i = 0; i < videoTags.length; i++ ){
		if(videoTags.item(i).currentSrc.indexOf('.mp4') > -1){
			//alert("1");
			//var parent1 = videoTags.item(i).parentNode;
			//var parent2 = parent1.parentNode;
			
			var origin = videoTags.item(i);
			var a = document.createElement('a');
			var linkText = document.createTextNode("Video Download (Cloudflare = Save as)");
			a.appendChild(linkText);
			a.className = "cbtn";
			a.title = "Video Download (Cloudflare = Save as)";
			a.href = videoTags.item(i).currentSrc;
			//a.href = "#";
			a.setAttribute('download', '000.mp4');
			a.setAttribute('type', 'video/mp4');
			a.setAttribute('target', '_blank');
			//a.setAttribute('onclick', 'download("'+videoTags.item(i).currentSrc+'", "000.mp4");');
			
			//var iframe = document.createElement("iframe");
			//iframe.style.display = "none";
			//iframe.src = videoTags.item(i).currentSrc;
			
			//alert("11");
			//var stage = 0;
			//try { var parent1 = origin.parentNode; parent1.prepend(a); } catch { } finally { stage=1; }
			//try { parent1.append(a); } catch { } finally { clearInterval(timerId); }
			//parent = parent.parentNode;
			try { var parent2 = origin.parentNode.parentNode; parent2.prepend(a); } catch { } finally { clearInterval(timerId2); }
			//try { parent2.append(a); } catch { } finally { clearInterval(timerId); }
			
			//try { parent2.append(iframe); } catch { } finally { }
			
			//insertButton(1, a);
			//insertButton(2, a);
			
			addButtonStyle();
			//alert(videoTags.item(i).currentSrc);
			//clearInterval(timerId2);
			
		}
	}
}

document.addEventListener("DOMContentLoaded", function(){
	// Handler when the DOM is fully loaded
	//alert("hello2");
	//let timerId = setInterval(getVideoInfo, 1000);
});

function allowRightClick(){
	document.body.oncontextmenu=null;
	window.oncontextmenu=null;
	javascript:void(document.oncontextmenu=null);
	var elements = document.getElementsByTagName("*");
	for(var id = 0; id < elements.length; ++id) { elements[id].oncontextmenu = null; }
}

allowRightClick();

window.addEventListener("contextmenu", 
  function(e){
     e.stopPropagation()
}, true);

//alert("Video Downloader on Cloud Flare Working Now...");
let timerId = setInterval(getVideoInfo, 1000);
let timerId1 = setInterval(getVideoInfo1, 1000);
let timerId2 = setInterval(getVideoInfo2, 1000);