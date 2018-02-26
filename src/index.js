module.exports = function check(str, bracketsConfig) {
    let arr = [];
    let cutstr = '';

    arr = bracketsConfig.map(function (br) {
        return br.join('');
    });


    while (str) {
        if (cutstr !== str) {
            cutstr = str;
            for (let i = 0; i < arr.length; i++) {


                str = str.replace(arr[i], '');


            }
        } else {
            break;
        }
    }


    // console.log(bool);
    return !str;
};
