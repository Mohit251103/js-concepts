// call stack , browser api, message queue from https://medium.com/front-end-weekly/javascript-event-loop-explained-4cd26af121d4

function main(){
    console.log('A');
    setTimeout(
      function exec(){ console.log('B'); }
    , 0);
    runWhileLoopForNSeconds(3);
    console.log('C');
  }
  main();
  function runWhileLoopForNSeconds(sec){
    let start = Date.now(), now = start;
    while (now - start < (sec*1000)) {
      now = Date.now();
    }
  }

  main();