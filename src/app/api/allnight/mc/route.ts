import { NextResponse } from "next/server";

export interface Mc {
  id: number;
  name: string;
  mail: string;
}

const mcList: Mc[] = [
  { id: 1, name: "山田裕貴", mail: "yy@allnightnippon.com" },
  { id: 2, name: "山口一郎", mail: "sakana@example.com" },
  { id: 3, name: "井上和", mail: "nogizaka@example.com" },
  { id: 4, name: "ナインティナイン", mail: "nn@example.com" },
  { id: 5, name: "霜降り明星", mail: "ss@example.com" },
  { id: 6, name: "オードリー", mail: "kw@example.com" },
];

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const GET = async () => {
  await sleep(3000); // 3秒待機
  return NextResponse.json({ mcList });
}
