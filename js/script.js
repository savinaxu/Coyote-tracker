$(function () {

    //map function
    function initialize() {
        let map = new google.maps.Map(document.getElementById('map_library'), {
            zoom: 14,
            center: new google.maps.LatLng(37.787836, -122.410548),
            mapTypeId: google.maps.MapTypeId.ROADMAP
        });

        let locations = [{
            position: new google.maps.LatLng(37.786245, -122.399378)
        },
        {
            position: new google.maps.LatLng(37.792225, -122.399002)
        },
        {
            position: new google.maps.LatLng(37.799131, -122.416619)
        },
        {
            position: new google.maps.LatLng(37.794682, -122.401745)
        },
        {
            position: new google.maps.LatLng(37.787665, -122.407080)
        },
        {
            position: new google.maps.LatLng(37.781458, -122.417009)
        }
    ]

        let marker, i;
        let markerUrl = "../images/40px_coyote_illustration_red_border.png"
        let infoUrl = "../images/150x160px_coyote_illustration_1.png"
        let infowindow = new google.maps.InfoWindow();

        for (i = 0; i < locations.length; i++) {
                marker = new google.maps.Marker({
                position: locations[i].position,
                map: map,
                icon: markerUrl
            });

            google.maps.event.addListener(marker, 'click', (function (marker, i) {
                return function () {

                    var html = '<img src="' + infoUrl + '" style="width: 150px; height: 160px;">';

                    infowindow.setContent(html);
                    infowindow.open(map, marker);
                }
            })(marker, i));
        }
    }
    initialize();

    //album filter function
    let albumPics = [{
            url: "../images/172x180px_coyote7.jpg",
            tag: "spring"
        },

        {
            url: "../images/172x180px_coyote2.jpg",
            tag: "winter"
        },

        {
            url: "../images/172x180px_coyote4.jpeg",
            tag: "winter"
        },

        {
            url: "../images/172x180px_coyote8.jpg",
            tag: "summer"
        },

        {
            url: "../images/172x180px_coyote9.jpg",
            tag: "fall"
        },

        {
            url: "../images/172x180px_coyote1.jpg",
            tag: "winter"
        },

        {
            url: "../images/172x180px_coyote3.jpg",
            tag: "winter"
        },

        {
            url: "../images/172x180px_coyote5.jpg",
            tag: "winter"
        }
    ]

    $(".filter-btn").click(function () {
        $(".album-pic").empty()
        let val = $(this).attr("data-value")
        if (val === "all") {
            albumPics.forEach(function (el) {
                let imgUrl = el.url
                let imgTag = el.tag
                let imgDiv = $("<img class='album-img'>")
                imgDiv.attr("value", imgTag)
                imgDiv.attr("src", imgUrl)
                $(".album-pic").append(imgDiv)
            })
        } else {
            albumPics.forEach(function (el) {
                let imgTag = el.tag
                let imgUrl = el.url
                if (val === imgTag) {
                    let imgDiv = $("<img class='album-img'>")
                    imgDiv.attr("value", imgTag)
                    imgDiv.attr("src", imgUrl)
                    $(".album-pic").append(imgDiv)
                }
            })
        }
    })

    // active button color

    $(".filter-btn").click(function() {
        $(".filter-btn").removeClass("filter-active")
        if (!$(this).hasClass("filter-active")) {
            $(this).addClass("filter-active")
        }
    })
})