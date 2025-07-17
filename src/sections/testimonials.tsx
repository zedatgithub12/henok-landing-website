"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

type Testimonial = {
  id: string;
  name: string;
  role: string;
  content: string;
  avatar: string;
};

const localTestimonials = [
  {
    content:
      "The Auxi platform has revolutionized our team's workflow. Its user-friendly design and perfect integration with our existing software have streamlined our project management. I can't believe we ever managed without it",
    name: "Maya Thompson",
    role: "InnovateTech So",
    company: "InnovateTech Solutions",
    avatar: "",
  },
  {
    content:
      "The Auxi platform has revolutionized our team's workflow. Its user-friendly design and perfect integration with our existing software have streamlined our project management. I can't believe we ever managed without it",
    name: "Maya Thompson",
    role: "InnovateTech So",
    company: "InnovateTech Solutions",
    avatar: "",
  },
  {
    content:
      "The Auxi platform has revolutionized our team's workflow. Its user-friendly design and perfect integration with our existing software have streamlined our project management. I can't believe we ever managed without it",
    name: "Maya Thompson",
    role: "InnovateTech So",
    company: "InnovateTech Solutions",
    avatar: "",
  },
  {
    content:
      "The Auxi platform has revolutionized our team's workflow. Its user-friendly design and perfect integration with our existing software have streamlined our project management. I can't believe we ever managed without it",
    name: "Maya Thompson",
    role: "InnovateTech So",
    company: "InnovateTech Solutions",
    avatar: "",
  },
];

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleGettingTestimonials = async () => {
      setLoading(true);
      try {
        const res = await fetch("/api/testimonials");
        const data = await res.json();
        setTestimonials(data);
        setError(null);
      } catch {
        setError("Failed to load testimonials");
      } finally {
        setLoading(false);
      }
    };

    handleGettingTestimonials();
  }, []);

  const handleScroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const firstCard = container.children[0] as HTMLElement;

      if (firstCard) {
        const scrollAmount = firstCard.offsetWidth + 24;

        container.scrollBy({
          left: direction === "left" ? -scrollAmount : scrollAmount,
          behavior: "smooth",
        });
      }
    }
  };

  return (
    <section
      className="bg-white pt-16 pb-4 mb-14  px-6  bg-no-repeat bg-left bg-contain w-full"
      style={{
        backgroundImage: "url('/images/patterns/testimonials-pattern.png')",
      }}
    >
      <div className=" pt-16 pb-0 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div>
              <p className="text-xs font-light  text-gray-400 mb-2 tracking-widest">
                [ TESTIMONIALS ]
              </p>
              <h2 className=" text-3xl md:text-4xl  font-semibold text-[#3B0764] leading-tight">
                Don&apos;t just take our
                <br />
                word for it
              </h2>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => handleScroll("left")}
                className="p-2 rounded-full border border-gray-200 hover:bg-white shadow-lg shadow-gray-200 cursor-pointer"
              >
                <ChevronLeft className="w-5 h-5 text-gray-600" />
              </button>
              <button
                onClick={() => handleScroll("right")}
                className="p-2 rounded-full border border-gray-200 hover:bg-white shadow-lg shadow-gray-200"
              >
                <ChevronRight className="w-5 h-5 text-gray-600" />
              </button>
            </div>
          </div>
        </div>

        {loading && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {Array.from({ length: 4 }).map((_, idx) => (
              <SkeletonCard key={idx} />
            ))}
          </div>
        )}

        {error && (
          <div className="text-center text-gray-500 py-6">
            <p>{error}</p>
          </div>
        )}

        {!loading && !error && (
          <>
            {" "}
            {testimonials.length > 0 ? (
              <div
                ref={scrollContainerRef}
                className="flex flex-nowrap overflow-x-auto scrollbar-hide gap-6 "
              >
                {testimonials?.map((testimonial, index) => (
                  <div
                    key={index}
                    className="bg-white border-2 border-[#AECDA6] rounded-3xl  shadow-none min-h-[40dvh] min-w-[368px]"
                  >
                    <div className="flex items-start gap-3 relative">
                      <div className="testimonials-avatar-wrapper -ml-0.5 -mt-0.5 rounded-tl-md ">
                        <div className="inner-icon">
                          <Image
                            src={
                              testimonial.avatar || "/images/auxi-avatar.png"
                            }
                            alt={testimonial.name}
                            width={120}
                            height={120}
                            className="w-14 h-14 object-contain"
                          />
                        </div>
                      </div>

                      <div className="p-6 py-2">
                        <h4 className="font-semibold text-gray-900">
                          {testimonial.name}
                        </h4>
                        <p className="text-sm text-gray-500">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600 leading-relaxed p-6">
                      <q>{testimonial.content}</q>
                    </p>
                  </div>
                ))}
              </div>
            ) : (
              <div
                ref={scrollContainerRef}
                className="flex flex-nowrap overflow-x-auto scrollbar-hide gap-6 "
              >
                {localTestimonials?.map((testimonial, index) => (
                  <div
                    key={index}
                    className="bg-white border-2 border-[#AECDA6] rounded-3xl  shadow-none min-h-[40dvh] min-w-[368px]"
                  >
                    <div className="flex items-start gap-3 relative">
                      <div className="testimonials-avatar-wrapper -ml-0.5 -mt-0.5 rounded-tl-md ">
                        <div className="inner-icon">
                          <Image
                            src={
                              testimonial.avatar || "/images/auxi-avatar.png"
                            }
                            alt={testimonial.name}
                            width={120}
                            height={120}
                            className="w-14 h-14 object-contain"
                          />
                        </div>
                      </div>

                      <div className="p-6 py-2">
                        <h4 className="font-semibold text-gray-900">
                          {testimonial.name}
                        </h4>
                        <p className="text-sm text-gray-500">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600 leading-relaxed p-6">
                      <q>{testimonial.content}</q>
                    </p>
                  </div>
                ))}
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
};

export default Testimonials;

const SkeletonCard = () => (
  <div className="bg-white rounded-xl p-6 shadow-sm animate-pulse min-h-[30dvh]">
    <div className="flex items-center gap-3 mb-4">
      <div className="w-10 h-10 bg-gray-300 rounded-full" />
      <div className="flex flex-col gap-2">
        <div className="h-3 w-24 bg-gray-300 rounded" />
        <div className="h-2 w-20 bg-gray-200 rounded" />
      </div>
    </div>
    <div className="space-y-2">
      <div className="h-2 w-full bg-gray-200 rounded" />
      <div className="h-2 w-5/6 bg-gray-200 rounded" />
      <div className="h-2 w-3/4 bg-gray-200 rounded" />
    </div>

    <div className="space-y-2 mt-4">
      <div className="h-2 w-full bg-gray-200 rounded" />
      <div className="h-2 w-5/6 bg-gray-200 rounded" />
      <div className="h-2 w-3/4 bg-gray-200 rounded" />
    </div>
  </div>
);
