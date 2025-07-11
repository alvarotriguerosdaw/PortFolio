import { useEffect } from "react";
import { toast } from "react-hot-toast";
import { Toaster } from "react-hot-toast";

const CopyEmail = () => {
  useEffect(() => {
    const textEmail = document.getElementById("textEmail").textContent;
    const btnCopy = document.getElementById("btnCopy");

    const handleClick = async () => {
      try {
        await navigator.clipboard.writeText(textEmail);
        toast.success("¡Correo copiado!", {
          style: {
            background: "#a15dbb", 
            fontSize: "1rem",
            color: "#ffffff",
            border: "3px solid black",
            marginTop: "1rem",
            fontWeight: "600",
            borderRadius: "1rem",
          },
        });
      } catch (err) {
        console.error("Error copiando el correo:", err);
        toast.error("Hubo un error al copiar",{
          style: {
            background: "#a15dbb", 
            fontSize: "1rem",
            color: "#ffffff",
            border: "3px solid black",
            marginTop: "1rem",
            fontWeight: "600",
            borderRadius: "1rem",
          },
        });
      }
    };

    btnCopy.addEventListener("click", handleClick);
  }, []);

  return <Toaster position="top-center" />;
};
export { CopyEmail };
