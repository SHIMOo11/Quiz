// https://opentdb.com/api.php?amount=10&category=21&type=multiple


// import {Quiz} from "./quiz.js"
// let myQuiz= new Quiz();

import { Quiz } from "./Quiz.js";
class Setting{
    constructor()
    {
        // https://opentdb.com/api.php?amount=10&category=17&difficulty=medium&type=multiple
    this.category=document.getElementById('category');
    this.difficulty=document.getElementsByName('difficulty')
    this.numOfQuestions=document.getElementById('numOfQuestions')
    this.startBtn=document.getElementById('startBtn')
    this.startBtn.addEventListener('click',this.getUserData.bind(this))
    }
    
    
    getUserData()
    {
    let userCategory= this.category.value;
    let numOfQuestions= this.numOfQuestions.value;
    let difficultyOf=[...this.difficulty].filter((e)=> {
        return e.checked
    })[0].value;
    
    
    console.log(numOfQuestions );
    console.log(userCategory );
    console.log(difficultyOf );


    let URL=`https://opentdb.com/api.php?amount=${numOfQuestions}&category=${userCategory}&difficulty=${difficultyOf}&type=multiple`
    // console.log(URL)
    this.callApi(URL)
    }

    async callApi(newUrl){
        let response=await fetch(newUrl);
        let allData=await response.json();
        console.log(allData.results);
        // import { Quiz } from "./Quiz.js";
        let myQuiz=new Quiz(allData.results);

        $('#setting').fadeOut(1000);
        $('#quiz').fadeIn(1000);
    }





    
    }


























    let set=new Setting();