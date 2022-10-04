import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* Main Container */}
      <div className="min-w-screen min-h-screen bg-gray-100">
        {/* Comments Card Container */}
        <section className="m-auto py-10 px-5 md:grid md:max-w-[1100px] md:grid-cols-12">
          {/* Card */}
          <div className="hidden bg-white md:col-span-1 md:col-start-1 md:block md:py-6">
            {/* Desktop Upvote */}
            <div className="flex justify-center">
              <div className="flex flex-col items-center gap-2 rounded-lg bg-gray-100 px-2 py-1">
                <span>+</span>
                <span>12</span>
                <span>-</span>
              </div>
            </div>
          </div>
          <div className="md:cols-start-3 bg-white px-4 py-6 md:col-span-11 md:py-6 md:pr-8">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <Image
                  src="/img/avatars/image-amyrobson.png"
                  alt=""
                  width="30"
                  height="30"
                />
                <span className="font-bold">amyrobson</span>
                <span className="text-gray-500">1 month ago</span>
              </div>
              {/* Desktop Reply */}
              <div className="hidden gap-2 md:flex">
                <span>↩️</span>
                <span>Reply</span>
              </div>
            </div>
            <div className="mt-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Doloremque numquam unde voluptates accusamus veritatis a tempore
              saepe dolore ab expedita ipsam minus reprehenderit animi
              reiciendis, perspiciatis, rem aperiam dolores quia! Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Dolor expedita fugit
              nihil dolorum, laborum quae libero minus error eius voluptatem ab
              eos vel atque. Itaque similique soluta architecto vitae quibusdam.
            </div>
            {/* Mobile Upvote & Reply */}
            <div className="mt-4 flex items-center justify-between md:hidden">
              <div className="flex gap-4 rounded-lg bg-gray-100 py-2 px-4">
                <span>+</span>
                <span>12</span>
                <span>-</span>
              </div>
              <div className="flex gap-2">
                <span>↩️</span>
                <span>Reply</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
