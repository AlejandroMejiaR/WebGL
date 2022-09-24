// tslint:disable: no-console
var initialX = 0;
var initialY = 0;
var finalX = 0;
var finalY = 0;
var bitMapImage = [
	[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1], 
	[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
	[1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1],
	[1,1,1,1,1,1,1,1,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,1,1,1,1,1,1,1,1],
	[1,1,1,1,1,1,1,1,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,1,1,1,1,1,1,1,1],
	[1,1,1,1,1,1,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,1,1,1,1,1,1],
	[1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1],
	[1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1],
	[1,1,1,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,1,1,1],
	[1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1],
	[1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1],
	[1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1],
	[0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0],
	[0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0],
	[0,0,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,0,0],
	[0,0,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,0,0],
	[0,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0],
	[0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0],
	[0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0],
	[0,0,1,1,1,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,1,1,1,1,1,1,1,1,1,1,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,1,1,1,0,0],
	[0,0,1,1,1,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,1,1,1,1,1,1,1,1,1,1,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,1,1,1,0,0],
	[0,0,1,1,1,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,1,1,1,0,0],
	[1,1,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,1,1],
	[1,1,0,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,0,1,1],
	[1,1,0,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,0,1,1],
	[1,1,1,0,0,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,0,0,0,0,0,0,1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,0,0,1,1,1],
	[1,1,1,0,0,1,1,1,1,1,1,1,1,0,0,0,1,1,1,1,1,1,0,0,0,0,0,0,1,1,1,1,1,1,0,0,0,1,1,1,1,1,1,1,1,0,0,1,1,1],
	[1,1,1,0,0,1,1,1,1,1,1,1,1,0,0,0,1,1,1,1,1,1,0,0,0,0,0,0,1,1,1,1,1,1,0,0,0,1,1,1,1,1,1,1,1,0,0,1,1,1],
	[1,1,0,1,1,1,1,1,1,0,0,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,0,0,1,1,1,1,1,1,0,1,1],
	[1,1,0,1,1,1,1,1,1,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,1,1,1,1,1,0,1,1],
	[1,1,0,1,1,1,1,1,1,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,1,1,1,1,1,0,1,1],
	[1,1,0,1,1,1,0,0,0,0,0,1,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,1,1,1,0,1,1],
	[1,1,0,1,1,1,1,0,0,0,0,1,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,1,1,1,1,0,1,1],
	[1,1,0,1,1,1,1,1,1,0,0,1,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1,1,1,1,1,1,0,1,1],
	[1,1,1,0,0,1,1,1,1,1,1,0,0,0,1,1,1,1,1,0,1,1,1,0,0,1,1,1,1,1,0,1,1,1,0,0,1,0,0,1,1,1,1,1,1,0,0,1,1,1],
	[1,1,1,0,0,1,1,1,1,1,1,0,0,0,1,1,1,1,1,0,1,1,1,0,0,1,1,1,1,1,0,1,1,1,0,0,1,0,0,1,1,1,1,1,1,0,0,1,1,1],
	[1,1,1,0,0,1,1,1,1,1,1,1,0,0,0,0,1,1,1,0,1,1,1,0,0,1,1,1,1,1,0,1,1,1,0,0,0,0,1,1,1,1,1,1,1,0,0,1,1,1],
	[1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,0,0,0,0,1,1,1,0,0,1,1,1,1,1,0,1,1,0,0,0,1,1,1,1,1,1,1,1,0,1,1,1,1,1],
	[1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,0,0,0,0,1,1,1,0,0,1,1,1,1,1,0,1,1,0,0,0,1,1,1,1,1,1,1,1,0,1,1,1,1,1],
	[1,1,1,1,1,1,0,0,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,0,0,1,1,1,1,1,1],
	[1,1,1,1,1,1,1,1,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,1,1,1,1,1,1,1,1],
	[1,1,1,1,1,1,1,1,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,1,1,1,1,1,1,1,1],
	[1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1],
	[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
	[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]];

function NormalisedToDevice( coord, axisSize )
{
	var halfAxisSize = axisSize / 2;

	var deviceCoord = ( coord + 1 ) * halfAxisSize;

	return deviceCoord;
}

function DeviceToNormalised( coord, axisSize )
{
	var halfAxisSize = axisSize / 2;

	var normalisedCoord = ( coord / halfAxisSize ) - 1

	return normalisedCoord;
}

const vertexShaderSrc = `#version 300 es
#pragma vscode_glsllint_stage: vert

uniform float uPointSize;
uniform vec2 uPosition;

void main()
{
    gl_PointSize = uPointSize;
    gl_Position = vec4(uPosition, 0.0, 1.0);
}`;

const fragmentShaderSrc = `#version 300 es
#pragma vscode_glsllint_stage: frag

precision mediump float;

uniform int uIndex;
uniform vec4 uColors[5];

out vec4 fragColor;

void main()
{
    fragColor = uColors[uIndex];
}`;

const canvas = document.getElementById('canvas');
const gl = canvas.getContext('webgl2');



const program = gl.createProgram();

{
    const vertexShader = gl.createShader(gl.VERTEX_SHADER);
    gl.shaderSource(vertexShader, vertexShaderSrc);
    gl.compileShader(vertexShader);
    gl.attachShader(program, vertexShader);

    const fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
    gl.shaderSource(fragmentShader, fragmentShaderSrc);
    gl.compileShader(fragmentShader);
    gl.attachShader(program, fragmentShader);

    gl.linkProgram(program);

    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
        console.log(gl.getShaderInfoLog(vertexShader));
        console.log(gl.getShaderInfoLog(fragmentShader));
    }
}
gl.useProgram(program);





const uPositionLoc = gl.getUniformLocation(program, 'uPosition');
const uPointSizeLoc = gl.getUniformLocation(program, 'uPointSize');
const uIndexLoc = gl.getUniformLocation(program, 'uIndex');
const uColorsLoc = gl.getUniformLocation(program, 'uColors');
gl.uniform4fv(uColorsLoc, [
    1,0,0,1,
    0,1,0,1,
    0,0,1,1,
    0,0,0,1,
    1,1,1,1
]);


gl.uniform2f(uPositionLoc, 0, -.2);
gl.uniform1f(uPointSizeLoc, 7);
gl.uniform1i(uIndexLoc, 0);
gl.drawArrays(gl.POINTS, 0, 1);

function point(){
    gl.uniform2f(uPositionLoc, 0, -.2);
    gl.uniform1f(uPointSizeLoc, 7);
    gl.uniform1i(uIndexLoc, 0);
    gl.drawArrays(gl.POINTS, 0, 1);
}

function bitMap(){  
    for (var i = 0; i < 50; i++) {
		for (var j = 0; j < 50; j++) {
			if(bitMapImage[i][j] == 0){
                var x = i*12.2; //reescale x coord
                var y = j*12.2; //reescale y coord
                //gl.uniform2f(uPositionLoc, DeviceToNormalised(x,canvas.width), DeviceToNormalised(y,canvas.height)); //original 
                gl.uniform2f(uPositionLoc, -DeviceToNormalised(y,canvas.height), -DeviceToNormalised(x,canvas.width));//rotate -90 degrees
                gl.uniform1f(uPointSizeLoc, 12.2);
                gl.uniform1i(uIndexLoc,1);
                gl.drawArrays(gl.POINTS, 0, 1);
            }
		}
	}
}

function sin(){
    //sin function
	for (var i = -canvas.width; i < canvas.width; i+= 0.2) { //select domain
		var v = 100 * Math.sin(5 * i * Math.PI / 180); //Sin function
        gl.uniform2f(uPositionLoc, DeviceToNormalised(i,canvas.width), DeviceToNormalised(v,canvas.height)+1);
        gl.uniform1f(uPointSizeLoc, 2);
        gl.uniform1i(uIndexLoc,0);
        gl.drawArrays(gl.POINTS, 0, 1);
	}

    //plane
    for (var i = -canvas.width; i < canvas.width; i++) {//select domain
        gl.uniform2f(uPositionLoc, DeviceToNormalised(i,canvas.width), 0);
        gl.uniform1f(uPointSizeLoc, 2);
        gl.uniform1i(uIndexLoc,3);
        gl.drawArrays(gl.POINTS, 0, 1);
    }
    for (var i = -canvas.height; i <= canvas.height; i++) {//select range
        gl.uniform2f(uPositionLoc, 0, DeviceToNormalised(i,canvas.height));
        gl.uniform1f(uPointSizeLoc, 2);
        gl.uniform1i(uIndexLoc,3);
        gl.drawArrays(gl.POINTS, 0, 1);
    }
}
function line(){
    //dda algorithm variables
	var dx = 0, dy = 0, incx = 0, incy = 0, x = 0, y = 0, p = 0;

	dx = 500 - 100; // define delta x
	dy = 500 - 100;// define delta y

	// find max value to draw it with a for
	if (Math.abs(dx) >= Math.abs(dy)){
		p = Math.abs(dx);
	}
	else{
		p = Math.abs(dy);
	}

	incx = dx / p;// x increment
	incy = dy / p;// y increment

	//define initial point
	x = 100; 
	y = 100;

	//draw point per point with for
	for (var i = 0; i <= p; i++){
        gl.uniform2f(uPositionLoc, DeviceToNormalised(x,canvas.width), DeviceToNormalised(y,canvas.height));
        gl.uniform1f(uPointSizeLoc, 2);
        gl.uniform1i(uIndexLoc,3);
        gl.drawArrays(gl.POINTS, 0, 1);
		x += incx;
		y += incy;
	}


}

var xi = 300;
var yi = 300;
var xf = 400;
var yf = 400;
function octant(x, y) {
        gl.uniform2f(uPositionLoc, DeviceToNormalised(xi+x,canvas.width), DeviceToNormalised(yi+y,canvas.height));
        gl.uniform1f(uPointSizeLoc, 2);
        gl.uniform1i(uIndexLoc,2);
        gl.drawArrays(gl.POINTS, 0, 1);


        gl.uniform2f(uPositionLoc, DeviceToNormalised(xi+y,canvas.width), DeviceToNormalised(yi+x,canvas.height));
        gl.uniform1f(uPointSizeLoc, 2);
        gl.uniform1i(uIndexLoc,2);
        gl.drawArrays(gl.POINTS, 0, 1);

        gl.uniform2f(uPositionLoc, DeviceToNormalised(xi-y,canvas.width), DeviceToNormalised(yi+x,canvas.height));
        gl.uniform1f(uPointSizeLoc, 2);
        gl.uniform1i(uIndexLoc,2);
        gl.drawArrays(gl.POINTS, 0, 1);

        gl.uniform2f(uPositionLoc, DeviceToNormalised(xi-x,canvas.width), DeviceToNormalised(yi+y,canvas.height));
        gl.uniform1f(uPointSizeLoc, 2);
        gl.uniform1i(uIndexLoc,22);
        gl.drawArrays(gl.POINTS, 0, 1);
        
        gl.uniform2f(uPositionLoc, DeviceToNormalised(xi-x,canvas.width), DeviceToNormalised(yi-y,canvas.height));
        gl.uniform1f(uPointSizeLoc, 2);
        gl.uniform1i(uIndexLoc,2);
        gl.drawArrays(gl.POINTS, 0, 1);

        gl.uniform2f(uPositionLoc, DeviceToNormalised(xi-y,canvas.width), DeviceToNormalised(yi-x,canvas.height));
        gl.uniform1f(uPointSizeLoc, 2);
        gl.uniform1i(uIndexLoc,2);
        gl.drawArrays(gl.POINTS, 0, 1);

        gl.uniform2f(uPositionLoc, DeviceToNormalised(xi+y,canvas.width), DeviceToNormalised(yi-x,canvas.height));
        gl.uniform1f(uPointSizeLoc, 2);
        gl.uniform1i(uIndexLoc,2);
        gl.drawArrays(gl.POINTS, 0, 1);

        gl.uniform2f(uPositionLoc, DeviceToNormalised(xi+x,canvas.width), DeviceToNormalised(yi-y,canvas.height));
        gl.uniform1f(uPointSizeLoc, 2);
        gl.uniform1i(uIndexLoc,2);
        gl.drawArrays(gl.POINTS, 0, 1);

        gl.uniform2f(uPositionLoc, DeviceToNormalised(xi-x,canvas.width), DeviceToNormalised(yi+y,canvas.height));
        gl.uniform1f(uPointSizeLoc, 2);
        gl.uniform1i(uIndexLoc,2);
        gl.drawArrays(gl.POINTS, 0, 1);
    
}




var y;
var x;
var r;


function circle(){
    r = Math.sqrt(Math.pow((xf - xi), 2) + Math.pow((yf - yi), 2));
	x = 0;
	do{
		y = (Math.sqrt(Math.pow(r, 2) - Math.pow(x, 2)));
		octant(x,y);
		x++;
	} while (x<=y);


}


