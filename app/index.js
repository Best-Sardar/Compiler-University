var variable = new Set();
var nochap = new Set();
var objects;
var chapGardi = false;
var jadval = []
var flag1 = true;


setTimeout(() => {
    $('#f1').slideDown("slow" , function(){        
    });
}, 500);




document.getElementById('sub').onclick = () => {

    $( "#f2" ).fadeIn( "slow", function() {
        // Animation complete
      });

    jadval = [];
    nochap = new Set();
    variable = new Set();

    $('#thead').empty();    
    $('#tbody').empty();
    $('#thead1').empty();    
    $('#tbody1').empty();

    $('#firstfollow').empty();
    

    let textarea = document.getElementById('inputG');

    let temp1 = textarea.value.replace(/ /g, '').split("\n");

    let temp2 = [];

    temp1.forEach(element => {
        temp2.push(element.split("->"));
    });

    let temp3 = temp2.map(x => {
        variable.add(x[0]);
        let temp3_1 = [x[0], x[1].split("|")];
        return temp3_1;
    });


    objects = temp3.map(x => {
        let obj = {
            name: x[0],
            generate: x[1],
            first: [],
            follow: ['$'],
            firststatus: 0,
            followstatus: 0
        };
        if (x[1].find(function (element) {
                return element == "&"
            }) != undefined) {
            obj.haslanda = true;
        } else {
            obj.haslanda = false
        }

        return obj;
    });


    // بدست اوردن نام وریبل ها
    let temp4 = [];
    variable.forEach(function (element) {
        temp4.push(element);
        jadval.push({
            name: element,
            have: []
        })
    });


    // console.log(jadval," jadval");


    console.log();
    console.log("%c .", 'background: grey ; display: block;');
    console.log("[[[[[[[[[[[[[[[[[[[[  START FIRST  ]]]]]]]]]]]]]]]]]]]]]]")
    console.log("%c .", 'background: grey ; display: block;');
    console.log();




    for (let i = 0; i < temp4.length; i++) {
        console.log(`%c calculate FIRST(${temp4[i]})  :) :) :) :) :) :) :) :) :) :)`, 'background: blue; color: white ; display: block; font-size:15px');
        let obj = objects.find(function (obj) {
            return obj.name == temp4[i]
        });
        nochap = new Set();
        obj.first = First(obj);

        // var ooo = objects.find(function (obj) {return obj.name == temp4[i] });        
        if (obj.haslanda && obj.generate.find(function (element) {
                return element == "&"
            }) != undefined) {
            obj.first.push("&");
        }
        console.log(obj.first, " javab");
    }



    console.log();
    console.log("%c .", 'background: grey ; display: block;');
    console.log("[[[[[[[[[[[[[[[[[[[[[  END FIRST  ]]]]]]]]]]]]]]]]]]]]]]]");
    console.log("%c .", 'background: grey ; display: block;');
    console.log();



    console.log(objects, " all node's");



    console.log();
    console.log("%c .", 'background: grey ; display: block;');
    console.log("[[[[[[[[[[[[[[[[[[[[[  START FOLLOW  ]]]]]]]]]]]]]]]]]]]]]]]");
    console.log("%c .", 'background: grey ; display: block;');
    console.log();



    for (let i = 0; i < temp4.length; i++) {
        console.log(`%c calculate FOLLOW(${temp4[i]})  :)) :)) :)) :)) :)) :))`, 'background: aqua; color: darkblue ; display: block; font-size:15px');
        let obj = objects.find(function (obj) {
            return obj.name == temp4[i]
        });
        obj.follow = removeDuplicates(Follow(obj.name));
        obj.follow.push('$')

        // var ooo = objects.find(function (obj) {return obj.name == temp4[i] });        
        // if(obj.haslanda && obj.generate.find(function (element) {return element == "&"}) != undefined){
        //     obj.first.push("&");
        // }

        console.log(removeDuplicates(obj.follow, " javab"));
    }



    console.log();
    console.log("%c .", 'background: grey ; display: block;');
    console.log("[[[[[[[[[[[[[[[[[[[[[  END FOLLOW  ]]]]]]]]]]]]]]]]]]]]]]]");
    console.log("%c .", 'background: grey ; display: block;');
    console.log(); // return objects;

    console.log(objects, " all node's");

    caljadval();
    console.log(jadval, "jadval");

    let temp5 = [];
    for (let t = 0; t < objects.length; t++) {
        for (let l = 0; l < objects[t].generate.length; l++) {
            for (let h = 0; h < objects[t].generate[l].length; h++) {
                if (variable.has(objects[t].generate[l][h]) || objects[t].generate[l][h] == '&') {

                } else {
                    temp5.push(objects[t].generate[l][h]);
                }
            }
        }
    }


    temp5.push('$') ;

    let kkk ="";
    if (true) {
        kkk = `<tr><th></th>`
        for (let i = 0; i < temp5.length; i++) {
            kkk += `<th>${temp5[i]}</th>`;
        }
        kkk += `</tr>`;
        $('#thead').append(kkk)
        flag1 = false;

        kkk = "";
        for (let u = 0; u < jadval.length; u++) {
            //console.log('u :', u);
            kkk += `<tr><td>${jadval[u].name}</td>`
            for (let j = 0; j < temp5.length; j++) {
                //console.log('j :', j);
                kkk += `<td>`;
                for (let te = 0; te < jadval[u].have.length; te++) {

                    if (jadval[u].have[te].id == temp5[j]) {                        
                        kkk += ` ${jadval[u].have[te].counter} `;
                    }

                }
                kkk += `</td>`;
            }
            kkk += `</tr>`;
        }
    }
    // console.log(kkk);
    $('#tbody').append(kkk);

    let oo = `<div class="table-responsive">`;
    let firstfollow = ``;
    for (let i = 0; i < objects.length ; i++) {        
        firstfollow += `<spam style="color:#fff6ce;font-size: 2.5em;">${objects[i].name}</spam><table class="table table-bordered table-hover" style="table-layout: fixed;text-align: center;background-color: rgb(255, 246, 206) ;"><tbody>`;
        firstfollow += `<tr><td style="width: 100px;">First</td>`;
        for (let j = 0; j < objects[i].first.length; j++) {
            firstfollow += `<td>${objects[i].first[j]}</td>`;
        }
        firstfollow +=`</tr>`;
        firstfollow += `<tr><td style="width: 100px;">Follow</td>`;
        for (let j = 0; j < objects[i].follow.length; j++) {
            firstfollow += `<td>${objects[i].follow[j]}</td>`;
        }
        firstfollow +=`</tr>`;
        firstfollow += `</tbody></table></div>`;
    }
    oo += firstfollow;
    // console.log(oo);
    $('#firstfollow').append(oo);
    oo = ""; firstfollow = "";



    // ................................................................................................
    // ................................................................................................
    // ................................................................................................

    console.log();
    console.log("%c .", 'background: grey ; display: block;');
    console.log("[[[[[[[[[[[[[[[[[[[[[  start jadval  ]]]]]]]]]]]]]]]]]]]]]]]");
    console.log("%c .", 'background: grey ; display: block;');
    console.log();

    let jadval_tajzie = [['stack'],['buffer'],['action']];
    let anbare = ['$'];
    anbare.push(jadval[0].name);
    let amal = [];

    let inputstring = document.getElementById('inputstring');
    inputstring = inputstring.value.replace(/ /g, '').split('');
    inputstring.push('$');

    console.log('inputstring :', inputstring);
    console.log('anbare :', anbare);
    // console.log('amal :', amal);
    // console.log('inputstring :', inputstring.unshift('u'));    
    // console.log('inputstring :', inputstring);
    let chekpoint = true;

    let counter1 = 0;
    while(chekpoint && counter1 < 100){
        if(anbare[0] == '$' && inputstring[0] == '$' && anbare.length == 1){
            chekpoint = false;
            console.log('>>>>>>>>>');
            console.log("finishwd");
            console.log(jadval_tajzie);
            jadval_tajzie[0].push('$');
            jadval_tajzie[1].push('$'); 
            jadval_tajzie[2].push('Accepted');
            break;
        }


        console.log('................');

        jadval_tajzie[0].push(anbare.toString()); // TODO:
        jadval_tajzie[1].push(inputstring.toString());    
        

        let topanbare = anbare.pop()
        console.log('pop form stack : ', topanbare);
        if(variable.has(topanbare)){
            var ooo = jadval.find(function (obj) {
                return obj.name == topanbare;
            });
            let numghaede;
            for (let i = 0; i < ooo.have.length; i++) {                
                let etemp = inputstring.shift();
                inputstring.unshift(etemp);
                if(ooo.have[i].id == etemp){
                    numghaede = ooo.have[i].counter;
                    break;
                }                
            }
            if(numghaede == undefined || numghaede == '') throw "reshte tajzie nmishe";

            console.log('replace whit :', numghaede);

            // var ppp = objects.find(function (obj) {
            //     return obj.name == topanbare;
            // });

            let counter = 0
            let dastor;
            let oobbjj;
            for (let i = 0; i < objects.length; i++) {
                for (let j = 0; j < objects[i].generate.length; j++) {
                    counter++;
                    if(counter == numghaede){
                        dastor = objects[i].generate[j];
                        oobbjj = objects[i];
                        break;
                    }         
                }                
            }
            if(numghaede == undefined || numghaede == '') throw "reshte tajzie nmishe";
            if(dastor == '&'){
                console.log('replace whit :', 'null');
                console.log(anbare, " : stack");
                console.log(inputstring, " : inputstring");
                jadval_tajzie[2].push(`${oobbjj.name} -> &`);
                continue;
            }
            jadval_tajzie[2].push(`${oobbjj.name} -> ${dastor}`);
            console.log('replace whit :', dastor);

            for (let i = dastor.length - 1 ; i >= 0 ; i--) {
                anbare.push(dastor[i]);                                
            }
            console.log('new stack :', anbare);

        }else{

            let etemp = inputstring.shift();
            if(topanbare == etemp){
                jadval_tajzie[2].push('');
                console.log(`reduce ${etemp}`);
            }else{throw "reshte tajzie nmishe"}
        }


        // console.log(anbare, " : stack");
        console.log(inputstring, " : inputstring");
        

        console.log('................');


        counter1++;
    }

    let mytext = "";
    for (let i = 0; i < jadval_tajzie[0].length; i++) {
        mytext += `<tr><td>${jadval_tajzie[0][i]}</td><td>${jadval_tajzie[1][i]}</td><td>${jadval_tajzie[2][i]}</td></tr>`
    }
    $('#thead1').append(mytext);



    console.log();
    console.log("%c .", 'background: grey ; display: block;');
    console.log("[[[[[[[[[[[[[[[[[[[[[  END jadval  ]]]]]]]]]]]]]]]]]]]]]]]");
    console.log("%c .", 'background: grey ; display: block;');
    console.log();


}




let First = (X) => {
    let javab = [];
    console.log(`%c ${X.name} "+++"  ${javab}`, 'color: rgb(255, 230, 91) ; display: block;'); // LOOOOOOOOOOOOOOOOOOOOOOG
    nochap.add(X.name);
    console.log(nochap, `check chap `);
    X.generate.forEach(element => {
        // console.log(javab, ` ${element}`);
        for (let i = 0; i < element.length + 1; i++) {
            // console.log(i , `${X.name}`);
            if (nochap.has(element[i])) {
                console.log(`%c chap gardi darad :) `, 'background: red ; color: white ; display: block;');
                chapGardi = true;
                return [];
                // break
            } else {
                if (variable.has(element[i])) {
                    // console.log(objects.find(function (obj) {return obj.name == element[i];}));
                    javab = javab.concat(First(objects.find(function (obj) {
                        return obj.name == element[i]
                    })));
                    var ooo = objects.find(function (obj) {
                        return obj.name == element[i]
                    });
                    if (ooo.generate.find(function (element) {
                            return element == "&"
                        }) != undefined) {
                        // console.log("oookkk");
                        continue;
                    } else {
                        if (i == element.length) {
                            console.log(`%c pushed : ${element[i]} lll`, 'color: yellowgreen ; display: block;');
                            javab.push("&");
                            break;
                        } else {
                            break;
                        }
                    }
                } else {
                    if (element[i] == "&") {
                        break
                    } else if (i == element.length) {
                        console.log(`%c pushed : &`, 'color: yellowgreen ; display: block;');
                        javab.push("&");
                    } else {
                        console.log(`%c pushed : ${element[i]}`, 'color: yellowgreen ; display: block;');
                        javab.push(element[i]);
                        break
                    }
                }
            }
        }
    });
    // console.log(javab, ` javab`);



    return javab;
}
let Follow = (X, incheckfollow) => { // X is a char of 
    let javab = [];
    let checkfollow = [].concat(incheckfollow);

    for (let i = 0; i < objects.length; i++) { // bra tamam object ha
        // console.log('i :', i);
        console.log(`%c Check variable ${objects[i].name} for Follow`, 'color: coral ; display: block;'); // LOOOOOOOG

        // if(checkfollow.find(function (element) {return element == `${X}`}) == undefined ){ // check check follow

        for (let j = 0; j < objects[i].generate.length; j++) { // bra generete har object
            // console.log('j :', j);
            if (objects[i].generate[j].includes(X)) { // check in ke aslan on X ro dare ya na
                for (let f = objects[i].generate[j].indexOf(X) + 1; f < objects[i].generate[j].length + 1; f++) { // charkh ro ye genereat
                    // console.log('f :', f);
                    console.log(`check generate : ${objects[i].generate[j]}`); // LOOOOOOG
                    if (f == objects[i].generate[j].length) {
                        if (checkfollow.find(function (element) {
                                return element == `${objects[i].name}`
                            }) == undefined) {
                            checkfollow.push(objects[i].name);
                            console.log(checkfollow, ` checkfollow`); // LOOOOOOOG                            
                            javab = javab.concat(Follow(objects[i].name, checkfollow));
                            break;
                        } else {
                            // console.log(objects[i].name , " XXX");
                            // console.log(checkfollow);
                            // console.log(checkfollow.find(function (element) {return element == `${X}`})  , "{{}}")
                        }
                    } else if (variable.has(objects[i].generate[j].charAt(f))) {
                        let ooo = objects.find(function (obj) {
                            return obj.name == objects[i].generate[j].charAt(f)
                        });
                        let ooo1 = ooo.first.filter(function (i) {
                            return i != "&"
                        });
                        if (ooo.haslanda) {
                            console.log(`%c pushed : ${ooo1}`, 'color: yellowgreen ; display: block;'); // LOOOOOOOG                           
                            javab = javab.concat(ooo1);
                            continue;
                        } else {
                            console.log(`%c pushed : ${ooo1}`, 'color: yellowgreen ; display: block;'); // LOOOOOOOG
                            javab = javab.concat(ooo1);
                            break;
                        }
                    } else {
                        console.log(`%c pushed : ${objects[i].generate[j].charAt(f)}`, 'color: yellowgreen ; display: block;'); // LOOOOOOOG
                        javab.push(objects[i].generate[j].charAt(f));
                        break;
                    }
                }
            }
        }
        // } else{
        //     console.log(X + " faild");
        // }
    }

    // console.log("||| JAVAB |||");
    // console.log(removeDuplicates(javab));
    return javab;
}
function caljadval() {
    let counter = 1;

    for (let i = 0; i < jadval.length; i++) {
        console.log(`cal jadval ${jadval[i].name}`);
        var ooo = objects.find(function (obj) {
            return obj.name == jadval[i].name
        });
        for (let j = 0; j < ooo.generate.length; j++) {
            if (ooo.generate[j] == '&') {
                for (let p = 0; p < ooo.follow.length; p++) {

                    //TODO:
                    console.log(`%c pushed : ${ooo.follow[p]}`, 'color: yellowgreen ; display: block;');
                    
                    jadval[i].have.push({
                        id: ooo.follow[p],
                        counter: counter
                    });
                }
                counter++;
            } else {
                let obj = {
                    name: '~',
                    generate: [ooo.generate[j]],
                    first: [],
                    follow: ['$'],
                    firststatus: 0,
                    followstatus: 0
                };
                console.log(`generate ${ooo.generate[j]}`);
                nochap = new Set();
                let jav = First(obj);
                console.log(jav);
                for (let t = 0; t < jav.length; t++) {
                    if (jav[t] == '&') {
                        for (let p = 0; p < ooo.follow.length; p++) {
                            jadval[i].have.push({
                                id: ooo.follow[p],
                                counter: counter
                            });
                        }
                    } else {
                        jadval[i].have.push({
                            id: jav[t],
                            counter: counter
                        })
                    }
                }
                counter++;
            }
        }
    }
}
// if(flag2 && jadval[u].have.find(function (element) {return element.id == `${temp5[j]}`}) != undefined ){
//     kkk += `<td>${jadval[u].have.find(function (element) {return element.id == `${temp5[j]}`}).counter}`;
//     flag2 = false;
// }
// if(jadval[u].have.find(function (element) {return element.id == `${temp5[j]}`}) != undefined ){
//     kkk += `-${jadval[u].have.find(function (element) { return element.id == `${temp5[j]}`}).counter }`
// }
function removeDuplicates(arr) {
    let unique_array = []
    for (let i = 0; i < arr.length; i++) {
        if (unique_array.indexOf(arr[i]) == -1) {
            unique_array.push(arr[i])
        }
    }
    return unique_array
}