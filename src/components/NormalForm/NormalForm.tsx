import { zodResolver } from "@hookform/resolvers/zod";
import { FieldValues, useForm } from "react-hook-form";
import { z } from "zod";
import cn from "../../utils/cn";

const singUpSchema = z.object({
  name: z.string().min(5, { message: "Name is required " }),
  email: z.string().email().min(1, { message: "Email is required" }),
  password: z.string().min(8, "password must be 8 characters"),
});
type TNormalForm = z.infer<typeof singUpSchema>

const NormalForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TNormalForm>({
    resolver: zodResolver(singUpSchema),
  });

  const onSubmit = (data : FieldValues) => {
    console.log(data);
  };

  const double = true;
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={cn(
        "border border-gray-200 rounded-lg shadow-sm max-w-md p-5 mx-auto",
        {
          "max-w-5xl": double,
          "max-w-md": !double,
        }
      )}
    >
      <div
        className={cn(" p-3 grid grid-cols-1 justify-items-center ", {
          "md:grid-cols-2": double,
        })}
      >
        <div className="w-full max-w-md">
          <label className="block w-full " htmlFor="name">
            Name
          </label>
          <input
            className="rounded-sm w-full"
            type="text"
            id="name"
            {...register("name")}
          />
          {errors.name && (
            <span className="text-xs text-red-500">{errors.name.message}</span>
          )}
        </div>
        <div className="w-full max-w-md">
          <label className="block w-full" htmlFor="email">
            Email
          </label>
          <input
            className="rounded-sm w-full"
            type="text"
            id="email"
            {...register("email")}
          />
          {errors.email && (
            <span className="text-xs text-red-500">{errors.email.message}</span>
          )}
        </div>
        <div className="w-full max-w-md">
          <label className="block w-full" htmlFor="password">
            password
          </label>
          <input
            className="rounded-sm w-full"
            type="text"
            id="password"
            {...register("password", { minLength: 8 })}
          />
          {errors.password && (
            <span className="text-xs text-red-500">
              {errors.password.message}
            </span>
          )}
        </div>
        {/* <div className="w-full max-w-md">
          <label className="block w-full" htmlFor="name">
            password
          </label>
          <select name="" id="">
            <option value=""> one</option>
            <option value=""> two</option>
            <option value=""> three</option>
            <option value=""> four</option>
          </select>
        </div>
        <div className="w-full max-w-md">
          <label className="block w-full" htmlFor="name">
            Text here
          </label>
          <textarea name="" id=""></textarea>
        </div>
        <div className="w-full max-w-md">
          <label className="block w-full" htmlFor="name">
            checkbox
          </label>
          <input type="checkbox" id="" />
        </div> */}
      </div>
      <div
        className={cn("my-6 p-3 grid grid-cols-1 justify-items-center ", {
          "md:grid-cols-2": double,
        })}
      >
        <div className=" w-full max-w-md col-start-1  md:col-start-2 flex justify-end">
          <button className="btn btn-primary w-full md:w-2/6">Submit</button>
        </div>
      </div>
    </form>
  );
};

export default NormalForm;
