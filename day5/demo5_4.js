   // Global vs Function
    var a = 10;
    let b = 20;
    const c = 30;

    function f1() {
        var d = 40;
        console.log('f1 starts...')
        console.log(a, b, c);
        console.log(d)
        console.log('f1 ends...')
    }
    function f2() {
        console.log('f2 starts...')
        console.log(a, b, c);
        // console.log(d) No
        console.log('f2 ends...')
    }
    f1();
    f2();