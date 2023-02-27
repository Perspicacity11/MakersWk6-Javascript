let counter = 0

const increment = () => {
    counter++;
    console.log(counter);
};

setInterval(increment, 1000)