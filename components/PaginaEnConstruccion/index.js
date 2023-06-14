import Image from "next/image";
import React from "react";

const PaginaEnConstruccion = () => {
  return (
    <div className="pt-40 flex flex-wrap justify-center">
      <div className="relative ">
        <Image
          src={`${process.env.STORAGE_URL_FT}/images/inconstruction.png`}
          width="300"
          height="300"
        />
      </div>
      <div className="my-auto m-10 order-first">
        <p className="text-xl font-bold">Oops! Página en construcción</p>
        <p>Regresa pronto para ver las nuevas actualizaciones.</p>
      </div>
    </div>
  );
};

export default PaginaEnConstruccion;
