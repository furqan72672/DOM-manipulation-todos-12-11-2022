function f1() {
    console.log("f1");
    f2();
}
function f2() {
    console.log("f2");
    f3();
}
function f3() {
    console.log("f3");
}

f1();