var a = 1;
var b = 2;

function foo() {
    a++;
    a = b + 3;
}

function bar() {
    b--;
    b = a * 2;
}

ajax("http://some.url.1", foo);
ajax("http://some.url.2", bar);



// A
ajax( "..", function(..){
    // C
} );
// B



function success(data) {
    console.log(data);
}
function failure(err) {
    console.error(err);
}
ajax("http://some.url.1", success, failure);





function response(err, data) {
    // 出错？
    if (err) {
        console.error(err);
    } // 否则认为成功
    else {
        console.log(data);
    }
}
ajax("http://some.url.1", response );


var p = new Promise((resolve, reject) => {
    window.setTimeout(() => {resolve(123);}, 1000);
});

p.then((data) => {
    console.log('p success', data);
});

var p = new Promise((resolve, reject) => {
    window.setTimeout(() => {resolve(123);}, 1000);
});

p.catch((reason) => {
   // 拒绝
});




var len = arr.length;
var i = 0;

for (; i < len; ++i) {
    arr[i] = sync(arr[i]);
}


(function next(i, len, callback) {
    if (i < len) {
        async(arr[i], function (value) {
            arr[i] = value;
            next(i + 1, len, callback);
        });
    } else {
        callback();
    }
}(0, arr.length, function () {
    // All array items have processed.
}));



function* helloWorldGenerator() {
  yield 'hello';
  yield 'world';
  return 'ending';
}

var hw = helloWorldGenerator();

hw.next()
// { value: 'hello', done: false }

hw.next()
// { value: 'world', done: false }

hw.next()
// { value: 'ending', done: true }

hw.next()
// { value: undefined, done: true }
