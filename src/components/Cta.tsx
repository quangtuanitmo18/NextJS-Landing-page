import React from "react";
import { Container } from "@/components/Container";

export const Cta = () => {
  return (
    <Container>
      <div className="flex flex-wrap items-center justify-between w-full max-w-4xl gap-5 mx-auto text-white bg-indigo-600 px-7 py-7 lg:px-12 lg:py-12 lg:flex-nowrap rounded-xl">
        <div className="flex-grow text-center lg:text-left">
          <h2 className="text-2xl font-medium lg:text-3xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h2>
          <p className="mt-2 font-medium text-white text-opacity-90 lg:text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, eos?
            Rem voluptas quibusdam atque aspernatur quasi provident velit. Dolor
            deserunt quibusdam ea id vitae voluptas dolores beatae assumenda
            fugiat adipisci.
          </p>
        </div>
      </div>
    </Container>
  );
};
