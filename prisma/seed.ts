import { PrismaClient } from '@prisma/client';

// Prismaクライアントの初期化
const prisma = new PrismaClient();

async function main() {
  // ダミーデータの作成
  const user1 = await prisma.user.upsert({
    where: { id: 1 },
    update: {},
    create: {
      email: 'hoge@gmail.com',
      name: 'name1',
    },
  });
  const user2 = await prisma.user.upsert({
    where: { id: 2 },
    update: {},
    create: {
      email: 'fuga@gmail.com',
      name: 'name2',
    },
  });
  const user3 = await prisma.user.upsert({
    where: { id: 3 },
    update: {},
    create: {
      email: 'fussga@gmail.com',
      name: 'name3',
    },
  });

  console.log({ user1, user2, user3 });
}

(async () => {
  try {
    await main();
  } catch (e) {
    console.error(e);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
})();
