import React from "react";

const FeedbackCard = ({ name, role, rating, feedback }) => (
  <div className="shadow p-6 border rounded-lg border-primary hover:bg-primary hover:text-white group transition-all">
    <div className="flex items-center mb-4">
      <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
      <div>
        <h4 className="font-semibold text-xl">{name}</h4>
        <p className="text-gray-600 group-hover:text-white">{role}</p>
      </div>
      <div className="ml-auto text-secondary group group-hover:text-white  font-bold">
        {rating} <span>★</span>
      </div>
    </div>
    <p className="text-gray-70 group-hover:text-gray-200">{feedback}</p>
  </div>
);

const FeedbackSection = () => (
  <div className="pt-32">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 gap-16 flex flex-col">
      <div className="skill-row1 flex gap-32 items-center m:flex-col m:gap-6">
        <h1 className="text-5xl w-1/2 font-bold m:w-full m:text-3xl">
          Amazing <span className="text-primary">feedback</span> from my{" "}
          <span className="text-primary">clients</span>
        </h1>
        <p className="w-1/2 m:w-full">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec quis
          sem sit amet dui venenatis efficitur. Aliquam commodo mi semper metus
          euis mod, ac tincidunt risus molestie.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <FeedbackCard
          name="Steve Raymond"
          role="Freelancer"
          rating="4.8"
          feedback="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet null in odio ves tibulum porta. Quisque tempus nibh ut egestas pretiu. Sed suscipit efficitur dui vel interdum."
        />
        <FeedbackCard
          name="Steve Raymond"
          role="Freelancer"
          rating="4.8"
          feedback="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet null in odio ves tibulum porta. Quisque tempus nibh ut egestas pretiu. Sed suscipit efficitur dui vel interdum."
        />
        <FeedbackCard
          name="Steve Raymond"
          role="Freelancer"
          rating="4.8"
          feedback="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet null in odio ves tibulum porta. Quisque tempus nibh ut egestas pretiu. Sed suscipit efficitur dui vel interdum."
        />
        <FeedbackCard
          name="Steve Raymond"
          role="Freelancer"
          rating="4.8"
          feedback="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet null in odio ves tibulum porta. Quisque tempus nibh ut egestas pretiu. Sed suscipit efficitur dui vel interdum."
        />
        <FeedbackCard
          name="Steve Raymond"
          role="Freelancer"
          rating="4.8"
          feedback="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet null in odio ves tibulum porta. Quisque tempus nibh ut egestas pretiu. Sed suscipit efficitur dui vel interdum."
        />
        <FeedbackCard
          name="Steve Raymond"
          role="Freelancer"
          rating="4.8"
          feedback="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet null in odio ves tibulum porta. Quisque tempus nibh ut egestas pretiu. Sed suscipit efficitur dui vel interdum."
        />
      </div>
    </div>
  </div>
);

export default FeedbackSection;
