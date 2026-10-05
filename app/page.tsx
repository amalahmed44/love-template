"use client";

import { FormEvent, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowDown,
  ArrowRight,
  CalendarDays,
  Camera,
  ChevronDown,
  Gift,
  Heart,
  MapPin,
  Quote,
} from "lucide-react";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [secretWord, setSecretWord] = useState("");
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [wrongWord, setWrongWord] = useState(false);

  function handleSecretWord(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (secretWord.trim().toLowerCase() === "friends") {
      setWrongWord(false);
      setIsUnlocked(true);
    } else {
      setWrongWord(true);
    }
  }

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#f8f3ef]">
      {/* =====================================================
          ORIGINAL PAGE
      ====================================================== */}

      {!isOpen && (
        <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6">
          <div className="absolute inset-0 bg-[#fff7fa]" />

          <div className="absolute -left-32 -top-32 h-[420px] w-[420px] rounded-full bg-pink-200/30 blur-3xl" />
          <div className="absolute -bottom-32 -right-32 h-[450px] w-[450px] rounded-full bg-rose-200/30 blur-3xl" />

          <FloatingHeart
            className="left-[10%] top-[20%]"
            delay={0}
          />
          <FloatingHeart
            className="left-[20%] bottom-[20%]"
            delay={1.5}
          />
          <FloatingHeart
            className="right-[15%] top-[18%]"
            delay={2}
          />
          <FloatingHeart
            className="right-[25%] bottom-[25%]"
            delay={0.8}
          />

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="relative z-10 flex max-w-2xl flex-col items-center text-center"
          >
            <motion.div
              animate={{
                scale: [1, 1.08, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
              className="mb-8 flex h-24 w-24 items-center justify-center rounded-full bg-white shadow-xl shadow-pink-200/50"
            >
              <Heart
                className="h-11 w-11 fill-rose-400 text-rose-400"
                strokeWidth={1.5}
              />
            </motion.div>

            <div className="mb-5 rounded-full border border-pink-200/60 bg-white/70 px-5 py-2 text-sm text-rose-500 shadow-sm backdrop-blur">
              A little surprise for you
            </div>

            <h1 className="font-serif text-5xl font-semibold tracking-tight text-[#4a2636] sm:text-7xl">
              Someone made
              <br />
              <span className="text-rose-400">
                something special
              </span>
              <br />
              for you.
            </h1>

            <p className="mt-7 max-w-md text-base leading-7 text-[#795766] sm:text-lg">
              Take a little moment and discover a message made just for you.
            </p>
          </motion.div>
        </section>
      )}

      {/* =====================================================
          SECRET WORD PAGE
      ====================================================== */}

      <AnimatePresence>
        {isOpen && !isUnlocked && (
          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.05, duration: 1 }}
            className="relative z-10 flex min-h-screen items-center justify-center overflow-hidden px-5 py-24"
          >
            <SecretBackground />

            <motion.div
              initial={{
                opacity: 0,
                y: 70,
                scale: 0.96,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              transition={{
                delay: 1.25,
                duration: 1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative z-20 w-full max-w-xl"
            >
              <PhotoBooth />

              <div className="relative overflow-hidden rounded-[32px] border border-white/80 bg-white/80 px-7 pb-10 pt-24 shadow-[0_35px_100px_rgba(100,45,65,0.18)] backdrop-blur-xl sm:px-12 sm:pt-28">
                <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-pink-200/30 blur-3xl" />
                <div className="absolute -bottom-20 -left-20 h-48 w-48 rounded-full bg-rose-200/25 blur-3xl" />

                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.7 }}
                  className="relative text-center"
                >
                  <p className="text-[10px] font-semibold uppercase tracking-[0.4em] text-rose-400">
                    Private entrance
                  </p>

                  <h2 className="mt-4 font-serif text-4xl font-semibold leading-tight text-[#45333a] sm:text-5xl">
                    Write our
                    <br />
                    <span className="text-rose-400">
                      secret word.
                    </span>
                  </h2>

                  <p className="mx-auto mt-5 max-w-sm text-sm leading-7 text-[#806d72]">
                    Only one little word can open what comes next.
                  </p>
                </motion.div>

                <motion.form
                  onSubmit={handleSecretWord}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.9 }}
                  className="relative mt-9"
                >
                  <input
                    value={secretWord}
                    onChange={(e) => {
                      setSecretWord(e.target.value);
                      setWrongWord(false);
                    }}
                    autoComplete="off"
                    placeholder="our secret..."
                    className={`h-16 w-full rounded-2xl border bg-[#fffafa] px-6 text-center font-serif text-xl tracking-wide text-[#4a2636] outline-none transition-all placeholder:text-[#c7b0b7] ${
                      wrongWord
                        ? "border-red-300 ring-2 ring-red-100"
                        : "border-rose-100 focus:border-rose-300 focus:ring-4 focus:ring-rose-100"
                    }`}
                  />

                  <AnimatePresence>
                    {wrongWord && (
                      <motion.p
                        initial={{
                          opacity: 0,
                          y: -5,
                        }}
                        animate={{
                          opacity: 1,
                          y: 0,
                        }}
                        exit={{
                          opacity: 0,
                        }}
                        className="mt-3 text-center text-sm text-rose-500"
                      >
                        That's not it. Think of us.
                      </motion.p>
                    )}
                  </AnimatePresence>

                  <motion.button
                    type="submit"
                    whileHover={{
                      scale: 1.02,
                      y: -2,
                    }}
                    whileTap={{
                      scale: 0.97,
                    }}
                    className="mt-5 flex h-14 w-full items-center justify-center gap-3 rounded-2xl bg-[#49353c] font-medium text-white shadow-xl shadow-[#49353c]/20"
                  >
                    Open the gift
                    <ArrowRight className="h-5 w-5" />
                  </motion.button>
                </motion.form>

                <p className="relative mt-7 text-center text-[10px] uppercase tracking-[0.3em] text-[#ad969e]">
                  just between us
                </p>
              </div>
            </motion.div>
          </motion.section>
        )}
      </AnimatePresence>

      {/* =====================================================
          CURTAINS
      ====================================================== */}

      <motion.div
        initial={{ opacity: 1 }}
        animate={{
          opacity: isOpen ? 0 : 1,
        }}
        transition={{
          delay: isOpen ? 1.65 : 0,
          duration: 0.4,
        }}
        className="pointer-events-none fixed inset-0 z-50"
      >
        {/* LEFT */}
        <motion.div
          initial={{ x: "0%" }}
          animate={{
            x: isOpen ? "-105%" : "0%",
          }}
          transition={{
            duration: 1.8,
            ease: [0.76, 0, 0.24, 1],
          }}
          className="absolute left-0 top-0 h-full w-1/2 overflow-hidden"
        >
          <CurtainSide side="left" />
        </motion.div>

        {/* RIGHT */}
        <motion.div
          initial={{ x: "0%" }}
          animate={{
            x: isOpen ? "105%" : "0%",
          }}
          transition={{
            duration: 1.8,
            ease: [0.76, 0, 0.24, 1],
          }}
          className="absolute right-0 top-0 h-full w-1/2 overflow-hidden"
        >
          <CurtainSide side="right" />
        </motion.div>

        {/* OPEN BUTTON */}
        <motion.div
          animate={{
            opacity: isOpen ? 0 : 1,
            scale: isOpen ? 0.7 : 1,
          }}
          className="pointer-events-auto absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2"
        >
          <motion.button
            onClick={() => setIsOpen(true)}
            whileHover={{
              scale: 1.08,
            }}
            whileTap={{
              scale: 0.94,
            }}
            className="relative flex h-28 w-28 items-center justify-center rounded-full border border-white/30 bg-white/10 shadow-2xl backdrop-blur-md"
          >
            <motion.div
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
              className="absolute inset-0 rounded-full bg-pink-300/30 blur-xl"
            />

            <div className="relative flex flex-col items-center">
              <Heart className="h-9 w-9 fill-white text-white" />

              <span className="mt-2 text-[10px] font-medium tracking-[0.25em] text-white">
                OPEN
              </span>
            </div>
          </motion.button>
        </motion.div>
      </motion.div>

      {/* =====================================================
          GIFT EXPERIENCE
      ====================================================== */}

      <AnimatePresence>
        {isUnlocked && (
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              duration: 1.2,
            }}
            className="fixed inset-0 z-[100] overflow-y-auto bg-[#f5f0eb]"
          >
            <GiftExperience />
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}

/* =========================================================
   GIFT EXPERIENCE
========================================================= */

function GiftExperience() {
  const [showGift, setShowGift] = useState(false);

  return (
    <main className="overflow-hidden bg-[#f5f0eb] text-[#403638]">
      {/* =====================================================
          HERO
      ====================================================== */}

      <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
        <motion.div
          initial={{
            scale: 1.12,
          }}
          animate={{
            scale: 1,
          }}
          transition={{
            duration: 2.5,
            ease: "easeOut",
          }}
          className="absolute inset-0"
        >
          <img
            src="/photos/hero.jpg"
            alt=""
            className="h-full w-full object-cover"
          />
        </motion.div>

        <div className="absolute inset-0 bg-black/45" />

        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-[#f5f0eb]" />

        <FloatingDust />

        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center text-white">
          <motion.p
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.5,
              duration: 1,
            }}
            className="text-[10px] uppercase tracking-[0.45em] text-white/70"
          >
            a little something for you
          </motion.p>

          <motion.h1
            initial={{
              opacity: 0,
              y: 35,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.8,
              duration: 1.1,
            }}
            className="mt-7 font-serif text-6xl leading-[0.95] sm:text-8xl md:text-9xl"
          >
            This is
            <br />
            <span className="italic">ours.</span>
          </motion.h1>

          <motion.p
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              delay: 1.5,
              duration: 1,
            }}
            className="mx-auto mt-8 max-w-lg text-sm leading-7 text-white/80 sm:text-base"
          >
            Not everything beautiful needs a reason.
            Some things simply deserve to be remembered.
          </motion.p>

          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 2,
              duration: 1,
            }}
            className="mt-16 flex flex-col items-center"
          >
            <span className="mb-3 text-[9px] uppercase tracking-[0.4em] text-white/60">
              keep going
            </span>

            <motion.div
              animate={{
                y: [0, 8, 0],
              }}
              transition={{
                duration: 1.6,
                repeat: Infinity,
              }}
            >
              <ArrowDown className="h-5 w-5 text-white/70" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          INTRODUCTION
      ====================================================== */}

      <section className="px-6 py-32 sm:py-44">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-[10px] uppercase tracking-[0.4em] text-[#9c8587]">
              a note before we begin
            </p>

            <h2 className="mt-7 font-serif text-4xl leading-tight text-[#403638] sm:text-6xl">
              If I could give you
              <br />
              <span className="italic text-[#a16d75]">
                one thing...
              </span>
            </h2>

            <p className="mx-auto mt-9 max-w-xl text-base leading-8 text-[#75686a]">
              I would give you every little moment that made me smile,
              every memory I secretly replay, and every ordinary day
              that somehow became special because you were there.
            </p>
          </div>
        </Reveal>
      </section>

      {/* =====================================================
          MEMORY PHOTO
      ====================================================== */}

      <section className="px-6 pb-36">
        <Reveal>
          <div className="mx-auto max-w-4xl">
            <div className="relative mx-auto max-w-2xl rotate-[-2deg] bg-white p-3 pb-7 shadow-[0_30px_70px_rgba(50,35,35,0.18)] sm:p-5 sm:pb-10">
              <div className="absolute -top-5 left-1/2 z-10 h-12 w-28 -translate-x-1/2 rotate-[-3deg] bg-[#e8d7bd]/80 shadow-sm" />

              <img
                src="/photos/memory-1.jpg"
                alt=""
                className="aspect-[4/3] w-full object-cover"
              />

              <div className="px-3 pt-5 text-center">
                <p className="font-serif text-2xl text-[#4b3c3e]">
                  one of my favorite memories
                </p>

                <p className="mt-2 text-[9px] uppercase tracking-[0.3em] text-[#a18b8d]">
                  and there are many
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* =====================================================
          TIMELINE
      ====================================================== */}

      <section className="bg-[#ebe2dc] px-6 py-32 sm:py-44">
        <Reveal>
          <div className="mx-auto max-w-4xl">
            <div className="text-center">
              <p className="text-[10px] uppercase tracking-[0.4em] text-[#9a8586]">
                the story
              </p>

              <h2 className="mt-5 font-serif text-5xl text-[#403638] sm:text-7xl">
                Little moments.
              </h2>

              <p className="mx-auto mt-6 max-w-lg text-sm leading-7 text-[#776b6c]">
                The big moments are beautiful.
                But somehow, it's always the small ones that stay.
              </p>
            </div>

            <div className="relative mt-24">
              <div className="absolute bottom-0 left-4 top-0 w-px bg-[#cbbabb] sm:left-1/2" />

              <TimelineItem
                number="01"
                title="The beginning"
                date="where it all started"
                text="Every story has a first moment. Ours became the beginning of something I never wanted to forget."
                side="left"
              />

              <TimelineItem
                number="02"
                title="The little things"
                date="the moments between moments"
                text="The conversations, the laughter, the random memories. The things that seemed small at the time."
                side="right"
              />

              <TimelineItem
                number="03"
                title="The memories"
                date="more than photographs"
                text="Some memories don't live inside photographs. They live in the way a certain day still makes you feel."
                side="left"
              />

              <TimelineItem
                number="04"
                title="What's next"
                date="this isn't the ending"
                text="There are still places to go, things to discover, and memories we haven't made yet."
                side="right"
              />
            </div>
          </div>
        </Reveal>
      </section>

      {/* =====================================================
          GALLERY
      ====================================================== */}

      <section className="px-6 py-32 sm:py-44">
        <Reveal>
          <div className="mx-auto max-w-6xl">
            <div className="mb-20 text-center">
              <p className="text-[10px] uppercase tracking-[0.4em] text-[#9c8587]">
                captured moments
              </p>

              <h2 className="mt-5 font-serif text-5xl text-[#403638] sm:text-7xl">
                Us, in frames.
              </h2>
            </div>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              <GalleryPhoto
                src="/photos/photo-1.jpg"
                rotate="-2deg"
              />

              <GalleryPhoto
                src="/photos/photo-2.jpg"
                rotate="2deg"
              />

              <GalleryPhoto
                src="/photos/photo-3.jpg"
                rotate="-1deg"
              />

              <GalleryPhoto
                src="/photos/photo-4.jpg"
                rotate="3deg"
              />
            </div>
          </div>
        </Reveal>
      </section>

      {/* =====================================================
          QUOTE
      ====================================================== */}

      <section className="relative flex min-h-[80vh] items-center justify-center overflow-hidden bg-[#403638] px-6 py-32">
        <img
          src="/photos/quote.jpg"
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-35"
        />

        <div className="absolute inset-0 bg-black/40" />

        <Reveal>
          <div className="relative z-10 max-w-4xl text-center text-white">
            <Quote className="mx-auto h-8 w-8 text-white/50" />

            <h2 className="mt-10 font-serif text-4xl leading-tight sm:text-6xl md:text-7xl">
              "Some people become a chapter.
              <br />
              <span className="italic">
                You became the story.
              </span>"
            </h2>
          </div>
        </Reveal>
      </section>

      {/* =====================================================
          PERSONAL LETTER
      ====================================================== */}

      <section className="px-6 py-32 sm:py-48">
        <Reveal>
          <div className="mx-auto max-w-3xl">
            <div className="relative bg-[#fdfbf7] px-8 py-14 shadow-[0_25px_70px_rgba(70,55,45,0.12)] sm:px-20 sm:py-20">
              <div className="absolute inset-4 border border-[#dfd2c8] sm:inset-7" />

              <div className="relative">
                <p className="font-serif text-3xl text-[#4b3b3d]">
                  Dear you,
                </p>

                <div className="mt-10 space-y-6 text-[15px] leading-8 text-[#6e6263]">
                  <p>
                    I don't think I say it enough, but having you in my
                    life has made ordinary days feel different.
                  </p>

                  <p>
                    There are moments with you that I wish I could
                    pause. Not because they're perfect, but because
                    they're ours.
                  </p>

                  <p>
                    So I made this little place for those memories.
                    A place where I could put some of the things I
                    don't always know how to say.
                  </p>

                  <p>
                    Thank you for every laugh, every conversation,
                    every quiet moment, and every memory still waiting
                    for us.
                  </p>
                </div>

                <div className="mt-12">
                  <p className="font-serif text-3xl italic text-[#9b6871]">
                    Always,
                  </p>

                  <p className="mt-2 font-serif text-2xl text-[#4b3b3d]">
                    me.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* =====================================================
          PLACE / MEMORY
      ====================================================== */}

      <section className="px-6 pb-36">
        <Reveal>
          <div className="mx-auto max-w-5xl">
            <div className="grid overflow-hidden bg-[#e8ded8] md:grid-cols-2">
              <div className="relative min-h-[400px]">
                <img
                  src="/photos/place.jpg"
                  alt=""
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </div>

              <div className="flex flex-col justify-center px-8 py-16 sm:px-14">
                <MapPin className="h-6 w-6 text-[#9b6e76]" />

                <p className="mt-7 text-[10px] uppercase tracking-[0.35em] text-[#9b8586]">
                  somewhere special
                </p>

                <h2 className="mt-5 font-serif text-4xl text-[#403638] sm:text-5xl">
                  Where a memory lives.
                </h2>

                <p className="mt-6 text-sm leading-7 text-[#74686a]">
                  Some places become special simply because of who
                  you were with when you were there.
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* =====================================================
          GIFT INTRO
      ====================================================== */}

      <section className="relative overflow-hidden bg-[#e9ddd7] px-6 py-40 text-center">
        <div className="absolute -left-32 top-1/2 h-80 w-80 -translate-y-1/2 rounded-full bg-white/30 blur-3xl" />

        <div className="absolute -right-32 top-1/2 h-80 w-80 -translate-y-1/2 rounded-full bg-rose-200/20 blur-3xl" />

        <Reveal>
          <div className="relative z-10">
            <p className="text-[10px] uppercase tracking-[0.4em] text-[#967e81]">
              almost there
            </p>

            <h2 className="mt-7 font-serif text-5xl text-[#403638] sm:text-7xl">
              There is
              <br />
              <span className="italic text-[#9b6972]">
                one more thing.
              </span>
            </h2>

            <p className="mx-auto mt-7 max-w-md text-sm leading-7 text-[#77696b]">
              I saved the most important part for last.
            </p>
          </div>
        </Reveal>
      </section>

      {/* =====================================================
          FINAL GIFT
      ====================================================== */}

      <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#30272a] px-6 py-32">
        <img
          src="/photos/final.jpg"
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-25"
        />

        <div className="absolute inset-0 bg-[#241d20]/65" />

        <FloatingDust />

        <div className="relative z-10 flex w-full max-w-xl flex-col items-center text-center">
          <AnimatePresence mode="wait">
            {!showGift ? (
              <motion.div
                key="closed"
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                exit={{
                  opacity: 0,
                  y: -30,
                  scale: 0.95,
                }}
                className="flex flex-col items-center"
              >
                <p className="text-[10px] uppercase tracking-[0.4em] text-white/50">
                  for you
                </p>

                <h2 className="mt-7 font-serif text-5xl text-white sm:text-7xl">
                  One last
                  <br />
                  surprise.
                </h2>

                <motion.button
                  onClick={() => setShowGift(true)}
                  whileHover={{
                    scale: 1.08,
                  }}
                  whileTap={{
                    scale: 0.95,
                  }}
                  animate={{
                    y: [0, -6, 0],
                  }}
                  transition={{
                    y: {
                      duration: 2,
                      repeat: Infinity,
                    },
                  }}
                  className="mt-14 flex h-28 w-28 items-center justify-center rounded-full border border-white/20 bg-white/10 shadow-2xl backdrop-blur-md"
                >
                  <div className="flex flex-col items-center">
                    <Gift className="h-8 w-8 text-white" />

                    <span className="mt-2 text-[9px] uppercase tracking-[0.25em] text-white">
                      open
                    </span>
                  </div>
                </motion.button>
              </motion.div>
            ) : (
              <motion.div
                key="opened"
                initial={{
                  opacity: 0,
                  scale: 0.8,
                  y: 30,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  y: 0,
                }}
                transition={{
                  duration: 1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="w-full"
              >
                <div className="mx-auto max-w-lg bg-[#fdf9f4] px-8 py-14 shadow-[0_30px_100px_rgba(0,0,0,0.35)] sm:px-16 sm:py-20">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#f1e2e0]">
                    <Heart
                      className="h-7 w-7 fill-[#a46d76] text-[#a46d76]"
                      strokeWidth={1.5}
                    />
                  </div>

                  <p className="mt-9 text-[10px] uppercase tracking-[0.4em] text-[#a08387]">
                    the real gift
                  </p>

                  <h2 className="mt-6 font-serif text-5xl leading-tight text-[#403638] sm:text-6xl">
                    You are my
                    <br />
                    <span className="italic text-[#a16d76]">
                      favorite gift.
                    </span>
                  </h2>

                  <div className="mx-auto my-10 h-px w-16 bg-[#d8c6c5]" />

                  <p className="text-sm leading-8 text-[#75696a]">
                    If I had to choose again, through every version
                    of this story, every beginning and every unknown...
                  </p>

                  <p className="mt-7 font-serif text-3xl text-[#403638]">
                    I would still choose you.
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* =====================================================
          ENDING
      ====================================================== */}

      <section className="bg-[#f5f0eb] px-6 py-36 text-center">
        <Reveal>
          <div className="mx-auto max-w-2xl">
            <CalendarDays className="mx-auto h-6 w-6 text-[#a48287]" />

            <p className="mt-8 text-[10px] uppercase tracking-[0.4em] text-[#9d888a]">
              this isn't goodbye
            </p>

            <h2 className="mt-6 font-serif text-5xl text-[#403638] sm:text-7xl">
              Until the next
              <br />
              <span className="italic text-[#9d6d75]">
                memory.
              </span>
            </h2>

            <div className="mx-auto mt-12 h-px w-16 bg-[#d5c5c0]" />

            <p className="mt-8 text-[10px] uppercase tracking-[0.35em] text-[#aa9798]">
              our story continues...
            </p>
          </div>
        </Reveal>
      </section>
    </main>
  );
}

/* =========================================================
   PHOTO BOOTH
========================================================= */

function PhotoBooth() {
  const photos = [
    "/photos/photo-1.jpg",
    "/photos/photo-2.jpg",
    "/photos/photo-3.jpg",
    "/photos/photo-4.jpg",
  ];

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: -45,
        rotate: -8,
      }}
      animate={{
        opacity: 1,
        y: 0,
        rotate: -3,
      }}
      transition={{
        delay: 1.5,
        duration: 0.9,
        type: "spring",
      }}
      className="absolute left-1/2 top-[-125px] z-30 w-[235px] -translate-x-1/2"
    >
      {/* Tape */}
      <div className="absolute -top-5 left-1/2 z-20 h-11 w-28 -translate-x-1/2 rotate-[-4deg] bg-[#e8d7bd]/85 shadow-sm" />

      {/* Physical photo */}
      <div className="bg-white p-3 pb-5 shadow-[0_25px_55px_rgba(60,35,40,0.22)]">
        <div className="grid grid-cols-2 gap-1.5 bg-[#e9dfe0] p-1.5">
          {photos.map((photo, index) => (
            <motion.div
              key={photo}
              initial={{
                opacity: 0,
                scale: 0.9,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              transition={{
                delay: 1.8 + index * 0.1,
              }}
              className="aspect-square overflow-hidden bg-[#eee5e1]"
            >
              <img
                src={photo}
                alt=""
                className="h-full w-full object-cover"
              />
            </motion.div>
          ))}
        </div>

        <p className="pt-3 text-center font-serif text-lg text-[#4e3c40]">
          us, always
        </p>
      </div>

      {/* Pin */}
      <motion.div
        animate={{
          y: [0, -3, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
        className="absolute -right-4 top-5 h-8 w-8 rounded-full border-4 border-white bg-[#b77a84] shadow-lg"
      />
    </motion.div>
  );
}

/* =========================================================
   SECRET BACKGROUND
========================================================= */

function SecretBackground() {
  return (
    <>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#ffe5ed_0%,#fff8fa_42%,#f9f5f1_100%)]" />

      <div className="absolute -left-32 top-[20%] h-80 w-80 rounded-full bg-pink-200/30 blur-3xl" />

      <div className="absolute -right-32 bottom-[10%] h-96 w-96 rounded-full bg-rose-200/25 blur-3xl" />

      <FloatingParticle
        className="left-[8%] top-[25%]"
        delay={0}
      />

      <FloatingParticle
        className="left-[18%] bottom-[18%]"
        delay={1.5}
      />

      <FloatingParticle
        className="right-[10%] top-[22%]"
        delay={2}
      />

      <FloatingParticle
        className="right-[20%] bottom-[25%]"
        delay={0.8}
      />

      <FloatingParticle
        className="left-[35%] top-[10%]"
        delay={2.5}
      />
    </>
  );
}

/* =========================================================
   FLOATING PARTICLES
========================================================= */

function FloatingParticle({
  className,
  delay,
}: {
  className: string;
  delay: number;
}) {
  return (
    <motion.div
      animate={{
        y: [0, -25, 0],
        x: [0, 8, 0],
        opacity: [0.15, 0.6, 0.15],
      }}
      transition={{
        duration: 5,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className={`pointer-events-none absolute ${className}`}
    >
      <div className="h-2 w-2 rounded-full bg-rose-300/60 blur-[1px]" />
    </motion.div>
  );
}

/* =========================================================
   FLOATING DUST
========================================================= */

function FloatingDust() {
  const particles = Array.from({ length: 18 });

  return (
    <div className="pointer-events-none absolute inset-0 z-10 overflow-hidden">
      {particles.map((_, index) => (
        <motion.div
          key={index}
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: [0, 0.35, 0],
            y: [40, -100],
            x: [0, index % 2 === 0 ? 20 : -20],
          }}
          transition={{
            duration: 7 + (index % 4),
            delay: index * 0.35,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute h-1 w-1 rounded-full bg-white/50"
          style={{
            left: `${(index * 17) % 100}%`,
            top: `${20 + ((index * 13) % 70)}%`,
          }}
        />
      ))}
    </div>
  );
}

/* =========================================================
   REVEAL
========================================================= */

function Reveal({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 40,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.2,
      }}
      transition={{
        duration: 0.9,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}

/* =========================================================
   TIMELINE
========================================================= */

function TimelineItem({
  number,
  title,
  date,
  text,
  side,
}: {
  number: string;
  title: string;
  date: string;
  text: string;
  side: "left" | "right";
}) {
  return (
    <div className="relative mb-24 grid grid-cols-1 sm:grid-cols-2">
      <div
        className={`pl-12 sm:pl-0 ${
          side === "left"
            ? "sm:pr-20 sm:text-right"
            : "sm:col-start-2 sm:pl-20"
        }`}
      >
        <p className="text-[10px] tracking-[0.35em] text-[#a18b8d]">
          {number}
        </p>

        <h3 className="mt-3 font-serif text-3xl text-[#403638]">
          {title}
        </h3>

        <p className="mt-2 text-[9px] uppercase tracking-[0.25em] text-[#a58e90]">
          {date}
        </p>

        <p className="mt-5 text-sm leading-7 text-[#766a6b]">
          {text}
        </p>
      </div>

      <div className="absolute left-4 top-0 flex h-3 w-3 items-center justify-center rounded-full border-4 border-[#ebe2dc] bg-[#9d727b] sm:left-1/2 sm:-translate-x-1/2" />
    </div>
  );
}

/* =========================================================
   GALLERY PHOTO
========================================================= */

function GalleryPhoto({
  src,
  rotate,
}: {
  src: string;
  rotate: string;
}) {
  return (
    <Reveal>
      <motion.div
        whileHover={{
          y: -10,
          rotate: "0deg",
          scale: 1.025,
        }}
        style={{
          rotate,
        }}
        className="relative bg-white p-2 shadow-[0_20px_45px_rgba(60,40,40,0.14)]"
      >
        <div className="aspect-[3/4] overflow-hidden">
          <img
            src={src}
            alt=""
            className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
          />
        </div>

        <div className="px-2 pb-3 pt-3">
          <div className="h-px w-8 bg-[#d8c7c5]" />
        </div>
      </motion.div>
    </Reveal>
  );
}

/* =========================================================
   CURTAIN
========================================================= */

function CurtainSide({
  side,
}: {
  side: "left" | "right";
}) {
  return (
    <div
      className="relative h-full w-full"
      style={{
        background: `
          linear-gradient(
            ${side === "left" ? "90deg" : "270deg"},
            #4d0c25 0%,
            #79163d 20%,
            #b52e5e 40%,
            #721333 60%,
            #4b0b24 80%,
            #300719 100%
          )
        `,
      }}
    >
      <div
        className="absolute inset-0 opacity-40"
        style={{
          background: `
            repeating-linear-gradient(
              ${side === "left" ? "90deg" : "270deg"},
              transparent 0px,
              rgba(255,255,255,0.12) 25px,
              rgba(0,0,0,0.25) 50px,
              transparent 80px
            )
          `,
        }}
      />

      <div
        className={`absolute top-0 h-full w-[25%] bg-pink-300/10 blur-2xl ${
          side === "left" ? "right-0" : "left-0"
        }`}
      />

      <div className="absolute left-0 right-0 top-0 h-3 bg-gradient-to-r from-[#3a071b] via-[#d45b7d] to-[#3a071b]" />

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/30 to-transparent" />
    </div>
  );
}

/* =========================================================
   FLOATING HEART
========================================================= */

function FloatingHeart({
  className,
  delay,
}: {
  className: string;
  delay: number;
}) {
  return (
    <motion.div
      animate={{
        opacity: [0, 0.4, 0],
        y: [20, -40, -80],
        rotate: [0, 10, -10],
      }}
      transition={{
        duration: 5,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className={`absolute ${className}`}
    >
      <Heart className="h-7 w-7 fill-pink-200 text-pink-300" />
    </motion.div>
  );
}