export type NetworkId = 137;

type IdToName = {
  [key in NetworkId]: string;
}

export const networkIdToName: IdToName = {
  137: "Polygon"
}