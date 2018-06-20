$(document).ready(function() {
    //建立currentQuiz, 儲存作答到第幾題
    var currentQuiz=null;
    //當按下按鈕後,要做的事情放在這裡面
    $("#startButton").click(function()
    { 
        //如果還沒開始作答就從這裡開始
        if(currentQuiz==null)
        {
            //設定目前作答倒第0題
            currentQuiz=0;
            //顯示題目
            $("#question").text(questions[0].question);
            //每次顯示選項前先將該區域清空（可以試著先不做這一步）
            $("#options").empty();
            //將ㄧ個一個選項內容，添加至選項區塊
            for(var x=0;x<questions[0].answers.length;x++)
            {
                $("#options").append("<input name='options' type='radio' value="+x+")>"+"<label>"+questions[0].answers[x][0]+"</label><br><br>");
            }
            //將按鈕上的文字換成Next或下一題
            $("#startButton").attr("value","Next");
        }
        else//如果已經開始作答就從這裡繼續
        {  
            
            //alert("else");
            //尋訪每個選項是否有被選取
            $.each($(":radio"),function(i,val){
                if(val.checked)
                {  
                  //alert("checked");
                  if(isNaN(questions[currentQuiz].answers[i][1]))
                  { 
                      
                      var finalResult = questions[currentQuiz].answers[i][1]
                    $("#question").text(finalAnswers[finalResult][0]);
                    $("#options").empty();
                    $("#options").append(finalAnswers[finalResult][1]+"<br><br>");
                    currentQuiz=null;
                    $("#startButton").attr("value","重新開始");
                  }
                  else
                  { 
                      //alert("next");
                      //指定下一個
                      currentQuiz=questions[currentQuiz].answers[i][1]-1;
                      //alert(currentQuiz);
                      //顯示題目
                      $("#question").text(questions[currentQuiz].question);
                      //每次顯示選項前先將該區域清空（可以試著先不做這一步）
                      $("#options").empty();
                     //將ㄧ個一個選項內容，添加至選項區塊
                      for(var x=0;x<questions[currentQuiz].answers.length;x++)
                       {
                      $("#options").append("<input name='options' type='radio' value="+x+")>"+"<label>"+questions[currentQuiz].answers[x][0]+"</label><br><br>");
                        }
                   }
                    return false;
                 }
                    
               });
         }
    });
});
    
   