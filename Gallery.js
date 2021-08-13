$(document).ready(function(){ 

    let image1 = {
        photo: "Images/Felsőörs.jpg",
        title: "Felsőörs",
        description: "Felsőörs village in Veszprém county , Balatonalmádi district . It belongs to the settlements of the Balaton Uplands, from where - at least from a part of the settlement - you can see Lake Balaton , but the locality does not have its own lake shore.",
    };
    let image2 = {
        photo: "Images/Ducks.jpg",
        title: "Ducks",
        description: "It is widespread throughout Europe , in much of Asia and North America , and is the most common duck species in the Carpathian Basin. The ancestor of the domestic duck.",
    };
    let image3 = {
        photo: "Images/Boat.jpg",
        title: "Boat",
        description: "The number of boats on Lake Balaton is estimated at around 15-20 thousand, which is much more than the officially announced number of boats.",
    };
    let image4 = {
        photo: "Images/Sunset.jpg",
        title: "Sunset",
        description: "Sunset is one of the most favourite natural attractions of many to admire from beaches, mountains, and other places, whereever it is possible",
    };
    let image5 = {
        photo: "Images/Holiday.jpg",
        title: "Holyday",
        description: "The lake in Central Europe, which lies on the border of three regions and three counties. After Budapest, it is the most important tourist center in the country.",
    };
     let image6 = {
        photo: "Images/Autumn.jpg",
        title: "Autumn",
        description: "With the arrival of autumn, the shores of Lake Balaton become quieter, and the shoreline is emptied, so that the summer atmosphere gives way to the colorful Avar from the yellowing leaves. ",
    }; 
    let image7 = {
        photo: "Images/Winter.jpg",
        title: "Winter",
        description: "The sight of the frozen Lake Balaton is not very much elsewhere in Hungary or in the whole of Central Europe.",
    }; 
    let image8 = {
    photo: "Images/Firework.jpg",
    title: "Firework",
    description: "I congratulate everyone!",
    }; 
    
    let imagesData = [image1, image2, image3, image4, image5, image6, image7, image8];
    let dataSize = imagesData.length;    

    let currentNum = 0;

    let loadCurrentNum = (Number) => {
        //$("#current-num").text(Number);
       // $("#current-num").css('background', 'rgb(180, 70, 70)');
    }

    $('.previous').click(() => {
       if(currentNum > 0) {
           currentNum--;
       } else if (currentNum <= 0){
           currentNum = dataSize-1;
       }
       loadCurrentNum(currentNum);
       addBigImage(currentNum);
    });

    $('.next').click(() => {
       if(currentNum < dataSize-1) {
           currentNum++;
       } else if (currentNum >= dataSize-1) {
        currentNum = 0;
       }
       loadCurrentNum(currentNum);
       addBigImage(currentNum);
    });
    loadCurrentNum(currentNum); 
    addBigImage(currentNum);

    function addBigImage(curNum){
        $(".imageView").empty();
        $(".imageView").append
            (`
                    <img class = "mainPic" src="${imagesData[curNum].photo}">
                    <div id = "grayContainer">
                        <h1 id="photoTitle">${imagesData[curNum].title.trim()}</h1>
                        <p id="photoDescription">${imagesData[curNum].description.trim()}</p>
                    </div>
                `)
    }

  
    imagesData.forEach((img) => {
        $('#thumbnails').append('<div class="thumbsContainer"><img class="smallBox" src="' + img.photo + '"><div class="popUpText">' + img.title + '</div></div>');
        $('.smallBox').css('border-radius', '5px');
    });

    $('#thumbnails').on('click', '.smallBox', function () {
        currentNum = $(this).index('.smallBox');
        addBigImage(currentNum);
    });

});