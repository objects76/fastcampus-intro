import { prisma } from "@/lib/prisma";

// 상품 목록 카드가 그리는 필드만 내려준다. description은 상세 화면에서만 쓴다.
export type ProductListItem = {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
};

export function listProducts(): Promise<ProductListItem[]> {
  return prisma.product.findMany({
    select: { id: true, name: true, price: true, imageUrl: true },
    orderBy: { id: "asc" },
  });
}
