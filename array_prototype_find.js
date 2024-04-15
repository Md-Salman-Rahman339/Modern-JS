class Student {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    test() {
        console.log("Hello");
    }
    exFunction() {
        let array = [1, 2, 3];
        array.find(() => {
            this.test();
        });
    }
}
let student = new Student("Sumit", 35);
student.exFunction();
