
$.get('/account/acc_info',function(user){
        console.log(user.user.name)

        $("#na").text(user.user.name)
        $("#email").text(user.user.email)
         $("#nameP").text(user.user.name)
    })


    $("#logout").click(()=>{
        console.log("hello")
        
    })
