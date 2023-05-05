(function(o){const e=o.map((o=>fetch(`https://api.github.com/users/${o}`).then((o=>{if(!o.ok)throw new Error("Ooops");return o.json()}))));return Promise.all(e)})(["luxplanjay","SofiaProtsiv","qweeqer","Maxwelllife","xWinst","AleksZhov","gsmoff"]).then(console.log).catch(console.log);
//# sourceMappingURL=without-text.ad7db75e.js.map
