"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronUpIcon } from "@radix-ui/react-icons";
import { useState } from "react";
import { ExerciseCardPropsDTO, ExerciseDTO, SetDTO } from "../types";
import { Checkbox } from "@/components/ui/checkbox";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

const ExerciseCardCC = ({ exercise, sets }: ExerciseCardPropsDTO) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = () => setIsOpen(!isOpen);
  const [selectedValues, setSelectedValues] = useState(
    sets?.map(() => "") || []
  );
  console.log("sets", sets);

  const handleCheckboxToggle = (index: number, value: string) => {
    setSelectedValues((prev) => {
      const newValues = [...prev];
      newValues[index] = value === newValues[index] ? "" : value;
      return newValues;
    });
  };

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
        {isOpen && (
          <>
            <div className="grid grid-cols-3 items-center text-center">
              <div className="col-span-1"></div>
              <div className="text-xs col-span-1">Success</div>
              <div className="text-xs col-span-1">Failure</div>
            </div>
            {sets?.map((set, index) => (
              <div
                key={set.id}
                className="grid grid-cols-3 items-center text-center"
              >
                <div className="col-span-1">Set {index + 1}</div>
                <ToggleGroup
                  type="single"
                  value={selectedValues[index]}
                  onValueChange={(value) => handleCheckboxToggle(index, value)}
                  className="col-span-2 flex justify-around"
                >
                  <ToggleGroupItem value="success" aria-label="Toggle success">
                    <Checkbox checked={selectedValues[index] === "success"} />
                  </ToggleGroupItem>
                  <ToggleGroupItem value="failure" aria-label="Toggle failure">
                    <Checkbox checked={selectedValues[index] === "failure"} />
                  </ToggleGroupItem>
                </ToggleGroup>
              </div>
            ))}
            <div className="flex-col">
              <div className="text-sm my-2">Notes:</div>
              <div className="text-sm">{exercise.notes}</div>
            </div>
          </>
        )}
      </CardContent>
    </Card>
  );
};

export default ExerciseCardCC;
