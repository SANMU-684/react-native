import { request } from "./axiosConfig";

export type ExploreResult = {
  items: Array<{
    id: string;
    name: string;
    rarity: string;
    quantity: number;
  }>;
};

export async function exploreOnce(baseUrl: string): Promise<ExploreResult> {
  return request<ExploreResult>(`${baseUrl}/api/explore`, { method: "POST" });
}
