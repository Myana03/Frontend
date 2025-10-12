    var a = 10;
    let b = 20;
    const c = 30;
    console.log('Global Scope', a, b, c);
    function Test() {
        var a = 100;
        let b = 200;
        const c = 300;
        console.log('Function Scope', a, b, c);
        if (true) {
            var a = 10000;
            let b = 20000;
            const c = 30000;
            console.log('Block Scope', a, b, c);
        }
    }
    Test();