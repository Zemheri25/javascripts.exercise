var mydict = [
    {"firstname" : "ömer",
     "lastname" : "zemheri",
     "from" : "Trukey",
     "age" : 27},

     {"firstname": "Bahar",
     "lastname" : "Zemheri",
     "from" : "Trukey" , 
     "age" : 28},

     {"firstname" : "şeyda",
     "lastname" : "yılmaz", 
     "from": "kırıkkale",
     "age": 24},

     {"firstname" : "nafiz",
     "lastname" : "zemheri", 
     "from": "Turkey",
     "age": 50},

     {"firstname" : "fatma",
     "lastname" : "Zemheri",
     "from" : "Turkey",
     "age": 44}
]

function arama(first, prop) {
    for (var i = 0; i < mydict.length; i++) {
        if (first == mydict[i]["firstname"]) {
            return mydict[i][prop]
        }
    }return "No one here."
}

console.log(arama("nafiz", "age"))