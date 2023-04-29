import { ImgbbUploadOptions, Root } from "./interface";

const url = "https://api.imgbb.com/1/upload";

type imgbbUploadType = (options: ImgbbUploadOptions) => Promise<Root>;

const imgbbUpload: imgbbUploadType = async ({
  key,
  image,
  expiration,
  name,
}: ImgbbUploadOptions) => {
  try {
    const params: Record<string, string> = {
      key,
    };

    if (expiration) {
      params.expiration = expiration.toString();
    }

    if (name) {
      params.name = name;
    }

    const formData = new FormData();
    formData.append("image", image);

    const response = await fetch(`${url}?${new URLSearchParams(params)}`, {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    return data;
  } catch (error) {
    console.error("ImgBB API error:", error);
    throw error;
  }
};

export { imgbbUpload };
export default imgbbUpload;
