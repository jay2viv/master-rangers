var canvas = new fabric.Canvas("myCanvas");

block_y = 1;
block_x = 1;

block_image_width = 350;
block_image_height = 430;

var block_image_object = "";

function new_image(get_image) {
	fabric.Image.fromURL(get_image, function (img) {
		block_image_object = img;

		block_image_object.scaleToWidth(block_image_width);
		block_image_object.scaleToHeight(block_image_height);
		block_image_object.set({
			top: block_y,
			left: block_x
		});
		canvas.add(block_image_object);
	});
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
	keyPressed = e.keyCode;
	console.log(keyPressed);

	if (keyPressed == '82') // add appropriate keycode
	{
		new_image('rr.jpg');
		console.log("r");

	}
	if (keyPressed == '71') {
		block_x = 200;
		new_image("gr.png");
		console.log("g");
	}

	if (keyPressed == '89') {
		block_x = 350;
		new_image("ye.png");
		console.log("y");
	}
	if (keyPressed == '80') {
		block_x = 600;
		new_image("pi.png");
		console.log("p");

	}
	if (keyPressed == '66') {
		block_x = 700;
		new_image("bl.png");
		console.log("b");
	}

}

