$(function(){    

    images_used = ["./images/gallery/1.png", "./images/gallery/2.png", "./images/gallery/3.png", "./images/gallery/4.png", "./images/gallery/5.png", "./images/gallery/6.png"]
    currentimg = 0
    $(".carousel").attr("src", images_used[currentimg])
    // moves the carousel one image to the right
    function move_right(){
        if(currentimg + 1 < images_used.length){
            currentimg++
            $(".carousel").attr("src", images_used[currentimg])
        }
    }

    // moves the carousel one image to the left
    function move_left(){
        if(currentimg - 1 < images_used.length){
            currentimg--
            $(".carousel").attr("src", images_used[currentimg])
        }
    }
    $("#move_left").on("click", move_left)
    $("#move_right").on("click", move_right)
    })