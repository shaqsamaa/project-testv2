import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form"
/*import {
  SelectContent,
  SelectItem,
  Select,
} from "@/components/ui/select"*/
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Plus } from 'lucide-react';
import { Checkbox } from '@/components/ui/checkbox';

const firstsource = [
  {
    id: "adamson job fair",
    label: "Adamson Job Fair",
  },
  {
    id: "home",
    label: "Home",
  },
  {
    id: "applications",
    label: "Applications",
  },
  {
    id: "desktop",
    label: "Desktop",
  },
  {
    id: "downloads",
    label: "Downloads",
  },
  {
    id: "documents",
    label: "Documents",
  },
] as const


const AppSchema = z.object({
  lastname: z.string({message: "Last Name is Requried"}).max(255).min(1),
  firstname: z.string({message: "First Name is Requried"}).max(255).min(1),
  middlename: z.string({message: "Middle Name is Requried"}).max(255).min(1),
  year_graduated: z.coerce.number({ message: "Year must be a digit "})
  .min(1000, "Year graduated is reuired")
  .max(9999, "Year graduated must be 4 digits"),
  course: z.string({message: "Course is Requried"}).max(255).min(1),
  student_no: z.number({message: "Student Number is Requried"}).min(0).max(255),
  birth_date: z.coerce.date(),
  age: z.number({message: "Age is Requried"}),
  gender: z.enum(["M", "F", "O"], {message: "Gender is Requried"}),
  home_address: z.string({message: "Address is Requried"}).max(255).min(1),
  number: z.number({message: "Number is Requried"}).min(1).max(255),
  telephone_number: z.number({message: "Number is Requried"}).min(1).max(255),
  mobile_number: z.number().min(10, 'Invalid phone number'),
  email: z.string({message: "Email is Requried"}).email().min(1).max(255),
  current_job_position: z.string().max(255).min(1),
  company_affliation: z.string().max(255).min(1),
  company_address: z.string().max(255).min(1),
  apporoximate_monthly_salary: z.number().min(1).max(255),
  company: z.string().min(1).max(255),
  employed6months: z.enum(["Yes", "No"]),
  firstsource: z.enum(["Adamson Job Fair","Academic Department/Faculty Referral"])
});


type FormData = z.infer<typeof AppSchema>;


const App: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const { control,handleSubmit,formState: { errors }, reset, getValues} = useForm<FormData>({resolver: zodResolver(AppSchema),
  });

  const handleNext = () => setCurrentStep((prev) => prev + 1);
  const handlePrevious = () => setCurrentStep((prev) => prev - 1);


  const onSubmit = (data: FormData) => {
    console.log("Submitted data", data);
    alert('Form submitted successfully!');
    reset();
    setCurrentStep(1); 
  };

  const handleAddCompany =() =>{

  };

  const form = useForm<z.infer<typeof AppSchema>>({
    resolver: zodResolver(AppSchema),
  })

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
        <Form {...form}> 
          <FormField
          control={control}
          name="lastname"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Last Name</FormLabel>
              <FormControl>
                <Input placeholder="Enter your Last name" {...field} />
              </FormControl>
              <FormDescription>
              
              </FormDescription>
            </FormItem>
              )}
            />
        </Form>
          {errors.lastname && <p className="text-red-500 text-sm">{errors.lastname.message}</p>}
           </div>

              <div>
          <Form {...form}> 
            <FormField
            control={control}
            name="firstname"
            render={({ field }) => (
            <FormItem>
              <FormLabel>First Name</FormLabel>
              <FormControl>
                <Input placeholder="Enter your First name" {...field} />
              </FormControl>
              <FormDescription>

              </FormDescription>
            </FormItem>
              )}
            />
          </Form>
          {errors.firstname && <p className="text-red-500 text-sm">{errors.firstname.message}</p>}
           </div>

              <div>
          <Form {...form}> 
            <FormField
            control={control}
            name="middlename"
            render={({ field }) => (
            <FormItem>
              <FormLabel>Middle name</FormLabel>
              <FormControl>
                <Input placeholder="Enter your Middle name" {...field} />
              </FormControl>
            </FormItem>
              )}
            />
          </Form>
          {errors.middlename && <p className="text-red-500 text-sm">{errors.middlename.message}</p>}
           </div>
          
              <div>
          <Form {...form}> 
            <FormField
            control={control}
            name="year_graduated"
            render={({ field }) => (
            <FormItem>
              <FormLabel>Year Graduated</FormLabel>
              <FormControl>
                <Input type="number" placeholder="Enter your Year Graduated" {...field} />
              </FormControl>
            </FormItem>
              )}
            />
          </Form>
          {errors.year_graduated && <p className="text-red-500 text-sm">{errors.year_graduated.message}</p>}
           </div>

              <div>
          <Form {...form}> 
            <FormField
            control={control}
            name="course"
            render={({ field }) => (
            <FormItem>
              <FormLabel>Course</FormLabel>
              <FormControl>
                <Input  placeholder="Enter your Year Coruse" {...field} />
              </FormControl>
            </FormItem>
              )}
            />
          </Form>
          {errors.course && <p className="text-red-500 text-sm">{errors.course.message}</p>}
           </div>

              <div>
          <Form {...form}> 
            <FormField
            control={control}
            name="student_no"
            render={({ field }) => (
            <FormItem>
              <FormLabel>Student Number</FormLabel>
              <FormControl>
                <Input type="number" placeholder="Enter your Year student Number" {...field} />
              </FormControl>
            </FormItem>
              )}
            />
          </Form>
          {errors.student_no && <p className="text-red-500 text-sm">{errors.student_no.message}</p>}
           </div>

              <div>
          <Form {...form}> 
            <FormField
            control={control}
            name="birth_date"
            render={({ field }) => (
            <FormItem>
              <FormLabel>Birth Date</FormLabel>
              <FormControl>
                <Input type="date" placeholder="" {...field} />
              </FormControl>
            </FormItem>
              )}
            />
          </Form>
          {errors.birth_date && <p className="text-red-500 text-sm">{errors.birth_date.message}</p>}
           </div>

              <div>
          <Form {...form}> 
            <FormField
            control={control}
            name="age"
            render={({ field }) => (
            <FormItem>
              <FormLabel>Age</FormLabel>
              <FormControl>
                <Input type="number" placeholder="Enter your Age" {...field} />
              </FormControl>
            </FormItem>
              )}
            />
          </Form>
          {errors.age && <p className="text-red-500 text-sm">{errors.age.message}</p>}
           </div>

          <div>
          <Form {...form}> 
          <FormField
          control={control}
          name="gender"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Gender</FormLabel>
                <FormControl>
                <RadioGroup value={field.value}  onValueChange={field.onChange} className="flex space-x-4"  >
                <div className="flex space-x-4">
                    <div>
                      <RadioGroupItem value="Male" id="male" />
                        <Label htmlFor="male">Male</Label>
                    </div>
                    <div>
                      <RadioGroupItem value="Female" id="female" />
                        <Label htmlFor="female">Female</Label>
                      </div>
                </div>
                  </RadioGroup>
                  </FormControl>
            </FormItem>
              )}
            />
        </Form>
          {errors.gender && <p className="text-red-500 text-sm">{errors.gender.message}</p>}
          </div>

              <div>
            <Form {...form}> 
            <FormField
            control={control}
            name="home_address"
            render={({ field }) => (
            <FormItem>
              <FormLabel>Home Address</FormLabel>
              <FormControl>
                <Input placeholder="Enter your Home Address" {...field} />
              </FormControl>
            </FormItem>
              )}
            />
          </Form>
          {errors.home_address && <p className="text-red-500 text-sm">{errors.home_address.message}</p>}
            </div>

            <div>
            <Form {...form}> 
            <FormField
            control={control}
            name="telephone_number"
            render={({ field }) => (
              <FormItem>
              <FormLabel>Telephone Number</FormLabel>
              <FormControl>
                <Input type="number" placeholder="Enter your Telephone Number" {...field} />
              </FormControl>
            </FormItem>
              )}
            />
          </Form>
          {errors.telephone_number && <p className="text-red-500 text-sm">{errors.telephone_number.message}</p>}
          </div>

            <div>
            <Form {...form}> 
            <FormField
            control={control}
            name="mobile_number"
            render={({ field }) => (
              <FormItem>
              <FormLabel>Mobile Number</FormLabel>
              <FormControl>
                <Input type="number" placeholder="Enter your Mobile Number" {...field} />
              </FormControl>
            </FormItem>
              )}
            />
          </Form>
          {errors.mobile_number && <p className="text-red-500 text-sm">{errors.mobile_number.message}</p>}
          </div>
              <div>
            <Form {...form}> 
            <FormField
            control={control}
            name="email"
            render={({ field }) => (
              <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input type="email" placeholder="Enter your Email" {...field} />
              </FormControl>
            </FormItem>
              )}
            />
          </Form>
          {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
          </div>
              <div>
            <Form {...form}> 
            <FormField
            control={control}
            name="current_job_position"
            render={({ field }) => (
              <FormItem>
              <FormLabel>Current Job Position</FormLabel>
              <FormControl>
                <Input placeholder="Enter your Current Job Position" {...field} />
              </FormControl>
            </FormItem>
              )}
            />
          </Form>
          {errors.current_job_position && <p className="text-red-500 text-sm">{errors.current_job_position.message}</p>}
          </div>
               <div>
            <Form {...form}> 
            <FormField
            control={control}
            name="company_affliation"
            render={({ field }) => (
              <FormItem>
              <FormLabel>Company Affliation</FormLabel>
              <FormControl>
                <Input placeholder="Enter your Company Affliation" {...field} />
              </FormControl>
            </FormItem>
              )}
            />
          </Form>
          {errors.company_affliation && <p className="text-red-500 text-sm">{errors.company_affliation.message}</p>}
          </div>
              <div>
            <Form {...form}> 
            <FormField
            control={control}
            name="company_address"
            render={({ field }) => (
              <FormItem>
              <FormLabel>Company Affliation</FormLabel>
              <FormControl>
                <Input placeholder="Enter your Company Address" {...field} />
              </FormControl>
            </FormItem>
              )}
            />
          </Form>
          {errors.company_address && <p className="text-red-500 text-sm">{errors.company_address.message}</p>}
          </div>
              <div>
                <Form {...form}> 
            <FormField
            control={control}
            name="apporoximate_monthly_salary"
            render={({ field }) => (
              <FormItem>
              <FormLabel>Apporoximate Monthly Salary</FormLabel>
              <FormControl>
                <Input  type="decimal" placeholder="Enter your Apporoximate Monthly Salary" {...field} />
              </FormControl>
            </FormItem>
              )}
            />
          </Form>
            {errors.apporoximate_monthly_salary && <p className="text-red-500 text-sm">{errors.apporoximate_monthly_salary.message}</p>}
            </div>

            <Form {...form}> 
          <FormField
          control={control}
          name="employed6months"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Have you been employed immediately 6 months or less after graduation?</FormLabel>
                <FormControl>
                <RadioGroup value={field.value}  onValueChange={field.onChange} className="flex space-x-4"  >
                <div className="flex space-x-4">
                    <div>
                      <RadioGroupItem value="Yes" id="Yes" />
                        <Label htmlFor="Yes">Yes</Label>
                    </div>
                    <div>
                      <RadioGroupItem value="No" id="No" />
                        <Label htmlFor="No">No</Label>
                      </div>
                </div>
                  </RadioGroup>
                  </FormControl>
            </FormItem>
              )}
            />
        </Form>
        {errors.employed6months && <p className="text-red-500 text-sm">{errors.employed6months.message}</p>}

        <div>
          <Form {...form}> 
          <FormField
          control={control}
          name="firstsource"
          render={({ field }) => (
            <FormItem>
              <FormLabel>In your first employment,which of the following has been your source?</FormLabel>
                <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
                </FormControl>
            </FormItem>
              )}
            />
        </Form>
          {errors.gender && <p className="text-red-500 text-sm">{errors.gender.message}</p>}
          </div>
          </div>
          )}

          {/* Step 2 */}
          {currentStep === 2 && (
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="space-y-4">
                <div>
                <Form {...form}> 
                  <FormField
                  control={control}
                  name="company"
                  render={({ field }) => (
                  <FormItem>
                  <FormLabel>Company</FormLabel>
                  <FormControl>
                <Input placeholder="Enter your Company" {...field} />
              </FormControl>
            </FormItem>
              )}
            />
          </Form>
          <Button onClick={handleAddCompany} className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600 flex items-center space-x-2">
            <Plus />
              <span>Add Employment Record</span>
              </Button>
              {errors.company && <p className="text-red-500 text-sm">{errors.company.message}</p>}
              </div>

                <div>
                  <Label htmlFor="moblie_number" className="text-gray-600 font-medium">
                    Moblie Number
                  </Label>
                  <Controller
                    name="mobile_number"
                    control={control}
                    render={({ field }) => (
                      <Input {...field} type="number" placeholder="Enter your Moblie Number" />
                    )}
                  />
                  {errors.mobile_number && <p className="text-red-500 text-sm">{errors.mobile_number.message}</p>}
                </div>


              </div>
            </form>
          )}

          {/* Step 3: Confirmation */}
          {currentStep === 3 && (
            <div className="text-left space-y-4">
              <p className="text-lg font-semibold text-blue-700">Confirm Your Information</p>
              <p className="text-sm text-gray-600">Please review and confirm your details.</p>
              <p className="text-sm text-gray-600">Last Name: {formValues.lastname}</p>
              <p className="text-sm text-gray-600">First Name: {formValues.firstname}</p>
              <p className="text-sm text-gray-600">Middle Name: {formValues.middlename}</p>
              <p className="text-sm text-gray-600">Year Graduate: {formValues.year_graduated}</p>
              <p className="text-sm text-gray-600">Student Number: {formValues.student_no}</p>
              <p className="text-sm text-gray-600">Course: {formValues.course}</p>
              <p className="text-sm text-gray-600">Birth Date: {formValues.birth_date}</p>
              <p className="text-sm text-gray-600">Age: {formValues.age}</p>
              <p className="text-sm text-gray-600">Gender: {formValues.gender}</p>
              <p className="text-sm text-gray-600">Home Address: {formValues.home_address}</p>
              <p className="text-sm text-gray-600">Telephone Phone: {formValues.telephone_number}</p>
              <p className="text-sm text-gray-600">Mobile Number: {formValues.mobile_number}</p>
              <p className="text-sm text-gray-600">Current Job Position: {formValues.current_job_position}</p>
              <p className="text-sm text-gray-600">Company Affliation: {formValues.company_affliation}</p>
              <p className="text-sm text-gray-600">Company Address: {formValues.company_address}</p>
              <p className="text-sm text-gray-600">Apporoximate Monthly Salary: {formValues.apporoximate_monthly_salary}</p>
              <p className="text-sm text-gray-600">Company: {formValues.company}</p>
              <p className="text-sm text-gray-600">Have you been employed immediately 6 months or less after graduation?: {formValues.employed6months}</p>
              <p className="text-sm text-gray-600">In your first employment,which of the following has been your source?: {formValues.firstsource}</p>
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