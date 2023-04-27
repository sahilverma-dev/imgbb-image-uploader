# imgbb-image-uploader

![imgbb-image-uploader](./images/poster.png "IMGBB upload")

`imgbb-image-uploader` is a lightweight Node.js library for uploading images to the ImgBB API. It provides a simple and easy-to-use interface for uploading images and retrieving their URLs.

## Usage

1. Create account on imgbb website.

https://imgbb.com/

2. Go to the imgbb API page and create a new API key.

https://api.imgbb.com/

3. Install imgbb-image-uploader using npm:

```shell
npm install imgbb-image-uploader
```

4.  Here's an example of how to use imgbb-image-uploader:

```javascript
import {imgbbUpload} "imgbb-image-uploader";


imgbbUpload({
  key: "your-api-key",// your imgbb api key
  image: image, // image selected from the file input
})
  .then((data) => {
    console.log("Image uploaded to ImgBB:", data);
  })
  .catch((error) => {
    console.error("Failed to upload image to ImgBB:", error);
  });
```

5. You can also specify additional options when uploading an image, such as the image name and expiration time:

```javascript
import imgbbUpload "imgbb-image-uploader";

// Upload an image to ImgBB with additional options

imgbbUpload({
  key: "your-api-key",// your imgbb api key
  image: image, // image selected from the file input
  expiration: 600,// 10 mins
  name: 'name-of-the-image', // name of the image
})
  .then((data) => {
    console.log("Image uploaded to ImgBB:", data);
  })
  .catch((error) => {
    console.error("Failed to upload image to ImgBB:", error);
  });
```

#### Parameters

- `key`: The ImgBB API key to use for authentication.
- `image`: The image selected from the file input.
- `name` (optional): The name of the image file. If not provided, the name will be automatically detected when uploading a file with multipart/form-data.
- `expiration` (optional): The expiration time for the uploaded image, in seconds. The uploaded image will be automatically deleted after this time.

### Returns

This responses display all the image uploaded information in JSON format.

JSON the response will have headers status codes to allow you to easily notice if the request was OK or not. It will also output the status properties

```json
{
  "data": {
    "id": "2ndCYJK",
    "title": "c1f64245afb2",
    "url_viewer": "https://ibb.co/2ndCYJK",
    "url": "https://i.ibb.co/w04Prt6/c1f64245afb2.gif",
    "display_url": "https://i.ibb.co/98W13PY/c1f64245afb2.gif",
    "width": "1",
    "height": "1",
    "size": "42",
    "time": "1552042565",
    "expiration": "0",
    "image": {
      "filename": "c1f64245afb2.gif",
      "name": "c1f64245afb2",
      "mime": "image/gif",
      "extension": "gif",
      "url": "https://i.ibb.co/w04Prt6/c1f64245afb2.gif"
    },
    "thumb": {
      "filename": "c1f64245afb2.gif",
      "name": "c1f64245afb2",
      "mime": "image/gif",
      "extension": "gif",
      "url": "https://i.ibb.co/2ndCYJK/c1f64245afb2.gif"
    },
    "medium": {
      "filename": "c1f64245afb2.gif",
      "name": "c1f64245afb2",
      "mime": "image/gif",
      "extension": "gif",
      "url": "https://i.ibb.co/98W13PY/c1f64245afb2.gif"
    },
    "delete_url": "https://ibb.co/2ndCYJK/670a7e48ddcb85ac340c717a41047e5c"
  },
  "success": true,
  "status": 200
}
```

## License

This library is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contributing

Bug reports and pull requests are welcome on GitHub at https://github.com/sahilverma-dev/imgbb-image-uploader.
