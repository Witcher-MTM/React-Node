class People{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
}
function GetPeople(){
    let people = [new People("Daniel",27),new People("Elon Mask",48),new People("Gregoriy",3),new People("Tignari",8),new People("Neighbour",11)];
    return people;
}

module.exports = {
    GetPeople
}