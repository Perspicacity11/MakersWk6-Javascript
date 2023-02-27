console.log('1. The programme starts');

setTimeout(() => {
    console.log('4. The timer is lapsed, this callback function is now called');
}, 2000);

console.log('2. The timer has started, and the callback function registered to be called later');

console.log('3. The rest of the programme below (immediate tasks) will keep running immediately');