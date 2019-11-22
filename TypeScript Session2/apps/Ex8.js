function shownumbers(a) {
    var b = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        b[_i - 1] = arguments[_i];
    }
    console.log('a=' + a);
    console.log('b=' + b);
}
shownumbers(1, 2);
shownumbers(11, 2, 3, 4, 5);
