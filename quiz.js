const correctAnswers = ['B', 'C', 'C', 'C', 'D'];
const form = document.querySelector('.quiz-form');
const result = document.querySelector('.result');

form.addEventListener('submit', e => {
    e.preventDefault(); //prevents from refreshing the page

    let score = 0;
    const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value, form.q5.value]; //here we are taking the value of the options from each ques

    //check answers
    userAnswers.forEach((answer, index) => {
        if(answer === correctAnswers[index]){
            score += 20;
        }
    }); //answer is the actual value and index is for above array to check it with right answers
    
//console.log(score);
//show result on page

scrollTo(0,0); //as we will click submit it will take us to 0,0 coordinates

result.classList.remove('d-none');

let output = 0;
const timer = setInterval(() => {
result.querySelector('span').textContent = `${output}%`;
if(output === score){
    clearInterval(timer);
}
else{
    output++;
}
}, 10);
 
});

//alert('i gave it somewhat look like google form');