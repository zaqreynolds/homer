// import { useState } from "react";
// import { Card, CardContent } from "../../../components/ui/card";
import { ExerciseDTO, SetDTO, ExerciseCardPropsDTO } from "../types";
// import { Button } from "@/components/ui/button";
// import { ChevronUpIcon } from "@radix-ui/react-icons";
import { PrismaClient } from "@prisma/client";
import ExerciseCardCC from "./ExerciseCardCC";

const ExerciseCard: React.FC<ExerciseCardPropsDTO> = async (
  props: ExerciseCardPropsDTO
) => {
  const { exercise } = props;
  const prisma = new PrismaClient();

  const sets = (await prisma.set.findMany({
    where: {
      exerciseId: exercise.id,
    },
  })) as SetDTO[];

  console.log("sets", sets);

  return <ExerciseCardCC exercise={exercise} sets={sets} />;
};

export default ExerciseCard;
