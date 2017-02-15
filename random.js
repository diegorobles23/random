var namespace = "http://www.w3.org/2000/svg"


// Fill in this function so that it draws something using SVG shapes!
// You need to use at least 3 different types of shape.
// Remember, for the shapes to show up on the canvas, you'll need to CALL the function.
function createFirstScene() {
    makeLine(35, 20, 150, 20, "magenta", 2, 0.3)
    makeLine(70, 20, 499, 20, "red", 2, 0.3)
    makeCircle(100, 50, 25, "cyan", 0.25) 
    makeEllipse(125, 5, 50, 25, "blue", 0.15)
}


// Fill in this function so that it draws something using SVG shapes!
// You need to use at least 3 different types of shape.
// Remember, for the shapes to show up on the canvas, you'll need to CALL the function.
function createSecondScene() {
    makeRect(13, 13, 13, 13, "magenta", 0.2)
    makeRect(15, 15, 15, 15, "magenta", 0.2)
    makeRect(17, 17, 17, 17, "magenta", 0.2)
    makeRect(19, 19, 19, 19, "magenta", 0.2)
    makeRect(21, 21, 21, 21, "magenta", 0.2)
    makePolygon("150,0 100,50 200,50", "purple", 0.15)
    makeEllipse(175, 5, 50, 5, "red", 0.15)

}



// Fill in this function so that it draws something using SVG shapes!
// You need to use at least 3 different types of shape.
// Remember, for the shapes to show up on the canvas, you'll need to CALL the function.
function createThirdScene() {
    makeEllipse(125, 75, 50, 25, "blue", 0.15)
    makeEllipse(125, 95, 65, 25, "blue", 0.15)
    makeText("Hello", 100, 50, 10, "sans-serif", "red", 0.4)
    makeImage("http://www.freeiconspng.com/uploads/orange-flower-png-5.png", 90, 50, 20, 35, 1)
}






// FILL IN THIS FUNCTION!
// This function is called whenever you press the "Go!" button.
function createRandomScene() {
    var myNumber = Math.random()
    if (myNumber < 0.33) {
        createFirstScene()
    } else if (myNumber < 0.67) {
        createSecondScene()
    } else {
        createThirdScene()
    }
}



// DO NOT EDIT ANYTHING BELOW THIS LINE!
// These are the functions you should call to
// easily create shapes in JavaScript. Feel free
// to check them out if you're curious how they
// work, but don't change them!
// <3 Ms. Squires
function makeCircle(cx, cy, r, fill, opacity) {
    var circle = document.createElementNS(namespace, "circle")
    circle.setAttribute("cx", cx)
    circle.setAttribute("cy", cy)
    circle.setAttribute("r", r)
    circle.setAttribute("fill", fill)
    circle.setAttribute("opacity", opacity)

    var canvas = document.getElementById("canvas")
    canvas.appendChild(circle)
    return circle
}

function makeRect(x, y, width, height, fill, opacity) {
    var rect = document.createElementNS(namespace, "rect")
    rect.setAttribute("x", x)
    rect.setAttribute("y", y)
    rect.setAttribute("width", width)
    rect.setAttribute("height", height)
    rect.setAttribute("fill", fill)
    rect.setAttribute("opacity", opacity)

    var canvas = document.getElementById("canvas")
    canvas.appendChild(rect)
    return rect
}

function makeEllipse(cx, cy, rx, ry, fill, opacity) {
    var ellipse = document.createElementNS(namespace, "ellipse")
    ellipse.setAttribute("cx", cx)
    ellipse.setAttribute("cy", cy)
    ellipse.setAttribute("rx", rx)
    ellipse.setAttribute("ry", ry)
    ellipse.setAttribute("fill", fill)
    ellipse.setAttribute("opacity", opacity)

    var canvas = document.getElementById("canvas")
    canvas.appendChild(ellipse)
    return ellipse
}

function makeLine(x1, y1, x2, y2, stroke, strokeWidth, opacity) {
    var line = document.createElementNS(namespace, "line")
    line.setAttribute("x1", x1)
    line.setAttribute("y1", y1)
    line.setAttribute("x2", x2)
    line.setAttribute("y2", y2)
    line.setAttribute("stroke", stroke)
    line.setAttribute("stroke-width", strokeWidth)
    line.setAttribute("opacity", opacity)

    var canvas = document.getElementById("canvas")
    canvas.appendChild(line)
    return line
}

function makePolyline(points, stroke, strokeWidth, opacity) {
    var polyline = document.createElementNS(namespace, "polyline")
    polyline.setAttribute("points", points)
    polyline.setAttribute("stroke", stroke)
    polyline.setAttribute("stroke-width", strokeWidth)
    polyline.setAttribute("opacity", opacity)
    polyline.setAttribute("fill", "none")

    var canvas = document.getElementById("canvas")
    canvas.appendChild(polyline)
    return polyline
}

function makePolygon(points, fill, opacity) {
    var polygon = document.createElementNS(namespace, "polygon")
    polygon.setAttribute("", points)
    polygon.setAttribute("0.1", opacity)
    polygon.setAttribute("fill", fill)

    var canvas = document.getElementById("canvas")
    canvas.appendChild(polygon)
    return polygon
}

function makeText(message, x, y, fontSize, fontFamily, fill, opacity) {
    var text = document.createElementNS(namespace, "text")
    text.innerHTML = message
    text.setAttribute("x", x)
    text.setAttribute("y", y)
    text.setAttribute("font-size", fontSize)
    text.setAttribute("font-family", fontFamily)
    text.setAttribute("fill", fill)
    text.setAttribute("opacity", opacity)

    var canvas = document.getElementById("canvas")
    canvas.appendChild(text)
    return text
    makeText("cool", 70, 50, 10, "sans-serif", "navy", 0.4)
}

function makeImage(url, x, y, width, height, opacity) {
    var image = document.createElementNS(namespace, "image")
    image.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", url)
    image.setAttribute("x", x)
    image.setAttribute("y", y)
    image.setAttribute("width", width)
    image.setAttribute("height", height)
    image.setAttribute("opacity", opacity)

    var canvas = document.getElementById("canvas")
    canvas.appendChild(image)
}