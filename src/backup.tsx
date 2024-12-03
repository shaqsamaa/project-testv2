import React, { useState } from "react";
import { useForm, Controller, useFieldArray } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";

const AppSchema = z.object({
  employmentRecords: z
    .array(
      z.object({
        company: z.string().min(1, "Company name is required"),
        jobPosition: z.string().min(1, "Job position is required"),
        duration: z.string().min(1, "Duration is required"),
      })
    )
    .nonempty("At least one employment record is required"),
});

type FormData = z.infer<typeof AppSchema>;

const App: React.FC = () => {
  const { control, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(AppSchema),
    defaultValues: {
      employmentRecords: [
        { company: "", jobPosition: "", duration: "" },
      ],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "employmentRecords",
  });

  const onSubmit = (data: FormData) => {
    console.log("Submitted Data:", data);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-3xl">
        <h2 className="text-2xl font-bold mb-6 text-center text-blue-800">
          Employment Records Form
        </h2>

        <form onSubmit={handleSubmit(onSubmit)}>
          <Card className="bg-white shadow-lg rounded-lg p-5">
            <CardContent className="space-y-6">
              <h3 className="text-xl font-semibold text-gray-800">
                Employment Records
              </h3>
              {fields.map((field, index) => (
                <div key={field.id} className="space-y-4 border-b pb-4">
                  <div>
                    <Label htmlFor={`employmentRecords.${index}.company`}>
                      Company Name
                    </Label>
                    <Controller
                      control={control}
                      name={`employmentRecords.${index}.company`}
                      render={({ field }) => (
                        <Input
                          placeholder="Enter company name"
                          {...field}
                        />
                      )}
                    />
                    {errors.employmentRecords?.[index]?.company && (
                      <p className="text-red-500 text-sm">
                        {errors.employmentRecords[index].company.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <Label htmlFor={`employmentRecords.${index}.jobPosition`}>
                      Job Position
                    </Label>
                    <Controller
                      control={control}
                      name={`employmentRecords.${index}.jobPosition`}
                      render={({ field }) => (
                        <Input
                          placeholder="Enter job position"
                          {...field}
                        />
                      )}
                    />
                    {errors.employmentRecords?.[index]?.jobPosition && (
                      <p className="text-red-500 text-sm">
                        {errors.employmentRecords[index].jobPosition.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <Label htmlFor={`employmentRecords.${index}.duration`}>
                      Duration
                    </Label>
                    <Controller
                      control={control}
                      name={`employmentRecords.${index}.duration`}
                      render={({ field }) => (
                        <Input
                          placeholder="Enter duration (e.g., 2 years)"
                          {...field}
                        />
                      )}
                    />
                    {errors.employmentRecords?.[index]?.duration && (
                      <p className="text-red-500 text-sm">
                        {errors.employmentRecords[index].duration.message}
                      </p>
                    )}
                  </div>

                  <div className="text-right">
                    <Button
                      variant="destructive"
                      onClick={() => remove(index)}
                      className="mt-2"
                    >
                      Remove
                    </Button>
                  </div>
                </div>
              ))}
              <div className="flex items-end gap-2">
                
              </div>
              <Button
                variant="secondary"
                onClick={() =>
                  append({ company: "", jobPosition: "", duration: "" })
                }
                className="mt-4"
              >
                Add Employment Record
              </Button>
            </CardContent>

            <div className="mt-6 text-right">
              <Button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-lg">
                Submit
              </Button>
            </div>
          </Card>
        </form>
      </div>
    </div>
  );
};

export default App;
