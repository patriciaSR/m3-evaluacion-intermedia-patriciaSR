(window["webpackJsonpm3-evaluacion-intermedia"]=window["webpackJsonpm3-evaluacion-intermedia"]||[]).push([[0],[,,,,,,,,function(e,t,n){e.exports=n(17)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var s=n(0),a=n.n(s),r=n(7),o=n.n(r),i=(n(13),n(1)),p=n(2),m=n(4),u=n(3),c=n(5),l=(n(14),[{id:1,name:"bulbasaur",types:["poison","grass"],evolution:null,url:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"},{id:2,name:"ivysaur",types:["poison","grass"],evolution:"bulbasaur",url:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png"},{id:3,name:"venusaur",types:["poison","grass"],evolution:"ivysaur",url:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png"},{id:4,name:"charmander",types:["fire"],evolution:null,url:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png"},{id:5,name:"charmeleon",types:["fire"],evolution:"charmander",url:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png"},{id:6,name:"charizard",types:["flying","fire"],evolution:"charmeleon",url:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png"},{id:7,name:"squirtle",types:["water"],evolution:null,url:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png"},{id:8,name:"wartortle",types:["water"],evolution:"squirtle",url:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png"},{id:9,name:"blastoise",types:["water"],evolution:"wartortle",url:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png"},{id:10,name:"caterpie",types:["bug"],evolution:null,url:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10.png"}]),h=(n(15),function(e){function t(){return Object(i.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(c.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return a.a.createElement("div",{className:"pokemon-card"},a.a.createElement("img",{src:this.props.image,alt:this.props.name,className:"pokemon__img"}),a.a.createElement("h2",{className:"pokemon-card__name"},this.props.name),a.a.createElement("ul",{className:"pokemon-card__types-list"},this.props.types.map((function(e,t){return a.a.createElement("li",{className:"pokemon__type",key:t},e)}))))}}]),t}(a.a.Component)),k=(n(16),function(e){function t(){return Object(i.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(c.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return a.a.createElement("ul",{className:"pokemon__list"},this.props.pokemons.map((function(e){return a.a.createElement("li",{className:"list__pokemon",key:e.id},a.a.createElement(h,{name:e.name,image:e.url,types:e.types}))})))}}]),t}(a.a.Component)),b=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(m.a)(this,Object(u.a)(t).call(this,e))).state={pokemons:l},n}return Object(c.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return a.a.createElement("div",{className:"app"},a.a.createElement("h1",{className:"page__title"},"Mi Lista de Pokemon"),a.a.createElement(k,{pokemons:this.state.pokemons}))}}]),t}(a.a.Component);o.a.render(a.a.createElement(b,null),document.getElementById("root"))}],[[8,1,2]]]);
//# sourceMappingURL=main.e6d5454f.chunk.js.map