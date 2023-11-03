// alert(111111);

// var point =90;
// if(point>=80){
//   console.log("素晴らしい、おめでとう");
//   } else  {
//     console.log("もっと頑張りましょう")
//   }


// 自分の選択
// $(function () {
  let janken_r  =["グー","チョキ","パー"]
  $(".gu").on("click", function(){
    let janken_r  = 0;  
    console.log("0")
  });
  $(".cyoki").on("click", function(){
    let janken_r  = 1;  
    console.log("1")
    });
  $(".pa").on("click", function(){
  let janken_r  = 2;  
  console.log("2")
  });
// });

$(function () {
  $(".js-sub-img img").on("click", function () {
    // メイン画像に切り替えるimgのsrc取得
    img = $(this).attr("src");
    // currentクラス付け替え(枠線などを変えたい時に)
    $(".js-sub-img li").removeClass("current");
    $(this).parent().addClass("current");
//     // fadeOutできたらsrc変更してfadeIn
    $(".js-main-img img")
    .fadeOut(500, function () {
      $(".js-main-img img")
        .attr("src", img)
        .on("load", function () {
          $(this).fadeIn(500);
      });
    });
  });
});



// $("h4").on("click", function(){
//   let janken  = ["グー","チョキ","パー"]
//   let janken_r  =Math.floor(Math.random()*3);
//     console.log(janken_r,"ランダムな数字の箱");
//     if  (janken_r ===0){
//       console.log("グー");
//       $("h4").html("グー")
//     } else  if  (janken_r ===1){
//       console.log("チョキ");
//       $("h4").html("チョキ")
//     } else  if  (janken_r ===2){
//       console.log("パー");
//       $("h4").html("パー")
//     }
//   })

// $("h3").on("click", function(){
//     var random  = Math.floor(Math.random() *3);
//     console.log(random,"ランダムな数字の箱");
//     if  (random === 0)  {
//       console.log("グー");
//       $("h3").html("グー(`･ω･´)b");
//     } else  if(random === 1){
//       console.log("チョキ");
//       $("h3").html("チョキ(*'▽')");
//     } else  if(random === 2){
//       console.log("パー");
//       $("h3").html("パー( ﾟДﾟ)");
//     } 
  







//   let janken  = ["グー","チョキ","パー"]
//   let janken_r  =Math.floor(Math.random()*3);
//     console.log(janken_r,"ランダムな数字の箱");
//     if  (janken_r ===0){
//       console.log("グー");
//       $("h3").html("グー✊")
//     } else  if  (janken_r ===1){
//       console.log("チョキ");
//       $("h3").html("チョキ✌")
//     } else  if  (janken_r ===2){
//       console.log("パー");
//       $("h3").html("パー✋")
//     }


    
    // あいての選択
  $("h3").on("click", function(){
  let p_janken  =["グー","チョキ","パー"];
  let p_janken_r  =Math.floor(Math.random()*3);

    console.log(p_janken_r,"ランダムな数字の箱");
  if  (p_janken_r === 0)  {
    console.log("グー");
    $("h3").html("グー✊");
  } else  if(p_janken_r === 1){
    console.log("チョキ");
    $("h3").html("チョキ✌");
  } else  if(p_janken_r === 2){
    console.log("パー");
    $("h3").html("パー✋");
  } 
  
  if(janken_r === p_janken_r){
      Result_end="あいこです";
      $("h2").html("あいこ👏");
    } else  if(p_janken_r ===0  &&  janken_r  ===1){
      Result_end  ="あなたの【負け】";
      $("h2").html("負け😢");
    } else  if(p_janken_r ===1  &&  janken_r  ===2){
      Result_end  ="あなたの【負け】";
      $("h2").html("負け😢");
    } else if(p_janken_r === 2 && janken_r === 0) {
      Result_end = "あなたの【負け】";
      $("h2").html("負け😢");
    }else {
      Result_end = "あなたの【勝ち】";
      $("h2").html("勝ち🎉");
    }
    // この下は消さない};
  
  });


  // var random  = Math.floor(Math.random() *3);
  // console.log(random,"ランダムな数字の箱");
  // if  (random === 0)  {
  //   console.log("勝ち");
  //   $("h2").html("勝ち");
  // } else  if(random === 1){
  //   console.log("あいこ");
  //   $("h2").html("あいこ");
  // } else  if(random === 2){
  //   console.log("負け");
  //   $("h2").html("負け");
  // }