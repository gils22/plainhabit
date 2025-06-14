<template>
  <section
    class="text-primary flex min-h-screen items-center justify-center bg-gradient-to-b from-[#E0F2FF] via-white to-white px-4 py-16"
  >
    <div
      class="flex max-w-5xl flex-col items-center gap-8 md:flex-row md:gap-16"
      data-aos="fade-up"
    >
      <!-- Gambar bulat -->
      <div class="flex-shrink-0">
        <img
          src="/images/logo.png"
          alt="T-shirt Grid"
          class="h-60 w-60 rounded-full object-cover shadow-lg"
        />
      </div>

      <!-- Konten -->
      <div class="text-center md:text-left">
        <h2 class="mb-4 text-3xl font-bold md:text-4xl" data-aos="fade-up" data-aos-delay="100">
          About <span class="text-primary">Plain Habit</span>
        </h2>
        <p
          class="text-primary/90 max-w-lg text-sm leading-relaxed md:text-base"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Plain Habit is an interpretation of the combination of simplicity and habit.
          <br />
          <span class="mt-2 block">
            Plain is a reflection of simplicity yet elegance, while Habit shows consistency in
            maintaining simplicity itself.
          </span>
        </p>

        <button
          class="bg-primary mt-6 rounded px-5 py-2 text-sm font-semibold text-white shadow transition hover:opacity-90"
          data-aos="zoom-in"
          data-aos-delay="300"
        >
          Read More
        </button>
      </div>
    </div>
  </section>
</template>
