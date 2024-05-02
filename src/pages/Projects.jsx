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
          imgSrc="https://private-user-images.githubusercontent.com/87843823/327329630-2ab382bf-b559-4219-8966-cd0460cd00b4.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MTQ2MzEyOTIsIm5iZiI6MTcxNDYzMDk5MiwicGF0aCI6Ii84Nzg0MzgyMy8zMjczMjk2MzAtMmFiMzgyYmYtYjU1OS00MjE5LTg5NjYtY2QwNDYwY2QwMGI0LnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDA1MDIlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwNTAyVDA2MjMxMlomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWRmNjdjZDM3ODg3MTBmNzZhNzUxMGVjY2NlMDY0OTQ4NjZiYmU4NzFhYmYwMmJiN2Y0YmYwYmUzZmMzYjQ4MjMmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.BO1WCVdGtUi5nDxlnaIpPlgh_5jYgBgDOCDiwnzgfy0"
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
