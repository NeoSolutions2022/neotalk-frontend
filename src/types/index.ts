export type TurnMode = "hearing" | "deaf";

export interface Message {
  id: number;
  text: string;
  sender: "user" | "system";
  timestamp: string;
}