export default ()=>{
    let map; 
    const label = {
        text: "VM Forest Hills", 
        color:'red', 
        fontSize:'14px', 
        fontWeight: '500'
    };
    const icon = {
        url: "http://maps.google.com/mapfiles/ms/icons/red-dot.png",
        labelOrigin: { x: 75, y: 20 },
    }
    const location = { lat: 40.72403331545747, lng: -73.84522598280076 }; 
    map = new google.maps.Map(document.querySelector(".g-map"), {
        center: location,
        zoom: 16,
        mapTypeId: google.maps.MapTypeId.ROADVIEW
    });
    const marker = new google.maps.Marker({
            position: location,
            map: map,
            icon: icon,
            label: label
        }); 
}