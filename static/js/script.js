const footer = document.getElementById('footer');

if (footer) {
    if (window.location.pathname.includes("index")) {
        footer.style.position = "absolute";
    }
    else {
        footer.style.position = "sticky";
    };
}
else {
    window.alert("no footer")
}

// while (true){
//     window.alert("no footer")}


