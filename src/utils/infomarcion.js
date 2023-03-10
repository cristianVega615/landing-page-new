export { hostingCompartido }

const hostingCompartido = {
    title: "Hosting Compartido",
    id: "hosting-share",
    info: "Un hosting compartido es, por su definición, un modelo de hosting en el que un conjunto de páginas web tienen acceso compartido a un conjunto de recursos en el servidor. En este caso, la capacidad de almacenamiento es divida entre todo los usuarios, incluyendo RAM, CPU, y la máquina física (que sirve da base). Toda página web alojada en un servidor compartido cuenta con un dominio propio y su contenido es almacenado en una partición individual dentro del espacio disponible del disco. Esto garantiza que diferentes usuarios puedan llevar a cabo proyectos independientes a pesar de compartir una misma plataforma de hardware", 
    ventajas: {
        title: "Ventajas",
        lista: ["El hosting es más económico que otros tipos de alojamiento web, ya que varios sitios web comparten los mismos recursos","Un servidor compartido no implica gastos de administración de la maquina física", "El mantenimiento, reparación y actualización corren por cuenta del proveedor", "El proveedor de hosting se encarga de la seguridad del servidor y del software, lo que significa que tu sitio web estará protegido contra ataques"]
    },
    desventajas: {
        title: "Desventajas",
        lista: ["Ya que compartimos recursos con otros sitios web, puede haber limitaciones en la cantidad de recursos que puedes utilizar, como el espacio de disco, la memoria RAM, etc", "El rendimiento del servidor puede verse afectado por otros sitios web que comparten los mismos recursos", "Limitaciones en la personalización debido a que el servidor está configurado para alojar varios sitios web, es posible que no puedas personalizar tanto como un servidor dedicado", "La falta de control ya que no tienes control del software y las configuraciones del servidor."]
    }
}