type DropTableItem = {
  id: string;
  name: string;
  rarity: "common" | "rare" | "epic" | "legendary";
  weight: number;
};

export type ExploreDrop = {
  id: string;
  name: string;
  rarity: DropTableItem["rarity"];
  quantity: number;
};

const DROP_TABLE: DropTableItem[] = [
  { id: "slime_gel", name: "史莱姆凝胶", rarity: "common", weight: 70 },
  { id: "forest_mushroom", name: "秘林蘑菇", rarity: "common", weight: 55 },
  { id: "crystal_salt", name: "水晶盐", rarity: "rare", weight: 18 },
  { id: "dragon_pepper", name: "龙焰辣椒", rarity: "epic", weight: 6 },
  { id: "phoenix_saffron", name: "不死鸟藏红花", rarity: "legendary", weight: 1 },
];

function pickByWeight(items: DropTableItem[]) {
  const total = items.reduce((sum, x) => sum + x.weight, 0);
  const r = Math.random() * total;
  let acc = 0;
  for (const it of items) {
    acc += it.weight;
    if (r <= acc) return it;
  }
  return items[items.length - 1];
}

export function exploreOnce(): { items: ExploreDrop[] } {
  const rolls = 1 + Math.floor(Math.random() * 3);
  const drops: ExploreDrop[] = [];

  for (let i = 0; i < rolls; i++) {
    const picked = pickByWeight(DROP_TABLE);
    const existing = drops.find((d) => d.id === picked.id);
    if (existing) {
      existing.quantity += 1;
    } else {
      drops.push({ id: picked.id, name: picked.name, rarity: picked.rarity, quantity: 1 });
    }
  }

  return { items: drops };
}
