class idly{
    sponge:true;
    shape:"round";
    color:"white";
}
class human{
    body:boolean;
    head:boolean;
    hands:number;
    eyes:number;
    constructor(){
        this.body=true
        this.head=true
        this.hands=2
        this.eyes=2
    }

}
let priya=new human()
console.log(priya.eyes)