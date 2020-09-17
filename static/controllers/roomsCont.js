// const room = require("../../models/rooms")


function createrooms(rooms){
    // console.log("createroom")
    // console.log(rooms)
    // console.log(rooms._id) 
    
    return $(`
    <li>
    
    <time datetime="2014-07-20">
        <span class="month">${rooms.des}</span> 
    </time>
    <img alt="Independence Day" src="${rooms.imageurl}" />
    <div class="info">
        <h2 class="title">${rooms.residencyname}</h2>
        <p class="desc"}>2 baths / 2 beds</p>
        <p className="desc">${rooms.price}rs/night</p>
        <button><a href="/rooms/room?id=${rooms._id}" >Book Now !!</a></button>
    </div>
    <div></div>
    </li>
    `)
}

$(()=>{

    let list = $('#roomslist')

    $.get('/rooms/getrooms',function(rooms){
        
        var urlParams = new URLSearchParams(window.location.search);
     console.log(urlParams)
         for(room of rooms){
            //  console.log(room.price)
            if(room.price == 1000){
             list.append(createrooms(room))
            }
            else continue
            
            
            
            
            
            }
    }
    )
}
)
           
         



