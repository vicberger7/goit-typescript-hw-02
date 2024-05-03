import axios, { AxiosResponse } from "axios";

const API_KEY = "LzoDWcfu-nIfccjYBx8KFi7DskdPURuJ4Wz_JNn2SoY";
axios.defaults.baseURL = "https://api.unsplash.com/";
axios.defaults.headers.common["Authorization"] = `Client-ID ${API_KEY}`;
axios.defaults.params = {
  per_page: 15,
};

export interface ImageData {
  id: string;
  alt_description: string;
  urls: {
    regular: string;
  };
}

interface SearchResponse {
  data: ImageData[];
}

export const getImages = async (
  query: string,
  page: number
): Promise<ImageData[]> => {
  try {
    const response: AxiosResponse<SearchResponse> = await axios.get(
      `/search/photos?query=${query}&page=${page}`
    );
    const imageData: ImageData[] = response.data.data;
    console.log(imageData);
    return imageData;
  } catch (error) {
    console.error("Error fetching images:", error);
    throw error;
  }
};
