"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronUpIcon } from "@radix-ui/react-icons";
import { useState } from "react";
import { ExerciseCardPropsDTO, ExerciseDTO, SetDTO } from "../types";

const ExerciseCardCC = ({ exercise, sets }: ExerciseCardPropsDTO) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <Card className="flex-row w-full my-2">
      <CardContent className="flex flex-col py-2">
        <div className="flex w-full transition-transform duration-200">
          <div className="flex items-center w-2/6">{exercise.name}</div>
          <div className="flex items-center w-1/6">
            {exercise.numSets}
            <div className="text-sm pl-1"> sets</div>
          </div>
          {exercise.suggestedReps && (
            <div className="flex items-center w-2/6 pl-4">
              {exercise.suggestedReps} <div className="text-sm pl-1"> reps</div>
            </div>
          )}
          {exercise.rest && (
            <div className="flex items-center w-1/6 pl-4">
              {exercise.rest}
              <div className="text-sm"> s</div>
            </div>
          )}
          <Button variant="ghost" className="px-0 ml-2" onClick={toggleOpen}>
            <ChevronUpIcon
              className={`h-5 w-5 transition-transform duration-300 ${
                isOpen ? "rotate-180" : ""
              }`}
            />
          </Button>
        </div>
        {isOpen && <div>hi</div>}
      </CardContent>
    </Card>
  );
};

export default ExerciseCardCC;
