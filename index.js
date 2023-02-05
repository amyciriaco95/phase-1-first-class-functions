function receivesAFunction(callback){
    return callback();
}

function returnsANamedFunction(){
   return function justaFunction(){};
}

function returnsAnAnonymousFunction(){
    return function(){};
}