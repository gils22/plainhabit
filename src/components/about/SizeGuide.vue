<template>
  <section
    class="text-primary flex h-screen w-full items-center justify-center px-4"
    data-aos="fade-up"
  >
    <div
      class="flex w-full max-w-5xl flex-col items-center justify-center text-center md:flex-row md:text-left"
    >
      <!-- Gambar Kaos -->
      <div class="w-full md:w-1/2">
        <img
          src="/images/products/kaos-putih.png"
          alt="Kaos Size Guide"
          class="mx-auto max-h-[320px] w-auto object-contain md:mx-0"
        />
      </div>

      <!-- Konten Tabel -->
      <div class="w-full md:w-1/2">
        <h2 class="mb-6 text-3xl font-bold md:text-4xl">Size Chart</h2>

        <div class="overflow-x-auto">
          <table class="w-full table-auto border-collapse text-sm md:text-base">
            <thead class="bg-primary text-white">
              <tr>
                <th class="p-2">Size</th>
                <th class="p-2">S</th>
                <th class="p-2">M</th>
                <th class="p-2">L</th>
                <th class="p-2">XL</th>
                <th class="p-2">XXL</th>
              </tr>
            </thead>
            <tbody>
              <tr class="border-b">
                <td class="p-2 font-semibold">Width</td>
                <td class="p-2">50</td>
                <td class="p-2">52</td>
                <td class="p-2">54</td>
                <td class="p-2">56</td>
                <td class="p-2">60</td>
              </tr>
              <tr>
                <td class="p-2 font-semibold">Length</td>
                <td class="p-2">69</td>
                <td class="p-2">71</td>
                <td class="p-2">73</td>
                <td class="p-2">76</td>
                <td class="p-2">80</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </section>
</template>
