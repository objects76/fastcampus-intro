import { execSync } from "node:child_process";
import { rmSync } from "node:fs";
import { TEST_DATABASE_URL } from "../vitest.config";

// 매 실행마다 test.db를 새로 만들어 마이그레이션과 시드를 적용한다.
export default function setup() {
  rmSync("test.db", { force: true });
  const env = { ...process.env, DATABASE_URL: TEST_DATABASE_URL };
  execSync("prisma migrate deploy", { env, stdio: "inherit" });
  execSync("prisma db seed", { env, stdio: "inherit" });
}
