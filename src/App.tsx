import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
/*import { FormField, FormItem, FormLabel, FormMessage } from './components/ui/form';*/
/*import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";*/

const AppSchema = z.object({
  lastname: z.string({message: "Last Name is Requried"}).max(255).min(1),
  firstname: z.string({message: "First Name is Requried"}).max(255).min(1),
  middlename: z.string({message: "Middle Name is Requried"}).max(255).min(1),
  year_graduated: z.coerce.number({ message: "Year must be a digit "})
  .min(1000, "Year graduated is reuired")
  .max(9999, "Year graduated must be 4 digits"),
  course: z.string({message: "Course is Requried"}).max(255).min(1),
  student_no: z.string({message: "Student Number is Requried"}).min(1).max(255),
  birth_date: z.coerce.date(),
  gender: z.string({message:"Gender is Requried"}).max(255).min(1),
  age: z.coerce.number({message: "Age is Requried"}),
  email: z.string().email('Invalid email format'),
  phone: z.string().min(10, 'Invalid phone number'),
});


type FormData = z.infer<typeof AppSchema>;

const App: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const { control,handleSubmit,formState: { errors }, reset, getValues} = useForm<FormData>({
    resolver: zodResolver(AppSchema),
  });

  const handleNext = () => setCurrentStep((prev) => prev + 1);
  const handlePrevious = () => setCurrentStep((prev) => prev - 1);

  const onSubmit = (data: FormData) => {
    console.log("Submitted data", data);
    alert('Form submitted successfully!');
    reset();
    setCurrentStep(1); 
  };

  const formValues = getValues();

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-r from-blue-100 to-blue-300 p-4">
      <div className="w-full max-w-lg">
        <h2 className="text-2xl sm:text-3xl font-extrabold mb-6 text-center text-blue-800">Adamson University Tracer Survey Form</h2>

        {/* Step Indicator */}
        <div className="flex justify-center mb-6 space-x-4">
          {['Step 1', 'Step 2', 'Step 3'].map((step, index) => (
            <div
              key={index}
              className={`relative flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 ${
                currentStep >= index + 1 ? 'bg-blue-500 text-white border-blue-500' : 'bg-white text-blue-500 border-blue-300'
              } transition duration-200`}
            >
              <span className="text-xs sm:text-sm font-semibold">{index + 1}</span>
            </div>
          ))}
        </div>

      <Card className="bg=white shadow-lg rounded-lg p-4">
        <CardContent className="space-y-6">
          {/* Step 1 */}
          {currentStep === 1 && (
              <div className="space-y-4">
                <div>
                  <Label htmlFor="lastname" className="text-gray-600 font-medium"> Last Name</Label>
                  <Controller
                    name="lastname"
                    control={control}
                    render={({ field }) => (
                      <Input {...field} type="text" placeholder="Enter your Last Name" />
                    )}
                  />
                  {errors.lastname && <p className="text-red-500 text-sm">{errors.lastname.message}</p>}
                </div>

                <div>
                  <Label htmlFor="firstname" className="text-gray-600 font-medium">First Name</Label>
                  <Controller
                    name="firstname"
                    control={control}
                    render={({ field }) => (
                      <Input {...field} type="text" placeholder="Enter your First Name" />
                    )}
                  />
                  {errors.firstname && <p className="text-red-500 text-sm">{errors.firstname.message}</p>}
                </div>

                <div>
                  <Label htmlFor="middlename" className="text-gray-600 font-medium">Middle name</Label>
                  <Controller
                    name="middlename"
                    control={control}
                    render={({ field }) => (
                      <Input {...field} type ="text" placeholder="Enter your Middle name" />
                    )}
                  />
                  {errors.middlename && <p className="text-red-500 text-sm">{errors.middlename.message}</p>}
                </div>

                <div>
                  <Label htmlFor="year_graduated" className="text-gray-600 font-medium">Year Graduated</Label>
                  <Controller
                  name="year_graduated"
                  control={control}
                  render={({field}) => <Input {...field} type="number" placeholder="Enter Graduation Year" />}
                  />
                  {errors.year_graduated && <p className="text-red-500 text-sm">{errors.year_graduated.message}</p>}
                </div>

                <div>
                  <Label htmlFor="course" className="text-gray-600 font-medium">Course</Label>
                  <Controller
                    name="course"
                    control={control}
                    render={({ field }) => (
                      <Input {...field} placeholder="Enter your course" />
                    )}
                  />
                  {errors.course && <p className="text-red-500 text-sm">{errors.course.message}</p>}
                </div>

                <div>
                  <Label htmlFor="student_no" className="text-gray-600 font-medium">Student Number</Label>
                  <Controller
                    name="student_no"
                    control={control}
                    render={({ field }) => (
                      <Input {...field} type="number" placeholder="Enter your Student Number" />
                    )}
                  />
                  {errors.student_no && <p className="text-red-500 text-sm">{errors.student_no.message}</p>}
                </div>

                <div>
                <Label htmlFor="birth_date" className="text-gray-600 font-medium">Birth Date</Label>
                  <Controller
                    name="birth_date"
                    control={control}
                    render={({ field }) => <Input {...field} type="date" />}
                  />
                  {errors.birth_date && <p className="text-red-500 text-sm">{errors.birth_date.message}</p>}
                </div>

                <div>
                <Label htmlFor="gender" className="text-gray-600 font-medium">Gender</Label>
                  <Controller
                    name="gender"
                    control={control}
                    render={({ field }) => <Input {...field} type="text" placeholder="Enter your gender" />}
                   />
                  {errors.gender && <p className="text-red-500 text-sm">{errors.gender.message}</p>}
                </div>

                <div>
                  <Label htmlFor="age" className="text-gray-600 font-medium">Age</Label>
                  <Controller
                    name="age"
                    control={control}
                    render={({ field }) => (
                      <Input {...field} type="number" placeholder="Enter your Age" />
                    )}
                  />
                  {errors.age && <p className="text-red-500 text-sm">{errors.age.message}</p>}
                </div>
              </div>
            )}

          {/* Step 2 */}
          {currentStep === 2 && (
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="email" className="text-gray-600 font-medium">
                    Email
                  </Label>
                  <Controller
                    name="email"
                    control={control}
                    render={({ field }) => (
                      <Input {...field} type="email" placeholder="Enter your email" />
                    )}
                  />
                  {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
                </div>

                <div>
                  <Label htmlFor="phone" className="text-gray-600 font-medium">
                    Phone
                  </Label>
                  <Controller
                    name="phone"
                    control={control}
                    render={({ field }) => (
                      <Input {...field} placeholder="Enter your phone number" />
                    )}
                  />
                  {errors.phone && <p className="text-red-500 text-sm">{errors.phone.message}</p>}
                </div>
              </div>
            </form>
          )}

          {/* Step 3: Confirmation */}
          {currentStep === 3 && (
            <div className="text-center space-y-4">
              <p className="text-lg font-semibold text-blue-700">Confirm Your Information</p>
              <p className="text-sm text-gray-600">Please review and confirm your details.</p>
              <p className="text-sm text-gray-600">Last Name: {formValues.lastname}</p>
              <p className="text-sm text-gray-600">First Name: {formValues.firstname}</p>
              <p className="text-sm text-gray-600">Middle Name: {formValues.middlename}</p>
              <p className="text-sm text-gray-600">Year Graduate: {formValues.year_graduated}</p>
              <p className="text-sm text-gray-600">Student Number: {formValues.student_no}</p>
              <p className="text-sm text-gray-600">Course: {formValues.course}</p>
              <p className="text-sm text-gray-600">Birth Date: {formValues.birth_date}</p>
              <p className="text-sm text-gray-600">Gender: {formValues.gender}</p>
              <p className="text-sm text-gray-600">Age: {formValues.age}</p>
              <p className="text-sm text-gray-600">Email: [Your Email]</p>
              <p className="text-sm text-gray-600">Phone: [Your Phone]</p>
            </div>
          )}
          </CardContent>

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-4">
          {currentStep > 1 && (
              <Button variant="secondary" onClick={handlePrevious} className="px-4 py-2 text-gray-700">
                Previous
              </Button>
            )}
            {currentStep < 3 ? (
              <Button onClick={handleNext} className="px-4 py-2 bg-blue-600 text-white hover:bg-blue-700">
                Next
              </Button>
            ) : (
              <Button onClick={handleSubmit(onSubmit)} className="w-full bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                Submit
              </Button>
            )}
          </div>
      </Card>
    </div>
    </div>
  );
};

App.displayName="App"

export default App;