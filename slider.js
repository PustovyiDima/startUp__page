 /* этот код помечает картинки, для удобства разработки */
    let i = 1;



    slayder=document.getElementsByClassName('slayd')


    for(let li of slayder) {
      li.style.position = 'relative';
     // li.insertAdjacentHTML('beforeend', `<span style="position:absolute;left:0;top:0">${i}</span>`);
      i++;
    }
    



    /* конфигурация */
    let width = 270; // ширина картинки
    let count = 4; // видимое количество изображений

    console.log(document.body.clientWidth);
    count=Math.trunc(document.body.clientWidth/width)-1;
    console.log(count);


    //let count = setInterval(() => alert('tick'), 2000);
    //Math.trunc()



    let list = document.getElementById('slayders');
    let listElems = document.getElementsByClassName('slayd');

    let position = 0; // положение ленты прокрутки

   document.getElementById('prew').onclick = function() {
      // сдвиг влево
      position += width * count;
      // последнее передвижение влево может быть не на 3, а на 2 или 1 элемент
      position = Math.min(position, 0)
      list.style.marginLeft = position + 'px';
    };

    document.getElementById('next').onclick = function() {
      // сдвиг вправо
      position -= width * count;
      // последнее передвижение вправо может быть не на 3, а на 2 или 1 элемент
      position = Math.max(position, -width * (listElems.length - count));
      list.style.marginLeft = position + 'px';
    };
