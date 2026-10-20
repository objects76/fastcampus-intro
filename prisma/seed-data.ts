import type { Product } from "../generated/prisma/client";

// PRD(docs/prd/README.md) "샘플 데이터" 표의 6개 상품. name·price·imageUrl은 표 그대로 쓴다.
export const seedProducts: Product[] = [
  {
    id: "1",
    name: "미니멀 화이트 머그컵",
    price: 12000,
    imageUrl: "/images/product-01.png",
    description:
      "군더더기 없는 디자인의 300ml 세라믹 머그컵입니다. 전자레인지와 식기세척기 모두 사용할 수 있어 매일 편하게 쓰기 좋습니다.",
  },
  {
    id: "2",
    name: "원목 도마 세트",
    price: 29000,
    imageUrl: "/images/product-02.png",
    description:
      "아카시아 원목으로 만든 대·소 2종 도마 세트입니다. 자연스러운 나뭇결이 살아 있어 서빙 보드로 써도 잘 어울립니다.",
  },
  {
    id: "3",
    name: "코튼 캔버스 에코백",
    price: 18000,
    imageUrl: "/images/product-03.png",
    description:
      "두툼한 12온스 캔버스 원단으로 만든 데일리 에코백입니다. 안주머니가 1개 있어 작은 소지품을 따로 넣기 편합니다.",
  },
  {
    id: "4",
    name: "아로마 소이 캔들",
    price: 22000,
    imageUrl: "/images/product-04.png",
    description:
      "100% 천연 소이왁스로 만든 향초입니다. 은은한 우디 향이 공간을 채우며, 약 40시간 동안 연소합니다.",
  },
  {
    id: "5",
    name: "스테인리스 텀블러 500ml",
    price: 25000,
    imageUrl: "/images/product-05.png",
    description:
      "이중 진공 단열 구조의 500ml 스테인리스 텀블러입니다. 6시간 보온, 12시간 보냉이 가능하고 누수 방지 뚜껑을 갖췄습니다.",
  },
  {
    id: "6",
    name: "리넨 룸슬리퍼",
    price: 15000,
    imageUrl: "/images/product-06.png",
    description:
      "통기성이 좋은 리넨 소재의 실내 슬리퍼입니다. 논슬립 밑창이라 미끄러운 바닥에서도 안심하고 신을 수 있습니다.",
  },
];
