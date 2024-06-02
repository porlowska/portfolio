import Link from "next/link";

const ProjectCard = () => {
    return (
      <div class="max-w-[350px] bg-gray-700 rounded overflow-hidden shadow-lg">
        <img
          class="w-full"
          src="/pic/certificate.png"
          alt="Project"
        />
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2">The Coldest Sunset</div>
          <p class="text-primary text-base">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Voluptatibus quia, nulla! Maiores et perferendis eaque,
            exercitationem praesentium nihil.
          </p>
        </div>
        <div class="px-6 pt-4 pb-2">
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #photography
          </span>
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #travel
          </span>
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #winter
          </span>
          <div className="flex flex-row justify-end gap-2">
          <Link href="https://github.com/porlowska" passHref>
          <img src="/favicons/github.svg" alt="GitHub" width={24} height={24} />
        </Link>
        <Link href="http://www.linkedin.com/in/polly-orlowska" passHref>
          <img
            src="/favicons/linkedin.svg"
            alt="LinkedIn"
            width={24}
            height={24}
          />
        </Link>
        <Link href="https://wa.me/447494532324" passHref>
          <img
            src="/favicons/deployed.svg"
            alt="Deployed website"
            width={24}
            height={24}
          />
        </Link>
        </div>
        </div>
      </div>
  );
}


export default Card;