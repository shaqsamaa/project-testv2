import React, { useState, } from "react";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form"


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

  const form = useForm<z.infer<typeof AduuiSchema>>({
    resolver: zodResolver(AduuiSchema),
  })

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-r from-blue-100 to-blue-300 p-8">
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
          <Form {...form}> 
          <FormField
          control={form.control}
          name="lastname"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Last Name</FormLabel>
              <FormControl>
                <Input placeholder="Enter your Last name" {...field} />
              </FormControl>
            </FormItem>
              )}
            />
          </Form>
          </div>

          <div>
          <Form {...form}> 
          <FormField
          control={form.control}
          name="firstname"
          render={({ field }) => (
            <FormItem>
              <FormLabel>First Name</FormLabel>
              <FormControl>
                <Input placeholder="Enter your First Name" {...field} />
              </FormControl>
            </FormItem>
              )}
            />
          </Form>
          </div>

          <div>
          <Form {...form}> 
          <FormField
          control={form.control}
          name="middlename"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Middle Name</FormLabel>
              <FormControl>
                <Input placeholder="Enter your Middle Name" {...field} />
              </FormControl>
            </FormItem>
              )}
            />
          </Form>
          </div>

          <div>
          <Form {...form}> 
          <FormField
          control={form.control}
          name="birth_date"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Brithday</FormLabel>
              <FormControl>
                <Input type="date" placeholder="Enter your Brithday" {...field} />
              </FormControl>
            </FormItem>
              )}
            />
          </Form>
            </div>

          </div>
          ) : (
            <div className="space-y-4">
          <div>
          <Form {...form}> 
          <FormField
          control={form.control}
          name="student_no"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Student Number</FormLabel>
              <FormControl>
              <Input
                  id="student_no"
                  type="text"
                  placeholder="Enter your student number" 
                  className="mt-1 w-full"
                  pattern="\d*"
                  onChange={handleStudentIdChange} />
              </FormControl>
            </FormItem>
              )}
            />
          </Form>
          {studentIdError && <p className="text-red-500 text-sm mt-1">{studentIdError}</p>}
          </div>
          
          <div>
          <Form {...form}> 
          <FormField
          control={form.control}
          name="birth_date"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Brithday</FormLabel>
              <FormControl>
                <Input type="date" placeholder="" {...field} />
              </FormControl>
            </FormItem>
              )}
            />
          </Form>
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