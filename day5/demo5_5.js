function f1() {
        if (true) {
            var a = 10;
            console.log('Block: ', a);
        }
        console.log('Function: ', a);
    }
    f1();
    // even though 'a' is declared inside a block , its not block scoped, its function scoped