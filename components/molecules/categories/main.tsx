import { FC, Fragment } from "react";

const data: { name: string; image: string }[] = [
  {
    name: "School Uniforms",
    image:
      "https://www.themefie.com/html_template/dominie/assets/img/category/1.png",
  },
  {
    name: "Text Books",
    image:
      "https://www.themefie.com/html_template/dominie/assets/img/category/2.png",
  },
  {
    name: "Computers",
    image:
      "https://www.themefie.com/html_template/dominie/assets/img/category/3.png",
  },
  {
    name: "Note Books",
    image:
      "https://www.themefie.com/html_template/dominie/assets/img/category/4.png",
  },
];

const CategoryCourses = () => {
  return (
    <Fragment>
      <div className=" max-w-7xl mx-auto px-2 sm:px-4 lg:px-8 py-5">
        <div className="grid grid-cols-4 gap-4">
          {data.map((course: { name: string; image: string }, i: number) => (
            <Fragment key={i}>
              <div className={"col-span-4 sm:col-span-4 md:col-span-1"}>
                <SingleCategoryComponent
                  name={course?.name}
                  image={course?.image}
                />
              </div>
            </Fragment>
          ))}
        </div>
      </div>
    </Fragment>
  );
};

const SingleCategoryComponent: FC<{ name: string; image: string }> = ({
  image,
  name,
}) => {
  return (
    <Fragment>
      <div
        className={
          "h-48 rounded-none w-auto flex flex-col justify-center items-center bg-black"
        }
        style={{
          backgroundImage: 'url("' + image + '")',
        }}
      >
        <h1 className={"text-white text-lg font-medium"}>{name}</h1>
        <p className={"text-sm text-white mt-1 font-light"}>
          Over 900 Products
        </p>
      </div>
    </Fragment>
  );
};

export default CategoryCourses;
