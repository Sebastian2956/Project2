export type PexelsPhoto = {
  id: number;
  alt: string;
  photographer: string;
  url: string;
  src: {
    original: string;
    large2x: string;
    large: string;
    medium: string;
    small: string;
    portrait: string;
    landscape: string;
    tiny: string;
  };
};

const fallbackImages: PexelsPhoto[] = [
  {
    id: 101,
    alt: "Modern kitchen renovation",
    photographer: "Pexels",
    url: "https://www.pexels.com/photo/modern-kitchen-1149019/",
    src: {
      original: "https://images.pexels.com/photos/1149019/pexels-photo-1149019.jpeg",
      large2x: "https://images.pexels.com/photos/1149019/pexels-photo-1149019.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      large: "https://images.pexels.com/photos/1149019/pexels-photo-1149019.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      medium: "https://images.pexels.com/photos/1149019/pexels-photo-1149019.jpeg?auto=compress&cs=tinysrgb&h=350",
      small: "https://images.pexels.com/photos/1149019/pexels-photo-1149019.jpeg?auto=compress&cs=tinysrgb&h=130",
      portrait: "https://images.pexels.com/photos/1149019/pexels-photo-1149019.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
      landscape: "https://images.pexels.com/photos/1149019/pexels-photo-1149019.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
      tiny: "https://images.pexels.com/photos/1149019/pexels-photo-1149019.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280"
    }
  },
  {
    id: 102,
    alt: "Contemporary living room design",
    photographer: "Pexels",
    url: "https://www.pexels.com/photo/modern-living-room-1571453/",
    src: {
      original: "https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg",
      large2x: "https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      large: "https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      medium: "https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&h=350",
      small: "https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&h=130",
      portrait: "https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
      landscape: "https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
      tiny: "https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280"
    }
  },
  {
    id: 103,
    alt: "Residential exterior with landscaping",
    photographer: "Pexels",
    url: "https://www.pexels.com/photo/house-lawn-259588/",
    src: {
      original: "https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg",
      large2x: "https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      large: "https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      medium: "https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&h=350",
      small: "https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&h=130",
      portrait: "https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
      landscape: "https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
      tiny: "https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280"
    }
  },
  {
    id: 104,
    alt: "Architectural blueprints with tools",
    photographer: "Pexels",
    url: "https://www.pexels.com/photo/blueprint-834892/",
    src: {
      original: "https://images.pexels.com/photos/834892/pexels-photo-834892.jpeg",
      large2x: "https://images.pexels.com/photos/834892/pexels-photo-834892.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      large: "https://images.pexels.com/photos/834892/pexels-photo-834892.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      medium: "https://images.pexels.com/photos/834892/pexels-photo-834892.jpeg?auto=compress&cs=tinysrgb&h=350",
      small: "https://images.pexels.com/photos/834892/pexels-photo-834892.jpeg?auto=compress&cs=tinysrgb&h=130",
      portrait: "https://images.pexels.com/photos/834892/pexels-photo-834892.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
      landscape: "https://images.pexels.com/photos/834892/pexels-photo-834892.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
      tiny: "https://images.pexels.com/photos/834892/pexels-photo-834892.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280"
    }
  }
];

export async function getPexelsImages(query: string, perPage = 6): Promise<PexelsPhoto[]> {
  const apiKey = process.env.PEXELS_API_KEY;
  if (!apiKey) {
    return fallbackImages;
  }

  const url = `https://api.pexels.com/v1/search?query=${encodeURIComponent(query)}&per_page=${perPage}`;

  try {
    const response = await fetch(url, {
      headers: {
        Authorization: apiKey,
      },
      next: { revalidate: 86400 },
    });

    if (!response.ok) {
      return fallbackImages;
    }

    const data = (await response.json()) as { photos?: PexelsPhoto[] };
    return data.photos?.length ? data.photos : fallbackImages;
  } catch (error) {
    return fallbackImages;
  }
}
