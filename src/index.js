import './assets/css/style.css'
import './assets/css/font.css'
import printMe from './print.js';
import { cube } from './math.js';

function create(){
    const element = document.createElement('div');
    element.innerText = 'haha my test'+ cube(5);

    const btn = document.createElement('button');
    btn.innerHTML = 'Click me and check the console';
    btn.onclick = printMe;

    element.appendChild(btn);
    return element;
}
document.body.appendChild(create());
$(function () {
    const myChart = echarts.init(document.querySelector('.echarts'));
    const option = {
        xAxis : [
            {
                type : 'category',
                data : ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月']
            }
        ],
        yAxis : [
            {
                type : 'value'
            }
        ],
        series : [
            {
                name:'蒸发量',
                type:'bar',
                data:[2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3]
            },
            {
                name:'降水量',
                type:'bar',
                data:[2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3],
                markPoint : {
                    data : [
                        {name : '年最高', value : 182.2, xAxis: 7, yAxis: 183, symbolSize:18},
                        {name : '年最低', value : 2.3, xAxis: 11, yAxis: 3}
                    ]
                }
            }
        ]
    };
    myChart.setOption(option)

})
