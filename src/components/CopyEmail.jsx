import { useEffect } from "react";

const CopyEmail = () => {
  useEffect(() => {
    const textEmail = document.getElementById("textEmail").textContent;
    const btnCopy = document.getElementById("btnCopy");

    const handleClick = async () => {
      try {
        await navigator.clipboard.writeText(textEmail);
        alert("📋 ¡Correo copiado al portapapeles!");
      } catch (err) {
        console.error("Error copiando el correo:", err);
        alert("❌ Hubo un error al copiar el correo.");
      }
    };

    btnCopy.addEventListener("click", handleClick);
  }, []);

  return null;
};
export { CopyEmail };
