// ✅ Helper function to load an image from a URL and return it as an <img> element
export const createImage = (url) =>
  new Promise((resolve, reject) => {
    const image = new Image(); // Create a new HTMLImageElement

    // When the image loads successfully, resolve the promise with the image
    image.addEventListener("load", () => resolve(image));

    // If there's an error loading the image, reject the promise
    image.addEventListener("error", (error) => reject(error));

    // This is important for loading images from other domains without CORS issues
    image.setAttribute("crossOrigin", "anonymous");

    // Start loading the image by setting its source
    image.src = url;
  });

// ✅ Function to crop an image based on pixel dimensions and return the result as a temporary URL
export async function getCroppedImg(imageSrc, pixelCrop) {
  // Load the image from the given source URL using createImage helper
  const image = await createImage(imageSrc);

  // Create a canvas element in memory
  const canvas = document.createElement("canvas");

  // Get the 2D drawing context of the canvas
  const ctx = canvas.getContext("2d");

  // Set canvas size to match the size of the cropped area
  canvas.width = pixelCrop.width;
  canvas.height = pixelCrop.height;

  // Draw the selected crop area from the original image onto the canvas
  ctx.drawImage(
    image, // original image
    pixelCrop.x, // start x of crop area in the original image
    pixelCrop.y, // start y of crop area in the original image
    pixelCrop.width, // width of the crop area
    pixelCrop.height, // height of the crop area
    0, // x position on canvas to place cropped image
    0, // y position on canvas to place cropped image
    pixelCrop.width, // draw width (same as crop width)
    pixelCrop.height // draw height (same as crop height)
  );

  // Convert the canvas content (cropped image) to a Blob (binary data)
  return new Promise((resolve, reject) => {
    canvas.toBlob((blob) => {
      if (!blob) {
        // If something went wrong, reject the promise
        reject(new Error("Canvas is empty"));
        return;
      }
      // Convert the blob to a temporary URL and resolve it
      resolve(URL.createObjectURL(blob));
    }, "image/jpeg"); // output format is JPEG
  });
}
