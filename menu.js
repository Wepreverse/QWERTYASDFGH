var btn = document.querySelector('.btn')
		var div = document.querySelector('.menu_wrap')
		var ul  = document.querySelector('.menu')
		var body= document.querySelector('body')

		btn.onclick = function(){
			div.style.left=0
		}
		div.onclick = function(){
			div.style.left= '-80%'
		}
		var links=[{name:' Главная',href: 'index.html'},{name:'Обзоры', href:'index2.html'},{name:'History', href:'index3.html'},{name:'Кто такой ГИК?', href:'index4.html'}, {name: 'Сравнение', href: 'donate.html'}]
		for(var i= 0; i<links.length; i++){
			var li = document.createElement('li');
			ul.appendChild(li);
			var a  = document.createElement('a');
			li.appendChild(a);
			a.innerHTML = links[i].name;
			a.href      = links[i].href;
			li.classList.add('menu-item')
		}
