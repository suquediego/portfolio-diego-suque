import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center px-4">
      <section className="max-w-md text-center">
        <p className="mb-3 text-sm font-black uppercase tracking-[0.22em] text-brand-red">404</p>
        <h1 className="text-4xl font-black text-foreground">Página não encontrada</h1>
        <p className="mt-4 text-base font-medium leading-7 text-muted">
          O caminho acessado ainda não existe neste portfólio.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex rounded-full bg-foreground px-5 py-3 text-sm font-black text-background transition hover:bg-brand-red"
        >
          Voltar para home
        </Link>
      </section>
    </main>
  );
}
