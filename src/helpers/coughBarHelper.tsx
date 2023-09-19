import { muchBetterText, somewhatBetterText, aboutTheSameText, somewhatWorseText, gettingWorseText } from "../contants";

export interface DynamicData {
  text: string;
  barColor: string;
  textColor: string;
}

export const getDynamicData = (roundedData: number): DynamicData => {
  if (roundedData > 50) return { text: muchBetterText, barColor: "orange-bar", textColor: "orange-text" };
  if (roundedData >= 10 && roundedData <= 50) return { text: somewhatBetterText, barColor: "yellow-bar", textColor: "yellow-text" };
  if (roundedData > -10 && roundedData < 10) return { text: aboutTheSameText, barColor: "gray-bar", textColor: "gray-text" };
  if (roundedData >= -50 && roundedData <= -10) return { text: somewhatWorseText, barColor: "green-bar", textColor: "green-text" };
  if ((roundedData >= -100 && roundedData < 50) || roundedData < 100)
    return { text: gettingWorseText, barColor: "blue-bar", textColor: "blue-text" };

  return { text: "", barColor: "", textColor: "" };
};

export const getAngleClass = (roundedData: number): string => {
  if (roundedData >= 100) return "thirty-angle";
  if (roundedData >= 50) return "fifteen-angle";
  if (roundedData === 0) return "zero-angle";
  if (roundedData >= -99 && roundedData <= -50) return "min-fifteen-angle";
  if (roundedData <= -100) return "min-thirty-angle";
  return "";
};
