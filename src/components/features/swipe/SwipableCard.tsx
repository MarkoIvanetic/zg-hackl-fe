"use client";

import { SwipeEventCard } from "@/components/features/swipe/SwipeEventCard";
import { Event } from "@/types";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { Dispatch, FC, ReactNode, SetStateAction, useState } from "react";

const SwipeCards = ({ events }: { events: Event[] }) => {
  const [swipeEvents, setSwipeEvents] = useState(events);

  return (
    <>
      <div className="grid pt-4 w-full place-items-center bg-neutral-100 ">
        {swipeEvents?.map((event, index) => (
          <Swipe
            key={event.id}
            isFront={index === 0}
            isSecond={index === 1}
            id={event.id}
            onSwipe={setSwipeEvents}
          >
            <SwipeEventCard key={event.id} event={event} className="w-full" />
          </Swipe>
        ))}
      </div>
      <div className="flex items-center">
        <ApprovalButtons
          onClick={() =>
            setSwipeEvents((prev) => prev.filter((v, i) => i !== 0))
          }
        />
      </div>
    </>
  );
};

const Swipe = ({
  onSwipe,
  id,
  isFront,
  isSecond,
  children,
}: {
  id: number;
  onSwipe: Dispatch<SetStateAction<Event[]>>;
  isFront: boolean;
  isSecond: boolean;
  children: ReactNode;
}) => {
  const x = useMotionValue(0);
  const rotateRaw = useTransform(x, [-150, 150], [-18, 18]);
  const opacity = useTransform(x, [-150, 0, 150], [0, 1, 0]);

  // const rotate = 0;
  const rotate = useTransform(() => {
    const offset = 0;
    return `${rotateRaw.get() + offset}deg`;
  });

  const handleDragEnd = () => {
    if (Math.abs(x.get()) > 50) {
      onSwipe((prev) => prev.filter((v) => v.id !== id));
    }
  };

  return (
    <motion.div
      className="w-full origin-bottom rounded-lg bg-red object-cover hover:cursor-grab active:cursor-grabbing"
      style={{
        gridRow: 1,
        gridColumn: 1,
        x,
        opacity,
        rotate,
        zIndex: isFront ? 2 : isSecond ? 1 : 0,
        transition: "0.125s transform",
        boxShadow: isFront
          ? "0 20px 25px -5px rgb(0 0 0 / 0.5), 0 8px 10px -6px rgb(0 0 0 / 0.5)"
          : undefined,
      }}
      animate={{
        scale: isFront ? 1 : 0.98,
      }}
      drag={isFront ? "x" : false}
      dragConstraints={{
        left: 0,
        right: 0,
      }}
      onDragEnd={handleDragEnd}
    >
      {children}
    </motion.div>
  );
};

export default SwipeCards;

import { Button } from "@/components/ui/button"; // Ensure the correct path to your ShadCN Button
import { X, Check } from "lucide-react"; // For icons

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const ApprovalButtons: FC<{ onClick: () => any }> = ({ onClick }) => {
  return (
    <div className="flex justify-between w-full items-center bottom-0 px-24 mt-4 ">
      <Button
        variant="outline"
        onClick={onClick}
        className="w-20 h-20 [&_svg]:size-8 rounded-full border-red-800 bg-red-500 text-white hover:bg-red-500 hover:text-white"
      >
        <X className="h-8 w-8" />
      </Button>
      <Button
        variant="outline"
        onClick={onClick}
        className="w-20 h-20 [&_svg]:size-8 rounded-full border-green-800 bg-green-500 text-white hover:bg-green-500 hover:text-white"
      >
        <Check className="h-8 w-8" />
      </Button>
    </div>
  );
};
