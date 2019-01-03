/**
 * Created by jige on 2018/07/09.
 */
String.prototype.replaceAll = function (s1, s2){
    return this.replace(new RegExp(s1, 'gm'), s2);
}

/*
* 任何格式的颜色值转换成rgba
* '#000000'.colorToRgba(0.5)
* "rgba(0,0,0,0.5)"
* */
String.prototype.colorToRgba = function (alpha){
    const reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
    const that = this;
    let rgbColor = '';
    if (reg.test(that)){
        rgbColor = that.colorToRgb();
    }
    return (rgbColor || that).replace(/^(rgba|rgb|RGB)\((\d+).*?(\d+).*?(\d+).*?\)$/g, `rgba($2,$3,$4,${alpha})`);
}

/*
* RGB颜色转换为16进制
* 'rgb(255,255,0)'.colorToHex()
* "#FFFF00"
* '#f0f'.colorToHex()
* "#ff00ff"
* */
String.prototype.colorToHex = function (){
    const that = this;
    const reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
    if (/^(rgb|RGB)/.test(that)) {
        const aColor = that.replace(/(?:\(|\)|rgb|RGB)*/g, '').split(',');
        let strHex = '#';
        for (var i = 0; i < aColor.length; i++) {
            let str = '0123456789ABCDEF',
                b = '',
                a = aColor[i] % 16;
            b = str.substr(a, 1);
            a = (aColor[i] - a) / 16;
            strHex += str.substr(a, 1) + b
        }
        return strHex;
    } if (reg.test(that)) {
        const aNum = that.replace(/#/, '').split('');
        if (aNum.length === 6) {
            return that;
        } if (aNum.length === 3) {
            let numHex = '#';
            for (var i = 0; i < aNum.length; i += 1) {
                numHex += (aNum[i] + aNum[i]);
            }
            return numHex;
        }
    } else {
        return that;
    }
}
/*
* 16进制颜色转为RGB格式
* '#f0f'.colorToRgb()
"RGB(255,0,255)"
*
* */
String.prototype.colorToRgb = function () {
    const reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
    let sColor = this.toLowerCase();
    if (sColor && reg.test(sColor)) {
        if (sColor.length === 4) {
            let sColorNew = '#';
            for (var i = 1; i < 4; i += 1) {
                sColorNew += sColor.slice(i, i + 1).concat(sColor.slice(i, i + 1));
            }
            sColor = sColorNew;
        }
        // 处理六位的颜色值
        const sColorChange = [];
        for (var i = 1; i < 7; i += 2) {
            sColorChange.push(parseInt(`0x${sColor.slice(i, i + 2)}`));
        }
        return `RGB(${sColorChange.join(',')})`;
    } 
    return sColor;
}
