import axios from "axios";
import { Data, ImgbbUploadOptions } from "./interface";

const url = "https://api.imgbb.com/1/upload";

type imgbbUploadType = (options: ImgbbUploadOptions) => Promise<Data>;

const imgbbUpload: imgbbUploadType = async (options: ImgbbUploadOptions) => {
  try {
    const { data } = await axios({
      url,
      method: "post",
      params: options,
    });

    return data;
  } catch (error) {
    console.error("ImgBB API error:", error);
    throw error;
  }
};

export { imgbbUpload };

export default imgbbUpload;
