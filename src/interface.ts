export interface Root {
  data: Data;
  success: boolean;
  status: number;
}

export interface ImgbbUploadOptions {
  key: string;
  image: string;
  name?: string;
  expiration?: number;
}
export interface Data {
  id: string;
  title: string;
  url_viewer: string;
  url: string;
  display_url: string;
  width: string;
  height: string;
  size: string;
  time: string;
  expiration: string;
  image: Image;
  thumb: Thumb;
  medium: Medium;
  delete_url: string;
}

export interface Image {
  filename: string;
  name: string;
  mime: string;
  extension: string;
  url: string;
}

export interface Thumb {
  filename: string;
  name: string;
  mime: string;
  extension: string;
  url: string;
}

export interface Medium {
  filename: string;
  name: string;
  mime: string;
  extension: string;
  url: string;
}
