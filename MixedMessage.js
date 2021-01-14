// my code will go here
// If program is being run - a random message should be generated. The message should be made of three different parts
// I choose to make it give you inspiration quotes

// could make a function for each part, roll the dice, make a switch function to determine and push

const sentgen = ['I will become a factory function :)']

const timegen = () => {
    let time = ['Today', 'Tomorrow'] //, 'An eternity later', 'This week', 'This year']
    let picktime = time[Math.floor(Math.random()*time.length)]
    console.log(picktime)
  
    
const subject = () => {
    let subject = ['you', 'mankind', 'life']
    let picksubject = time[Math.floor(Math.random()*subject.length)]
    console.log(picksubject)
}

const action = () => {
    let action = []
}


timegen();
timegen();
timegen();

/*
    switch(picktime) {
        case time[0]:
        case time[1]:
            let option = Math.floor(Math.random()*3);
            console.log('Generated option is ' + option)
            if (option === 0) {
                console.log('you')
            } else if (option === 1) {
                console.log('mankind')
            } else {
                console.log('life')
            }
            //push
            break;

        default:
            console.log('Something else was found')
    }
}
*/