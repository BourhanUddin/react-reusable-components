import { useForm } from "react-hook-form";
import cn from "../../utils/cn";

const NormalForm = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  const double = true;
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={cn("border border-red-400 max-w-md p-5 mx-auto", {
        "max-w-5xl": double,
        "max-w-md": !double,
      })}
    >
      <div
        className={cn(
          "border p-3 border-blue-500 grid grid-cols-1 justify-items-center ",
          {
            "md:grid-cols-2": double,
          }
        )}
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
        </div>
        <div className="w-full max-w-md">
          <label className="block w-full" htmlFor="name">
            Email
          </label>
          <input
            className="rounded-sm w-full"
            type="text"
            id="name"
            {...register("name")}
          />
        </div>
        <div className="w-full max-w-md">
          <label className="block w-full" htmlFor="name">
            password
          </label>
          <input
            className="rounded-sm w-full"
            type="text"
            id="name"
            {...register("name")}
          />
        </div>
        <div className="w-full max-w-md">
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
            password
          </label>
          <textarea name="" id="" cols="30" rows="10"></textarea>
        </div>
      </div>
    </form>
  );
};

export default NormalForm;
