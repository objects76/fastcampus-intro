import { describe, expect, it } from "vitest";
import { GET } from "@/app/api/products/route";
import { seedProducts } from "../prisma/seed-data";

describe("GET /api/products", () => {
  it("200과 JSON으로 응답한다", async () => {
    const res = await GET();

    expect(res.status).toBe(200);
    expect(res.headers.get("content-type")).toContain("application/json");
  });

  it("DB에 저장된 6개 상품을 id 순서대로 모두 내려준다", async () => {
    const res = await GET();
    const body = await res.json();

    expect(body.map((p: { id: string }) => p.id)).toEqual(["1", "2", "3", "4", "5", "6"]);
  });

  it("각 상품은 목록 카드에 필요한 id·name·price·imageUrl만 담는다", async () => {
    const res = await GET();
    const body = await res.json();

    const expected = seedProducts.map(({ id, name, price, imageUrl }) => ({
      id,
      name,
      price,
      imageUrl,
    }));
    expect(body).toEqual(expected);
  });

  it("price는 정수(원), imageUrl은 /images/ 로컬 경로다", async () => {
    const res = await GET();
    const body: { price: unknown; imageUrl: string }[] = await res.json();

    for (const p of body) {
      expect(Number.isInteger(p.price)).toBe(true);
      expect(p.imageUrl.startsWith("/images/")).toBe(true);
    }
  });
});
