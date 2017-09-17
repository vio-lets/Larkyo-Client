window.stateBus ={callBacks:[],stateContainer:{}};

/*
Usage
1 Set state need to be shared from original component using setGlobalState function

2 Define a callback function which will get state from windows.stateBus(use getGlobalState) in
destination component and add handler to global callbacks array using addEventListener

*/
const globalState={
/*
>>>function
set state of any react componenet to global state container window.stateBus.stateContainer
>>>Parameter
state: a object like {'test'}
*/
setGlobalState:function(state){

     if(typeof state === 'undefined')
     throw Error('must identify an state object');

     let keys = Object.keys(state);
     var stateBus = window.stateBus;
     for(let i=0;i<keys.length;i++)
     {
       let key = keys[i];
       stateBus.stateContainer[key]=state[key];
     }
     //execute event handler
     for(var i=0;i<stateBus.callBacks.length;i++)
     {
       stateBus.callBacks[i]();
     }
},

/*
>>>function
add event hanlder to window.stateBus.callBacks array
>>>Parameter
handler: a callback function which will be called when setGlobalState is invoked
*/
addEventListener:function(handler){
  if(globalState.is('Function',handler))
  window.stateBus.callBacks.push(handler);
  else {
    throw Error('You need to add a function as handler');
  }
},

/*
>>>function
get state from global state container window.stateBus.stateContainer
>>>Parameter
name: a string parameter which identify specific name of a stateContainer
*/
getGlobalState:(name)=>{
 return window.stateBus.stateContainer[name];
}
,

/*
>>>function
verify an object type
>>>Parameter
type: expected object type
obj: object need to be verified
*/
is:(type,obj)=>{
    const clas = Object.prototype.toString.call(obj).slice(8,-1);
    return obj!=='undefined'&&obj!==null&&clas===type;
}
}

export default globalState;
