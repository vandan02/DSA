const check = (string1, string2) => {
    let name = [...string1]
    let name2 = [...string2]
    let count=0
    if (name.length != name2.length) {
        return false
    }

    else {
        for (let i = 0; i < name.length ; i++) {
            for (let j = 0; j < name2.length ; j++) {
                if (name[i] == name2[j]) {
                   count++
                }

            }
        }
        console.log(count);
        if (count == name.length) {
            return true
        }
        else {
            return false
        }
    }
}
console.log(check(name, name2))