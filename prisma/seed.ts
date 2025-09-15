import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  await prisma.project.createMany({
    data: [
      {
        title: "پروژه مسکونی همت",
        shortDesc: "ساختمان ۱۰ طبقه مسکوaaaaaaaaaaaaaaaaaaaaaaaaaنی در شمال تهران",
        fullDesc:
          "این پروژه شامل ۱۰ طبقه مسکونی، پارaaaaaaaaaaaaaaaaaaaکینگ، لابی و امکانات رفاهی کامل است...",
        images: JSON.stringify([
          "/projects/tehran1.jpg",
          "/projects/tehran2.jpg",
          "/projects/tehran3.jpg",
        ]),
      },
      {
        title: "پروژه مسکونی آسمان البرز",
        shortDesc: "ساختمان ۱۰ طبقه مسکونی در شمال تهران",
        fullDesc:
          "این پروژه شامل ۱۰ طبقه مسکونی، پارکینگ، لابی و امکانات رفاهی کامل است...",
        images: JSON.stringify([
          "/projects/tehran1.jpg",
          "/projects/tehran2.jpg",
          "/projects/tehran3.jpg",
        ]),
      },
    ],
  });
}

main()
  .then(() => console.log("Seeded!"))
  .catch((e) => console.error(e))
  .finally(async () => await prisma.$disconnect());
