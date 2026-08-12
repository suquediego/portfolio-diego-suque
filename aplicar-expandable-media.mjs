import fs from "node:fs";

function replaceOnce(content, oldText, newText, label) {
  if (content.includes(newText)) {
    console.log(`✓ ${label} já estava aplicado`);
    return content;
  }

  if (!content.includes(oldText)) {
    throw new Error(`Não encontrei o trecho esperado para: ${label}`);
  }

  console.log(`✓ Aplicando: ${label}`);
  return content.replace(oldText, newText);
}

function updateFile(path, transform) {
  const original = fs.readFileSync(path, "utf8");
  const normalized = original.replace(/\r\n/g, "\n");
  const updated = transform(normalized);

  fs.writeFileSync(path, updated, "utf8");
  console.log(`✓ Salvo: ${path}\n`);
}

/* =========================================================
   HEIMDALL
========================================================= */

updateFile("src/app/portfolio/heimdall/page.tsx", (source) => {
  let code = source;

  code = replaceOnce(
    code,
    `import { PageShell } from "@/components/page-shell";
import { SafeImage } from "@/components/safe-image";`,
    `import { PageShell } from "@/components/page-shell";
import { ExpandableMedia } from "@/components/expandable-media";
import { SafeImage } from "@/components/safe-image";`,
    "Heimdall — import ExpandableMedia",
  );

  code = replaceOnce(
    code,
    `          <div className="relative aspect-[2200/954] overflow-hidden bg-white">
            <SafeImage
              src={heimdallImages.relationalSearch}
              alt="Mapa relacional de vínculos e sinais de risco no Heimdall"
              fill
              priority
              sizes="680px"
              className="object-contain object-center"
            />
          </div>`,
    `          <ExpandableMedia
            src={heimdallImages.relationalSearch}
            alt="Mapa relacional de vínculos e sinais de risco no Heimdall"
            className="relative aspect-[2200/954] overflow-hidden bg-white"
          >
            <SafeImage
              src={heimdallImages.relationalSearch}
              alt="Mapa relacional de vínculos e sinais de risco no Heimdall"
              fill
              priority
              sizes="680px"
              className="object-contain object-center"
            />
          </ExpandableMedia>`,
    "Heimdall — hero desktop",
  );

  code = replaceOnce(
    code,
    `        <div className="relative aspect-[2200/954] overflow-hidden bg-white">
          <SafeImage
            src={heimdallImages.relationalSearch}
            alt="Mapa relacional de vínculos e sinais de risco no Heimdall"
            fill
            priority
            sizes="(min-width: 640px) 640px, 100vw"
            className="object-contain object-center"
          />
        </div>`,
    `        <ExpandableMedia
          src={heimdallImages.relationalSearch}
          alt="Mapa relacional de vínculos e sinais de risco no Heimdall"
          className="relative aspect-[2200/954] overflow-hidden bg-white"
        >
          <SafeImage
            src={heimdallImages.relationalSearch}
            alt="Mapa relacional de vínculos e sinais de risco no Heimdall"
            fill
            priority
            sizes="(min-width: 640px) 640px, 100vw"
            className="object-contain object-center"
          />
        </ExpandableMedia>`,
    "Heimdall — hero mobile",
  );

  code = replaceOnce(
    code,
    `          <div className={\`relative overflow-hidden bg-white \${frameClassName}\`}>
            {imageSrc ? (
              autoScroll ? (
                <motion.div
                  role="img"
                  aria-label={alt}
                  className={\`absolute inset-x-0 top-0 bg-top bg-no-repeat \${imageWrapperClassName}\`}
                  style={{
                    backgroundImage: \`url(\${imageSrc})\`,
                    backgroundSize: "100% auto",
                  }}
                  animate={{ y: ["0%", scrollDistance, "0%"] }}
                  transition={{
                    duration: scrollDuration,
                    repeat: Infinity,
                    repeatType: "loop",
                    ease: "easeInOut",
                  }}
                />
              ) : (
                <SafeImage
                  src={imageSrc}
                  alt={alt}
                  fill
                  sizes="680px"
                  className={imageClassName}
                />
              )
            ) : (
              <div className="flex h-full items-center justify-center px-6">
                <div className="flex h-[78%] w-full max-w-[520px] items-center justify-center rounded-[22px] border border-dashed border-[#CFCFCF] bg-white text-center">
                  <span className="max-w-[240px] text-sm font-semibold leading-6 text-[#8A8A8A]">
                    Placeholder para tela real do Heimdall
                  </span>
                </div>
              </div>
            )}
          </div>`,
    `          <div className={\`relative overflow-hidden bg-white \${frameClassName}\`}>
            {imageSrc ? (
              <ExpandableMedia
                src={imageSrc}
                alt={alt}
                className="h-full w-full"
              >
                {autoScroll ? (
                  <motion.div
                    role="img"
                    aria-label={alt}
                    className={\`absolute inset-x-0 top-0 bg-top bg-no-repeat \${imageWrapperClassName}\`}
                    style={{
                      backgroundImage: \`url(\${imageSrc})\`,
                      backgroundSize: "100% auto",
                    }}
                    animate={{ y: ["0%", scrollDistance, "0%"] }}
                    transition={{
                      duration: scrollDuration,
                      repeat: Infinity,
                      repeatType: "loop",
                      ease: "easeInOut",
                    }}
                  />
                ) : (
                  <SafeImage
                    src={imageSrc}
                    alt={alt}
                    fill
                    sizes="680px"
                    className={imageClassName}
                  />
                )}
              </ExpandableMedia>
            ) : (
              <div className="flex h-full items-center justify-center px-6">
                <div className="flex h-[78%] w-full max-w-[520px] items-center justify-center rounded-[22px] border border-dashed border-[#CFCFCF] bg-white text-center">
                  <span className="max-w-[240px] text-sm font-semibold leading-6 text-[#8A8A8A]">
                    Placeholder para tela real do Heimdall
                  </span>
                </div>
              </div>
            )}
          </div>`,
    "Heimdall — StaticBrowserMockup completo",
  );

  return code;
});

/* =========================================================
   PARKINGPIX
========================================================= */

updateFile("src/app/portfolio/parkingpix/page.tsx", (source) => {
  let code = source;

  code = replaceOnce(
    code,
    `import { PageShell } from "@/components/page-shell";
import { SafeImage } from "@/components/safe-image";`,
    `import { PageShell } from "@/components/page-shell";
import { ExpandableMedia } from "@/components/expandable-media";
import { SafeImage } from "@/components/safe-image";`,
    "ParkingPix — import ExpandableMedia",
  );

  code = replaceOnce(
    code,
    `        <div className="relative aspect-[910/2278] w-full max-w-[240px] drop-shadow-[0_24px_45px_rgba(0,0,0,0.14)] md:max-w-[260px] lg:max-w-[300px]">
          <SafeImage
            src={parkingPixImages.paymentQr}
            alt="Tela de pagamento PIX com QR Code no ParkingPix"
            fill
            priority
            sizes="(min-width: 1024px) 300px, 70vw"
            className="scale-[0.92] object-contain object-center"
          />
        </div>`,
    `        <ExpandableMedia
          src={parkingPixImages.paymentQr}
          alt="Tela de pagamento PIX com QR Code no ParkingPix"
          className="relative aspect-[910/2278] w-full max-w-[240px] drop-shadow-[0_24px_45px_rgba(0,0,0,0.14)] md:max-w-[260px] lg:max-w-[300px]"
        >
          <SafeImage
            src={parkingPixImages.paymentQr}
            alt="Tela de pagamento PIX com QR Code no ParkingPix"
            fill
            priority
            sizes="(min-width: 1024px) 300px, 70vw"
            className="scale-[0.92] object-contain object-center"
          />
        </ExpandableMedia>`,
    "ParkingPix — hero",
  );

  code = replaceOnce(
    code,
    `          <div className={\`relative w-full \${maxWidthClassName} \${aspectClassName}\`}>
            <SafeImage
              src={src}
              alt={alt}
              fill
              sizes="(min-width: 1024px) 300px, 78vw"
              className={imageClassName}
            />
          </div>`,
    `          <ExpandableMedia
            src={src}
            alt={alt}
            className={\`relative w-full \${maxWidthClassName} \${aspectClassName}\`}
          >
            <SafeImage
              src={src}
              alt={alt}
              fill
              sizes="(min-width: 1024px) 300px, 78vw"
              className={imageClassName}
            />
          </ExpandableMedia>`,
    "ParkingPix — MobileShowcase",
  );

  code = replaceOnce(
    code,
    `      <div className={\`relative mx-auto w-full overflow-hidden rounded-[30px] border border-[#DADADA] bg-white shadow-[0_18px_50px_rgba(48,48,48,0.1)] \${maxWidthClassName} \${aspectClassName}\`}>
        <SafeImage
          src={src}
          alt={alt}
          fill
          sizes="(min-width: 1024px) 280px, 76vw"
          className={imageClassName}
        />
      </div>`,
    `      <ExpandableMedia
        src={src}
        alt={alt}
        className={\`relative mx-auto w-full overflow-hidden rounded-[30px] border border-[#DADADA] bg-white shadow-[0_18px_50px_rgba(48,48,48,0.1)] \${maxWidthClassName} \${aspectClassName}\`}
      >
        <SafeImage
          src={src}
          alt={alt}
          fill
          sizes="(min-width: 1024px) 280px, 76vw"
          className={imageClassName}
        />
      </ExpandableMedia>`,
    "ParkingPix — EditorialImageShowcase",
  );

  code = replaceOnce(
    code,
    `            <SafeImage
              src={image.src}
              alt={image.alt}
              fill
              sizes="(min-width: 1024px) 240px, 72vw"
              className="object-contain object-center"
            />`,
    `            <ExpandableMedia
              src={image.src}
              alt={image.alt}
              className="h-full w-full"
            >
              <SafeImage
                src={image.src}
                alt={image.alt}
                fill
                sizes="(min-width: 1024px) 240px, 72vw"
                className="object-contain object-center"
              />
            </ExpandableMedia>`,
    "ParkingPix — FlowShowcase",
  );

  return code;
});

console.log("Tudo aplicado com sucesso.");
console.log("Agora rode: npm run dev");
