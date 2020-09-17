$.get("/rooms/roomdes", function(room){
    console.log(room)
    let host = room.hostname 
    let resi = room.residencyname
    let price = room.price
    let des = room.description
    let imgurl = room.imageurl
    let amm = room.ammenities

    $('#im').attr('src',`${imgurl}`)
    $('#residency').text(resi)
    $('#hostname').text(host)
    $('#des').text(des)
    $('#price').text(price)
    $('#ammenities').text(amm)
    $('#formPrice').val(price)


  


})