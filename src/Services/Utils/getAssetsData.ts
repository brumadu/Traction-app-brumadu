import { fetchAssets } from "../Axios/fetchAssets";

export const getAssetsData = async () => {
    try {
        const data = await fetchAssets();
        return data;
      } catch (error) {
        console.error("Error fetching data from Assets Data", error);
        return null;
      }
}