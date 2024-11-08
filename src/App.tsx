import React, { useState, } from "react";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { z } from "zod";

export const AduuiSchema = z.object({
  student_no: z.string().min(1).max(255),
  lastname: z.string().min(1).max(255),
  firstname: z.string().min(1).max(255),
  middlename: z.string().min(1).max(255),
  birth_date: z.coerce.date(),
});

function Aduui() {
  const [useStudentNumber, setUseStudentNumber] = useState(false);
  const [studentIdError, setStudentIdError] = useState("");

  const handleCheckboxChange = () => {
    setUseStudentNumber((prev) => !prev);
  };

  const handleStudentIdChange = (e) => {
    const value = e.target.value;
    if (!/^\d*$/.test(value)) {
      setStudentIdError("Student ID must be numeric.");
    } else {
      setStudentIdError("");
    }
  };

  return (
    <div className="h-screen w-screen bg-blue-200 flex justify-center items-center">
      <Card className="w-1/3">
        <CardContent className="p-6 space-y-6">
          <div className="flex items-center space-x-2">
            <Checkbox id="studentno" onCheckedChange={handleCheckboxChange} />
            <Label htmlFor="studentno" className="font-semibold text-gray-700">
              Use Student No
            </Label>
          </div>

          {!useStudentNumber ? (
            <div className="space-y-4">
              <div>
                <Label htmlFor="lastName" className="text-gray-600">
                  Last Name
                </Label>
                <Input id="lastName" type="text" placeholder="Enter your last name" className="mt-1 w-full" />
              </div>

              <div>
                <Label htmlFor="firstName" className="text-gray-600">
                  First Name
                </Label>
                <Input id="firstName" type="text" placeholder="Enter your first name" className="mt-1 w-full" />
              </div>

              <div>
                <Label htmlFor="middleName" className="text-gray-600">
                  Middle Name
                </Label>
                <Input id="middleName" type="text" placeholder="Enter your middle name" className="mt-1 w-full" />
              </div>

              <div>
                <Label htmlFor="birthday" className="text-gray-600">
                  Birthday
                </Label>
                <Input id="birthday" type="date" className="mt-1 w-full" />
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              <div>
                <Label htmlFor="student_no" className="text-gray-600">
                  Student Number
                </Label>
                <Input
                  id="student_no"
                  type="text"
                  placeholder="Enter your student number"
                  className="mt-1 w-full"
                  pattern="\d*"
                  onChange={handleStudentIdChange}
                />
                {studentIdError && <p className="text-red-500 text-sm mt-1">{studentIdError}</p>}
              </div>

              <div>
                <Label htmlFor="birthday" className="text-gray-600">
                  Birthday
                </Label>
                <Input id="birthday" type="date" className="mt-1 w-full" />
              </div>
            </div>
          )}

          <Button type="submit" className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
            Submit
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}

Aduui.displayName = "Aduui";

export default Aduui;