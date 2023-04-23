import { Data, ImgbbUploadOptions } from "./interface";

const url = "https://api.imgbb.com/1/upload";

type imgbbUploadType = (options: ImgbbUploadOptions) => Promise<Data>;

const imgbbUpload: imgbbUploadType = async ({
  key,
  image,
  expiration,
  name,
}: ImgbbUploadOptions) => {
  try {
    const params: Record<string, string> = {
      key,
      image,
    };

    if (expiration !== undefined) {
      params.expiration = expiration.toString();
    }

    if (name !== undefined) {
      params.name = name;
    }

    const response = await fetch(url, {
      method: "POST",
      body: new URLSearchParams(params),
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
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
