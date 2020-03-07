const sum = {
    al: {
        a: 0,
        b: 0,
    },
    calculate() {
        const result = this.all.a + this.all.b;
        console.log(result);
    },
    set a(param) {
        this.all.a = param;
        this.calculate();
    },
    set b(param) {
        this.all.b = param;
        this.calculate();
    }
};

sum.a = 3;
sum.b = 13;
