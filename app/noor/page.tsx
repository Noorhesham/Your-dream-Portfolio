import React from "react";
import MaxWidthWrapper from "../component/MaxWidthWrapper";
//rafce
const page = () => {
  return (
    <MaxWidthWrapper>
     <div className=" pt-20 flex flex-col ">
     <div className=" relative h-96 w-full">
        <img className="  absolute inset-0 w-full h-full" src="/drnurse4.png" />
      </div>
      <p className="">
        {" "}
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos at accusamus, similique qui repellendus aperiam
        officiis necessitatibus! Accusantium distinctio, eum unde dolores consequuntur quis et tenetur quae nostrum
        praesentium beatae!
      </p>
     </div>
    </MaxWidthWrapper>
  );
};

export default page;
