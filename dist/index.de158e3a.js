let html = document.querySelector('#demo');
let style = document.querySelector('style');
let str = `
/*你好，我是小张
*接下来我演示一下我的前端功底
*首先我要准备一个div
我要加的样式是*/
#div1{
    border: 1px solid red;
    width : 400px;
    height : 400px;
}
/*接下来把div变成一个圆圈
*注意看好了
*首先把div变成一个圆
*/
#div1{
    border-radius: 50%;
    box-shadow: 0 0 3px rgb(0,0,0,0.5);
    border: none;
}
/*
* 八卦是阴阳形成的
*一黑一白
*/
#div1{
    background: linear-gradient(90deg, rgba(255,255,255,1)
     0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);
}
/*
*加两个神秘小球
*/
#div1::before{
width:200px;
height:200px;
tpo:0;
left:50%;
transform: translateX(-50%);
background-color:#000;
border-radius:50%;
background: radial-gradient(circle,rgba(255,255,255,1)0%,
rgba(255,255,255,1)25%, rgba(0,0,0,1) 25%,rgba(0,0,0,1)100%);
}
#div1::after{
    width:200px;
    height:200px;
    bottom:0;
    left:50%;
    transform: translateX(-50%);
    background-color:#fff;
    border-radius:50%;
    background: radial-gradient(circle,rgba(255,255,255,1)0%,
rgba(255,255,255,1)25%, rgba(0,0,0,1) 25%,rgba(0,0,0,1)100%);
    }
`;
let str2 = '';
let n = 0;
let step = ()=>{
    setTimeout(()=>{
        // 如果是回车就替换
        //如果不是回车就照搬
        if (str[n] === '\n') str2 += '<br>';
        else if (str[n] === ' ') str2 += '&nbsp;';
        else str2 += str[n];
        html.innerHTML = str2;
        style.innerHTML = str.substring(0, n);
        if (n < str.length - 1) {
            n += 1;
            step();
        }
    }, 1);
};
step() // 1 => 2
;

//# sourceMappingURL=index.de158e3a.js.map
