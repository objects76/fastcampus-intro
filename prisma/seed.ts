import { prisma } from "../src/lib/prisma";
import { seedProducts } from "./seed-data";

// upsert라서 여러 번 실행해도 결과가 같다.
async function main() {
  for (const { id, ...fields } of seedProducts) {
    await prisma.product.upsert({
      where: { id },
      create: { id, ...fields },
      update: fields,
    });
  }
}

main()
  .then(async () => await prisma.$disconnect())
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
