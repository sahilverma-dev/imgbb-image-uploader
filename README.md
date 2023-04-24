# imgbb-upload

![imgbb-upload](./images/poster.png "IMGBB upload")

`imgbb-upload` is a lightweight Node.js library for uploading images to the ImgBB API. It provides a simple and easy-to-use interface for uploading images and retrieving their URLs.

## Usage

1. Create account on imgbb website.

https://imgbb.com/

2. Go to the imgbb API page and create a new API key.

https://api.imgbb.com/

3. Install imgbb-upload using npm:

```shell
npm install imgbb-upload
```

4.  Here's an example of how to use imgbb-upload:

```javascript
import imgbbUpload "imgbb-upload";

// Upload an image to ImgBB
const apiKey = "your-api-key-here";
const imagePath = "path-to-your-image";

imgbbUpload(apiKey, imagePath)
  .then((url) => {
    console.log("Image uploaded to ImgBB:", url);
  })
  .catch((error) => {
    console.error("Failed to upload image to ImgBB:", error);
  });
```

5. You can also specify additional options when uploading an image, such as the image name and expiration time:

```javascript
import imgbbUpload "imgbb-upload";

// Upload an image to ImgBB with additional options
const apiKey = "your-api-key-here";
const imagePath = "path-to-your-image";
const options = {
  name: "my-image.png",
  expiration: 600, // 10 minutes
};

imgbbUpload(apiKey, imagePath, options)
  .then((url) => {
    console.log("Image uploaded to ImgBB:", url);
  })
  .catch((error) => {
    console.error("Failed to upload image to ImgBB:", error);
  });
```

#### Parameters

- `key`: The ImgBB API key to use for authentication.
- `image`: The path or URL of the image to upload. Can be a local file path, a binary file, or base64-encoded data.
- `options` (optional): Additional options for the image upload. Can include the image name and expiration time.

#### Options

The `options` parameter can include the following properties:

- `name` (optional): The name of the image file. If not provided, the name will be automatically detected when uploading a file with multipart/form-data.
- `expiration` (optional): The expiration time for the uploaded image, in seconds. The uploaded image will be automatically deleted after this time.

### Returns

A Promise that resolves with the URL of the uploaded image.

## License

This library is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contributing

Bug reports and pull requests are welcome on GitHub at https://github.com/sahilverma-dev/imgbb-upload.
