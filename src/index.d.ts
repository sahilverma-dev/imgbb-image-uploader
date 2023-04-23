declare module "imgbb-upload" {
  export interface ImgbbUploadOptions {
    key: string;
    image: string;
    name?: string;
    expiration?: number;
  }

  export interface Data {
    data: {
      id: string;
      url_viewer: string;
      url: string;
      display_url: string;
      title: string;
      time: string;
      expiration: string;
      image: {
        filename: string;
        name: string;
        mime: string;
        extension: string;
        url: string;
        size: number;
      };
      thumb: {
        filename: string;
        name: string;
        mime: string;
        extension: string;
        url: string;
        size: number;
      };
      delete_url: string;
      delete_key: string;
      status: number;
      error?: {
        message: string;
        code: number;
      };
    };
  }

  export function imgbbUpload(options: ImgbbUploadOptions): Promise<Data>;
}
