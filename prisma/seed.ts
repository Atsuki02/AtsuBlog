import { createUsers } from "./createUsers";
import { createPosts } from "./createPosts";

async function main() {
  await createUsers();
  await createPosts();
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
