"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronUpIcon, CheckboxIcon, BoxIcon } from "@radix-ui/react-icons";
import { useEffect, useState } from "react";
import { ExerciseCardPropsDTO } from "../types";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

const ExerciseCardCC = ({ exercise, sets }: ExerciseCardPropsDTO) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = () => setIsOpen(!isOpen);
  const [selectedValues, setSelectedValues] = useState(
    sets?.map(() => "") || []
  );
  console.log("sets", sets);
  console.log("exercise", exercise);
  const [inProgress, setInProgress] = useState(false);
  const [completed, setCompleted] = useState(false);
  const [success, setSuccess] = useState(false);
  const [anyFailure, setAnyFailure] = useState(false);

  const handleCheckboxToggle = (index: number, value: string) => {
    setSelectedValues((prev) => {
      const newValues = [...prev];
      newValues[index] = value === newValues[index] ? "" : value;
      return newValues;
    });
  };

  useEffect(() => {
    const anySetInProgress = selectedValues.some((value) => value !== "");
    setInProgress(anySetInProgress);
  }, [selectedValues]);

  useEffect(() => {
    const allSetsCompleted = selectedValues.every(
      (value) => value === "success" || value === "failure"
    );
    const allSuccess = selectedValues.every((value) => value === "success");
    const anyFails = selectedValues.some((value) => value === "failure");

    setCompleted(allSetsCompleted);
    setInProgress(!allSetsCompleted);
    setSuccess(allSuccess);
    setAnyFailure(anyFails);
  }, [selectedValues]);

  return (
    <Card
      className={`flex-row w-full my-2 ${inProgress ? "border-black" : ""} ${
        success ? "border-green-600" : ""
      } ${anyFailure ? "border-orange-500" : ""} ${
        !isOpen && success ? "bg-green-100" : ""
      } ${!isOpen && anyFailure ? "bg-orange-100" : ""}`}
    >
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
          <Button
            variant="ghost"
            className="px-0 ml-2 focus:bg-transparent"
            onClick={toggleOpen}
          >
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
                <div className="col-span-2 flex justify-around">
                  <ToggleGroup
                    type="single"
                    value={selectedValues[index]}
                    onValueChange={(value) =>
                      handleCheckboxToggle(index, value)
                    }
                    className="flex justify-around w-full "
                  >
                    <ToggleGroupItem
                      value="success"
                      aria-label="Toggle success"
                      className="flex justify-center items-center"
                    >
                      {selectedValues[index] === "success" ? (
                        <CheckboxIcon className="text-green-500 h-5 w-5" />
                      ) : (
                        <BoxIcon className="text-gray-500 h-5 w-5" />
                      )}
                    </ToggleGroupItem>
                    <ToggleGroupItem
                      value="failure"
                      aria-label="Toggle failure"
                      className="flex justify-center items-center"
                    >
                      {selectedValues[index] === "failure" ? (
                        <CheckboxIcon className="text-red-500 h-5 w-5" />
                      ) : (
                        <BoxIcon className="text-gray-500 h-5 w-5" />
                      )}
                    </ToggleGroupItem>
                  </ToggleGroup>
                </div>
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
