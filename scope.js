function sample(){
    //console.log(this)//this refers to the object with which the current funcyion is called
    console.log(this.sample.store)
}
sample()//window.sample in browser
        //global.sample in node
        a=30
        sample.store={sno:1,name:"prabha"}
        sample()
        console.log(a)