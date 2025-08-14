import Container from "@/components/wrappers/Container";
import Image from "next/image";

const EventsShowcase = () => {
  return (
    <section className="relative overflow-hidden">
      {/* Backgrounds */}
      <div
        className="absolute inset-0 hidden sm:block bg-cover bg-center"
        style={{ backgroundImage: "url(/assets/landing/event_bg_11zon.webp)" }}
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 sm:hidden bg-cover bg-center"
        style={{
          backgroundImage: "url(/assets/landing/event_bg_m_11zon.webp)",
        }}
        aria-hidden="true"
      />
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-black/40" aria-hidden="true" />

      <Container className="relative z-[1] text-center text-white">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl sm:text-3xl lg:text-5xl font-semibold sm:font-bold tracking-tight ">
            Latest & Upcoming Event
          </h2>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base lg:text-lg text-white/90">
            An evening of melodies—Suron Ka Sangam brings the campus alive.
          </p>
        </div>

        {/* Event picture (responsive) */}
        <div className="mt-6 sm:mt-8">
          {/* Desktop image */}
          <div className="hidden sm:block shimmer mx-auto w-full max-w-4xl rounded-md shadow-lg">
            <Image
              src="/assets/beyond-classroom/news-events/events/suron_ka_sangam.jpg"
              alt="Suron Ka Sangam — musical evening"
              width={1200}
              height={675}
              className="w-full h-auto rounded-md"
              sizes="(min-width: 640px) 1024px, 100vw"
              priority={false}
            />
          </div>
          {/* Mobile image */}
          <div className="sm:hidden shimmer mx-auto w-full max-w-xl rounded-md shadow-lg">
            <Image
              src="/assets/beyond-classroom/news-events/events/suron_ka_sangam_popup.jpg"
              alt="Suron Ka Sangam — musical evening"
              width={900}
              height={1200}
              className="w-full h-auto rounded-md"
              sizes="(max-width: 639px) 100vw, 0px"
              priority={false}
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default EventsShowcase;
