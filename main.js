function test() {
    let p = document.getElementById("i");
    let clas = ["t1", "t2"];
    let index = 0;

    setInterval(() => {
        p.className = clas[index];
        index = (index + 1) % clas.length;
    }, 1000);
}