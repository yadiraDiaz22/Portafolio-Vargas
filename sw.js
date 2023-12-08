const nombreCache = "PortafolioDigital";
// archivos se guarda en el cache guardar todo lo que este dentro de la raiz
const archivos = [
  "./",
  "./index.html",
  "./app.js",
  "./script.js",
  "./style.css",
  "./img/blog/2d.png",
  "./img/blog/3D.png",
  "./img/blog/av.png",
  "./img/blog/ca.png",
  "./img/blog/ma.png",
  "./img/blog/re.png",
  "./img/blog/ti.png",
  "./img/3D.png",
  "./img/arrow.png",
  "./img/download.png",
  "./img/facebook.png",
  "./img/whatsapp.png",
  "./img/flex.jpg",
  "./img/game.png",
  "./img/instagram.png",
  "./img/nissan.jpg",
  "./img/store.png",
  "./img/teko.png",
  "./img/tp.jpg",
  "./img/up.png",
  "./img/world.png",
  "./img/y.png",
  "./img/ya.png",
  "./img/yadi.png",
  "./img/shapes/circle.png",
  "./img/shapes/half-ring.png",
  "./img/shapes/ring.png",
  "./img/shapes/second-circle.png",
];

self.addEventListener("install", (e) => {
  console.log("Instalando.....");
  e.waitUntil(
    caches.open(nombreCache).then((cache) => {
      console.log("Agregando al caché");
      return cache
        .addAll(archivos)
        .then(() => console.log("Archivos almacenados en caché correctamente"))
        .catch((error) =>
          console.error("Error al almacenar archivos en caché:", error)
        );
    })
  );
});

self.addEventListener("activate", (e) => {
  console.log("activando", e);
});

//compara y actualiza el cache
self.addEventListener("fetch", (e) => {
  console.log("Fetch...", e);
  e.respondWith(
    caches.match(e.request).then((respuestaCache) => {
      return (
        respuestaCache ||
        fetch(e.request)
          .then((respuestaRed) => {
            // Si la respuesta de la red es válida, la almacenamos en la caché
            if (respuestaRed.ok) {
              return caches.open(nombreCache).then((cache) => {
                cache.put(e.request, respuestaRed.clone());
                return respuestaRed;
              });
            }
            return respuestaRed;
          })
          .catch((error) => {
            console.error("Error al recuperar recurso:", error);
            // Puedes retornar una respuesta de fallback aquí si es necesario
          })
      );
    })
  );
});
