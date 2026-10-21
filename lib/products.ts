export type StudioProduct = {
  name: string;
  description: string;
  status: string;
  url?: string;
};

// Populate only with confirmed studio-owned products. Empty by design at launch.
export const products: StudioProduct[] = [];
