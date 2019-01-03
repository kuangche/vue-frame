/**
 * Created by jige on 2016/12/8.
 * 公共工具类
 */
class Tools {
    static alt(data) {
        alert(data)
    }

    static getHash() {
        return location.hash;
    }

    static getPathname() {
        return location.pathname;
    }

    /**
    * 计算字符串长度(英文占1个字符，中文汉字占2个字符)
    * @str 任意字符串
    * @returns {number}返回字符串的长度
    */
    static getStrLen(str) {
        let len = 0;
        for (let i = 0; i < str.length; i++) {
            if (str.charCodeAt(i) > 127 || str.charCodeAt(i) === 94) {
                len += 2;
            } else {
                len++;
            }
        }
        return len;
    }

    /**
    * 判断变量是否为空
    * @param 需要判断的字段
    * 返回值为true或false
    */
    static isEmpty(param) {
        if (typeof param === 'object') {
            /* 是否为数组 */
            if ((param === null) || (Object.prototype.toString.call(param) === '[object Array]' && param.length === 0)
                || (Object.prototype.hasOwnProperty.call(param, 'length') && param.length === 0)) {
                return true;
            }
            for (const name in param) {
                if (Object.prototype.hasOwnProperty.call(param, name)) {
                    return false;
                }
            }
            return true;
        }
        return (typeof param === 'undefined' || (typeof param === 'string' && param === '')
            || (typeof param === 'number' && isNaN(param)));
    }

    /**
    * 存储localStorage
    */
    static setStore(name, content) {
        if (!name) return;
        let newContent = '';
        if (typeof content !== 'string') {
            newContent = JSON.stringify(content);
        }
        window.localStorage.setItem(name, newContent);
    }

    /**
    * 获取localStorage
    */
    static getStore(name) {
        if (!name) return;
        const store = window.localStorage.getItem(name);
        return store;
    }

    /**
    * 删除localStorage
    */
    static removeStore(name) {
        if (!name) return;
        window.localStorage.removeItem(name);
    }

    /**
    * 设置cookie
    * @name 设置的cookie名字
    * @value 设置的cookie值
    * @day 设置cookie有效时间
    */
    static setCookie(name, value, day) {
        const Days = day || 30;
        const exp = new Date();
        exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000);
        document.cookie = `${name}=${escape(value)};expires=${exp.toGMTString()}`;
    }

    /**
    * 读取 指定的cookie
    * @name 要读取的cookie名字
    */
    static getCookie(name) {
        const reg = new RegExp(`(^| )${name}=([^;]*)(;|$)`);
        const arr = document.cookie.match(reg);
        if (arr) return unescape(arr[2]);
        return null;
    }

    /**
    * 删除 指定的cookie
    * @name 要删除的cookie名字
    */
    static delCookie(name) {
        const exp = new Date();
        exp.setTime(exp.getTime() - 1);
        const cval = this.getCookie(name);
        if (cval != null) document.cookie = `${name}=${cval};expires=${exp.toGMTString()}`;
    }

    /**
    * 根据长度截取先使用字符串，超长部分追加…
    * @str 对象字符串
    * @len 目标字节长度
    * 返回值： 处理结果字符串
    */
    static cutString(str, len) {
        if (str.length * 2 <= len) {
            return str;
        }
        let strlen = 0;
        let s = '';
        for (let i = 0; i < str.length; i++) {
            s += str.charAt(i);
            if (str.charCodeAt(i) > 128) {
                strlen += 2;
                if (strlen >= len) {
                    return `${s.substring(0, s.length - 1)}...`;
                }
            } else {
                strlen += 1;
                if (strlen >= len) {
                    return `${s.substring(0, s.length - 2)}...`;
                }
            }
        }
        return s;
    }

    /**
    * @name Utils#toThousands
    * @function
    * @desc 千位符格式化。
    * @param Number 待格式化数字
    * @return String 截取后字符串
    */
    static toThousands(num = '0') {
        const re = /\d{3}$/;
        let result = '';
        while (re.test(num)) {
            result = RegExp.lastMatch + result;
            if (num !== RegExp.lastMatch) {
                result = `,${result}`;
                num = RegExp.leftContext;
            } else {
                num = '';
                break;
            }
        }
        if (num) {
            result = num + result;
        }
        return result;
    }

    /**
    * @name Utils#getType
    * @function
    * @desc 获取数据类型
    * @param obj 待检测数据
    * @return String 返回监测的数据类型
    */
    static getType(obj){
        const toString = Object.prototype.toString;
        const map = {
            '[object Boolean]': 'boolean',
            '[object Number]': 'number',
            '[object String]': 'string',
            '[object Function]': 'function',
            '[object Array]': 'array',
            '[object Date]': 'date',
            '[object RegExp]': 'regExp',
            '[object Undefined]': 'undefined',
            '[object Null]': 'null',
            '[object Object]': 'object'
        };
        if (obj instanceof Element) {
            return 'element';
        }
        return map[toString.call(obj)];
    }

    /**
    * @name Utils#deepClone
    * @function
    * @desc 深度拷贝
    * @param 待拷贝数据
    * @return 拷贝后的新的数据
    */
    static deepClone(data){
        const type = this.getType(data);
        let obj;
        if (type === 'array'){
            obj = [];
        } else if (type === 'object'){
            obj = {};
        } else {
            // 不再具有下一层次
            return data;
        }
        if (type === 'array'){
            for (let i = 0, len = data.length; i < len; i++){
                obj.push(this.deepClone(data[i]));
            }
        } else if (type === 'object'){
            for (const key in data){
                if (Object.hasOwnProperty.call(data, key)){
                    obj[key] = this.deepClone(data[key]);
                }
            }
        }
        return obj;
    }
}

export default Tools;
