import { PrismaClient, Prisma } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  try {
    const workout1 = await prisma.workout.create({
      data: {
        day: "1",
        name: "Lower Body Knee Dominant",
        exercises: {
          create: [
            {
              name: "Squats",
              numSets: 3,
              sets: {
                create: Array.from({ length: 3 }, () => ({})),
              },
              suggestedReps: "8-12",
              weight: "100 lbs",
              notes:
                "Etiam et feugiat libero, a elementum mi. Fusce vulputate ante arcu, quis rhoncus nulla eleifend in. Sed vitae orci ac purus suscipit cursus. Proin ultrices porta tortor, sit amet accumsan neque finibus sed",
            },
            {
              name: "Lunges",
              numSets: 3,
              sets: {
                create: Array.from({ length: 3 }, () => ({})),
              },
              suggestedReps: "8-12",
              weight: "25 lbs",
              notes:
                "Etiam et feugiat libero, a elementum mi. Fusce vulputate ante arcu, quis rhoncus nulla eleifend in. Sed vitae orci ac purus suscipit cursus. Proin ultrices porta tortor, sit amet accumsan neque finibus sed",
            },
            {
              name: "Leg Press",
              numSets: 3,
              sets: {
                create: Array.from({ length: 3 }, () => ({})),
              },
              suggestedReps: "8-12",
              weight: "200 lbs",
              notes:
                "Etiam et feugiat libero, a elementum mi. Fusce vulputate ante arcu, quis rhoncus nulla eleifend in. Sed vitae orci ac purus suscipit cursus. Proin ultrices porta tortor, sit amet accumsan neque finibus sed",
            },
            {
              name: "Calf Raises",
              numSets: 3,
              sets: {
                create: Array.from({ length: 3 }, () => ({})),
              },
              suggestedReps: "8-12",
              weight: "50 lbs",
              notes:
                "Etiam et feugiat libero, a elementum mi. Fusce vulputate ante arcu, quis rhoncus nulla eleifend in. Sed vitae orci ac purus suscipit cursus. Proin ultrices porta tortor, sit amet accumsan neque finibus sed",
            },
          ],
        },
        notes:
          "In general remember to pause at the top, and take 3 seconds coming down for each rep today.",
        currentWeek: true,
      },
      include: {
        exercises: true,
      } as Prisma.WorkoutInclude,
    });

    const workout2 = await prisma.workout.create({
      data: {
        day: "2",
        name: "Upper Body Push",
        exercises: {
          create: [
            {
              name: "Bench Press",
              numSets: 3,
              sets: {
                create: Array.from({ length: 3 }, () => ({})),
              },
              suggestedReps: "8-12",
              weight: "135 lbs",
              notes:
                "Etiam et feugiat libero, a elementum mi. Fusce vulputate ante arcu, quis rhoncus nulla eleifend in. Sed vitae orci ac purus suscipit cursus. Proin ultrices porta tortor, sit amet accumsan neque finibus sed",
            },
            {
              name: "Shoulder Press",
              numSets: 3,
              sets: {
                create: Array.from({ length: 3 }, () => ({})),
              },
              suggestedReps: "8-12",
              weight: "65 lbs",
              notes:
                "Etiam et feugiat libero, a elementum mi. Fusce vulputate ante arcu, quis rhoncus nulla eleifend in. Sed vitae orci ac purus suscipit cursus. Proin ultrices porta tortor, sit amet accumsan neque finibus sed",
            },
            {
              name: "Tricep Dips",
              numSets: 3,
              sets: {
                create: Array.from({ length: 3 }, () => ({})),
              },
              suggestedReps: "8-12",
              weight: "0 lbs",
              notes:
                "Etiam et feugiat libero, a elementum mi. Fusce vulputate ante arcu, quis rhoncus nulla eleifend in. Sed vitae orci ac purus suscipit cursus. Proin ultrices porta tortor, sit amet accumsan neque finibus sed",
            },
            {
              name: "Tricep Extensions",
              numSets: 3,
              sets: {
                create: Array.from({ length: 3 }, () => ({})),
              },
              suggestedReps: "8-12",
              weight: "25 lbs",
              notes:
                "Etiam et feugiat libero, a elementum mi. Fusce vulputate ante arcu, quis rhoncus nulla eleifend in. Sed vitae orci ac purus suscipit cursus. Proin ultrices port.",
            },
          ],
        },
        notes:
          "In general remember to pause at the top, and take 3 seconds coming down for each rep today.",
        currentWeek: true,
      },
      include: {
        exercises: true,
      } as Prisma.WorkoutInclude,
    });

    const workout3 = await prisma.workout.create({
      data: {
        day: "3",
        name: "Lower Body Hip Dominant",
        exercises: {
          create: [
            {
              name: "Deadlifts",
              numSets: 3,
              sets: {
                create: Array.from({ length: 3 }, () => ({})),
              },
              suggestedReps: "8-12",
              weight: "185 lbs",
              notes:
                "Etiam et feugiat libero, a elementum mi. Fusce vulputate ante arcu, quis rhoncus nulla eleifend in. Sed vitae orci ac purus suscipit cursus. Proin ultrices porta tortor, sit amet accumsan neque finibus sed",
            },
            {
              name: "Hip Thrusts",
              numSets: 3,
              sets: {
                create: Array.from({ length: 3 }, () => ({})),
              },
              suggestedReps: "8-12",
              weight: "135 lbs",
              notes:
                "Etiam et feugiat libero, a elementum mi. Fusce vulputate ante arcu, quis rhoncus nulla eleifend in. Sed vitae orci ac purus suscipit cursus. Proin ultrices porta tortor, sit amet accumsan neque finibus sed",
            },
            {
              name: "Leg Curls",
              numSets: 3,
              sets: {
                create: Array.from({ length: 3 }, () => ({})),
              },
              suggestedReps: "8-12",
              weight: "50 lbs",
              notes:
                "Etiam et feugiat libero, a elementum mi. Fusce vulputate ante arcu, quis rhoncus nulla eleifend in. Sed vitae orci ac purus suscipit cursus. Proin ultrices porta tortor, sit amet accumsan neque finibus sed",
            },
            {
              name: "Calf Raises",
              numSets: 3,
              sets: {
                create: Array.from({ length: 3 }, () => ({})),
              },
              suggestedReps: "8-12",
              weight: "50 lbs",
              notes:
                "Etiam et feugiat libero, a elementum mi. Fusce vulputate ante arcu, quis rhoncus nulla eleifend in.",
            },
          ],
        },
        notes:
          "In general remember to pause at the top, and take 3 seconds coming down for each rep today.",
        currentWeek: true,
      },
      include: {
        exercises: true,
      } as Prisma.WorkoutInclude,
    });

    const workout4 = await prisma.workout.create({
      data: {
        day: "4",
        name: "Upper Body Pull",
        exercises: {
          create: [
            {
              name: "Pull-ups",
              numSets: 3,
              sets: {
                create: Array.from({ length: 3 }, () => ({})),
              },
              suggestedReps: "8-12",
              weight: "0 lbs",
              notes:
                "Etiam et feugiat libero, a elementum mi. Fusce vulputate ante arcu, quis rhoncus nulla eleifend in. Sed vitae orci ac purus suscipit cursus. Proin ultrices porta tortor, sit amet accumsan neque finibus sed",
            },
            {
              name: "Bent-over Rows",
              numSets: 3,
              sets: {
                create: Array.from({ length: 3 }, () => ({})),
              },
              suggestedReps: "8-12",
              weight: "65 lbs",
              notes:
                "Etiam et feugiat libero, a elementum mi. Fusce vulputate ante arcu, quis rhoncus nulla eleifend in. Sed vitae orci ac purus suscipit cursus. Proin ultrices porta tortor, sit amet accumsan neque finibus sed",
            },
            {
              name: "Face Pulls",
              numSets: 3,
              sets: {
                create: Array.from({ length: 3 }, () => ({})),
              },
              suggestedReps: "8-12",
              weight: "20 lbs",
              notes:
                "Etiam et feugiat libero, a elementum mi. Fusce vulputate ante arcu, quis rhoncus nulla eleifend in. Sed vitae orci ac purus suscipit cursus. Proin ultrices porta tortor, sit amet accumsan neque finibus sed",
            },
            {
              name: "Bicep Curls",
              numSets: 3,
              sets: {
                create: Array.from({ length: 3 }, () => ({})),
              },
              suggestedReps: "8-12",
              weight: "25 lbs",
              notes:
                "Etiam et feugiat libero, a elementum mi. Fusce vulputate ante arcu, quis rhoncus nulla eleifend in. Sed.",
            },
          ],
        },
        notes:
          "In general remember to pause at the top, and take 3 seconds coming down for each rep today.",
        currentWeek: true,
      },
      include: {
        exercises: true,
      } as Prisma.WorkoutInclude,
    });
    const workout5 = await prisma.workout.create({
      data: {
        day: "1",
        name: "Lower Body Knee Dominant",
        exercises: {
          create: [
            {
              name: "Squats",
              numSets: 3,
              sets: {
                create: Array.from({ length: 3 }, () => ({})),
              },
              suggestedReps: "8-12",
              weight: "100 lbs",
              notes:
                "Etiam et feugiat libero, a elementum mi. Fusce vulputate ante arcu, quis rhoncus nulla eleifend in. Sed vitae orci ac purus suscipit cursus. Proin ultrices porta tortor, sit amet accumsan neque finibus sed",
            },
            {
              name: "Lunges",
              numSets: 3,
              sets: {
                create: Array.from({ length: 3 }, () => ({})),
              },
              suggestedReps: "8-12",
              weight: "25 lbs",
              notes:
                "Etiam et feugiat libero, a elementum mi. Fusce vulputate ante arcu, quis rhoncus nulla eleifend in. Sed vitae orci ac purus suscipit cursus. Proin ultrices porta tortor, sit amet accumsan neque finibus sed",
            },
            {
              name: "Leg Press",
              numSets: 3,
              sets: {
                create: Array.from({ length: 3 }, () => ({})),
              },
              suggestedReps: "8-12",
              weight: "200 lbs",
              notes:
                "Etiam et feugiat libero, a elementum mi. Fusce vulputate ante arcu, quis rhoncus nulla eleifend in. Sed vitae orci ac purus suscipit cursus. Proin ultrices porta tortor, sit amet accumsan neque finibus sed",
            },
            {
              name: "Calf Raises",
              numSets: 3,
              sets: {
                create: Array.from({ length: 3 }, () => ({})),
              },
              suggestedReps: "8-12",
              weight: "50 lbs",
              notes:
                "Etiam et feugiat libero, a elementum mi. Fusce vulputate ante arcu, quis rhoncus nulla eleifend in. Sed vitae orci ac purus suscipit cursus. Proin ultrices porta tortor, sit amet accumsan neque finibus sed",
            },
          ],
        },
        notes:
          "In general remember to pause at the top, and take 3 seconds coming down for each rep today.",
        currentWeek: false,
      },
      include: {
        exercises: true,
      } as Prisma.WorkoutInclude,
    });

    const workout6 = await prisma.workout.create({
      data: {
        day: "2",
        name: "Upper Body Push",
        exercises: {
          create: [
            {
              name: "Bench Press",
              numSets: 3,
              sets: {
                create: Array.from({ length: 3 }, () => ({})),
              },
              suggestedReps: "8-12",
              weight: "135 lbs",
              notes:
                "Etiam et feugiat libero, a elementum mi. Fusce vulputate ante arcu, quis rhoncus nulla eleifend in. Sed vitae orci ac purus suscipit cursus. Proin ultrices porta tortor, sit amet accumsan neque finibus sed",
            },
            {
              name: "Shoulder Press",
              numSets: 3,
              sets: {
                create: Array.from({ length: 3 }, () => ({})),
              },
              suggestedReps: "8-12",
              weight: "65 lbs",
              notes:
                "Etiam et feugiat libero, a elementum mi. Fusce vulputate ante arcu, quis rhoncus nulla eleifend in. Sed vitae orci ac purus suscipit cursus. Proin ultrices porta tortor, sit amet accumsan neque finibus sed",
            },
            {
              name: "Tricep Dips",
              numSets: 3,
              sets: {
                create: Array.from({ length: 3 }, () => ({})),
              },
              suggestedReps: "8-12",
              weight: "0 lbs",
              notes:
                "Etiam et feugiat libero, a elementum mi. Fusce vulputate ante arcu, quis rhoncus nulla eleifend in. Sed vitae orci ac purus suscipit cursus. Proin ultrices porta tortor, sit amet accumsan neque finibus sed",
            },
            {
              name: "Tricep Extensions",
              numSets: 3,
              sets: {
                create: Array.from({ length: 3 }, () => ({})),
              },
              suggestedReps: "8-12",
              weight: "25 lbs",
              notes:
                "Etiam et feugiat libero, a elementum mi. Fusce vulputate ante arcu, quis rhoncus nulla eleifend in. Sed vitae orci ac purus suscipit cursus. Proin ultrices port.",
            },
          ],
        },
        notes:
          "In general remember to pause at the top, and take 3 seconds coming down for each rep today.",
        currentWeek: false,
      },
      include: {
        exercises: true,
      } as Prisma.WorkoutInclude,
    });

    const workout7 = await prisma.workout.create({
      data: {
        day: "3",
        name: "Lower Body Hip Dominant",
        exercises: {
          create: [
            {
              name: "Deadlifts",
              numSets: 3,
              sets: {
                create: Array.from({ length: 3 }, () => ({})),
              },
              suggestedReps: "8-12",
              weight: "185 lbs",
              notes:
                "Etiam et feugiat libero, a elementum mi. Fusce vulputate ante arcu, quis rhoncus nulla eleifend in. Sed vitae orci ac purus suscipit cursus. Proin ultrices porta tortor, sit amet accumsan neque finibus sed",
            },
            {
              name: "Hip Thrusts",
              numSets: 3,
              sets: {
                create: Array.from({ length: 3 }, () => ({})),
              },
              suggestedReps: "8-12",
              weight: "135 lbs",
              notes:
                "Etiam et feugiat libero, a elementum mi. Fusce vulputate ante arcu, quis rhoncus nulla eleifend in. Sed vitae orci ac purus suscipit cursus. Proin ultrices porta tortor, sit amet accumsan neque finibus sed",
            },
            {
              name: "Leg Curls",
              numSets: 3,
              sets: {
                create: Array.from({ length: 3 }, () => ({})),
              },
              suggestedReps: "8-12",
              weight: "50 lbs",
              notes:
                "Etiam et feugiat libero, a elementum mi. Fusce vulputate ante arcu, quis rhoncus nulla eleifend in. Sed vitae orci ac purus suscipit cursus. Proin ultrices porta tortor, sit amet accumsan neque finibus sed",
            },
            {
              name: "Calf Raises",
              numSets: 3,
              sets: {
                create: Array.from({ length: 3 }, () => ({})),
              },
              suggestedReps: "8-12",
              weight: "50 lbs",
              notes:
                "Etiam et feugiat libero, a elementum mi. Fusce vulputate ante arcu, quis rhoncus nulla eleifend in.",
            },
          ],
        },
        notes:
          "In general remember to pause at the top, and take 3 seconds coming down for each rep today.",
        currentWeek: false,
      },
      include: {
        exercises: true,
      } as Prisma.WorkoutInclude,
    });

    const workout8 = await prisma.workout.create({
      data: {
        day: "4",
        name: "Upper Body Pull",
        exercises: {
          create: [
            {
              name: "Pull-ups",
              numSets: 3,
              sets: {
                create: Array.from({ length: 3 }, () => ({})),
              },
              suggestedReps: "8-12",
              weight: "0 lbs",
              notes:
                "Etiam et feugiat libero, a elementum mi. Fusce vulputate ante arcu, quis rhoncus nulla eleifend in. Sed vitae orci ac purus suscipit cursus. Proin ultrices porta tortor, sit amet accumsan neque finibus sed",
            },
            {
              name: "Bent-over Rows",
              numSets: 3,
              sets: {
                create: Array.from({ length: 3 }, () => ({})),
              },
              suggestedReps: "8-12",
              weight: "65 lbs",
              notes:
                "Etiam et feugiat libero, a elementum mi. Fusce vulputate ante arcu, quis rhoncus nulla eleifend in. Sed vitae orci ac purus suscipit cursus. Proin ultrices porta tortor, sit amet accumsan neque finibus sed",
            },
            {
              name: "Face Pulls",
              numSets: 3,
              sets: {
                create: Array.from({ length: 3 }, () => ({})),
              },
              suggestedReps: "8-12",
              weight: "20 lbs",
              notes:
                "Etiam et feugiat libero, a elementum mi. Fusce vulputate ante arcu, quis rhoncus nulla eleifend in. Sed vitae orci ac purus suscipit cursus. Proin ultrices porta tortor, sit amet accumsan neque finibus sed",
            },
            {
              name: "Bicep Curls",
              numSets: 3,
              sets: {
                create: Array.from({ length: 3 }, () => ({})),
              },
              suggestedReps: "8-12",
              weight: "25 lbs",
              notes:
                "Etiam et feugiat libero, a elementum mi. Fusce vulputate ante arcu, quis rhoncus nulla eleifend in. Sed.",
            },
          ],
        },
        notes:
          "In general remember to pause at the top, and take 3 seconds coming down for each rep today.",
        currentWeek: false,
      },
      include: {
        exercises: true,
      } as Prisma.WorkoutInclude,
    });

    console.log("Seed script executed successfully!");
  } catch (error) {
    console.error("Error executing seed script:", error);
  }
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
