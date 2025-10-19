import Image from "next/image";
import Container from "../../components/wrappers/Container";

export default function AboutCB() {
  return (
    <Container>
      <div className="relative">
        <div className="grid lg:grid-cols-2 sm:gap-16 gap-5 items-start">
          <div className="space-y-6 max-w-2xl">
            <h2 className="space-y-1 after:h-[4px] after:w-10/12 after:bg-green-700 after:rounded-full after:inline-block after:mr-2">
              <span className="block sm:text-3xl text-xl font-serif">
                About the Legacy of
              </span>
              <span className="block sm:text-5xl text-3xl font-serif font-semibold">
                New Era School
              </span>
            </h2>
            {/* <div className="border-gray-300 h-10"/> </div> */}
            <p className="text-gray-600 leading-relaxed sm:text-xl text-justify">
              New Era School was established in 1968 by Dr. Saeed Ansari, an
              eminent educationist who patronized the Nai Taleem Society. It is
              a recognized unaided progressive English Medium School that
              welcomes all students regardless of caste, creed, or social
              status.
            </p>
            <p className="text-gray-600 leading-relaxed sm:text-xl text-justify">
              The school has been recognized by DOE with School Id-1925454 wef
              2024-25 and is consistently maintaining its high standards &
              increasing its strength year after year. The school is committed
              to impart value based education to the students.
            </p>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] relative rounded-lg overflow-hidden">
              <Image
                src="/assets/landing/video.webp"
                alt="Aerial view of New Era School campus"
                fill
                className="object-cover"
              />
            </div>
            {/* Decorative accent */}
            {/* <div className="absolute -right-4 -bottom-4 w-24 h-48 bg-lime-600/20 -z-10" /> */}
          </div>
        </div>
      </div>
    </Container>
  );
}
