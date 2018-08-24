'use strict';

/* --- Backgrounds --- */
const backgrounds = ['img/1.jpg', `background-color: hsl(34, 53%, 82%);
background-image: repeating-linear-gradient(45deg, transparent 5px, hsla(197, 62%, 11%, 0.5) 5px, hsla(197, 62%, 11%, 0.5) 10px,                  
  hsla(5, 53%, 63%, 0) 10px, hsla(5, 53%, 63%, 0) 35px, hsla(5, 53%, 63%, 0.5) 35px, hsla(5, 53%, 63%, 0.5) 40px,
  hsla(197, 62%, 11%, 0.5) 40px, hsla(197, 62%, 11%, 0.5) 50px, hsla(197, 62%, 11%, 0) 50px, hsla(197, 62%, 11%, 0) 60px,                
  hsla(5, 53%, 63%, 0.5) 60px, hsla(5, 53%, 63%, 0.5) 70px, hsla(35, 91%, 65%, 0.5) 70px, hsla(35, 91%, 65%, 0.5) 80px,
  hsla(35, 91%, 65%, 0) 80px, hsla(35, 91%, 65%, 0) 90px, hsla(5, 53%, 63%, 0.5) 90px, hsla(5, 53%, 63%, 0.5) 110px,
  hsla(5, 53%, 63%, 0) 110px, hsla(5, 53%, 63%, 0) 120px, hsla(197, 62%, 11%, 0.5) 120px, hsla(197, 62%, 11%, 0.5) 140px       
  ),
repeating-linear-gradient(135deg, transparent 5px, hsla(197, 62%, 11%, 0.5) 5px, hsla(197, 62%, 11%, 0.5) 10px, 
  hsla(5, 53%, 63%, 0) 10px, hsla(5, 53%, 63%, 0) 35px, hsla(5, 53%, 63%, 0.5) 35px, hsla(5, 53%, 63%, 0.5) 40px,
  hsla(197, 62%, 11%, 0.5) 40px, hsla(197, 62%, 11%, 0.5) 50px, hsla(197, 62%, 11%, 0) 50px, hsla(197, 62%, 11%, 0) 60px,                
  hsla(5, 53%, 63%, 0.5) 60px, hsla(5, 53%, 63%, 0.5) 70px, hsla(35, 91%, 65%, 0.5) 70px, hsla(35, 91%, 65%, 0.5) 80px,
  hsla(35, 91%, 65%, 0) 80px, hsla(35, 91%, 65%, 0) 90px, hsla(5, 53%, 63%, 0.5) 90px, hsla(5, 53%, 63%, 0.5) 110px,
  hsla(5, 53%, 63%, 0) 110px, hsla(5, 53%, 63%, 0) 140px, hsla(197, 62%, 11%, 0.5) 140px, hsla(197, 62%, 11%, 0.5) 160px       
);`, 'img/3.jpg', `background-color:silver;
background-image: 
radial-gradient(circle at 100% 150%, silver 24%, white 25%, white 28%, silver 29%, silver 36%, white 36%, white 40%, transparent 40%, transparent),
radial-gradient(circle at 0    150%, silver 24%, white 25%, white 28%, silver 29%, silver 36%, white 36%, white 40%, transparent 40%, transparent),
radial-gradient(circle at 50%  100%, white 10%, silver 11%, silver 23%, white 24%, white 30%, silver 31%, silver 43%, white 44%, white 50%, silver 51%, silver 63%, white 64%, white 71%, transparent 71%, transparent),
radial-gradient(circle at 100% 50%, white 5%, silver 6%, silver 15%, white 16%, white 20%, silver 21%, silver 30%, white 31%, white 35%, silver 36%, silver 45%, white 46%, white 49%, transparent 50%, transparent),
radial-gradient(circle at 0    50%, white 5%, silver 6%, silver 15%, white 16%, white 20%, silver 21%, silver 30%, white 31%, white 35%, silver 36%, silver 45%, white 46%, white 49%, transparent 50%, transparent);
background-size:100px 50px;`, `background-color:#def;
background-image: radial-gradient(closest-side, transparent 98%, rgba(0,0,0,.3) 99%),
radial-gradient(closest-side, transparent 98%, rgba(0,0,0,.3) 99%);
background-size:80px 80px;
background-position:0 0, 40px 40px;`, 'img/6.jpg', 'img/y.svg', 'img/7.jpg', 'img/a.svg', `background: 
radial-gradient(circle closest-side at 60% 43%, #b03 26%, rgba(187,0,51,0) 27%),
radial-gradient(circle closest-side at 40% 43%, #b03 26%, rgba(187,0,51,0) 27%),
radial-gradient(circle closest-side at 40% 22%, #d35 45%, rgba(221,51,85,0) 46%),
radial-gradient(circle closest-side at 60% 22%, #d35 45%, rgba(221,51,85,0) 46%),
radial-gradient(circle closest-side at 50% 35%, #d35 30%, rgba(221,51,85,0) 31%),

radial-gradient(circle closest-side at 60% 43%, #b03 26%, rgba(187,0,51,0) 27%) 50px 50px,
radial-gradient(circle closest-side at 40% 43%, #b03 26%, rgba(187,0,51,0) 27%) 50px 50px,
radial-gradient(circle closest-side at 40% 22%, #d35 45%, rgba(221,51,85,0) 46%) 50px 50px,
radial-gradient(circle closest-side at 60% 22%, #d35 45%, rgba(221,51,85,0) 46%) 50px 50px,
radial-gradient(circle closest-side at 50% 35%, #d35 30%, rgba(221,51,85,0) 31%) 50px 50px;
background-color:#b03;
background-size:100px 100px;`, 'img/d.svg', `background-color: #FF7D9D;
background-size: 58px 58px;
background-position: 0px 2px, 4px 35px, 29px 31px, 33px 6px,
0px 36px, 4px 2px, 29px 6px, 33px 30px;
background-image: 
linear-gradient(335deg, #C90032 23px, transparent 23px),
linear-gradient(155deg, #C90032 23px, transparent 23px),
linear-gradient(335deg, #C90032 23px, transparent 23px),
linear-gradient(155deg, #C90032 23px, transparent 23px),

linear-gradient(335deg, #C90032 10px, transparent 10px),
linear-gradient(155deg, #C90032 10px, transparent 10px),
linear-gradient(335deg, #C90032 10px, transparent 10px),
linear-gradient(155deg, #C90032 10px, transparent 10px);`,  'img/h.svg',
`background:
linear-gradient(135deg, #708090 22px, #d9ecff 22px, #d9ecff 24px, transparent 24px, transparent 67px, #d9ecff 67px, #d9ecff 69px, transparent 69px),
linear-gradient(225deg, #708090 22px, #d9ecff 22px, #d9ecff 24px, transparent 24px, transparent 67px, #d9ecff 67px, #d9ecff 69px, transparent 69px)0 64px;
background-color:#708090;
background-size: 64px 128px`, 'img/t.svg',
'img/8.jpg', 'img/r.svg',
`background: 
radial-gradient(circle, transparent 20%, slategray 20%, slategray 80%, transparent 80%, transparent),
radial-gradient(circle, transparent 20%, slategray 20%, slategray 80%, transparent 80%, transparent) 50px 50px,
linear-gradient(#A8B1BB 8px, transparent 8px) 0 -4px,
linear-gradient(90deg, #A8B1BB 8px, transparent 8px) -4px 0;
background-color: slategray;
background-size:100px 100px, 100px 100px, 50px 50px, 50px 50px;`, 'img/i.svg',
'img/5.jpg', 'img/b.svg',
'img/4.jpg', 'img/y.svg', 
`background-color:#556;
background-image: linear-gradient(30deg, #445 12%, transparent 12.5%, transparent 87%, #445 87.5%, #445),
linear-gradient(150deg, #445 12%, transparent 12.5%, transparent 87%, #445 87.5%, #445),
linear-gradient(30deg, #445 12%, transparent 12.5%, transparent 87%, #445 87.5%, #445),
linear-gradient(150deg, #445 12%, transparent 12.5%, transparent 87%, #445 87.5%, #445),
linear-gradient(60deg, #99a 25%, transparent 25.5%, transparent 75%, #99a 75%, #99a), 
linear-gradient(60deg, #99a 25%, transparent 25.5%, transparent 75%, #99a 75%, #99a);
background-size:80px 140px;
background-position: 0 0, 0 0, 40px 70px, 40px 70px, 0 0, 40px 70px;`, 'img/p.svg', 'img/p.svg',
`background-color: #eee;
background-image: linear-gradient(45deg, black 25%, transparent 25%, transparent 75%, black 75%, black), 
linear-gradient(45deg, black 25%, transparent 25%, transparent 75%, black 75%, black);
background-size:60px 60px;
background-position:0 0, 30px 30px`, 'img/a.svg', 
'img/2.jpg', 'img/h.svg',
`background-color:white;
background-image: linear-gradient(90deg, rgba(200,0,0,.5) 50%, transparent 50%),
linear-gradient(rgba(200,0,0,.5) 50%, transparent 50%);
background-size:50px 50px;`
];

/* --- Sheet Class --- */
const sheetsListNode = document.querySelector('.sheets');
const documentFragment = document.createDocumentFragment();

for (let i = 0; i < backgrounds.length; i++) {
  let style;
  if (backgrounds[i].length === 9) {
    if (backgrounds[i][4] < 10) {
      style = `background: url(${backgrounds[i]}) no-repeat center center / cover;`;
    } else {
      style = `background: url(${backgrounds[i]}) no-repeat center center / 100px 100px; border: 2px solid #11373c;`;
    }
  } else {
    style = backgrounds[i];
  } 
  const newSheet = document.createElement('li');
  newSheet.classList.add('sheet');
  newSheet.innerHTML = `<div class="front" style="${style}"></div>
                        <div class="back"></div>`;
  documentFragment.appendChild(newSheet);
}
sheetsListNode.appendChild(documentFragment);