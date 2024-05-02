import { Card } from "flowbite-react";

const Projects = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center px-10 py-10">
        <Card
          href="https://github.com/abhishek7h/aniyiltemple"
          target="_blank"
          className="max-w-sm"
          imgAlt="A screenshot of the landing page of aniyiltemple.org"
          imgSrc="src/assets/aniyil-temple.png"
        >
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Website for a Temple
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            Made a website for a temple in my home-town. Used React JS and
            Tailwind CSS. Deployed with Netlify.
          </p>
        </Card>
      </div>
      <div className="flex flex-col justify-center items-center px-10 py-10">
        <Card
          href="https://github.com/abhishek7h/minecraft"
          className="max-w-sm"
          imgAlt="A screenshot from my Minecraft clone that displays a structure made with stone blocks that reads 'HI'"
          imgSrc="https://camo.githubusercontent.com/94d687b50e1d1205e4e7c2b018b17b937df85cd9c528cc6d220bda3bc36b33f8/68747470733a2f2f7062732e7477696d672e636f6d2f6d656469612f464a33396e485f61554141553747343f666f726d61743d6a7067266e616d653d6c61726765"
        >
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Minecraft Clone
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            A clone of Minecraft, made with Python using Ursina engine.
          </p>
        </Card>
      </div>
      <div className="flex flex-col justify-center items-center px-10 py-10">
        <Card
          href="https://github.com/abhishek7h/python"
          className="max-w-sm"
          imgAlt="A screenshot from my Minecraft clone that displays a structure made with stone blocks that reads 'HI'"
          imgSrc="https://thedailyguardian.com/wp-content/uploads/2024/02/chris-ried-ieic5Tq8YMk-unsplash-scaled.jpg"
        >
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Various Python Projects
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            A compilation of all projects I've made with Python. Includes games,
            math applications and more.
          </p>
        </Card>
      </div>
    </>
  );
};

export default Projects;
