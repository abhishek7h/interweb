import { Card } from "flowbite-react";

const Projects = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center px-10 py-10">
        <Card
          href="https://github.com/abhishek7h/aniyiltemple"
          target="_blank"
          className="max-w-sm w-full h-auto rounded-lg duration-300 hover:scale-110"
          imgAlt="A screenshot of the landing page of aniyiltemple.org"
          imgSrc="https://scontent.fccj6-1.fna.fbcdn.net/v/t31.18172-8/415030_359448197462762_29979831_o.jpg?stp=dst-jpg_p720x720&_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_ohc=Jz_6ryLyxX0Ab6C-tNH&_nc_ht=scontent.fccj6-1.fna&oh=00_AfDsTJu31wjhigEVI0urvpZ0qFiAiR5cTXe4fRoXwhTWiw&oe=6637A428"
        >
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Website for Aniyil Temple
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
          className="max-w-sm w-full h-auto rounded-lg duration-300 hover:scale-110"
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
          className="max-w-sm w-full h-auto rounded-lg duration-300 hover:scale-110"
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
      <div className="flex flex-col justify-center items-center px-10 py-10">
        <Card
          href="https://github.com/abhishek7h/faces"
          className="max-w-sm w-full h-auto rounded-lg duration-300 hover:scale-110max-w-sm w-full h-auto rounded-lg duration-300 hover:scale-110"
          imgAlt="A screenshot of me with a cyan square detecting my face."
          imgSrc="https://res.cloudinary.com/practicaldev/image/fetch/s--_2v52RkY--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/7eafo61hjlv3k4jqg1h5.png"
        >
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Python Face Detection
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            Face detection software made with Python using OpenCV. Developed as
            a project for my school's coding competition. I won first prize for
            it.
          </p>
        </Card>
      </div>
    </>
  );
};

export default Projects;
