import { AxiosResponse } from "axios";
import apiRequest from "../apiReq";

// Define the expected structure of the API response if you know it
// Replace any with actual types
// lib/types.ts (opsional, biar rapi)
// matches your Strapi row exactly
export interface InfoData {
  id: number;
  documentId: string;
  title: string;
  slug: string;
  category: string;
  sourceUrl: string;
  date: string;        // "YYYY-MM-DD"
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  cover?: UploadFile | null;
}

export interface UploadFormat {
  name: string;
  hash: string;
  ext: string;
  mime: string;
  path: string | null;
  width: number;
  height: number;
  size: number;
  sizeInBytes: number;
  url: string;        // relative (e.g. /uploads/..)
}

export interface UploadFormats {
  thumbnail?: UploadFormat;
  small?: UploadFormat;
  // add more if you enable them in Strapi (e.g. medium, large)
}

export interface UploadFile {
  id: number;
  documentId: string;
  name: string;
  alternativeText: string | null;
  caption: string | null;
  width: number;
  height: number;
  formats?: UploadFormats;
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;               // original image url (relative)
  previewUrl: string | null;
  provider: string;
  provider_metadata: any | null;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

export interface ApiResponse<T> {
  data: T[];
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}


export const getInfos = async (
  page: number = 1,
  pageSize: number = 9,
  category?: string
): Promise<ApiResponse<InfoData>> => {
  const token = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;

  try {
  const categoryFilter = category
      ? `&filters[category][$eqi]=${category}`
      : "";
      
    const query =
      `pagination[page]=${page}` +
      `&pagination[pageSize]=${pageSize}` +
      `&sort=date:desc` +
      categoryFilter;
      // kalau ingin limit field (hemat payload), aktifkan baris di bawah:
      // `&fields[0]=title&fields[1]=slug&fields[2]=category&fields[3]=sourceUrl&fields[4]=date&fields[5]=documentId&fields[6]=createdAt&fields[7]=updatedAt&fields[8]=publishedAt`
      ``;

    const response: AxiosResponse<ApiResponse<InfoData>> = await apiRequest.get(
      `/infos?${query}&populate=*`,
      {
        headers: token ? { Authorization: `Bearer ${token}` } : undefined,
      }
    );

    return response.data;
  } catch (err: unknown) {
    if (err instanceof Error) {
      throw new Error(`getInfos failed: ${err.message}`);
    }
    throw new Error("getInfos failed: unknown error");
  }
};