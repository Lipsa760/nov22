let str = "I am lipsa"
let s="lucky"
for (let i = 0; ; i++){
    let s1 = str.replace("lipsa", s);
    if (str == s1) {
        console.log(s1)
        break
    }
    str = s1;   
}
