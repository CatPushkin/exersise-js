!function(){var e,t=document.querySelector("form"),n=document.querySelector("#input"),r=document.querySelector("#list"),a="tasksToDo",i=function(e){return'\n        <li>\n          <input disabled value="'.concat(e,'"/>\n          <div>\n            <button data-action="delete">Delete</button>\n          </div>\n        </li>\n        ')},o=JSON.parse(localStorage.getItem(a))||[];e=o.map((function(e){return i(e)})).join(""),r.insertAdjacentHTML("afterbegin",e),t.addEventListener("submit",(function(e){e.preventDefault(),""!==n.value&&(r.insertAdjacentHTML("afterbegin",i(n.value)),o.push(n.value),localStorage.setItem(a,JSON.stringify(o)),e.currentTarget.reset())})),r.addEventListener("click",(function(e){if("BUTTON"===e.target.nodeName){var t=e.target.closest("li"),n=t.querySelector("input").value;o.splice(o.indexOf(n),1),localStorage.setItem(a,JSON.stringify(o)),t.remove()}}))}();
//# sourceMappingURL=todolist-2.3012ae0b.js.map