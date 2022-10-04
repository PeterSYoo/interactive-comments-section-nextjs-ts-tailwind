import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* Main Container */}
      <div className="min-h-screen min-w-screen bg-gray-100">
        {/* Comments Card Container */}
        <section className="py-10 px-5">
          {/* Card */}
          <div className="bg-white p-3">
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
            <div className="mt-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Doloremque numquam unde voluptates accusamus veritatis a tempore
              saepe dolore ab expedita ipsam minus reprehenderit animi
              reiciendis, perspiciatis, rem aperiam dolores quia!
            </div>
            <div className="flex justify-between mt-4 items-center">
              <div className="flex gap-2 py-2 px-4 bg-gray-100 rounded-lg">
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
