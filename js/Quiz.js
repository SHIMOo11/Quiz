export class Quiz{
    constructor(ArrayOfData){
        // console.log(ArrayOfData)
        this.ArrayOfData=ArrayOfData;

        this.current=document.getElementById('current');
        this.totalAmount=document.getElementById('totalAmount');
        this.question=document.getElementById('question');
        this.rowAnswer=document.getElementById('rowAnswer');
        this.nextBtn=document.getElementById('next')

        this.nextBtn.addEventListener('click',this.nextQues.bind(this))

        this.currentQue=0;
        this.score=0;

        this.ShowQuiz()
    }


    nextQues(){
        // this.currentQue++;
        // this.ShowQuiz()
        let correstAns=this.ArrayOfData[this.currentQue].correct_answer;
        let userAnsw=document.getElementsByName('answer');
        let userAnswData=[...userAnsw].filter((e)=> {
            return e.checked
        })[0].value;
        console.log(userAnswData);
        console.log(correstAns);
        this.currentQue++;

        if(userAnswData == correstAns ){
            this.score++;
            $('#Correct').fadeIn(1000);
            $('#inCorrect').fadeOut(1000);

        }else{
            $('#inCorrect').fadeIn(1000);
            $('#Correct').fadeOut(1000);
        }

        if(this.currentQue>= this.ArrayOfData.length){

            $('#finish').fadeIn(1000);
            $('#quiz').fadeOut(1000);
            $('#score').html(this.score);
            this.tryBtn=document.getElementById('tryBtn');
            this.tryBtn.addEventListener('click',function(){
                location.reload()
            })

            
        }else{
            this.ShowQuiz()
        }









    }

ShowQuiz(){
    this.question.innerHTML=this.ArrayOfData[this.currentQue].question;
    this.current.innerHTML=this.currentQue+1;
    this.totalAmount.innerHTML=this.ArrayOfData.length;
    let correct=this.ArrayOfData[this.currentQue].correct_answer;
    let inCorrect=this.ArrayOfData[this.currentQue].incorrect_answers;
    console.log(correct);
    console.log(inCorrect);
    let allAns=[correct,...inCorrect]
    // console.log(allAns);

    let allAnsData=this.shuffle(allAns);
    var cartoona='';
    for(let i=0;i<allAnsData.length;i++){
        cartoona+=`
        <div class="form-check" >
                        <label>${allAnsData[i]}</label>
                        <input  class="form-check-input" type="radio" name="answer"  value="${allAnsData[i]}">
                        </div>
                        `
    }

    this.rowAnswer.innerHTML=cartoona;





    // console.log(this.shuffle(allAns))
    // console.log(this.ArrayOfData[this.currentQue].question)

}
shuffle(array) {
    let currentIndex = array.length,  randomIndex;
    // While there remain elements to shuffle.
    while (currentIndex != 0) {
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
      // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
    return array;
}
  // Used like so
//   var arr = [2, 11, 37, 42];
//   shuffle(arr);
//   console.log(arr);

}